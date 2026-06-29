import { createTRPCRouter, publicProcedure } from '@/lib/trpc/trpc';
import { compilerService } from './services/compiler-service';
import { compileSchema } from '../schemas/index';

export const compilerRouter = createTRPCRouter({
  compile: publicProcedure
    .input(compileSchema)
    .mutation(({ input }) => compilerService.compile(input)),
});
