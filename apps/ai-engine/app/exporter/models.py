from pydantic import BaseModel
from app.shared.models import FIR, RuntimeTarget


class ExportRequest(BaseModel):
    fir: FIR
    target: RuntimeTarget


class ExportFile(BaseModel):
    path: str
    content: str


class ExportResponse(BaseModel):
    target: RuntimeTarget
    files: list[ExportFile]
    entrypoint: str
