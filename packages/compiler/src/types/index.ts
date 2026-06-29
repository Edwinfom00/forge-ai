import { type FIR } from '@forge/fir';

export type CompilerInput = {
  idea: string;
  projectId: string;
  runtimeTarget: string;
  constraints?: Record<string, unknown>;
};

export type CompilationStage =
  | 'intent-parsing'
  | 'semantic-analysis'
  | 'type-checking'
  | 'optimization'
  | 'fir-emission'
  | 'target-export';

export type CompilationProgress = {
  stage: CompilationStage;
  progress: number;
  message: string;
};

export type CompilationResult =
  | { success: true; fir: FIR }
  | { success: false; stage: CompilationStage; errors: string[] };
