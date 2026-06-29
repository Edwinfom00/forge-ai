export type MetricName =
  | 'token_usage'
  | 'execution_latency_ms'
  | 'step_success_rate'
  | 'agent_failure_count'
  | 'workflow_completion_rate';

export type Metric = {
  name: MetricName;
  value: number;
  labels: Record<string, string>;
  timestamp: Date;
};

export type TelemetryEvent = {
  type: 'workflow_started' | 'workflow_completed' | 'step_started' | 'step_completed' | 'agent_error';
  workflowId: string;
  projectId: string;
  data: Record<string, unknown>;
  timestamp: Date;
};
