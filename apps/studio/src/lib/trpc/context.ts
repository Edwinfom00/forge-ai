import { createDatabaseClient } from '@forge/database';

type CreateContextOptions = {
  req: Request;
};

export const createTRPCContext = ({ req: _req }: CreateContextOptions) => {
  const db = createDatabaseClient(process.env['DATABASE_URL'] ?? '');
  return { db };
};

export type TRPCContext = ReturnType<typeof createTRPCContext>;
