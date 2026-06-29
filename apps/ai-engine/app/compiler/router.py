from fastapi import APIRouter
from app.compiler.models import CompileRequest, CompileResponse
from app.compiler.service import compiler_service

router = APIRouter()


@router.post("/", response_model=CompileResponse)
async def compile_idea(request: CompileRequest) -> CompileResponse:
    return await compiler_service.compile(request)
