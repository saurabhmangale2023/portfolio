def integrity_report(face_presence: float, voice_consistency: float) -> dict:
    risk = 1 - ((face_presence + voice_consistency) / 2)
    flags = []
    if face_presence < 0.5:
        flags.append('low_face_visibility')
    if voice_consistency < 0.5:
        flags.append('voice_mismatch_risk')
    return {
        'fraud_risk': round(risk, 2),
        'flags': flags,
        'review_required': risk > 0.4,
    }
