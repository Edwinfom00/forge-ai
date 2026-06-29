import { type DatabaseClient } from '@forge/database';
import { projectRepository } from '../repositories/project-repository';
import { type CreateProjectInput, createProjectSchema } from '../../schemas/index';

export const projectService = {
  createProject: async (db: DatabaseClient, ownerId: string, input: CreateProjectInput) => {
    const validated = createProjectSchema.parse(input);
    return projectRepository.create(db, ownerId, validated);
  },

  getProjectsByOwner: async (db: DatabaseClient, ownerId: string) =>
    projectRepository.findByOwner(db, ownerId),

  getProjectById: async (db: DatabaseClient, id: string) => {
    const project = await projectRepository.findById(db, id);
    if (!project) throw new Error('Project not found');
    return project;
  },
};
