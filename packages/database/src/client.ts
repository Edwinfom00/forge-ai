import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema/index.js';

const createDatabaseClient = (connectionString: string) => {
  const sql = postgres(connectionString, { max: 10 });
  return drizzle(sql, { schema });
};

export type DatabaseClient = ReturnType<typeof createDatabaseClient>;

export { createDatabaseClient };
