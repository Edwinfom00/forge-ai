import { pgTable, uuid, text, timestamp, jsonb, integer, real } from 'drizzle-orm/pg-core';
import { teams } from './teams.js';

export const agents = pgTable('agents', {
  id: uuid('id').defaultRandom().primaryKey(),
  teamId: uuid('team_id').notNull().references(() => teams.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  role: text('role').notNull(),
  persona: text('persona').notNull(),
  systemPrompt: text('system_prompt').notNull(),
  capabilities: jsonb('capabilities').default([]),
  tools: jsonb('tools').default([]),
  memoryPartitions: jsonb('memory_partitions').default([]),
  maxTokens: integer('max_tokens'),
  temperatureOverride: real('temperature_override'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type AgentRecord = typeof agents.$inferSelect;
export type NewAgentRecord = typeof agents.$inferInsert;
