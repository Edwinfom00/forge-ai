import { eq } from 'drizzle-orm';
import { type DatabaseClient, projects } from '@forge/database';
import { type CreateProjectInput } from '../../schemas/index';

export const projectRepository = {
  findById: async (db: DatabaseClient, id: string) =>
    db.query.projects.findFirst({ where: eq(projects.id, id) }),

  findByOwner: async (db: DatabaseClient, ownerId: string) =>
    db.query.projects.findMany({ where: eq(projects.ownerId, ownerId) }),

  create: async (db: DatabaseClient, ownerId: string, data: CreateProjectInput) => {
    const [record] = await db
      .insert(projects)
      .values({ ownerId, ...data })
      .returning();
    return record;
  },
};
