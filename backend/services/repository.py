from typing import Any, Dict, List

# Replace with SQLAlchemy repository in production.
_STORE: Dict[str, Dict[str, Any]] = {
    'candidates': {},
    'sessions': {},
    'reviews': {},
}


def save_candidate(candidate_id: str, payload: Dict[str, Any]) -> None:
    _STORE['candidates'][candidate_id] = payload


def save_session(session_id: str, payload: Dict[str, Any]) -> None:
    _STORE['sessions'][session_id] = payload


def list_sessions() -> List[Dict[str, Any]]:
    return list(_STORE['sessions'].values())


def get_session(session_id: str) -> Dict[str, Any] | None:
    return _STORE['sessions'].get(session_id)


def save_review(session_id: str, payload: Dict[str, Any]) -> None:
    _STORE['reviews'][session_id] = payload
