import { pgTable, uuid, text, timestamp, jsonb, boolean } from 'drizzle-orm/pg-core';
import { projects } from './projects.js';

export const workflows = pgTable('workflows', {
  id: uuid('id').defaultRandom().primaryKey(),
  projectId: uuid('project_id').notNull().references(() => projects.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  entryStepId: text('entry_step_id'),
  exitStepIds: jsonb('exit_step_ids').default([]),
  transitionRules: jsonb('transition_rules').default({}),
  status: text('status').notNull().default('draft'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const workflowSteps = pgTable('workflow_steps', {
  id: uuid('id').defaultRandom().primaryKey(),
  workflowId: uuid('workflow_id').notNull().references(() => workflows.id, { onDelete: 'cascade' }),
  agentId: uuid('agent_id').notNull(),
  name: text('name').notNull(),
  toolIds: jsonb('tool_ids').default([]),
  dependsOn: jsonb('depends_on').default([]),
  preconditions: jsonb('preconditions').default([]),
  parallel: boolean('parallel').notNull().default(false),
  retryPolicy: jsonb('retry_policy'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const workflowExecutions = pgTable('workflow_executions', {
  id: uuid('id').defaultRandom().primaryKey(),
  workflowId: uuid('workflow_id').notNull().references(() => workflows.id, { onDelete: 'cascade' }),
  projectId: uuid('project_id').notNull(),
  status: text('status').notNull().default('pending'),
  currentStepId: uuid('current_step_id'),
  error: text('error'),
  startedAt: timestamp('started_at'),
  completedAt: timestamp('completed_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type WorkflowRecord = typeof workflows.$inferSelect;
export type WorkflowStepRecord = typeof workflowSteps.$inferSelect;
export type WorkflowExecutionRecord = typeof workflowExecutions.$inferSelect;
