from celery import Celery
from backend.config.settings import settings

celery_app = Celery('skillfit', broker=settings.REDIS_URL, backend=settings.REDIS_URL)


@celery_app.task(name='process_interview_session')
def process_interview_session(session_id: str):
    # Placeholder for async orchestration: STT, scoring, integrity, classification.
    return {'session_id': session_id, 'status': 'processed'}
