import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/lib/trpc/trpc';
import { organizationService } from './services/organization-service';
import { createOrganizationSchema } from '../schemas/index';

export const organizationsRouter = createTRPCRouter({
  getByProject: publicProcedure
    .input(z.object({ projectId: z.string().uuid() }))
    .query(({ ctx, input }) => organizationService.getOrganizationsByProject(ctx.db, input.projectId)),

  getById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(({ ctx, input }) => organizationService.getOrganizationById(ctx.db, input.id)),

  create: publicProcedure
    .input(createOrganizationSchema)
    .mutation(({ ctx, input }) => organizationService.createOrganization(ctx.db, input)),
});
