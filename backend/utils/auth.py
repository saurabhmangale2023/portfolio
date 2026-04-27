from typing import Literal


def derive_role_from_claims(claims: dict) -> Literal['candidate', 'reviewer', 'admin']:
    return claims.get('role', 'candidate')
