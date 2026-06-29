import { type ParsedIntent } from './intent-parser.js';

export type SemanticGraph = {
  entities: Array<{ id: string; name: string; domain: string }>;
  relationships: Array<{ from: string; to: string; type: string }>;
  modules: string[];
};

export const analyzeSemantics = async (intent: ParsedIntent): Promise<SemanticGraph> => {
  return {
    entities: [],
    relationships: [],
    modules: intent.domains,
  };
};
