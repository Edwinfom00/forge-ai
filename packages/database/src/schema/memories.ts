import { pgTable, uuid, text, timestamp, jsonb } from 'drizzle-orm/pg-core';
import { projects } from './projects.js';

export const memories = pgTable('memories', {
  id: uuid('id').defaultRandom().primaryKey(),
  projectId: uuid('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
  agentId: uuid('agent_id'),
  type: text('type').notNull().default('episodic'),
  partitionKey: text('partition_key').notNull(),
  content: jsonb('content').notNull(),
  tags: jsonb('tags').default([]),
  expiresAt: timestamp('expires_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type MemoryRecord = typeof memories.$inferSelect;
export type NewMemoryRecord = typeof memories.$inferInsert;
