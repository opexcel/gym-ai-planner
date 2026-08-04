# Changelog

All notable changes to this project will be documented in this file.

---

## v1.0.1 — 2026-08-04

### Added
- AI workout plan generation using OpenRouter.
- User onboarding questionnaire.
- User profile creation and storage.
- Workout plan storage in PostgreSQL.
- Workout plan retrieval and display.

### Infrastructure
- Deployed frontend to https://emiratrend.com
- Deployed backend to https://api.emiratrend.com
- Connected Neon PostgreSQL database.
- Connected Neon Authentication.
- Connected OpenRouter API.
- Applied Prisma migrations to production.
- Configured production environment variables.

### Security
- Rotated OpenRouter API key.
- Rotated production database credentials.

### Fixed
- Fixed backend deployment configuration.
- Fixed Prisma migration issues.
- Fixed CORS configuration.
- Fixed production routing.
- Fixed plan generation flow.
- Fixed plan retrieval after generation.

---

## v1.0 — 2026-08-03

### Initial Production Release

- First successful production deployment.
- Authentication working.
- Database connected.
- AI workout generation working.
