from fastapi import APIRouter
from app.exporter.models import ExportRequest, ExportResponse

router = APIRouter()


@router.post("/", response_model=ExportResponse)
async def export_fir(request: ExportRequest) -> ExportResponse:
    return ExportResponse(
        target=request.target,
        files=[],
        entrypoint="",
    )
