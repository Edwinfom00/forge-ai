from pydantic import BaseModel
from app.shared.models import FIRWorkflowSpec


class GenerateWorkflowRequest(BaseModel):
    project_id: str
    fir_id: str
    org_spec_id: str


class GenerateWorkflowResponse(BaseModel):
    workflow_spec: FIRWorkflowSpec
