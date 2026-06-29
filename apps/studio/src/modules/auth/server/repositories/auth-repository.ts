import { eq, and, gt } from 'drizzle-orm';
import { users, sessions, type UserRecord, type SessionRecord } from '@forge/database';
import { SESSION_DURATION_MS } from '@forge/auth';
import type { DatabaseClient } from '@forge/database';

export const authRepository = {
  findUserByProvider: async (
    db: DatabaseClient,
    provider: string,
    providerId: string,
  ): Promise<UserRecord | null> => {
    const result = await db
      .select()
      .from(users)
      .where(and(eq(users.authProvider, provider), eq(users.authProviderId, providerId)))
      .limit(1);
    return result[0] ?? null;
  },

  upsertUser: async (
    db: DatabaseClient,
    data: {
      email: string;
      name: string;
      avatarUrl: string | null;
      authProvider: string;
      authProviderId: string;
    },
  ): Promise<UserRecord> => {
    const existing = await authRepository.findUserByProvider(
      db,
      data.authProvider,
      data.authProviderId,
    );

    if (existing) {
      const updated = await db
        .update(users)
        .set({
          name: data.name,
          avatarUrl: data.avatarUrl,
          updatedAt: new Date(),
        })
        .where(eq(users.id, existing.id))
        .returning();
      return updated[0]!;
    }

    const byEmail = await db
      .select()
      .from(users)
      .where(eq(users.email, data.email))
      .limit(1);

    if (byEmail[0]) {
      const updated = await db
        .update(users)
        .set({
          authProvider: data.authProvider,
          authProviderId: data.authProviderId,
          name: data.name,
          avatarUrl: data.avatarUrl,
          updatedAt: new Date(),
        })
        .where(eq(users.id, byEmail[0].id))
        .returning();
      return updated[0]!;
    }

    const created = await db
      .insert(users)
      .values({
        email: data.email,
        name: data.name,
        avatarUrl: data.avatarUrl,
        authProvider: data.authProvider,
        authProviderId: data.authProviderId,
      })
      .returning();
    return created[0]!;
  },

  createSession: async (db: DatabaseClient, userId: string): Promise<SessionRecord> => {
    const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);
    const result = await db
      .insert(sessions)
      .values({ userId, expiresAt })
      .returning();
    return result[0]!;
  },

  findSessionWithUser: async (
    db: DatabaseClient,
    sessionId: string,
  ): Promise<{ session: SessionRecord; user: UserRecord } | null> => {
    const result = await db
      .select({ session: sessions, user: users })
      .from(sessions)
      .innerJoin(users, eq(sessions.userId, users.id))
      .where(and(eq(sessions.id, sessionId), gt(sessions.expiresAt, new Date())))
      .limit(1);

    return result[0] ?? null;
  },

  deleteSession: async (db: DatabaseClient, sessionId: string): Promise<void> => {
    await db.delete(sessions).where(eq(sessions.id, sessionId));
  },
};
