import { NextRequest, NextResponse } from 'next/server';
import {
  buildGitHubAuthUrl,
  buildGoogleAuthUrl,
  OAUTH_STATE_COOKIE_NAME,
} from '@forge/auth';

type RouteParams = { params: Promise<{ provider: string }> };

export const GET = async (_req: NextRequest, { params }: RouteParams) => {
  const { provider } = await params;

  if (provider !== 'github' && provider !== 'google') {
    return NextResponse.json({ error: 'Unsupported provider' }, { status: 400 });
  }

  const state = crypto.randomUUID();
  const appUrl = process.env['NEXT_PUBLIC_APP_URL'] ?? 'http://localhost:3000';
  const redirectUri = `${appUrl}/api/auth/callback/${provider}`;

  const url =
    provider === 'github'
      ? buildGitHubAuthUrl({
          clientId: process.env['GITHUB_CLIENT_ID'] ?? '',
          redirectUri,
          state,
        })
      : buildGoogleAuthUrl({
          clientId: process.env['GOOGLE_CLIENT_ID'] ?? '',
          redirectUri,
          state,
        });

  const response = NextResponse.redirect(url);
  response.cookies.set(OAUTH_STATE_COOKIE_NAME, state, {
    httpOnly: true,
    secure: process.env['NODE_ENV'] === 'production',
    sameSite: 'lax',
    maxAge: 300,
    path: '/',
  });

  return response;
};
