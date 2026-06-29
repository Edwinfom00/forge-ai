from pydantic import BaseModel, Field
from enum import Enum
from typing import Any


class RuntimeTarget(str, Enum):
    CLAUDE_CODE = "claude-code"
    CODEX = "codex"
    OPENAI_AGENTS_SDK = "openai-agents-sdk"
    LANGGRAPH = "langgraph"
    CREWAI = "crewai"
    FLOWISE = "flowise"
    N8N = "n8n"


class FIRTool(BaseModel):
    id: str
    name: str
    description: str
    parameters: dict[str, Any]
    credential_ref: str | None = None
    output_format: str


class FIRAgent(BaseModel):
    id: str
    name: str
    role: str
    persona: str
    system_prompt: str
    tools: list[FIRTool] = Field(default_factory=list)
    memory_partitions: list[str] = Field(default_factory=list)
    capabilities: list[str] = Field(default_factory=list)
    max_tokens: int | None = None
    temperature_override: float | None = None


class FIRTeam(BaseModel):
    id: str
    name: str
    role: str
    agents: list[FIRAgent] = Field(default_factory=list)
    lead_agent_id: str | None = None


class FIRDepartment(BaseModel):
    id: str
    name: str
    teams: list[FIRTeam] = Field(default_factory=list)
    authorization_key: str


class FIROrgSpec(BaseModel):
    departments: list[FIRDepartment] = Field(default_factory=list)
    communication_dag: dict[str, list[str]] = Field(default_factory=dict)


class FIRWorkflowStep(BaseModel):
    id: str
    name: str
    agent_id: str
    tool_ids: list[str] = Field(default_factory=list)
    depends_on: list[str] = Field(default_factory=list)
    preconditions: list[str] = Field(default_factory=list)
    parallel: bool = False


class FIRWorkflowSpec(BaseModel):
    id: str
    name: str
    steps: list[FIRWorkflowStep] = Field(default_factory=list)
    entry_step_id: str = ""
    exit_step_ids: list[str] = Field(default_factory=list)
    transition_rules: dict[str, str] = Field(default_factory=dict)


class FIRDomainSpec(BaseModel):
    entities: list[dict[str, Any]] = Field(default_factory=list)
    relations: list[dict[str, str]] = Field(default_factory=list)
    modules: list[str] = Field(default_factory=list)
    datastores: list[str] = Field(default_factory=list)


class FIRMemoryPartition(BaseModel):
    id: str
    name: str
    type: str
    vector_space: str | None = None
    retrieval_key: str


class FIRMemorySpec(BaseModel):
    partitions: list[FIRMemoryPartition] = Field(default_factory=list)


class FIR(BaseModel):
    version: str
    id: str
    project_id: str
    name: str
    description: str
    runtime_target: RuntimeTarget
    org_spec: FIROrgSpec
    domain_spec: FIRDomainSpec
    workflow_spec: FIRWorkflowSpec
    memory_spec: FIRMemorySpec
    compiled_at: str
    checksum: str
