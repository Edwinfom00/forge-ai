import { type FIR } from '@forge/fir';

export type ExecutionStatus = 'pending' | 'running' | 'completed' | 'failed';

export type ExecutionContext = {
  fir: FIR;
  workflowId: string;
  projectId: string;
  env: Record<string, string>;
};

export type ExecutionResult = {
  status: ExecutionStatus;
  outputs: Record<string, unknown>;
  tokenUsage: number;
  durationMs: number;
  error?: string;
};
