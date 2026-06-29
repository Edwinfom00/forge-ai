import { cookies } from 'next/headers';
import { createDatabaseClient, type DatabaseClient } from '@forge/database';
import { SESSION_COOKIE_NAME } from '@forge/auth';
import { authRepository } from '@/modules/auth/server/repositories/auth-repository';
import type { SessionUser } from '@/modules/auth/types';

type CreateContextOptions = {
  req: Request;
};

export interface TRPCContext {
  db: DatabaseClient;
  user: SessionUser | null;
  sessionId: string | null;
}

export const createTRPCContext = async ({ req: _req }: CreateContextOptions): Promise<TRPCContext> => {
  const db = createDatabaseClient(process.env['DATABASE_URL'] ?? '');
  const cookieStore = await cookies();
  const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value ?? null;

  let user: SessionUser | null = null;
  let validSessionId: string | null = null;

  if (sessionId) {
    const result = await authRepository.findSessionWithUser(db, sessionId);
    if (result) {
      user = {
        id: result.user.id as SessionUser['id'],
        email: result.user.email,
        name: result.user.name,
        avatarUrl: result.user.avatarUrl,
      };
      validSessionId = sessionId;
    }
  }

  return { db, user, sessionId: validSessionId };
};
