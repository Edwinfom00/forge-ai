from pydantic import BaseModel, Field
from app.shared.models import FIR, RuntimeTarget


class CompileRequest(BaseModel):
    project_id: str
    idea: str = Field(min_length=20, max_length=10000)
    runtime_target: RuntimeTarget


class CompileResponse(BaseModel):
    fir: FIR
    compiled_at: str
    stages_elapsed_ms: dict[str, int]
