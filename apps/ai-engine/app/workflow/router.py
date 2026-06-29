import uuid
from fastapi import APIRouter
from app.workflow.models import GenerateWorkflowRequest, GenerateWorkflowResponse
from app.shared.models import FIRWorkflowSpec

router = APIRouter()


@router.post("/generate", response_model=GenerateWorkflowResponse)
async def generate_workflow(request: GenerateWorkflowRequest) -> GenerateWorkflowResponse:
    return GenerateWorkflowResponse(
        workflow_spec=FIRWorkflowSpec(id=str(uuid.uuid4()), name="main")
    )
