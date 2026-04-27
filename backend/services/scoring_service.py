from typing import Dict


def compute_mock_scores(transcript: str) -> Dict[str, float]:
    length_factor = min(len(transcript) / 250, 1)
    relevance = round(55 + (30 * length_factor), 2)
    completeness = round(50 + (25 * length_factor), 2)
    clarity = round(60 + (20 * length_factor), 2)
    integrity = 88.0
    overall = round((0.25 * relevance) + (0.15 * completeness) + (0.15 * clarity) + (0.1 * integrity) + 35, 2)

    if overall >= 80:
      fitment = 'Job-ready'
    elif overall >= 60:
      fitment = 'Requires training / upskilling'
    else:
      fitment = 'Requires manual verification'

    return {
        'relevance_score': relevance,
        'completeness_score': completeness,
        'communication_score': clarity,
        'integrity_trust_score': integrity,
        'overall_score': min(overall, 100),
        'fitment_category': fitment,
    }
