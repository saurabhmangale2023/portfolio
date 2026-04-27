from dataclasses import dataclass


@dataclass
class TranscriptResult:
    transcript: str
    confidence: float


def transcribe_audio(file_uri: str, language: str) -> TranscriptResult:
    # Replace with Whisper/Indic ASR integration.
    return TranscriptResult(transcript=f'Mock transcript for {file_uri} in {language}', confidence=0.86)
