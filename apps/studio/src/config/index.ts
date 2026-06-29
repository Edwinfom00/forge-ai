export const config = {
  app: {
    url: process.env['NEXT_PUBLIC_APP_URL'] ?? 'http://localhost:3000',
    name: 'ForgeAI',
  },
  ai: {
    engineUrl: process.env['AI_ENGINE_URL'] ?? 'http://localhost:8000',
  },
} as const;
