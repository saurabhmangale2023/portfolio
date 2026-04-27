from datetime import datetime
from uuid import uuid4
from fastapi import APIRouter, HTTPException

from backend.schemas.interview import (
    CandidateRegisterRequest,
    InterviewCompleteRequest,
    InterviewStartRequest,
    ResponseItemRequest,
    ReviewActionRequest,
)
from backend.services.repository import get_session, list_sessions, save_candidate, save_review, save_session
from backend.services.scoring_service import compute_mock_scores

router = APIRouter()


@router.post('/candidate/register')
def register_candidate(request: CandidateRegisterRequest):
    candidate_id = f'CAND_{uuid4().hex[:8]}'
    save_candidate(candidate_id, {**request.model_dump(), 'candidate_id': candidate_id, 'created_at': datetime.utcnow().isoformat()})
    return {'candidate_id': candidate_id}


@router.post('/interview/start')
def start_interview(request: InterviewStartRequest):
    session_id = f'SESS_{uuid4().hex[:8]}'
    save_session(session_id, {
        'session_id': session_id,
        'candidate_id': request.candidate_id,
        'candidate_name': 'Demo Candidate',
        'district': 'Bengaluru Urban',
        'language': request.language,
        'status': 'in_progress',
        'started_at': datetime.utcnow().isoformat(),
    })
    return {'session_id': session_id}


@router.post('/interview/response')
def submit_response(request: ResponseItemRequest):
    return {'accepted': True, 'session_id': request.session_id, 'question_id': request.question_id}


@router.post('/interview/complete')
def complete_interview(request: InterviewCompleteRequest):
    current = get_session(request.session_id)
    scores = compute_mock_scores(request.transcript)
    payload = {
        'session_id': request.session_id,
        'candidate_name': (current or {}).get('candidate_name', 'Candidate'),
        'district': (current or {}).get('district', 'Unknown District'),
        'language': request.language,
        'status': 'completed',
        'transcript': request.transcript,
        'integrity_flags': [],
        **scores,
        'completed_at': datetime.utcnow().isoformat(),
    }
    save_session(request.session_id, payload)
    return payload


@router.get('/admin/candidates')
def admin_candidates():
    return [session for session in list_sessions() if session.get('status') == 'completed']


@router.get('/admin/candidate/{session_id}')
def admin_candidate_detail(session_id: str):
    session = get_session(session_id)
    if not session:
        raise HTTPException(status_code=404, detail='Candidate session not found')
    return session


@router.post('/admin/review')
def admin_review(request: ReviewActionRequest):
    if not get_session(request.session_id):
        raise HTTPException(status_code=404, detail='Session not found')

    review = {
        'session_id': request.session_id,
        'final_status': request.action,
        'notes': request.notes,
        'timestamp': datetime.utcnow().isoformat(),
    }
    save_review(request.session_id, review)
    return {'ok': True, 'review': review}
