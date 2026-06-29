import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { serve } from '@hono/node-server';

const app = new Hono();

app.use('*', cors());
app.use('*', logger());

app.get('/health', c => c.json({ status: 'ok', service: 'forge-gateway' }));

const PORT = Number(process.env['PORT'] ?? 3003);

serve({ fetch: app.fetch, port: PORT }, () => {
  console.log(`forge-gateway running on http://localhost:${PORT}`);
});
