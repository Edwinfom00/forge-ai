from dataclasses import dataclass
from app.shared.models import FIR, RuntimeTarget
from app.compiler.service import compiler_service
from app.compiler.models import CompileRequest


@dataclass
class CompilerInput:
    idea: str
    project_id: str
    runtime_target: RuntimeTarget


class ForgeCompiler:
    async def compile(self, input: CompilerInput) -> FIR:
        request = CompileRequest(
            project_id=input.project_id,
            idea=input.idea,
            runtime_target=input.runtime_target,
        )
        response = await compiler_service.compile(request)
        return response.fir
