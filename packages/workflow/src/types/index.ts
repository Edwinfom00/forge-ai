export type WorkflowStatus = 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';

export type WorkflowStepStatus = 'pending' | 'running' | 'completed' | 'failed' | 'skipped';

export type WorkflowExecution = {
  id: string;
  workflowId: string;
  projectId: string;
  status: WorkflowStatus;
  currentStepId: string | null;
  startedAt: Date | null;
  completedAt: Date | null;
  error: string | null;
};

export type WorkflowStepExecution = {
  id: string;
  executionId: string;
  stepId: string;
  agentId: string;
  status: WorkflowStepStatus;
  input: Record<string, unknown>;
  output: Record<string, unknown> | null;
  startedAt: Date | null;
  completedAt: Date | null;
  error: string | null;
  tokenUsage: number | null;
};
