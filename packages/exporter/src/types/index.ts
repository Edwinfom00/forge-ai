import { type FIR } from '@forge/fir';

export type ExportTarget = 'claude-code' | 'langgraph' | 'crewai' | 'flowise' | 'n8n' | 'openai-agents-sdk';

export type ExportResult = {
  target: ExportTarget;
  files: Array<{
    path: string;
    content: string;
  }>;
  entrypoint: string;
};

export interface RuntimeExporter {
  target: ExportTarget;
  export(fir: FIR): Promise<ExportResult>;
}
