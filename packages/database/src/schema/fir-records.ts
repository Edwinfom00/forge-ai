import { pgTable, uuid, text, timestamp, jsonb } from 'drizzle-orm/pg-core';
import { projects } from './projects.js';

export const firRecords = pgTable('fir_records', {
  id: uuid('id').defaultRandom().primaryKey(),
  projectId: uuid('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
  version: text('version').notNull(),
  runtimeTarget: text('runtime_target').notNull(),
  content: jsonb('content').notNull(),
  checksum: text('checksum').notNull(),
  compiledAt: timestamp('compiled_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type FIRRecord = typeof firRecords.$inferSelect;
export type NewFIRRecord = typeof firRecords.$inferInsert;
