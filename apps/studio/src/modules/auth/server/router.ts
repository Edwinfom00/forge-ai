import { cookies } from 'next/headers';
import { createTRPCRouter, publicProcedure } from '@/lib/trpc/trpc';
import { SESSION_COOKIE_NAME, OAUTH_STATE_COOKIE_NAME, buildGitHubAuthUrl, buildGoogleAuthUrl } from '@forge/auth';
import { signInSchema } from '../schemas';
import { authService } from './services/auth-service';

export const authRouter = createTRPCRouter({
  getSession: publicProcedure.query(({ ctx }) => {
    if (!ctx.user) return null;
    return ctx.user;
  }),

  signIn: publicProcedure.input(signInSchema).mutation(async ({ input }) => {
    const state = crypto.randomUUID();
    const appUrl = process.env['NEXT_PUBLIC_APP_URL'] ?? 'http://localhost:3000';
    const redirectUri = `${appUrl}/api/auth/callback/${input.provider}`;

    const url =
      input.provider === 'github'
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

    const cookieStore = await cookies();
    cookieStore.set(OAUTH_STATE_COOKIE_NAME, state, {
      httpOnly: true,
      secure: process.env['NODE_ENV'] === 'production',
      sameSite: 'lax',
      maxAge: 300,
      path: '/',
    });

    return { url };
  }),

  signOut: publicProcedure.mutation(async ({ ctx }) => {
    if (ctx.sessionId) {
      await authService.signOut(ctx.db, ctx.sessionId);
    }

    const cookieStore = await cookies();
    cookieStore.delete(SESSION_COOKIE_NAME);

    return { success: true };
  }),
});
