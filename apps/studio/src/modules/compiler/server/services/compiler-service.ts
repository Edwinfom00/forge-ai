import { type CompileInput } from '../../schemas/index';
import { config } from '@/config/index';

export const compilerService = {
  compile: async (input: CompileInput) => {
    const response = await fetch(`${config.ai.engineUrl}/api/v1/compile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      throw new Error(`Compilation failed: ${response.statusText}`);
    }

    return response.json();
  },
};
