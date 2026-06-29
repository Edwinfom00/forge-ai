import { z } from 'zod';
import {
  ORGANIZATION_NAME_MIN_LENGTH,
  ORGANIZATION_NAME_MAX_LENGTH,
  ORGANIZATION_DESCRIPTION_MAX_LENGTH,
  TEAM_NAME_MIN_LENGTH,
  TEAM_NAME_MAX_LENGTH,
} from '@forge/shared';

export const createOrganizationSchema = z.object({
  projectId: z.string().uuid(),
  name: z.string()
    .min(ORGANIZATION_NAME_MIN_LENGTH)
    .max(ORGANIZATION_NAME_MAX_LENGTH),
  description: z.string()
    .max(ORGANIZATION_DESCRIPTION_MAX_LENGTH)
    .optional(),
});

export const updateOrganizationSchema = z.object({
  id: z.string().uuid(),
  name: z.string()
    .min(ORGANIZATION_NAME_MIN_LENGTH)
    .max(ORGANIZATION_NAME_MAX_LENGTH)
    .optional(),
  description: z.string()
    .max(ORGANIZATION_DESCRIPTION_MAX_LENGTH)
    .optional(),
});

export const createTeamSchema = z.object({
  departmentId: z.string().uuid(),
  name: z.string()
    .min(TEAM_NAME_MIN_LENGTH)
    .max(TEAM_NAME_MAX_LENGTH),
  role: z.enum(['backend', 'frontend', 'devops', 'qa', 'architecture', 'documentation']),
});

export type CreateOrganizationInput = z.infer<typeof createOrganizationSchema>;
export type UpdateOrganizationInput = z.infer<typeof updateOrganizationSchema>;
export type CreateTeamInput = z.infer<typeof createTeamSchema>;
