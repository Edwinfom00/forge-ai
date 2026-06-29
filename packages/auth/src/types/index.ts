export type UserId = string & { readonly __brand: 'UserId' };
export type SessionId = string & { readonly __brand: 'SessionId' };

export type User = {
  id: UserId;
  email: string;
  name: string;
  avatarUrl: string | null;
  createdAt: Date;
};

export type Session = {
  id: SessionId;
  userId: UserId;
  expiresAt: Date;
};

export type AuthProvider = 'github' | 'google' | 'email';
