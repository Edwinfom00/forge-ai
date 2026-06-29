import { type ExecutionContext, type ExecutionResult } from '../types/index.js';

export class RuntimeExecutor {
  async execute(context: ExecutionContext): Promise<ExecutionResult> {
    const startMs = Date.now();

    return {
      status: 'completed',
      outputs: {},
      tokenUsage: 0,
      durationMs: Date.now() - startMs,
    };
  }
}
