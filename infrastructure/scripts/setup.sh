#!/bin/bash
set -euo pipefail

echo "Setting up ForgeAI development environment..."

# Install Node.js dependencies
pnpm install

# Copy env files
if [ ! -f apps/studio/.env ]; then
  cp apps/studio/.env.example apps/studio/.env
  echo "Created apps/studio/.env from example"
fi

if [ ! -f apps/ai-engine/.env ]; then
  cp apps/ai-engine/.env.example apps/ai-engine/.env
  echo "Created apps/ai-engine/.env from example"
fi

# Start infrastructure
docker compose -f infrastructure/docker/docker-compose.yml up -d postgres redis

echo "Waiting for database to be ready..."
sleep 5

# Run database migrations
pnpm --filter @forge/database db:push

echo "ForgeAI setup complete. Run 'pnpm dev' to start all services."
