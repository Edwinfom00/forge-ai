import { pgTable, uuid, text, timestamp, jsonb } from 'drizzle-orm/pg-core';
import { projects } from './projects.js';

export const prompts = pgTable('prompts', {
  id: uuid('id').defaultRandom().primaryKey(),
  projectId: uuid('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  description: text('description'),
  template: text('template').notNull(),
  variables: jsonb('variables').default([]),
  category: text('category').notNull().default('general'),
  version: text('version').notNull().default('1.0.0'),
  status: text('status').notNull().default('draft'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type PromptRecord = typeof prompts.$inferSelect;
export type NewPromptRecord = typeof prompts.$inferInsert;
