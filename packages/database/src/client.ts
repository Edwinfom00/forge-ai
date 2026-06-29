import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema/index.js';

export type DatabaseClient = PostgresJsDatabase<typeof schema>;

export const createDatabaseClient = (connectionString: string): DatabaseClient => {
  const sql = postgres(connectionString, { max: 10 });
  return drizzle(sql, { schema });
};
