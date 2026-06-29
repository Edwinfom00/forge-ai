import { type DatabaseClient } from '@forge/database';
import { organizationRepository } from '../repositories/organization-repository';
import { type CreateOrganizationInput, createOrganizationSchema } from '../../schemas/index';

export const organizationService = {
  createOrganization: async (db: DatabaseClient, input: CreateOrganizationInput) => {
    const validated = createOrganizationSchema.parse(input);
    return organizationRepository.create(db, validated);
  },

  getOrganizationsByProject: async (db: DatabaseClient, projectId: string) => {
    return organizationRepository.findByProject(db, projectId);
  },

  getOrganizationById: async (db: DatabaseClient, id: string) => {
    const org = await organizationRepository.findById(db, id);
    if (!org) throw new Error('Organization not found');
    return org;
  },
};
