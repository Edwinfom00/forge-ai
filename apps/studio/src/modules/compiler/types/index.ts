export type CompilerStatus = 'idle' | 'parsing' | 'analyzing' | 'optimizing' | 'emitting' | 'exporting' | 'complete' | 'error';

export type CompilerStage = {
  name: string;
  status: 'pending' | 'running' | 'complete' | 'error';
  progress: number;
  message: string;
};

export type CompilerSession = {
  id: string;
  projectId: string;
  idea: string;
  runtimeTarget: string;
  status: CompilerStatus;
  stages: CompilerStage[];
  firId: string | null;
  error: string | null;
  startedAt: Date;
  completedAt: Date | null;
};
