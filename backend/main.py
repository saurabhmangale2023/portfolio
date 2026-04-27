from fastapi import FastAPI
from backend.api.routes import router

app = FastAPI(title="AI SkillFit Platform API", version="0.1.0")
app.include_router(router)


@app.get('/health')
def health_check():
    return {"status": "ok"}
