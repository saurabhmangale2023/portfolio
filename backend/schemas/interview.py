from typing import Literal, Optional
from pydantic import BaseModel, Field


class CandidateRegisterRequest(BaseModel):
    full_name: str
    phone_number: str
    district: str
    preferred_language: Literal['kannada', 'hindi', 'english']
    trade_category: str


class InterviewStartRequest(BaseModel):
    candidate_id: str
    language: Literal['kannada', 'hindi', 'english']


class ResponseItemRequest(BaseModel):
    session_id: str
    question_id: str
    transcript: str
    transcript_confidence: float = Field(ge=0, le=1)


class InterviewCompleteRequest(BaseModel):
    session_id: str
    language: str
    transcript: str


class ReviewActionRequest(BaseModel):
    session_id: str
    action: Literal['shortlist', 'reject', 'training']
    notes: Optional[str] = None
