import { type CompilerInput } from '../types/index.js';

export type ParsedIntent = {
  projectName: string;
  description: string;
  domains: string[];
  actors: string[];
  requirements: string[];
  constraints: string[];
};

export const parseIntent = async (input: CompilerInput): Promise<ParsedIntent> => {
  return {
    projectName: input.projectId,
    description: input.idea,
    domains: [],
    actors: [],
    requirements: [],
    constraints: [],
  };
};
