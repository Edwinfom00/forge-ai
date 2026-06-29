import type { User } from '@forge/auth';

export type SessionUser = Pick<User, 'id' | 'email' | 'name' | 'avatarUrl'>;

export type AuthState =
  | { status: 'authenticated'; user: SessionUser }
  | { status: 'unauthenticated' };
