from datetime import datetime
from typing import Literal, Optional
from pydantic import BaseModel


class Candidate(BaseModel):
    candidate_id: str
    full_name: str
    phone_number: str
    district: str
    preferred_language: Literal['kannada', 'hindi', 'english']
    trade_category: str
    education_level: Optional[str] = None
    created_at: datetime


class InterviewSession(BaseModel):
    session_id: str
    candidate_id: str
    language: str
    started_at: datetime
    completed_at: Optional[datetime] = None
    status: str
    device_metadata: dict
    network_quality: Optional[str] = None
