import { z } from 'zod';

export const compileSchema = z.object({
  projectId: z.string().uuid(),
  idea: z.string().min(20).max(10000),
  runtimeTarget: z.enum(['claude-code', 'codex', 'openai-agents-sdk', 'langgraph', 'crewai', 'flowise', 'n8n']),
});

export type CompileInput = z.infer<typeof compileSchema>;
