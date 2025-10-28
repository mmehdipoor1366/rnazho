# Project Structure — RezervNazho Frontend

Top-level (inside `RezervNazho/frontend`):

- `package.json` — project metadata and scripts.
- `pnpm-lock.yaml` — lockfile for pnpm.
- `next.config.ts` — Next.js configuration.
- `postcss.config.mjs` — PostCSS for Tailwind.
- `tailwind.config.ts` — Tailwind configuration (RTL + dark mode).
- `.github/workflows/` — CI workflows (build + deploy).
- `vercel.json` — Vercel configuration and image rules.
- `.env.example` — example environment variables.
- `src/` — application source code.

Inside `src/`:

- `app/` — Next.js App Router pages and layouts.
  - `(public)/home` — landing page.
  - `(auth)/login` and `(auth)/register` — authentication pages.
  - `user/`, `partner/`, `support/` — panel pages.
  - `api/` — server API routes for mock data (development).
  - `layout.tsx`, `globals.css` — root layout and styles.

- `components/` — shared UI components.
  - `ui/` — small primitives (Button, Card, etc.).
  - `dashboard/` — dashboard-specific layout components.

- `lib/` — small utilities and the `api.ts` client wrapper.

- `docs/` — documentation files (structure, contributing, screenshots).

Notes
- The project uses RTL and Persian text by default; design tokens and Tailwind are configured in `tailwind.config.ts`.
- Mock APIs are provided under `src/app/api` to simulate backend responses during development.
