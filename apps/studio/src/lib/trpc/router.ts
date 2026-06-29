import { createTRPCRouter } from './trpc';
import { authRouter } from '@/modules/auth/server/router';
import { projectsRouter } from '@/modules/projects/server/router';
import { organizationsRouter } from '@/modules/organization/server/router';
import { workflowsRouter } from '@/modules/workflow/server/router';
import { agentsRouter } from '@/modules/agents/server/router';
import { compilerRouter } from '@/modules/compiler/server/router';

export const appRouter = createTRPCRouter({
  auth: authRouter,
  projects: projectsRouter,
  organizations: organizationsRouter,
  workflows: workflowsRouter,
  agents: agentsRouter,
  compiler: compilerRouter,
});

export type AppRouter = typeof appRouter;
