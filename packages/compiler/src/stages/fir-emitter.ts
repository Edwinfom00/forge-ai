import { type FIR, FIR_SCHEMA_VERSION } from '@forge/fir';
import { FIR_SCHEMA_VERSION as VERSION } from '@forge/shared';
import { type OptimizedGraph } from './optimizer.js';
import { type CompilerInput } from '../types/index.js';

export const emitFIR = async (
  graph: OptimizedGraph,
  input: CompilerInput
): Promise<FIR> => {
  return {
    version: VERSION,
    id: crypto.randomUUID(),
    projectId: input.projectId,
    name: input.projectId,
    description: input.idea,
    runtimeTarget: input.runtimeTarget as FIR['runtimeTarget'],
    orgSpec: {
      departments: [],
      communicationDAG: {},
    },
    domainSpec: {
      entities: [],
      relations: [],
      modules: graph.modules,
      datastores: [],
    },
    workflowSpec: {
      id: crypto.randomUUID(),
      name: 'main',
      steps: [],
      entryStepId: '',
      exitStepIds: [],
      transitionRules: {},
    },
    memorySpec: {
      partitions: [],
    },
    compiledAt: new Date().toISOString(),
    checksum: '',
  };
};
