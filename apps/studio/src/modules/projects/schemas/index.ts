import { z } from 'zod';
import { PROJECT_NAME_MIN_LENGTH, PROJECT_NAME_MAX_LENGTH } from '@forge/shared';

export const createProjectSchema = z.object({
  name: z.string().min(PROJECT_NAME_MIN_LENGTH).max(PROJECT_NAME_MAX_LENGTH),
  description: z.string().optional(),
  runtimeTarget: z.enum(['claude-code', 'codex', 'openai-agents-sdk', 'langgraph', 'crewai', 'flowise', 'n8n']),
});

export const updateProjectSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(PROJECT_NAME_MIN_LENGTH).max(PROJECT_NAME_MAX_LENGTH).optional(),
  description: z.string().optional(),
});

export type CreateProjectInput = z.infer<typeof createProjectSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectSchema>;
