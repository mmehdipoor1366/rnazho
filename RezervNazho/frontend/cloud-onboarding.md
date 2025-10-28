# Cloud Onboarding — Vercel (RezervNazho Frontend)

This guide explains how to connect the `RezervNazho/frontend` project to Vercel, configure environment variables and secrets, and enable preview deployments and automatic production deployments.

## 1. Create a Vercel project
1. Sign in to https://vercel.com with your GitHub account.
2. Click "New Project" → "Import Git Repository" → select `mmehdipoor1366/rnazho`.
3. Set the Project Root to `RezervNazho/frontend` (important) and framework to Next.js.
4. Continue and create the project.

## 2. Environment Variables
In the Vercel project settings, add environment variables for each environment (Preview and Production):

- `NEXT_PUBLIC_API_BASE_URL` — the base URL used by the frontend to call APIs. For local dev use `http://localhost:3000` or leave blank and rely on relative paths.
- `NEXT_PUBLIC_APP_NAME` — RezervNazho

Add these values for Preview and Production environments accordingly.

## 3. Generate a Vercel token (for CI)
1. Go to https://vercel.com/account/tokens
2. Create a new token named `ci-deploy-token` (or similar)
3. Save the token value — you'll add it to GitHub.

## 4. Add GitHub repository secrets
In the GitHub repository settings → Secrets → Actions, add the following:

- `VERCEL_TOKEN` — the token created above
- `VERCEL_ORG_ID` — Vercel Organization ID (from project settings)
- `VERCEL_PROJECT_ID` — Vercel Project ID (from project settings)

These are used by the GitHub Actions workflow to trigger Vercel deployments.

## 5. Domain and DNS (optional)
If you want `rezervnazho.yourdomain`:
1. Add a Domain in Vercel project settings.
2. Add the DNS records provided by Vercel to your registrar.
3. Wait for verification and TLS provisioning (automatic).

## 6. Preview Deployments
Preview deployments are automatically created on Pull Requests. Ensure the GitHub Actions workflow has access to the `VERCEL_TOKEN` secret.

## 7. Rollbacks & logs
- Use the Vercel dashboard to view deployments, logs and to rollback to previous deployments if needed.

## 8. Tips
- Use environment-specific feature flags in env vars (eg. `FEATURE_CALENDAR=on`) rather than committing config to source.
- Keep secrets in GitHub or Vercel — never commit them to Git.
