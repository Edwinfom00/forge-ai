# ForgeAI — Master Prompt Library

Every prompt in this file follows the mandatory opening:

> **"Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code."**

This ensures every agent understands the project architecture, constraints, and philosophy before touching any file.

---

## How to Use

1. Copy the full prompt block for the task you want to work on.
2. Paste it into Claude Code or your AI agent of choice.
3. The agent will read AGENT.md first, plan, then implement.

---

## Index

### Phase 1 — Foundation
- [P01 — Database Schema & Migrations](#p01--database-schema--migrations)
- [P02 — Authentication System](#p02--authentication-system)
- [P03 — Shared Package (Types, Constants, Utils)](#p03--shared-package-types-constants-utils)
- [P04 — Environment & Configuration](#p04--environment--configuration)

### Phase 2 — Core Packages
- [P05 — FIR Package (Forge Intermediate Representation)](#p05--fir-package-forge-intermediate-representation)
- [P06 — Compiler Package (4-Stage Pipeline)](#p06--compiler-package-4-stage-pipeline)
- [P07 — Graph Package (Topological Sort & DAG)](#p07--graph-package-topological-sort--dag)
- [P08 — Workflow Package](#p08--workflow-package)
- [P09 — Agents Package](#p09--agents-package)
- [P10 — Memory Package](#p10--memory-package)
- [P11 — Prompts Package](#p11--prompts-package)
- [P12 — Planner Package](#p12--planner-package)
- [P13 — Exporter Package](#p13--exporter-package)

### Phase 3 — Studio Feature Modules
- [P14 — Dashboard Module](#p14--dashboard-module)
- [P15 — Projects Module](#p15--projects-module)
- [P16 — Organization Module](#p16--organization-module)
- [P17 — Teams Module](#p17--teams-module)
- [P18 — Agents Module (Studio)](#p18--agents-module-studio)
- [P19 — Compiler Module (Studio)](#p19--compiler-module-studio)
- [P20 — Workflow Module (Studio)](#p20--workflow-module-studio)
- [P21 — Graph Visualization Module](#p21--graph-visualization-module)
- [P22 — Prompts Module (Studio)](#p22--prompts-module-studio)
- [P23 — Runtime Module (Studio)](#p23--runtime-module-studio)
- [P24 — Settings Module](#p24--settings-module)
- [P25 — Onboarding Module](#p25--onboarding-module)
- [P26 — Billing Module](#p26--billing-module)

### Phase 4 — AI Engine (12 Engines)
- [P27 — Intent Engine](#p27--intent-engine)
- [P28 — Business Engine](#p28--business-engine)
- [P29 — Architecture Engine](#p29--architecture-engine)
- [P30 — Organization Engine](#p30--organization-engine)
- [P31 — Agent Engine](#p31--agent-engine)
- [P32 — Workflow Engine (AI)](#p32--workflow-engine-ai)
- [P33 — Prompt Engine (AI)](#p33--prompt-engine-ai)
- [P34 — Memory Engine (AI)](#p34--memory-engine-ai)
- [P35 — Optimization Engine](#p35--optimization-engine)
- [P36 — Validation Engine](#p36--validation-engine)
- [P37 — Compiler Engine (AI)](#p37--compiler-engine-ai)
- [P38 — Exporter Engine (AI)](#p38--exporter-engine-ai)
- [P39 — Forge Kernel](#p39--forge-kernel)

### Phase 5 — Gateway & Runtime
- [P40 — API Gateway (Hono)](#p40--api-gateway-hono)
- [P41 — Execution Runtime (Node.js)](#p41--execution-runtime-nodejs)
- [P42 — SDK Package](#p42--sdk-package)

### Phase 6 — Infrastructure & DevOps
- [P43 — Docker & Docker Compose](#p43--docker--docker-compose)
- [P44 — CI/CD Pipeline (GitHub Actions)](#p44--cicd-pipeline-github-actions)
- [P45 — Database Migrations Strategy](#p45--database-migrations-strategy)

### Phase 7 — UI & Design System
- [P46 — UI Component Library (@forge/ui)](#p46--ui-component-library-forgeui)
- [P47 — Global Layout & Navigation](#p47--global-layout--navigation)
- [P48 — Design System & Tailwind Tokens](#p48--design-system--tailwind-tokens)

### Phase 8 — Quality & Testing
- [P49 — Unit Tests Setup](#p49--unit-tests-setup)
- [P50 — Integration Tests (Database)](#p50--integration-tests-database)
- [P51 — E2E Tests Setup](#p51--e2e-tests-setup)
- [P52 — TypeScript Strict Audit](#p52--typescript-strict-audit)

### Phase 9 — Docs & Polish
- [P53 — Documentation Site](#p53--documentation-site)
- [P54 — API Reference Docs](#p54--api-reference-docs)
- [P55 — Full Project Audit & Refactor](#p55--full-project-audit--refactor)

---

## Phase 1 — Foundation

---

### P01 — Database Schema & Migrations

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the complete database schema in packages/database using Drizzle ORM.

Requirements:
- Define all tables: users, projects, organizations, departments, teams, agents, workflows, workflowSteps, workflowExecutions, firRecords, prompts, memories
- Use uuid primary keys with defaultRandom()
- Use proper FK relationships and cascade rules
- Add createdAt/updatedAt timestamps on all tables
- Use pgTable from drizzle-orm/pg-core
- Use jsonb for complex nested fields (capabilities, tools, memoryPartitions, content)
- Export all schemas from packages/database/src/schema/index.ts
- Set up drizzle.config.ts pointing to the schema index
- Add db:push, db:generate, db:migrate, db:studio scripts to package.json

Respect: named exports only, no any, no comments, strict types.
```

---

### P02 — Authentication System

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the authentication system in apps/studio using the auth module at src/modules/auth/.

Requirements:
- Implement OAuth authentication (GitHub + Google providers)
- Follow the module layer structure: types → schemas → server/repositories → server/services → server/router → ui/components → ui/views
- Create the auth tRPC router with procedures: getSession, signIn, signOut
- Build the AuthPage view in ui/views/auth-page.tsx
- Build the sign-in card component in ui/components/sign-in-card.tsx
- Protect dashboard routes: redirect unauthenticated users to /auth
- Store session in database (users table in packages/database)
- Use @forge/auth package for shared auth types and utilities
- No secrets in frontend — OAuth credentials stay in env variables only

Plan the full layer sequence before writing any code.
```

---

### P03 — Shared Package (Types, Constants, Utils)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Complete the @forge/shared package with all types, constants, and utilities needed across the monorepo.

Requirements:
- types/index.ts: Result<T,E>, AsyncResult<T>, PaginatedResult<T>, BaseEntity, Timestamp, EntityId, SortInput, ErrorCode enum, ApiError
- constants/index.ts: MAX_TEAMS_PER_ORGANIZATION=12, MAX_AGENTS_PER_TEAM=10, FIR_SCHEMA_VERSION='1.0.0', ORGANIZATION_NAME_MIN_LENGTH=3, ORGANIZATION_NAME_MAX_LENGTH=100, MAX_WORKFLOW_STEPS=50, MAX_DEPARTMENTS=10
- utils/index.ts: createResult(), createError(), isNonNullable(), chunk(), generateId(), formatDate(), slugify(), truncate()
- All exports must be named exports
- Zero dependencies on other @forge/* packages (this package is the base layer)
- Strict TypeScript throughout

Plan all types and utilities before implementing.
```

---

### P04 — Environment & Configuration

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Set up a robust, type-safe environment configuration system for the entire monorepo.

Requirements:
- Create src/config/index.ts in apps/studio with a typed config object (no process.env scattered in code)
- Validate all required env vars at startup using Zod
- Required vars: DATABASE_URL, AI_ENGINE_URL, NEXTAUTH_SECRET, NEXTAUTH_URL
- Optional vars: REDIS_URL, DEEPSEEK_API_KEY, PORT
- Create .env.example files for apps/studio and apps/ai-engine with all required keys and placeholder values
- Create apps/ai-engine/app/core/config.py using pydantic-settings BaseSettings
- Never expose secrets to the client bundle — only NEXT_PUBLIC_ prefixed vars go to the browser

Plan the config schema before writing files.
```

---

## Phase 2 — Core Packages

---

### P05 — FIR Package (Forge Intermediate Representation)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the complete @forge/fir package — the universal language of ForgeAI.

Requirements:
- Define all Zod schemas in src/types/fir.ts:
  FIRSchema, FIROrgSpecSchema, FIRDepartmentSchema, FIRTeamSchema, FIRAgentSchema,
  FIRToolSchema, FIRWorkflowSpecSchema, FIRWorkflowStepSchema, FIRDomainSpecSchema,
  FIRMemorySpecSchema, FIRRuntimeTargetSchema
- Infer TypeScript types from each Zod schema (z.infer<typeof ...>)
- FIR_SCHEMA_VERSION must match @forge/shared constant
- Implement src/validators/fir-validator.ts:
  validateFIR(input: unknown): Result<FIR, ValidationError>
  assertNoCircularDependencies(fir: FIR): void
  validateFIRIntegrity(fir: FIR): ValidationResult (check all agent refs exist in orgSpec)
- Export everything from src/index.ts as named exports

FIR is the sole source of truth — design it with that responsibility in mind. Plan all fields before coding.
```

---

### P06 — Compiler Package (4-Stage Pipeline)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the @forge/compiler package — the 4-stage compilation pipeline from human intent to FIR.

Requirements:
Stage 1 — src/stages/intent-parser.ts:
  parseIntent(input: CompilerInput): Promise<ParsedIntent>
  Extracts: project type, tech stack, scale, domains, actors, constraints

Stage 2 — src/stages/semantic-analyzer.ts:
  analyzeSemantics(intent: ParsedIntent): Promise<SemanticGraph>
  Builds a graph of domains, entities, and their relationships

Stage 3 — src/stages/optimizer.ts:
  optimizeGraph(graph: SemanticGraph): Promise<OptimizedGraph>
  Reduces token bottlenecks, merges overlapping agents, detects cycles

Stage 4 — src/stages/fir-emitter.ts:
  emitFIR(graph: OptimizedGraph, input: CompilerInput): Promise<FIR>
  Serializes the optimized graph into valid FIR using @forge/fir schemas

- src/types/index.ts: CompilerInput, CompilationStage enum, CompilationResult, CompilationProgress
- Each stage must validate its output before returning
- Use @forge/fir for FIR types, @forge/shared for Result types

Plan all types and the data flow between stages before writing code.
```

---

### P07 — Graph Package (Topological Sort & DAG)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the @forge/graph package — graph data structures and algorithms for workflow DAGs.

Requirements:
- src/types/index.ts: Graph<T>, GraphNode<T>, GraphEdge, TopologicalSortResult, CycleDetectionResult
- src/algorithms/topological-sort.ts:
  topologicalSort<T>(graph: Graph<T>): TopologicalSortResult<T>  — Kahn's algorithm
  detectCycle<T>(graph: Graph<T>): CycleDetectionResult
- src/algorithms/shortest-path.ts:
  findShortestPath<T>(graph: Graph<T>, from: string, to: string): string[]
- src/algorithms/reachability.ts:
  findReachableNodes<T>(graph: Graph<T>, from: string): Set<string>
- Zero external dependencies — pure TypeScript algorithms
- All edge cases handled: empty graph, single node, disconnected components

Plan the Graph<T> data structure design first, then the algorithms.
```

---

### P08 — Workflow Package

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the @forge/workflow package — workflow engine types and execution utilities.

Requirements:
- src/types/index.ts:
  WorkflowId (branded), Workflow, WorkflowStep, WorkflowExecution, WorkflowStatus enum
  StepType enum: 'agent_task' | 'parallel_gate' | 'condition' | 'human_review' | 'tool_call'
  StepStatus enum: 'pending' | 'running' | 'completed' | 'failed' | 'skipped'
- src/engine/workflow-runner.ts:
  runWorkflow(workflow: Workflow, context: WorkflowContext): AsyncResult<WorkflowExecution>
  resolveNextSteps(execution: WorkflowExecution): WorkflowStep[]
- src/engine/dag-resolver.ts:
  buildExecutionDAG(workflow: Workflow): Graph<WorkflowStep>
  resolveParallelGates(dag: Graph<WorkflowStep>): WorkflowStep[][]
- Uses @forge/graph for DAG operations

Plan the execution model and state machine before writing code.
```

---

### P09 — Agents Package

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the @forge/agents package — agent definitions, capabilities, and tool bindings.

Requirements:
- src/types/index.ts:
  AgentId (branded), Agent, AgentCapability, AgentTool, AgentRole enum, AgentStatus enum
  AgentRole: 'architect' | 'backend_lead' | 'backend_dev' | 'frontend_dev' | 'reviewer' | 'qa' | 'docs' | 'release' | 'devops' | 'security'
- src/builders/agent-builder.ts:
  AgentBuilder class with fluent API: .withRole(), .withTools(), .withMemory(), .withPersona(), .build(): Agent
- src/validators/agent-validator.ts:
  validateAgent(agent: Agent): ValidationResult
  validateToolSignature(tool: AgentTool): ValidationResult
- src/registry/agent-registry.ts:
  registerAgent(agent: Agent): void
  getAgentById(id: AgentId): Agent | undefined
  getAgentsByRole(role: AgentRole): Agent[]

Plan the Agent data model and builder pattern before writing code.
```

---

### P10 — Memory Package

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the @forge/memory package — hierarchical memory strategy types and abstractions.

Requirements:
- src/types/index.ts:
  MemoryType enum: 'project' | 'organization' | 'business' | 'architecture' | 'runtime' | 'shared' | 'persistent' | 'long_term'
  MemoryPartition, MemoryEntry, MemoryQuery, MemorySearchResult
  VectorSearchConfig, EmbeddingVector
- src/interfaces/memory-store.ts:
  IMemoryStore interface: store(), retrieve(), search(), delete(), clear()
- src/adapters/redis-memory-adapter.ts:
  RedisMemoryAdapter implementing IMemoryStore (shared/runtime memory)
- src/adapters/vector-memory-adapter.ts:
  VectorMemoryAdapter implementing IMemoryStore (pgvector persistent memory)
- All adapters must be pluggable — injected via constructor, not hardcoded

Plan the memory hierarchy model (7 memory types from AGENT.md section 11) before writing code.
```

---

### P11 — Prompts Package

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the @forge/prompts package — prompt template management and compilation.

Requirements:
- src/types/index.ts:
  PromptId (branded), PromptTemplate, PromptVariable, CompiledPrompt, PromptContext
  PromptCategory enum: 'system' | 'user' | 'tool_call' | 'memory_injection' | 'chain_of_thought'
- src/compiler/prompt-compiler.ts:
  compilePrompt(template: PromptTemplate, context: PromptContext): CompiledPrompt
  injectVariables(template: string, variables: Record<string, string>): string
  validateTemplate(template: PromptTemplate): ValidationResult
- src/templates/: Base prompt templates for each of the 12 AI engines
- src/registry/prompt-registry.ts:
  registerTemplate(template: PromptTemplate): void
  getTemplate(id: PromptId): PromptTemplate | undefined
  getTemplatesByCategory(category: PromptCategory): PromptTemplate[]

Plan all prompt template structures before writing code.
```

---

### P12 — Planner Package

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the @forge/planner package — organization topology planner and team layout optimizer.

Requirements:
- src/types/index.ts:
  PlannerInput, OrganizationTopology, TeamLayout, DepartmentPlan, AgentAllocation, ScaleProfile
  ScaleProfile enum: 'solo' | 'startup' | 'scaleup' | 'enterprise'
- src/planner/organization-planner.ts:
  planOrganization(input: PlannerInput): Promise<OrganizationTopology>
  Determines optimal number of departments, teams, and agents based on project scale
- src/planner/team-planner.ts:
  planTeams(topology: OrganizationTopology): TeamLayout[]
  Respects MAX_TEAMS_PER_ORGANIZATION and MAX_AGENTS_PER_TEAM from @forge/shared
- src/planner/agent-allocator.ts:
  allocateAgents(teams: TeamLayout[], scale: ScaleProfile): AgentAllocation[]

Plan the planning algorithm and scale profiles before writing code.
```

---

### P13 — Exporter Package

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the @forge/exporter package — runtime export adapters that translate FIR into target-specific execution formats.

Requirements:
- src/types/index.ts:
  ExporterTarget enum: 'claude_code' | 'langgraph' | 'crewai' | 'openai_agents' | 'flowise' | 'n8n' | 'custom'
  ExportResult, ExportConfig, ExportedFile, ExportManifest
- src/interfaces/runtime-exporter.ts:
  IRuntimeExporter interface: export(fir: FIR, config: ExportConfig): Promise<ExportResult>
- src/exporters/claude-code-exporter.ts:
  ClaudeCodeExporter implementing IRuntimeExporter
  Translates FIR agents → CLAUDE.md files, workflows → task sequences
- src/exporters/langgraph-exporter.ts:
  LangGraphExporter implementing IRuntimeExporter
  Translates FIR workflows → LangGraph StateGraph definitions
- src/exporters/crewai-exporter.ts:
  CrewAIExporter implementing IRuntimeExporter
- src/registry/exporter-registry.ts:
  register(target: ExporterTarget, exporter: IRuntimeExporter): void
  export(fir: FIR, target: ExporterTarget, config: ExportConfig): Promise<ExportResult>

Plan the interface contract before implementing any exporter.
```

---

## Phase 3 — Studio Feature Modules

---

### P14 — Dashboard Module

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the dashboard module at apps/studio/src/modules/dashboard/.

Requirements:
Layer sequence (follow AGENT.md section 15 strictly):
1. types/index.ts — DashboardStats, RecentActivity, QuickAction
2. server/services/dashboard-service.ts — getStats(), getRecentActivity()
3. server/router.ts — tRPC router: getStats, getRecentActivity procedures
4. ui/components/stats-card.tsx — StatsCard component
5. ui/components/activity-feed.tsx — ActivityFeed component
6. ui/components/quick-actions.tsx — QuickActions component
7. ui/views/dashboard-page.tsx — DashboardPage view (Server Component)
8. ui/views/dashboard-layout.tsx — DashboardLayout (sidebar + topbar + content slot)
9. ui/views/landing-page.tsx — LandingPage (shown when no projects exist)
10. index.ts — barrel export

Dashboard must show: total projects, total organizations, recent compilations, quick links to compiler.
All views are Server Components by default. No 'use client' unless absolutely necessary.
```

---

### P15 — Projects Module

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the projects module at apps/studio/src/modules/projects/.

Requirements:
Layer sequence:
1. types/index.ts — ProjectId (branded), Project, CreateProjectInput, UpdateProjectInput
2. schemas/index.ts — createProjectSchema, updateProjectSchema (Zod)
3. server/repositories/project-repository.ts — findById, findByUser, create, update, delete, findWithOrganizations
4. server/services/project-service.ts — createProject, getProjectsByUser, getProjectById, updateProject, deleteProject
5. server/router.ts — tRPC: getAll, getById, create, update, delete procedures
6. ui/components/project-card.tsx — ProjectCard (shows name, description, organization count, last compiled)
7. ui/components/project-form.tsx — ProjectForm (create + edit, 'use client')
8. ui/components/project-list.tsx — ProjectList (Server Component, maps projects to ProjectCard)
9. ui/views/projects-page.tsx — ProjectsPage (fetches list server-side)
10. ui/views/project-detail-page.tsx — ProjectDetailPage (shows organizations, FIR status, export options)
11. index.ts — barrel export

Validate: project name 3–100 chars, description max 500 chars.
```

---

### P16 — Organization Module

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the organization module at apps/studio/src/modules/organization/.

Requirements:
Layer sequence:
1. types/index.ts — OrganizationId (branded), Organization, Department, CreateOrganizationInput
2. schemas/index.ts — createOrganizationSchema, updateOrganizationSchema, createDepartmentSchema
3. server/repositories/organization-repository.ts — findById, findByProject, create, update, findDepartmentsByOrg, createDepartment
4. server/services/organization-service.ts — createOrganization, getOrganizationsByProject, addDepartment
5. server/router.ts — tRPC: getByProject, getById, create, addDepartment procedures
6. ui/components/organization-card.tsx — OrganizationCard (shows dept count, team count, agent count)
7. ui/components/department-list.tsx — DepartmentList
8. ui/components/organization-form.tsx — OrganizationForm ('use client')
9. ui/views/organization-page.tsx — OrganizationPage (Server Component)
10. index.ts — barrel export

Respect: MAX_DEPARTMENTS=10 from @forge/shared. OrganizationId must be a branded type.
```

---

### P17 — Teams Module

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the teams module at apps/studio/src/modules/teams/.

Requirements:
Layer sequence:
1. types/index.ts — TeamId (branded), Team, TeamMember, TeamRole enum, CreateTeamInput
2. schemas/index.ts — createTeamSchema, updateTeamSchema
3. server/repositories/team-repository.ts — findById, findByDepartment, findByOrganization, create, update, delete
4. server/services/team-service.ts — createTeam, getTeamsByDepartment, addMember, removeTeam
5. server/router.ts — tRPC: getByDepartment, getById, create, delete procedures
6. ui/components/team-card.tsx — TeamCard (shows role badge, member count, agent count)
7. ui/components/team-form.tsx — TeamForm ('use client')
8. ui/views/teams-page.tsx — TeamsPage (Server Component)
9. index.ts — barrel export

Respect: MAX_TEAMS_PER_ORGANIZATION=12 constant from @forge/shared. Validate on service layer.
```

---

### P18 — Agents Module (Studio)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the agents module at apps/studio/src/modules/agents/.

Requirements:
Layer sequence:
1. types/index.ts — AgentId (branded), StudioAgent, AgentRole enum, AgentTool, AgentCapability, CreateAgentInput
2. schemas/index.ts — createAgentSchema, updateAgentSchema, agentToolSchema
3. server/repositories/agent-repository.ts — findById, findByTeam, create, update, delete
4. server/services/agent-service.ts — createAgent, getAgentsByTeam, updateAgentTools
5. server/router.ts — tRPC: getByTeam, getById, create, update procedures
6. ui/components/agent-card.tsx — AgentCard (shows role, tools count, memory partitions, persona excerpt)
7. ui/components/agent-tool-list.tsx — AgentToolList
8. ui/components/agent-form.tsx — AgentForm ('use client')
9. ui/views/agents-page.tsx — AgentsPage (Server Component, lists all agents across teams)
10. index.ts — barrel export

Respect: MAX_AGENTS_PER_TEAM=10. Store capabilities and tools as jsonb in database.
```

---

### P19 — Compiler Module (Studio)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the compiler module at apps/studio/src/modules/compiler/ — the main UI for the ForgeAI compilation pipeline.

Requirements:
Layer sequence:
1. types/index.ts — CompilerSessionId (branded), CompilerSession, CompilationStatus enum, CompilationProgress, CompilerOutput
2. schemas/index.ts — compileInputSchema (validates project description, tech stack, scale)
3. server/services/compiler-service.ts — startCompilation(input), getCompilationStatus(sessionId), cancelCompilation(sessionId)
   Service calls the AI Engine at AI_ENGINE_URL/api/v1/compile via fetch
4. server/router.ts — tRPC: compile (mutation), getStatus (query), getResult (query) procedures
5. ui/components/compiler-input.tsx — CompilerInput ('use client') — textarea for project description, tech stack selector, scale selector
6. ui/components/compilation-progress.tsx — CompilationProgress ('use client') — shows real-time stage progress
7. ui/components/fir-preview.tsx — FIRPreview — renders the compiled FIR as a tree/JSON viewer
8. ui/components/export-options.tsx — ExportOptions ('use client') — target runtime selector + export button
9. ui/views/compiler-page.tsx — CompilerPage (Server Component wrapper)
10. index.ts — barrel export

This is the core product feature — design the UX flow carefully before writing any component.
```

---

### P20 — Workflow Module (Studio)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the workflow module at apps/studio/src/modules/workflow/.

Requirements:
Layer sequence:
1. types/index.ts — WorkflowId (branded), StudioWorkflow, WorkflowStepUI, WorkflowStatus enum
2. schemas/index.ts — createWorkflowSchema, addStepSchema
3. server/repositories/workflow-repository.ts — findById, findByProject, create, addStep, updateStatus
4. server/services/workflow-service.ts — createWorkflow, getWorkflowsByProject, executeWorkflow, getExecutionStatus
5. server/router.ts — tRPC: getByProject, getById, create, execute, getExecution procedures
6. ui/components/workflow-step-card.tsx — WorkflowStepCard
7. ui/components/workflow-status-badge.tsx — WorkflowStatusBadge
8. ui/views/workflow-page.tsx — WorkflowPage (Server Component)
9. index.ts — barrel export

Workflows are DAGs — steps have dependencies. Represent them correctly in the DB schema (dependsOn: string[]).
```

---

### P21 — Graph Visualization Module

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the graph module at apps/studio/src/modules/graph/ using @xyflow/react v12.

Requirements:
1. types/index.ts — ForgeNode, ForgeEdge, GraphViewMode enum ('organization' | 'workflow' | 'communication')
2. ui/components/organization-graph.tsx — ('use client') renders the org hierarchy as a @xyflow/react graph
   - Custom nodes: DepartmentNode, TeamNode, AgentNode
   - Edges show communication paths
3. ui/components/workflow-graph.tsx — ('use client') renders workflow DAG
   - Custom nodes: StepNode (color-coded by StepType)
   - Edges show dependencies and data flow
4. ui/components/graph-controls.tsx — ('use client') zoom, fit view, layout toggle
5. ui/views/graph-page.tsx — GraphPage (Server Component wrapper, loads data server-side, passes to client graph)
6. index.ts — barrel export

@xyflow/react v12: no default export — use named imports only. All nodes must use 'use client'.
Custom nodes must be memoized with React.memo. Never import ReactFlow — import from @xyflow/react.
```

---

### P22 — Prompts Module (Studio)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the prompts module at apps/studio/src/modules/prompts/.

Requirements:
Layer sequence:
1. types/index.ts — PromptId (branded), StudioPrompt, PromptCategory enum, PromptVariable
2. schemas/index.ts — createPromptSchema, updatePromptSchema
3. server/repositories/prompt-repository.ts — findById, findByProject, findByCategory, create, update, delete
4. server/services/prompt-service.ts — createPrompt, getPromptsByProject, previewPrompt (compile with test vars)
5. server/router.ts — tRPC: getByProject, getById, create, update, preview procedures
6. ui/components/prompt-card.tsx — PromptCard (shows category badge, variable count, preview excerpt)
7. ui/components/prompt-editor.tsx — PromptEditor ('use client') — syntax-highlighted template editor
8. ui/views/prompts-page.tsx — PromptsPage (Server Component)
9. index.ts — barrel export
```

---

### P23 — Runtime Module (Studio)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the runtime module at apps/studio/src/modules/runtime/.

Requirements:
Layer sequence:
1. types/index.ts — RuntimeId (branded), RuntimeTarget, RuntimeStatus enum, RuntimeExecution, ExportedArtifact
2. schemas/index.ts — exportToRuntimeSchema
3. server/services/runtime-service.ts — exportToRuntime(firId, target), getExportStatus(runtimeId), downloadArtifact(artifactId)
4. server/router.ts — tRPC: export, getStatus, listArtifacts, download procedures
5. ui/components/runtime-target-card.tsx — RuntimeTargetCard (shows target logo, description, export button)
6. ui/components/export-status.tsx — ExportStatus ('use client')
7. ui/components/artifact-list.tsx — ArtifactList
8. ui/views/runtime-page.tsx — RuntimePage (Server Component)
9. index.ts — barrel export

Supported targets: claude_code, langgraph, crewai, openai_agents, flowise, n8n.
```

---

### P24 — Settings Module

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the settings module at apps/studio/src/modules/settings/.

Requirements:
Layer sequence:
1. types/index.ts — UserSettings, NotificationPreferences, ApiKey, ThemePreference enum
2. schemas/index.ts — updateSettingsSchema, createApiKeySchema
3. server/repositories/settings-repository.ts — findByUser, upsert, createApiKey, revokeApiKey
4. server/services/settings-service.ts — getUserSettings, updateSettings, generateApiKey, revokeApiKey
5. server/router.ts — tRPC: getSettings, updateSettings, createApiKey, revokeApiKey, listApiKeys procedures
6. ui/components/settings-section.tsx — SettingsSection (labeled card container)
7. ui/components/api-key-list.tsx — ApiKeyList (shows masked keys, revoke button)
8. ui/components/theme-toggle.tsx — ThemeToggle ('use client')
9. ui/views/settings-page.tsx — SettingsPage (Server Component)
10. index.ts — barrel export
```

---

### P25 — Onboarding Module

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the onboarding module at apps/studio/src/modules/onboarding/.

Requirements:
Layer sequence:
1. types/index.ts — OnboardingStep enum, OnboardingState, OnboardingProgress
2. schemas/index.ts — onboardingStepSchema
3. server/services/onboarding-service.ts — getOnboardingState(userId), completeStep(userId, step), resetOnboarding(userId)
4. server/router.ts — tRPC: getState, completeStep procedures
5. ui/components/onboarding-step.tsx — OnboardingStep (shows step number, title, description, CTA)
6. ui/components/onboarding-progress.tsx — OnboardingProgress (progress bar)
7. ui/views/onboarding-page.tsx — OnboardingPage ('use client' — multi-step wizard)
8. index.ts — barrel export

Steps: 1) Create your first project → 2) Describe your idea → 3) Run the compiler → 4) Export to runtime.
```

---

### P26 — Billing Module

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the billing module at apps/studio/src/modules/billing/.

Requirements:
Layer sequence:
1. types/index.ts — Plan enum ('free' | 'pro' | 'team' | 'enterprise'), Subscription, UsageMetrics, BillingPeriod
2. schemas/index.ts — upgradePlanSchema
3. server/repositories/billing-repository.ts — findSubscriptionByUser, updateSubscription, getUsageMetrics
4. server/services/billing-service.ts — getCurrentPlan, getUsageMetrics, checkQuota, canCompile
5. server/router.ts — tRPC: getPlan, getUsage, checkQuota procedures
6. ui/components/plan-card.tsx — PlanCard (shows plan name, features, price, CTA)
7. ui/components/usage-meter.tsx — UsageMeter (shows compilations used / limit)
8. ui/views/billing-page.tsx — BillingPage (Server Component)
9. index.ts — barrel export

Free plan limits: 3 projects, 10 compilations/month. Pro: unlimited. No payment integration yet — stubs only.
```

---

## Phase 4 — AI Engine (12 Engines)

---

### P27 — Intent Engine

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Intent Engine in apps/ai-engine/app/ — Stage 1 of the compilation pipeline.

Requirements:
- app/intent/models.py — Pydantic v2 models: IntentInput, ParsedIntent, TechStack, ProjectScale, DomainEntity, Actor
- app/intent/service.py — IntentService.parse(input: IntentInput) -> ParsedIntent
  Uses LLM to extract: project type, tech stack, scale, business domains, user actors, constraints
  Returns structured ParsedIntent — never raw LLM text
- app/intent/router.py — FastAPI router: POST /api/v1/intent/parse
- app/intent/prompts.py — System and user prompt templates for intent parsing
- Unit tests in tests/test_intent_engine.py

The intent engine must handle ambiguous inputs gracefully — extract what it can, mark the rest as 'unknown' with confidence scores.
Plan the ParsedIntent schema before writing the LLM call.
```

---

### P28 — Business Engine

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Business Engine in apps/ai-engine/app/business/.

Requirements:
- models.py — BusinessContext, BusinessRule, UserJourney, PricingModel, MockDataStructure
- service.py — BusinessService.analyze(intent: ParsedIntent) -> BusinessContext
  Extracts: business rules, user journeys, monetization strategy, mock data structures, compliance requirements
- router.py — POST /api/v1/business/analyze
- prompts.py — Prompt templates for business analysis

The business engine bridges user intent to software architecture — it asks "what are the business rules?" not "what code should I write?".
```

---

### P29 — Architecture Engine

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Architecture Engine in apps/ai-engine/app/architecture/.

Requirements:
- models.py — ArchitectureBlueprint, ServiceBoundary, DatabaseSchema, APIContract, ModuleContract, DesignPattern enum
- service.py — ArchitectureService.design(business: BusinessContext) -> ArchitectureBlueprint
  Designs: system boundaries, module contracts, API definitions, DB schema outline, pattern choices (DDD, CQRS, etc.)
- router.py — POST /api/v1/architecture/design
- prompts.py — Prompt templates for architecture design

Output must be machine-readable (Pydantic models) — not prose. Each service boundary must include its public API contract.
```

---

### P30 — Organization Engine

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Organization Engine in apps/ai-engine/app/organization/.

Requirements:
- models.py — AIOrganization, AIDepartment, AITeam, TeamRole enum, OrganizationTopology
- service.py — OrganizationService.build(blueprint: ArchitectureBlueprint, scale: ScaleProfile) -> AIOrganization
  Builds: department structure, team composition, role assignments, communication hierarchy
  Respects: max 12 teams per org, max 10 agents per team
- router.py — POST /api/v1/organization/build
- prompts.py — Prompt templates

The organization must reflect the communication graph from AGENT.md section 7.2: Architect → Backend Lead → Backend Agents → Reviewer → QA → Documentation → Release.
```

---

### P31 — Agent Engine

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Agent Engine in apps/ai-engine/app/agents/.

Requirements:
- models.py — AIAgent, AgentPersona, AgentTool, AgentCapability, SystemPrompt, ToolSignature
- service.py — AgentService.createAgents(organization: AIOrganization, blueprint: ArchitectureBlueprint) -> list[AIAgent]
  For each team role: generates system prompt, assigns tools, defines capabilities, creates persona
- router.py — POST /api/v1/agents/create
- prompts.py — Prompt templates per agent role

Each agent system prompt must include: role, responsibilities, constraints, output format, tool usage rules.
Agents must never hallucinate capabilities — tools must be explicitly listed with JSON Schema signatures.
```

---

### P32 — Workflow Engine (AI)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Workflow Engine in apps/ai-engine/app/workflow/.

Requirements:
- models.py — AIWorkflow, WorkflowStep, StepType enum, ParallelGate, ConditionalBranch, WorkflowDAG
- service.py — WorkflowService.design(organization: AIOrganization, blueprint: ArchitectureBlueprint) -> list[AIWorkflow]
  Designs execution workflows as DAGs: feature development flow, review flow, deployment flow
  Defines step dependencies, parallel gates, conditional branches
- router.py — POST /api/v1/workflow/design
- prompts.py — Prompt templates

Output must be a valid DAG — no cycles. Validate with topological sort before returning.
```

---

### P33 — Prompt Engine (AI)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Prompt Engine in apps/ai-engine/app/prompts/.

Requirements:
- models.py — PromptTemplate, CompiledPrompt, PromptVariable, InjectionStrategy
- service.py — PromptService.generate(agents: list[AIAgent], workflows: list[AIWorkflow]) -> list[PromptTemplate]
  Generates optimized prompt templates for each agent with: variable injection points, chain-of-thought structure, output format constraints
- compiler.py — PromptCompiler.compile(template: PromptTemplate, context: dict) -> CompiledPrompt
- router.py — POST /api/v1/prompts/generate
- prompts.py — Meta-prompts (prompts that generate prompts)

Prompts must minimize token usage while maximizing agent instruction clarity.
```

---

### P34 — Memory Engine (AI)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Memory Engine in apps/ai-engine/app/memory/ (or ai-engine memory module).

Requirements:
- models.py — MemoryPartition, MemoryEntry, VectorSearchConfig, MemoryType enum (7 types from AGENT.md §11)
- service.py — MemoryService.plan(organization: AIOrganization) -> list[MemoryPartition]
  Plans memory partitions per agent: what to store, retrieval strategies, vector search spaces
- store.py — MemoryStore with adapters: Redis (runtime), pgvector (persistent), in-memory (ephemeral)
- router.py — POST /api/v1/memory/plan, GET /api/v1/memory/retrieve
- prompts.py — Prompt templates for memory planning

Each agent must have clearly defined memory boundaries — agents must not share memory unless explicitly defined in the org spec.
```

---

### P35 — Optimization Engine

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Optimization Engine in apps/ai-engine/app/optimization/.

Requirements:
- models.py — OptimizationResult, OptimizationRule, BottleneckReport, TokenCostEstimate
- service.py — OptimizationService.optimize(organization: AIOrganization, workflows: list[AIWorkflow]) -> OptimizationResult
  Analyzes: token bottlenecks, parallel execution opportunities, agent consolidation candidates, context window risks
  Rewrites: agent DAGs to minimize inference costs, splits heavy agents, merges redundant ones
- rules.py — Hard-coded optimization rules (no LLM needed): cycle detection, orphan detection, chain-too-long detection
- router.py — POST /api/v1/optimization/optimize
```

---

### P36 — Validation Engine

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Validation Engine in apps/ai-engine/app/validator/.

Requirements:
- models.py — ValidationResult, ValidationError, ValidationWarning, ValidationRule
- service.py — ValidationService.validate(fir: FIR) -> ValidationResult
  Checks: no circular dependencies, all agent refs exist, all tool signatures valid, no orphan workflows,
  workflow steps reference existing agents, memory partitions valid, no duplicate agent IDs
- rules/ — Individual validation rule modules (one rule per file)
- router.py — POST /api/v1/validation/validate

This is a static analysis pass — no LLM calls. Pure algorithmic validation of the FIR structure.
All errors must be actionable: "Agent 'backend-dev-1' references tool 'read_file' which is not defined in ToolSpec."
```

---

### P37 — Compiler Engine (AI)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Compiler Engine in apps/ai-engine/app/compiler/ — the final FIR assembly stage.

Requirements:
- models.py — CompileRequest, CompileResult, FIR (full Pydantic model mirroring @forge/fir Zod schema)
- service.py — CompilerService.compile(request: CompileRequest) -> FIR
  Orchestrates all engines in order:
  1. IntentService.parse()
  2. BusinessService.analyze()
  3. ArchitectureService.design()
  4. OrganizationService.build()
  5. AgentService.createAgents()
  6. WorkflowService.design()
  7. PromptService.generate()
  8. OptimizationService.optimize()
  9. ValidationService.validate()
  10. Assembles final FIR
- router.py — POST /api/v1/compile/

The compiler is the main entry point for the entire AI engine. It must handle partial failures gracefully and return progress events.
```

---

### P38 — Exporter Engine (AI)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Exporter Engine in apps/ai-engine/app/exporter/.

Requirements:
- models.py — ExportRequest, ExportResult, ExportTarget enum, ExportedFile, ExportManifest
- service.py — ExporterService.export(fir: FIR, target: ExportTarget) -> ExportResult
- adapters/claude_code.py — ClaudeCodeAdapter: FIR → CLAUDE.md, agent instruction files, workflow task files
- adapters/langgraph.py — LangGraphAdapter: FIR → Python StateGraph code
- adapters/crewai.py — CrewAIAdapter: FIR → CrewAI Crew + Agent + Task definitions
- router.py — POST /api/v1/export/

Each adapter must be independently testable. Never mix adapter logic. The FIR is the only input — no raw prompts.
```

---

### P39 — Forge Kernel

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the Forge Kernel in apps/ai-engine/kernel/ — the core orchestrator of ForgeAI.

Requirements:
- kernel/compiler/forge_compiler.py — ForgeCompiler class: orchestrates the full compilation pipeline
  compile(input: KernelInput) -> KernelOutput
  Calls: IntentEngine → BusinessEngine → ArchitectureEngine → OrganizationEngine → AgentEngine → WorkflowEngine → PromptEngine → MemoryEngine → OptimizationEngine → ValidationEngine → CompilerEngine → ExporterEngine
- kernel/graph_engine/topological_sort.py — topological_sort(graph), detect_cycle(graph) — pure algorithms
- kernel/scheduler/scheduler.py — TaskScheduler: schedules parallel compilation steps, manages engine queue
- kernel/optimizer/optimizer.py — KernelOptimizer: cross-engine optimization passes
- kernel/validator/validator.py — KernelValidator: final FIR integrity check before export
- kernel/shared/models.py — KernelInput, KernelOutput, KernelEvent, KernelStatus enum

The Kernel is target-agnostic. It must never import from a specific runtime adapter.
```

---

## Phase 5 — Gateway & Runtime

---

### P40 — API Gateway (Hono)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the API Gateway in apps/gateway/ using Hono v4.

Requirements:
- src/index.ts — Hono app with CORS, logger, error handler; serves on PORT env var (default 3003)
- src/routes/compile.ts — proxy route: POST /api/v1/compile → AI Engine
- src/routes/health.ts — GET /health (already exists, extend with dependencies check)
- src/middleware/auth.ts — JWT validation middleware for protected routes
- src/middleware/rate-limit.ts — Rate limiting (100 req/min per IP)
- src/middleware/cors.ts — CORS config (allow studio origin)
- src/types/index.ts — GatewayContext, RouteHandler types

The gateway is a thin proxy — no business logic. All business logic stays in the AI Engine or Studio.
```

---

### P41 — Execution Runtime (Node.js)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the execution runtime in apps/runtime/ — the Node.js runtime that executes compiled FIR organizations.

Requirements:
- src/types/index.ts — RuntimeExecutionId (branded), RuntimeExecution, ExecutionStatus, ExecutionEvent
- src/executor/runtime-executor.ts — RuntimeExecutor class:
  execute(fir: FIR, target: RuntimeTarget): AsyncResult<RuntimeExecution>
  Loads the correct runtime adapter based on target, starts execution, streams events
- src/adapters/claude-code-runtime.ts — ClaudeCodeRuntime: spawns claude CLI with compiled agent files
- src/events/execution-emitter.ts — ExecutionEventEmitter: streams execution progress via EventEmitter
- src/index.ts — exports RuntimeExecutor and all types

No business logic — pure execution. Delegate all compilation to @forge/compiler.
```

---

### P42 — SDK Package

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the @forge/sdk package — the public client SDK for ForgeAI.

Requirements:
- src/types/index.ts — ForgeClientConfig, CompileOptions, ExportOptions, SDKError
- src/client/forge-client.ts — ForgeClient class:
  compile(input: CompileOptions): Promise<FIR>
  export(fir: FIR, target: ExporterTarget, options?: ExportOptions): Promise<ExportResult>
  getStatus(sessionId: string): Promise<CompilationStatus>
- src/client/http-client.ts — BaseHttpClient with retry logic and error handling
- src/errors/sdk-errors.ts — ForgeSDKError, CompilationError, ExportError (typed error classes)
- src/index.ts — public exports only

The SDK is the external API — design it for developer ergonomics. Version it carefully (no breaking changes without major bump).
```

---

## Phase 6 — Infrastructure & DevOps

---

### P43 — Docker & Docker Compose

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Complete the Docker infrastructure in infrastructure/docker/.

Requirements:
- docker-compose.yml — services: postgres (pgvector/pgvector:pg16), redis:7-alpine, ai-engine, studio, gateway
  All services on the same network. Health checks on postgres and redis.
  AI engine waits for postgres + redis to be healthy before starting.
- Dockerfile.ai-engine — multi-stage: builder (installs deps), runner (non-root user, minimal image)
- Dockerfile.studio — multi-stage: deps → builder → runner (standalone Next.js output)
- Dockerfile.gateway — multi-stage: deps → builder → runner
- docker-compose.dev.yml — dev override: mounts source volumes, enables hot reload
- infrastructure/scripts/setup.sh — copies .env.example → .env if not exists, starts infra, runs db:push

No hardcoded secrets in any Dockerfile or compose file — use env_file or environment variables only.
```

---

### P44 — CI/CD Pipeline (GitHub Actions)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Implement the complete CI/CD pipeline in .github/workflows/.

Requirements:
- ci.yml — runs on push to main and all PRs:
  Job 1: typecheck — pnpm typecheck (all TS packages)
  Job 2: lint — pnpm lint (ESLint)
  Job 3: build — pnpm build (all packages)
  Job 4: test — pnpm test (unit tests)
  Job 5: ai-engine-lint — ruff check + mypy (Python)
  All jobs: Node.js 22, pnpm 10, pnpm/action-setup@v4, cache pnpm store
- release.yml — triggered on tags (v*.*.*):
  Builds Docker images, pushes to registry
- pr-check.yml — auto-labels PRs by changed files, checks conventional commit format

No secrets committed. Use GitHub secrets for any credentials.
```

---

### P45 — Database Migrations Strategy

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Set up a proper database migration strategy using Drizzle Kit.

Requirements:
- Configure drizzle.config.ts in packages/database with correct dialect, schema, out, and migrations folder
- Add scripts to packages/database/package.json:
  db:generate — drizzle-kit generate (creates SQL migration files)
  db:migrate — drizzle-kit migrate (runs pending migrations)
  db:push — drizzle-kit push (dev only — pushes schema directly)
  db:studio — drizzle-kit studio (visual DB browser)
  db:drop — drizzle-kit drop (dev only)
- Create the initial migration from current schema
- Document migration workflow in infrastructure/scripts/ (generate → review → migrate)
- Add migration check to CI: verify no uncommitted migrations exist after schema changes

Never run db:push in production — always use db:migrate with reviewed migration files.
```

---

## Phase 7 — UI & Design System

---

### P46 — UI Component Library (@forge/ui)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Build the shared UI component library in packages/ui/.

Requirements:
- src/components/button.tsx — Button with variants: default, destructive, outline, ghost, link; sizes: sm, md, lg
- src/components/input.tsx — Input with label, error, helper text
- src/components/textarea.tsx — Textarea
- src/components/select.tsx — Select with options
- src/components/dialog.tsx — Dialog/Modal (Portal-based)
- src/components/badge.tsx — Badge with variants: default, secondary, destructive, outline
- src/components/card.tsx — Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- src/components/table.tsx — Table, TableHeader, TableBody, TableRow, TableCell
- src/components/skeleton.tsx — Skeleton loading placeholders
- src/components/spinner.tsx — Spinner loading indicator
- src/components/toast.tsx — Toast notification
- src/index.ts — barrel exports all components

All components: named exports, no default exports, TypeScript strict, Tailwind v4 classes only.
No 'use client' at package level — components that need it declare it internally.
```

---

### P47 — Global Layout & Navigation

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Build the global layout and navigation system in apps/studio.

Requirements:
- src/modules/dashboard/ui/views/dashboard-layout.tsx — DashboardLayout (Server Component):
  Sidebar: ForgeAI logo, nav items (Dashboard, Projects, Compiler, Organizations, Workflows, Agents, Prompts, Settings)
  Topbar: breadcrumb, user avatar + dropdown (profile, settings, sign out)
  Content: children slot
- src/modules/dashboard/ui/components/sidebar-nav.tsx — SidebarNav ('use client' — active state detection)
- src/modules/dashboard/ui/components/user-menu.tsx — UserMenu ('use client' — dropdown)
- src/modules/dashboard/ui/components/breadcrumb.tsx — Breadcrumb (Server Component)
- app/(dashboard)/layout.tsx — imports DashboardLayout, passes children

Sidebar must highlight the active route. No magic strings for routes — define route constants in src/config/routes.ts.
```

---

### P48 — Design System & Tailwind Tokens

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Complete the Tailwind v4 design system in apps/studio/src/styles/globals.css.

Requirements:
Tailwind v4 CSS-first approach (no tailwind.config.ts):
- @import "tailwindcss" at the top
- @theme inline {} block with all design tokens:
  Colors: --color-background, --color-foreground, --color-primary, --color-primary-foreground,
          --color-secondary, --color-muted, --color-accent, --color-destructive, --color-border,
          --color-input, --color-ring, --color-card, --color-popover
  Radius: --radius (0.5rem)
  Fonts: --font-sans, --font-mono
- :root {} block — light mode HSL values for all CSS variables
- .dark {} block — dark mode HSL values
- Base styles: *, body with background + foreground
- No tailwind.config.ts. No autoprefixer (Tailwind v4 handles it).
- postcss.config.mjs must use '@tailwindcss/postcss' only.

Dark mode must work via .dark class on <html> (not media query).
```

---

## Phase 8 — Quality & Testing

---

### P49 — Unit Tests Setup

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Set up the unit testing infrastructure across the monorepo.

Requirements:
- Choose Vitest (not Jest) — compatible with ESM, fast, Turborepo-friendly
- Configure vitest.config.ts in each testable package:
  packages/fir, packages/compiler, packages/graph, packages/shared, packages/workflow
- Add test scripts to each package.json: "test": "vitest run", "test:watch": "vitest"
- Root turbo.json: add "test" task to pipeline
- Write first tests:
  packages/fir/src/validators/fir-validator.test.ts — validateFIR with valid + invalid inputs
  packages/graph/src/algorithms/topological-sort.test.ts — sort, cycle detection, edge cases
  packages/shared/src/utils/index.test.ts — createResult, chunk, generateId

No mocking of internal modules. Unit tests must test real behavior.
```

---

### P50 — Integration Tests (Database)

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Set up integration tests for database layer in packages/database.

Requirements:
- Use a real PostgreSQL test database (Docker or Neon test branch — no mocks)
- Configure test setup: create test DB, run migrations, seed fixtures, teardown after
- packages/database/src/tests/organization-repository.test.ts:
  Tests: create org, find by id, find by project, delete
- packages/database/src/tests/workflow-repository.test.ts:
  Tests: create workflow, add steps, update status, query by project
- Add DATABASE_TEST_URL to .env.example
- Integration tests run in isolation — each test file resets its own tables

Never mock the database in integration tests. Real DB behavior must be verified.
```

---

### P51 — E2E Tests Setup

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Set up E2E tests for apps/studio using Playwright.

Requirements:
- Install @playwright/test in apps/studio devDependencies
- playwright.config.ts — baseURL: http://localhost:3001, browsers: chromium only (CI speed)
- tests/e2e/auth.spec.ts — sign in flow, redirect to dashboard
- tests/e2e/projects.spec.ts — create project, view project, delete project
- tests/e2e/compiler.spec.ts — enter project description, run compiler, see FIR output
- Add "test:e2e": "playwright test" script to apps/studio/package.json
- Add e2e job to .github/workflows/ci.yml (runs after build job)

E2E tests run against a real running studio instance with a test database.
No stubbing of the AI engine in E2E — use a test mode that returns fixture FIR data.
```

---

### P52 — TypeScript Strict Audit

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Perform a full TypeScript strict mode audit across the entire monorepo.

Requirements:
- Run pnpm typecheck and fix every error across all packages and apps
- Search for any remaining 'any' usage: grep -r ": any" --include="*.ts" --include="*.tsx"
  Replace each with proper typed alternatives (unknown + type guard, or explicit type)
- Search for default exports: grep -r "export default" --include="*.ts" --include="*.tsx"
  Convert all to named exports (update all import sites)
- Verify tsconfig.base.json is extended correctly by every package
- Verify all packages have "noUncheckedIndexedAccess": true behavior respected
  (array[index] accesses must be guarded)
- Check all branded types are used consistently (OrganizationId never mixed with TeamId)

Report all issues found before fixing. Fix in priority order: errors → warnings → style.
```

---

## Phase 9 — Docs & Polish

---

### P53 — Documentation Site

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Build the documentation site in apps/docs/ using Next.js 16.

Requirements:
- app/layout.tsx — docs layout with sidebar nav and topbar
- app/page.tsx — introduction page (redirect to /docs/getting-started)
- app/docs/getting-started/page.tsx — installation and first compile
- app/docs/fir/page.tsx — FIR schema reference
- app/docs/compiler/page.tsx — compilation pipeline explanation
- app/docs/engines/page.tsx — 12 AI engines reference
- app/docs/runtimes/page.tsx — supported export targets
- app/docs/api/page.tsx — SDK API reference
- src/components/docs-sidebar.tsx — navigation tree
- src/components/code-block.tsx — syntax-highlighted code blocks

All pages are Server Components. MDX optional — plain TSX is fine for v1.
```

---

### P54 — API Reference Docs

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Generate and publish the API reference documentation for the ForgeAI REST API and SDK.

Requirements:
- Enable FastAPI's built-in OpenAPI docs at /docs (Swagger UI) and /redoc in apps/ai-engine
- Add OpenAPI metadata to app/core/app.py: title, version, description, contact
- Add response models and example values to all FastAPI endpoints
- For the tRPC API: create apps/docs/app/docs/trpc/page.tsx documenting all procedures with input/output types
- For the @forge/sdk: create apps/docs/app/docs/sdk/page.tsx with usage examples:
  const client = new ForgeClient({ url: '...' });
  const fir = await client.compile({ description: '...' });
  const result = await client.export(fir, 'claude_code');

Keep docs in sync with code — they are generated from types, not written manually.
```

---

### P55 — Full Project Audit & Refactor

```
Read the @AGENT.md and follow it strictly — after that, apply the main logic and instructions for the current task. We will plan everything before writing code.

Task: Perform a full audit of the entire ForgeAI codebase against AGENT.md standards.

Checklist:
1. No 'any' types anywhere (search + fix all)
2. No default exports (search + convert all)
3. No magic strings or numbers (extract to constants)
4. No comments in code (remove all inline comments)
5. No circular dependencies (run madge or dpdm analysis)
6. No secrets in frontend bundle (audit all config files)
7. No telemetry or tracking (audit all dependencies)
8. App Router used only for routing — no business logic in app/ directory
9. All pages import from feature modules only
10. All components that need 'use client' are leaf nodes only
11. All tRPC procedures have input validation (Zod schemas)
12. All repository functions return typed results (never raw DB types to service layer)
13. All FIR operations validate through @forge/fir before processing
14. All environment variables accessed through config objects (not scattered process.env)
15. All packages have correct tsconfig.json extending tsconfig.base.json

Fix issues in the order listed. Report what was found before starting fixes.
```

---

## Quick Reference

| Prompt | Module | Priority |
|---|---|---|
| P01 | Database Schema | Critical — do first |
| P05 | FIR Package | Critical — all others depend on it |
| P06 | Compiler Package | Critical — core product |
| P19 | Compiler Module (Studio) | High — main UX |
| P37 | Compiler Engine (AI) | High — main AI pipeline |
| P39 | Forge Kernel | High — orchestrates all AI engines |
| P21 | Graph Visualization | High — key differentiator |
| P14 | Dashboard Module | Medium — entry point |
| P15–P18 | Feature Modules | Medium — core CRUD |
| P27–P38 | AI Engines 1–12 | Medium — build incrementally |
| P49–P52 | Testing | Medium — build alongside features |
| P53–P55 | Docs & Audit | Low — polish phase |

---

> **Remember:** Every session starts with reading @AGENT.md. The spec is the law.
