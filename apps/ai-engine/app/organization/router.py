from fastapi import APIRouter
from app.organization.models import GenerateOrganizationRequest, GenerateOrganizationResponse
from app.shared.models import FIROrgSpec

router = APIRouter()


@router.post("/generate", response_model=GenerateOrganizationResponse)
async def generate_organization(request: GenerateOrganizationRequest) -> GenerateOrganizationResponse:
    return GenerateOrganizationResponse(org_spec=FIROrgSpec())
