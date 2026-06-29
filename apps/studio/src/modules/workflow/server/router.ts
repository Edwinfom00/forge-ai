import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/lib/trpc/trpc';

export const workflowsRouter = createTRPCRouter({
  getByProject: publicProcedure
    .input(z.object({ projectId: z.string().uuid() }))
    .query(() => []),
});
