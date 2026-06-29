import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/lib/trpc/trpc';
import { projectService } from './services/project-service';
import { createProjectSchema } from '../schemas/index';

const DEMO_USER_ID = 'demo-user-id';

export const projectsRouter = createTRPCRouter({
  list: publicProcedure
    .query(({ ctx }) => projectService.getProjectsByOwner(ctx.db, DEMO_USER_ID)),

  getById: publicProcedure
    .input(z.object({ id: z.string().uuid() }))
    .query(({ ctx, input }) => projectService.getProjectById(ctx.db, input.id)),

  create: publicProcedure
    .input(createProjectSchema)
    .mutation(({ ctx, input }) => projectService.createProject(ctx.db, DEMO_USER_ID, input)),
});
