import uuid
from datetime import datetime, timezone
from app.compiler.models import CompileRequest, CompileResponse
from app.shared.models import (
    FIR, FIROrgSpec, FIRDomainSpec, FIRWorkflowSpec, FIRMemorySpec
)


class CompilerService:
    async def compile(self, request: CompileRequest) -> CompileResponse:
        fir_id = str(uuid.uuid4())
        compiled_at = datetime.now(timezone.utc).isoformat()

        fir = FIR(
            version="1.0.0",
            id=fir_id,
            project_id=request.project_id,
            name=f"org-{request.project_id[:8]}",
            description=request.idea,
            runtime_target=request.runtime_target,
            org_spec=FIROrgSpec(),
            domain_spec=FIRDomainSpec(),
            workflow_spec=FIRWorkflowSpec(
                id=str(uuid.uuid4()),
                name="main",
            ),
            memory_spec=FIRMemorySpec(),
            compiled_at=compiled_at,
            checksum="",
        )

        return CompileResponse(
            fir=fir,
            compiled_at=compiled_at,
            stages_elapsed_ms={
                "intent-parsing": 0,
                "semantic-analysis": 0,
                "optimization": 0,
                "fir-emission": 0,
            },
        )


compiler_service = CompilerService()
