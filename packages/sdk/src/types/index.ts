import { type FIR } from '@forge/fir';

export type ForgeClientConfig = {
  apiKey: string;
  baseUrl: string;
  timeout?: number;
};

export type CompileRequest = {
  idea: string;
  projectId: string;
  runtimeTarget: string;
};

export type CompileResponse = {
  fir: FIR;
  compiledAt: string;
};
