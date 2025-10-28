# RezervNazho Frontend

[![CI](https://github.com/mmehdipoor1366/rnazho/actions/workflows/deploy.yml/badge.svg)](https://github.com/mmehdipoor1366/rnazho/actions/workflows/deploy.yml)
[![Vercel](https://img.shields.io/badge/deploy-vercel-blue)](https://vercel.com)

This repository contains the RezervNazho Next.js frontend scaffold.

How to deploy to Vercel

1. Create a Vercel project and link your GitHub repository (mmehdipoor1366/rnazho).
2. Add these Environment Variables in the Vercel dashboard (Project Settings → Environment Variables):
   - NEXT_PUBLIC_API_BASE_URL (e.g., https://rezervnazho.vercel.app)
   - NEXT_PUBLIC_APP_NAME

CI/CD notes

- The workflow `.github/workflows/deploy.yml` will build the site and deploy to Vercel when pushing to `main`.
- Preview deployments are created automatically for pull requests.

Local development

# RezervNazho — Frontend

نسخهٔ README به زبان انگلیسی با نکات فارسی برای توسعه‌دهندگان ایرانی.

[![CI](https://github.com/mmehdipoor1366/rnazho/actions/workflows/deploy.yml/badge.svg)](https://github.com/mmehdipoor1366/rnazho/actions/workflows/deploy.yml)

A Next.js 15 (App Router) frontend scaffold for RezervNazho — a Persian appointment and booking platform.

## Quick links
- Docs: `docs/`
- Cloud onboarding: `cloud-onboarding.md`
- Contributing rules: `docs/contributing.md`

---

## Prerequisites
- Node.js 20+
- pnpm (recommended)
- Git
- A Vercel account (for production)

## Local setup
1. Clone repository and go to the frontend folder:

```powershell
git clone https://github.com/mmehdipoor1366/rnazho.git
cd rnazho\\RezervNazho\\frontend
```

2. Install dependencies and run dev server:

```powershell
corepack enable
corepack prepare pnpm@latest --activate
pnpm install
pnpm dev
```

The app will be available at http://localhost:3000 by default.

## Environment variables
Create a `.env.local` in `RezervNazho/frontend` with these variables (see `.env.example`):

```
NEXT_PUBLIC_API_BASE_URL=
NEXT_PUBLIC_APP_NAME=RezervNazho
```

Do NOT commit `.env.local` — use Vercel/GitHub secrets for production.

## Building for production

```powershell
pnpm build
pnpm start
```

## CI / CD
We provide a GitHub Actions workflow at `.github/workflows/deploy.yml` which builds the project and triggers a Vercel deployment.

For Vercel integration please follow `cloud-onboarding.md`.

## Project structure
See `docs/structure.md` for a full layout and explanations of key folders/files.

## Roadmap
See `docs/roadmap.md` for short-term and mid-term milestones.

## Screenshots
Screenshots and UI mock images are in `docs/screenshots/` (placeholders added). Replace them with real images when available.

## Contributing
Please follow our contribution guidelines in `docs/contributing.md`. Use conventional commits and create a branch per feature.

## Contact
If you need help, open an issue or contact the maintainers via repository discussions.
