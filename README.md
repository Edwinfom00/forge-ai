<div align="center">

# ForgeAI

### The Operating System for AI Software Engineering

**Design. Organize. Orchestrate. Execute.**

ForgeAI transforms a single project idea into a complete AI software engineering organization composed of specialized teams, autonomous agents, intelligent workflows and executable development pipelines.

---

> One Prompt.
>
> Infinite Specialized AI Teams.

---

![Status](https://img.shields.io/badge/status-early%20development-orange)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-%3E%3D22-brightgreen)
![pnpm](https://img.shields.io/badge/pnpm-%3E%3D10-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black)
![Python](https://img.shields.io/badge/python-3.12-blue)

</div>

---

## Vision

Software development is entering a new era.

Developers no longer work alone. They collaborate with AI.

Today, most AI coding tools focus on helping one developer write code. Tomorrow's software will be built by entire organizations of specialized AI working together.

ForgeAI exists to create those organizations.

Instead of manually configuring dozens of agents, prompts, tools and workflows, ForgeAI automatically designs the optimal software engineering organization for any project.

The future is not **one AI assistant**. The future is **AI Engineering Organizations**.

---

## Mission

ForgeAI's mission is to become the operating system that coordinates autonomous AI software teams.

From a single project description, ForgeAI can:

- Understand the business idea
- Design the software architecture
- Build engineering teams
- Create specialized AI agents
- Define responsibilities and communication protocols
- Build execution workflows
- Generate optimized prompts
- Validate architecture and optimize execution
- Deploy to any AI runtime

---

## The Problem

Modern AI coding assistants are incredibly powerful — Claude Code, Codex, Gemini CLI, OpenHands, Cursor, Windsurf. Each one can generate code.

But software engineering is much more than writing code. A real project requires architecture, planning, backend, frontend, database design, infrastructure, testing, documentation, security, reviews, and deployment.

Today, developers manually coordinate all these responsibilities. Tomorrow, AI should coordinate them automatically.

---

## Our Philosophy

ForgeAI does not generate code. ForgeAI does not generate prompts. ForgeAI does not generate agents.

ForgeAI generates **organizations**.

An organization contains Teams, Departments, Roles, AI Agents, Workflows, Communication Graphs, Memory Systems, Knowledge Bases, Decision Trees, and Development Pipelines.

---

## From Prompt to Organization

Imagine writing:

```text
Build a fintech platform.
Frontend: Next.js
Backend: FastAPI
Database: PostgreSQL
Architecture: DDD + Event Driven
Scale: 1 million users
```

ForgeAI transforms it into:

```
Chief Architect
├── Product Team
├── Architecture Team
├── Backend Team
│      ├── API Agent
│      ├── Auth Agent
│      ├── Payments Agent
│      ├── Database Agent
│      ├── Queue Agent
│      └── Review Agent
├── Frontend Team
│      ├── UI Agent
│      ├── Design System Agent
│      ├── State Agent
│      ├── Dashboard Agent
│      └── Accessibility Agent
├── AI Team
├── DevOps Team
├── Security Team
├── QA Team
├── Documentation Team
└── Release Team
```

No manual configuration. No workflow design. No prompt engineering. ForgeAI builds everything.

---

## The ForgeAI Compiler

ForgeAI introduces the **AI Organization Compiler** — instead of generating workflows directly, it compiles software engineering organizations.

```
Project Idea
     ↓
Intent Understanding
     ↓
Requirements Extraction
     ↓
Business Analysis
     ↓
Software Architecture
     ↓
Organization Planning
     ↓
Agent Planning
     ↓
Workflow Planning
     ↓
Communication Graph
     ↓
Memory Planning
     ↓
Validation & Optimization
     ↓
Forge Intermediate Representation (FIR)
     ↓
Target Runtime Compilation
```

---

## Forge Intermediate Representation (FIR)

At the heart of ForgeAI lies **Forge IR (FIR)** — a universal, vendor-agnostic JSON/YAML blueprint that describes:

- Organizations, Teams, Agents
- Dependencies and Permissions
- Memory Systems
- Workflows and Tools
- Execution Policies

Instead of targeting one AI framework, ForgeAI builds a universal representation first. Everything else is compiled from FIR.

---

## Multi Runtime Compilation

ForgeAI is runtime independent. The same organization compiles to multiple ecosystems:

```
              Forge IR
                 │
   ┌─────────────┼─────────────┐
   ▼             ▼             ▼
Claude Code    Codex      OpenHands
   ▼             ▼             ▼
LangGraph     CrewAI     OpenAI SDK
   ▼             ▼             ▼
 Flowise        n8n      Custom Runtime
```

One organization. Multiple execution engines.

---

## Core Engines

| Engine | Responsibility |
|---|---|
| **Intent Engine** | Understands the project description |
| **Business Engine** | Extracts business rules and constraints |
| **Architecture Engine** | Designs software architecture |
| **Organization Engine** | Creates engineering teams and hierarchy |
| **Agent Engine** | Creates specialized AI agents with tools |
| **Workflow Engine** | Designs execution graphs |
| **Communication Engine** | Defines inter-agent interactions |
| **Memory Engine** | Creates knowledge and memory systems |
| **Prompt Engine** | Generates optimized agent prompts |
| **Optimization Engine** | Reduces costs and improves efficiency |
| **Validation Engine** | Finds architectural issues early |
| **Runtime Compiler** | Exports to executable platforms |

---

## Technology Stack

| Layer | Technology |
|---|---|
| **Studio** | Next.js 16.2.9, React 19, Tailwind CSS v4 |
| **API** | tRPC v11, Drizzle ORM 0.45.2 |
| **State** | Zustand v5, TanStack Query v5 |
| **Graph UI** | @xyflow/react v12 |
| **AI Engine** | Python 3.12, FastAPI 0.110 |
| **LLM** | DeepSeek (via OpenAI-compatible API) |
| **Database** | PostgreSQL + pgvector |
| **Cache** | Redis 7 |
| **Queue** | BullMQ |
| **Gateway** | Hono v4 |
| **Storage** | S3 Compatible |
| **Infra** | Docker Compose, Nginx |
| **CI** | GitHub Actions (Node 22 + Python 3.12) |

---

## Monorepo Architecture

```
forge-ai/
├── apps/
│   ├── studio/          # Next.js 16 — main UI (port 3001)
│   ├── ai-engine/       # Python FastAPI — compilation engines (port 8000)
│   ├── gateway/         # Hono — API gateway (port 3003)
│   ├── runtime/         # Node.js execution runtime
│   └── docs/            # Next.js documentation site (port 3002)
│
├── packages/
│   ├── fir/             # Forge Intermediate Representation (Zod schemas)
│   ├── compiler/        # 4-stage compilation pipeline
│   ├── graph/           # Topological sort + cycle detection
│   ├── database/        # Drizzle ORM schemas and client
│   ├── shared/          # Types, constants, utilities
│   ├── agents/          # Agent abstractions
│   ├── workflow/        # Workflow types and engine
│   ├── memory/          # Memory system abstractions
│   ├── prompts/         # Prompt templates
│   ├── planner/         # Planning engine
│   ├── exporter/        # Runtime export adapters
│   ├── auth/            # Authentication
│   ├── ui/              # Shared UI components
│   ├── sdk/             # ForgeAI client SDK
│   └── telemetry/       # Observability (no external tracking)
│
└── infrastructure/
    ├── docker/          # Docker Compose + Dockerfiles
    ├── nginx/           # Reverse proxy config
    ├── redis/           # Redis config
    └── scripts/         # Setup scripts
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/) >= 10
- [Python](https://www.python.org/) 3.12
- [Docker](https://www.docker.com/) + Docker Compose
- [PostgreSQL](https://www.postgresql.org/) 16 (or use Docker)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Edwinfom00/forge-ai.git
cd forge-ai
```

### 2. Install Node.js dependencies

```bash
pnpm install
```

### 3. Set up environment variables

```bash
# Copy example env files
cp apps/studio/.env.example apps/studio/.env.local
cp apps/ai-engine/.env.example apps/ai-engine/.env
```

Edit each `.env` file with your actual values (database URL, API keys, etc.).

### 4. Start infrastructure services

```bash
# Start PostgreSQL + Redis with Docker
docker compose -f infrastructure/docker/docker-compose.yml up -d postgres redis
```

### 5. Push database schema

```bash
pnpm --filter @forge/database db:push
```

### 6. Start development servers

```bash
# Start all apps in parallel
pnpm dev
```

This starts:
- **Studio** → http://localhost:3001
- **AI Engine** → http://localhost:8000
- **Gateway** → http://localhost:3003
- **Docs** → http://localhost:3002

---

## Environment Variables

### `apps/studio/.env.local`

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/forgeai
AI_ENGINE_URL=http://localhost:8000
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3001
```

### `apps/ai-engine/.env`

```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/forgeai
DEEPSEEK_API_KEY=your-deepseek-api-key
REDIS_URL=redis://localhost:6379
```

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start all apps in development mode |
| `pnpm build` | Build all packages and apps |
| `pnpm typecheck` | Run TypeScript type checking across the monorepo |
| `pnpm lint` | Lint all packages |
| `pnpm test` | Run all tests |
| `pnpm clean` | Remove all build artifacts |
| `pnpm --filter @forge/database db:push` | Push database schema |
| `pnpm --filter @forge/database db:generate` | Generate Drizzle migrations |

---

## Development Guidelines

This project follows strict conventions defined in [AGENT.md](./AGENT.md):

- **No `any` types** — TypeScript strict mode everywhere
- **No default exports** — named exports only
- **No magic strings** — use typed constants
- **No comments** — code must be self-documenting
- **No telemetry** — zero analytics, tracking, or marketing scripts
- **Server Components by default** — `'use client'` only on leaf interactive components
- **Feature-First architecture** — `src/modules/<module>/` with clean layers
- **App Router routing only** — no business logic inside `app/`
- **Tailwind v4 CSS-first** — no `tailwind.config.ts`, uses `@theme` in CSS

---

## Project Structure (Studio Modules)

Each feature module in `apps/studio/src/modules/<module>/` follows this structure:

```
<module>/
├── types/index.ts          # TypeScript types
├── schemas/index.ts        # Zod validation schemas
├── server/
│   ├── repositories/       # Database access layer
│   ├── services/           # Business logic
│   └── router.ts           # tRPC procedures
├── ui/
│   ├── components/         # Reusable UI components
│   └── views/              # Page-level views
└── index.ts                # Public barrel export
```

---

## Long-Term Roadmap

| Phase | Goal |
|---|---|
| **Phase 1** | AI Workflow Generation |
| **Phase 2** | AI Organization Generation |
| **Phase 3** | Universal AI Runtime Compiler |
| **Phase 4** | Autonomous AI Software Organizations |
| **Phase 5** | Self-Improving Engineering Organizations |

Phase 5 — organizations capable of analyzing their own performance, restructuring teams, replacing inefficient agents, optimizing workflows and continuously improving software delivery without manual intervention.

---

## Why ForgeAI?

Because the future of software engineering is not about building better AI assistants.

It is about building intelligent organizations where dozens — or hundreds — of specialized AI agents collaborate under a shared architecture, just as world-class engineering teams do today.

ForgeAI is the system that designs those organizations. It is the bridge between a human idea and a fully orchestrated AI engineering workforce.

---

## Contributing

This project is in early development. Contributions, ideas, and feedback are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit using [conventional commits](https://www.conventionalcommits.org/): `git commit -m "feat: add your feature"`
4. Push and open a Pull Request

---

## License

MIT © [Edwin Fom](https://github.com/Edwinfom00)

---

<div align="center">

> **One idea. One prompt. One architecture. Infinite AI teams.**

</div>
