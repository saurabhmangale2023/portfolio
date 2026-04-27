from dataclasses import dataclass


@dataclass
class ScoreBundle:
    relevance: float
    completeness: float
    clarity: float


def score_response(question: str, transcript: str) -> ScoreBundle:
    token_bonus = min(len(transcript.split()) / 20, 1)
    return ScoreBundle(
        relevance=60 + token_bonus * 30,
        completeness=55 + token_bonus * 25,
        clarity=65 + token_bonus * 20,
    )
