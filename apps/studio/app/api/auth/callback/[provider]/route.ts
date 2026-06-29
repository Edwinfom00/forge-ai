import { NextRequest, NextResponse } from 'next/server';
import {
  exchangeGitHubCode,
  exchangeGoogleCode,
  getGitHubUser,
  getGoogleUser,
  SESSION_COOKIE_NAME,
  OAUTH_STATE_COOKIE_NAME,
  SESSION_DURATION_MS,
} from '@forge/auth';
import { createDatabaseClient } from '@forge/database';
import { authRepository } from '@/modules/auth/server/repositories/auth-repository';

type RouteParams = { params: Promise<{ provider: string }> };

export const GET = async (req: NextRequest, { params }: RouteParams) => {
  const { provider } = await params;

  if (provider !== 'github' && provider !== 'google') {
    return NextResponse.json({ error: 'Unsupported provider' }, { status: 400 });
  }

  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const storedState = req.cookies.get(OAUTH_STATE_COOKIE_NAME)?.value;
  const appUrl = process.env['NEXT_PUBLIC_APP_URL'] ?? 'http://localhost:3000';

  if (!code || !state || !storedState || state !== storedState) {
    return NextResponse.redirect(new URL('/auth?error=invalid_state', appUrl));
  }

  const redirectUri = `${appUrl}/api/auth/callback/${provider}`;

  try {
    const db = createDatabaseClient(process.env['DATABASE_URL'] ?? '');

    let providerUser: { id: string; name: string; email: string; avatarUrl: string };

    if (provider === 'github') {
      const { accessToken } = await exchangeGitHubCode({
        code,
        clientId: process.env['GITHUB_CLIENT_ID'] ?? '',
        clientSecret: process.env['GITHUB_CLIENT_SECRET'] ?? '',
        redirectUri,
      });
      providerUser = await getGitHubUser(accessToken);
    } else {
      const { accessToken } = await exchangeGoogleCode({
        code,
        clientId: process.env['GOOGLE_CLIENT_ID'] ?? '',
        clientSecret: process.env['GOOGLE_CLIENT_SECRET'] ?? '',
        redirectUri,
      });
      providerUser = await getGoogleUser(accessToken);
    }

    const user = await authRepository.upsertUser(db, {
      email: providerUser.email,
      name: providerUser.name,
      avatarUrl: providerUser.avatarUrl,
      authProvider: provider,
      authProviderId: providerUser.id,
    });

    const session = await authRepository.createSession(db, user.id);

    const response = NextResponse.redirect(new URL('/dashboard', appUrl));

    response.cookies.delete(OAUTH_STATE_COOKIE_NAME);
    response.cookies.set(SESSION_COOKIE_NAME, session.id, {
      httpOnly: true,
      secure: process.env['NODE_ENV'] === 'production',
      sameSite: 'lax',
      maxAge: Math.floor(SESSION_DURATION_MS / 1000),
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.redirect(new URL('/auth?error=auth_failed', appUrl));
  }
};
