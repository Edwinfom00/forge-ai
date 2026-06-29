import { z } from 'zod';

export const signInSchema = z.object({
  provider: z.enum(['github', 'google']),
});

export type SignInInput = z.infer<typeof signInSchema>;
