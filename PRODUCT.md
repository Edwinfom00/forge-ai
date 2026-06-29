# ForgeAI — Product Context

## Product

**Name:** ForgeAI  
**Tagline:** The Operating System for AI Software Engineering  
**Register:** app  
**Category:** AI Developer Tool / Technical Platform

## What it is

ForgeAI is a compiler that transforms a single human idea into a complete, structured AI software engineering organization — teams, agents, workflows, memory systems — then exports it to any AI runtime (Claude Code, LangGraph, CrewAI, OpenAI Agents SDK, Flowise, n8n).

The core UI is a technical product used by software engineers, architects, and AI builders. It is not a marketing site.

## Who uses it

- Senior software engineers designing multi-agent systems
- AI architects building autonomous engineering organizations
- Technical founders automating their dev workflows
- Power users who understand compilers, DAGs, and agent orchestration

They work on high-end hardware, large monitors, often in dark environments. They are visually literate and instantly detect generic AI-generated UI. They demand tools that look as serious as the work they do.

## Core surfaces

- **Compiler** — the main feature: paste an idea, watch the AI organization compile in real-time, inspect the FIR, export to runtime
- **Graph View** — interactive DAG visualization of org hierarchy and workflow steps (React Flow / @xyflow/react)
- **Dashboard** — projects, recent compilations, quick actions
- **Projects** — project list and detail
- **Organizations** — org hierarchy: departments → teams → agents
- **Workflows** — DAG-based execution flows with step dependencies
- **Agents** — agent profiles, tools, capabilities, memory partitions
- **Prompts** — prompt template editor and compiler
- **Settings** — account, API keys, billing

## Tech stack

- Next.js 16.2.9, React 19, Tailwind CSS v4.3 (CSS-first, OKLCH)
- tRPC v11, Drizzle ORM, Zustand 5
- @xyflow/react v12 for graph visualization
- Python FastAPI AI engine
- PostgreSQL + pgvector, Redis

## Design register

**App UI** — design serves the product, not the brand.  
The compiler output view and graph visualization are the hero surfaces.  
Every design decision must support focus, clarity, and technical density without cognitive overload.
