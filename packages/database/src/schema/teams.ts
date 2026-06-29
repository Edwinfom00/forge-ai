import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';
import { departments } from './organizations.js';

export const teams = pgTable('teams', {
  id: uuid('id').defaultRandom().primaryKey(),
  departmentId: uuid('department_id').notNull().references(() => departments.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  role: text('role').notNull(),
  leadAgentId: uuid('lead_agent_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type TeamRecord = typeof teams.$inferSelect;
export type NewTeamRecord = typeof teams.$inferInsert;
