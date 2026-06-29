import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/lib/trpc/trpc';

export const agentsRouter = createTRPCRouter({
  getByTeam: publicProcedure
    .input(z.object({ teamId: z.string().uuid() }))
    .query(() => []),
});
