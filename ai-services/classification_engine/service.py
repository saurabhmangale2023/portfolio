def classify_fitment(overall_score: float, fraud_risk: float) -> str:
    if fraud_risk > 0.7:
        return 'Suspected duplicate / fraud'
    if overall_score >= 80:
        return 'Job-ready'
    if overall_score >= 60:
        return 'Requires training / upskilling'
    return 'Requires manual verification'
