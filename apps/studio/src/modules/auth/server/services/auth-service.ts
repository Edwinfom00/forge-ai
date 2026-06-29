import type { DatabaseClient, UserRecord } from '@forge/database';
import { authRepository } from '../repositories/auth-repository';
import type { SessionUser } from '../../types';

const toSessionUser = (user: UserRecord): SessionUser => ({
  id: user.id as SessionUser['id'],
  email: user.email,
  name: user.name,
  avatarUrl: user.avatarUrl,
});

export const authService = {
  getSessionUser: async (
    db: DatabaseClient,
    sessionId: string,
  ): Promise<SessionUser | null> => {
    const result = await authRepository.findSessionWithUser(db, sessionId);
    if (!result) return null;
    return toSessionUser(result.user);
  },

  signOut: async (db: DatabaseClient, sessionId: string): Promise<void> => {
    await authRepository.deleteSession(db, sessionId);
  },
};
