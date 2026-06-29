import { z } from 'zod';

export const FIRRoleSchema = z.enum(['architect', 'backend-lead', 'backend', 'reviewer', 'qa', 'documentation', 'release']);
export type FIRRole = z.infer<typeof FIRRoleSchema>;

export const FIRRuntimeTargetSchema = z.enum([
  'claude-code',
  'codex',
  'openai-agents-sdk',
  'langgraph',
  'crewai',
  'flowise',
  'n8n',
]);
export type FIRRuntimeTarget = z.infer<typeof FIRRuntimeTargetSchema>;

export const FIRToolSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  parameters: z.record(z.unknown()),
  credentialRef: z.string().optional(),
  outputFormat: z.string(),
});
export type FIRTool = z.infer<typeof FIRToolSchema>;

export const FIRAgentSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: FIRRoleSchema,
  persona: z.string(),
  systemPrompt: z.string(),
  tools: z.array(FIRToolSchema),
  memoryPartitions: z.array(z.string()),
  capabilities: z.array(z.string()),
  maxTokens: z.number().optional(),
  temperatureOverride: z.number().min(0).max(2).optional(),
});
export type FIRAgent = z.infer<typeof FIRAgentSchema>;

export const FIRTeamSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.enum(['backend', 'frontend', 'devops', 'qa', 'architecture', 'documentation']),
  agents: z.array(FIRAgentSchema),
  leadAgentId: z.string().optional(),
});
export type FIRTeam = z.infer<typeof FIRTeamSchema>;

export const FIRDepartmentSchema = z.object({
  id: z.string(),
  name: z.string(),
  teams: z.array(FIRTeamSchema),
  authorizationKey: z.string(),
});
export type FIRDepartment = z.infer<typeof FIRDepartmentSchema>;

export const FIROrgSpecSchema = z.object({
  departments: z.array(FIRDepartmentSchema),
  communicationDAG: z.record(z.array(z.string())),
});
export type FIROrgSpec = z.infer<typeof FIROrgSpecSchema>;

export const FIREntityRelationSchema = z.object({
  from: z.string(),
  to: z.string(),
  type: z.enum(['one-to-one', 'one-to-many', 'many-to-many']),
});
export type FIREntityRelation = z.infer<typeof FIREntityRelationSchema>;

export const FIRDomainSpecSchema = z.object({
  entities: z.array(z.object({
    id: z.string(),
    name: z.string(),
    fields: z.record(z.string()),
  })),
  relations: z.array(FIREntityRelationSchema),
  modules: z.array(z.string()),
  datastores: z.array(z.string()),
});
export type FIRDomainSpec = z.infer<typeof FIRDomainSpecSchema>;

export const FIRWorkflowStepSchema = z.object({
  id: z.string(),
  name: z.string(),
  agentId: z.string(),
  toolIds: z.array(z.string()),
  dependsOn: z.array(z.string()),
  preconditions: z.array(z.string()),
  parallel: z.boolean().default(false),
  retryPolicy: z.object({
    maxAttempts: z.number(),
    backoffMs: z.number(),
  }).optional(),
});
export type FIRWorkflowStep = z.infer<typeof FIRWorkflowStepSchema>;

export const FIRWorkflowSpecSchema = z.object({
  id: z.string(),
  name: z.string(),
  steps: z.array(FIRWorkflowStepSchema),
  entryStepId: z.string(),
  exitStepIds: z.array(z.string()),
  transitionRules: z.record(z.string()),
});
export type FIRWorkflowSpec = z.infer<typeof FIRWorkflowSpecSchema>;

export const FIRMemorySpecSchema = z.object({
  partitions: z.array(z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(['episodic', 'short-term', 'long-term', 'shared']),
    vectorSpace: z.string().optional(),
    retrievalKey: z.string(),
  })),
});
export type FIRMemorySpec = z.infer<typeof FIRMemorySpecSchema>;

export const FIRSchema = z.object({
  version: z.string(),
  id: z.string(),
  projectId: z.string(),
  name: z.string(),
  description: z.string(),
  runtimeTarget: FIRRuntimeTargetSchema,
  orgSpec: FIROrgSpecSchema,
  domainSpec: FIRDomainSpecSchema,
  workflowSpec: FIRWorkflowSpecSchema,
  memorySpec: FIRMemorySpecSchema,
  compiledAt: z.string().datetime(),
  checksum: z.string(),
});
export type FIR = z.infer<typeof FIRSchema>;
