import { eq } from 'drizzle-orm';
import { type DatabaseClient, organizations, departments } from '@forge/database';
import { type CreateOrganizationInput } from '../../schemas/index';

export const organizationRepository = {
  findById: async (db: DatabaseClient, id: string) => {
    return db.query.organizations.findFirst({
      where: eq(organizations.id, id),
    });
  },

  findByProject: async (db: DatabaseClient, projectId: string) => {
    return db.query.organizations.findMany({
      where: eq(organizations.projectId, projectId),
    });
  },

  create: async (db: DatabaseClient, data: CreateOrganizationInput) => {
    const [record] = await db
      .insert(organizations)
      .values({
        projectId: data.projectId,
        name: data.name,
        description: data.description ?? null,
      })
      .returning();
    return record;
  },

  findDepartmentsByOrg: async (db: DatabaseClient, organizationId: string) => {
    return db.query.departments.findMany({
      where: eq(departments.organizationId, organizationId),
    });
  },
};
