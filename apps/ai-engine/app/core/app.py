from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.compiler.router import router as compiler_router
from app.organization.router import router as organization_router
from app.workflow.router import router as workflow_router
from app.exporter.router import router as exporter_router


def create_app() -> FastAPI:
    app = FastAPI(
        title="ForgeAI Engine",
        description="The 12-engine AI compilation pipeline for ForgeAI",
        version="0.0.1",
        docs_url="/docs",
        redoc_url="/redoc",
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(compiler_router, prefix="/api/v1/compile", tags=["compiler"])
    app.include_router(organization_router, prefix="/api/v1/organization", tags=["organization"])
    app.include_router(workflow_router, prefix="/api/v1/workflow", tags=["workflow"])
    app.include_router(exporter_router, prefix="/api/v1/export", tags=["exporter"])

    @app.get("/health")
    async def health() -> dict[str, str]:
        return {"status": "ok", "service": "forge-ai-engine"}

    return app
