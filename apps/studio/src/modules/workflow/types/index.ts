export type WorkflowId = string & { readonly __brand: 'WorkflowId' };

export type WorkflowStatus = 'draft' | 'active' | 'running' | 'completed' | 'failed';

export type Workflow = {
  id: WorkflowId;
  projectId: string;
  name: string;
  status: WorkflowStatus;
  stepCount: number;
  createdAt: Date;
  updatedAt: Date;
};
