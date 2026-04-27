# AI SkillFit Platform - Product Requirements Document

## Vision
Natural interaction -> reliable assessment -> trustable verification -> scalable fitment.

## Problem
Karnataka workforce screening remains fragmented, manual, and text-heavy. The platform must support low literacy, multilingual reality, and trustworthy human review at district scale.

## Users
- Candidates (blue-collar, semi-skilled, polytechnic)
- Reviewers / district officers
- Admin and workforce coordinators

## MVP scope
1. Candidate onboarding + language selection (Kannada-first)
2. Guided interview (5-7 questions)
3. Media capture and quality checks
4. Transcript + scoring
5. Integrity signals and fraud-risk flags
6. Fitment category and recommendation
7. Admin queue + reviewer decisions

## Core modules
- Interview orchestrator
- Speech-to-text service
- Scoring engine
- Integrity engine
- Classification engine
- Dashboard + analytics

## Fitment categories
- Job-ready
- Requires training / upskilling
- Requires manual verification
- Low-confidence / poor-quality
- Suspected duplicate / fraud

## Weighted scoring model
- Response relevance: 25%
- Completeness: 15%
- Communication clarity: 15%
- Skill confidence indicators: 15%
- Consistency: 10%
- Video/audio quality: 10%
- Authenticity trust score: 10%

## Kannada-first design principles
- Default interview language: Kannada
- Prompt bank in Kannada/Hindi/English
- Low-confidence transcript fallback (reprompt/replay/manual review)
- Reviewer access to original media + translated summary

## Operational KPIs
- Interview completion rate
- Retry rate
- ASR confidence by language
- Classification confidence distribution
- Reviewer override rate
- Fraud-flag precision
- Review turnaround time

## Governance
- Explicit consent
- Role-based access
- Secure media storage
- Audit trail on reviewer actions
- Human-in-the-loop for adverse decisions
