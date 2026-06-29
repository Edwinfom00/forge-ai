import { type FIR, FIRSchema } from '../types/fir.js';

export type FIRValidationError = {
  path: string;
  message: string;
};

export type FIRValidationResult =
  | { valid: true; fir: FIR }
  | { valid: false; errors: FIRValidationError[] };

export const validateFIR = (data: unknown): FIRValidationResult => {
  const result = FIRSchema.safeParse(data);

  if (result.success) {
    return { valid: true, fir: result.data };
  }

  const errors: FIRValidationError[] = result.error.issues.map(issue => ({
    path: issue.path.join('.'),
    message: issue.message,
  }));

  return { valid: false, errors };
};

export const assertNoCircularDependencies = (fir: FIR): FIRValidationError[] => {
  const errors: FIRValidationError[] = [];
  const steps = fir.workflowSpec.steps;
  const visited = new Set<string>();
  const visiting = new Set<string>();

  const hasCycle = (stepId: string): boolean => {
    if (visiting.has(stepId)) return true;
    if (visited.has(stepId)) return false;

    visiting.add(stepId);
    const step = steps.find(s => s.id === stepId);
    if (step) {
      for (const dep of step.dependsOn) {
        if (hasCycle(dep)) {
          errors.push({
            path: `workflowSpec.steps.${stepId}.dependsOn`,
            message: `Circular dependency detected at step "${stepId}" -> "${dep}"`,
          });
          return true;
        }
      }
    }
    visiting.delete(stepId);
    visited.add(stepId);
    return false;
  };

  for (const step of steps) {
    hasCycle(step.id);
  }

  return errors;
};

export const validateFIRIntegrity = (fir: FIR): FIRValidationError[] => {
  const errors: FIRValidationError[] = [];
  const agentIds = new Set<string>();

  for (const dept of fir.orgSpec.departments) {
    for (const team of dept.teams) {
      for (const agent of team.agents) {
        agentIds.add(agent.id);
      }
    }
  }

  for (const step of fir.workflowSpec.steps) {
    if (!agentIds.has(step.agentId)) {
      errors.push({
        path: `workflowSpec.steps.${step.id}.agentId`,
        message: `Agent "${step.agentId}" referenced in step "${step.id}" does not exist in orgSpec`,
      });
    }
  }

  errors.push(...assertNoCircularDependencies(fir));

  return errors;
};
