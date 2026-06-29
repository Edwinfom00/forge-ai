from pydantic import BaseModel
from app.shared.models import FIROrgSpec


class GenerateOrganizationRequest(BaseModel):
    project_id: str
    fir_id: str
    domains: list[str]
    complexity: str


class GenerateOrganizationResponse(BaseModel):
    org_spec: FIROrgSpec
