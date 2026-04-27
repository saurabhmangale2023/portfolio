# AI SkillFit Platform

**Tagline:** Intelligent Video-Based Workforce Fitment System for Bharat.

AI SkillFit is a production-oriented, multilingual AI screening platform for blue-collar, semi-skilled, and polytechnic candidates. It provides a mobile-first candidate interview flow and a government-grade reviewer dashboard with explainable scoring, integrity flags, and actionable fitment decisions.

## Why this exists

Manual screening at district scale is slow, inconsistent, and often exclusionary for low-literacy candidates. AI SkillFit introduces a Kannada-first, voice-led workflow and human-in-the-loop review to improve reliability, inclusivity, and operational speed.

## Tech Stack

- **Frontend:** Next.js (App Router), TypeScript, Tailwind CSS, Zustand
- **Backend:** FastAPI, Pydantic, Celery workers
- **Database:** PostgreSQL (configured via env)
- **Auth:** Firebase Authentication (Google Sign-In foundation)
- **Queue:** Redis + Celery
- **Storage:** AWS S3 / MinIO (config ready)
- **AI Services:** Modular Python services for STT, scoring, classification, integrity

## Monorepo Structure

```txt
.
├── src/
│   ├── app/
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── services/
│   ├── store/
│   ├── styles/
│   └── config/
├── backend/
│   ├── api/
│   ├── config/
│   ├── models/
│   ├── schemas/
│   ├── services/
│   ├── workers/
│   └── utils/
├── ai-services/
│   ├── speech_to_text/
│   ├── scoring_engine/
│   ├── classification_engine/
│   └── integrity_engine/
└── docs/
```

## Implemented MVP capabilities

- Dark mode by default with persistent toggle via `localStorage`
- Firebase Google Sign-In flow scaffold and JWT token capture
- Candidate interview page with multilingual selection (Kannada, Hindi, English)
- API retry logic and loading/skeleton states
- Admin dashboard with analytics cards + candidate queue
- FastAPI REST routes for candidate/interview/admin workflows
- Mock scoring and fitment classification logic
- Celery worker scaffold for async processing

## API Endpoints

- `POST /candidate/register`
- `POST /interview/start`
- `POST /interview/response`
- `POST /interview/complete`
- `GET /admin/candidates`
- `GET /admin/candidate/{session_id}`
- `POST /admin/review`

## Configuration

### Frontend (`src/config/index.ts`)

- `API_BASE_URL`
- `FIREBASE_CONFIG`
- `ROUTES`
- `FEATURE_FLAGS`

### Backend (`backend/config/settings.py`)

- `DB_URL`
- `REDIS_URL`
- `SECRET_KEY`, `JWT_ALGORITHM`
- `S3_ENDPOINT`, `S3_ACCESS_KEY`, `S3_SECRET_KEY`, `S3_BUCKET`, `S3_REGION`
- `FIREBASE_PROJECT_ID`

## Local Setup

### 1) Environment

Copy and edit env values:

```bash
cp .env.example .env
```

### 2) Frontend

```bash
npm install
npm run dev
```

### 3) Backend

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
uvicorn backend.main:app --reload --port 8000
```

### 4) Worker

```bash
celery -A backend.workers.tasks.celery_app worker --loglevel=info
```

## Sample candidate output

```json
{
  "candidate_id": "CAND_1024",
  "language": "kannada",
  "overall_score": 74,
  "fitment_category": "Requires training / upskilling",
  "workforce_segment": "Polytechnic-skilled roles",
  "confidence_band": "medium",
  "integrity_flags": [],
  "recommended_action": "refer_to_training"
}
```

## Roadmap

- Trade-specific competency templates and rubrics
- Offline-first media upload queue
- Evidence-backed explainability cards in dashboard
- District-level KPI dashboards and export packs
- Pilot integrations with training and placement systems
