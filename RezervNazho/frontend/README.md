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

```powershell
cd RezervNazho/frontend
pnpm install
pnpm dev
```
