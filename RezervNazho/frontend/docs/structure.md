# ساختار پروژه — RezervNazho Frontend

این فایل توضیح می‌دهد که پوشه‌ها و فایل‌های اصلی پروژه چه نقشی دارند تا مشارکت‌کنندگان جدید سریع‌تر با ساختار آشنا شوند.

ریشهٔ پروژه (RezervNazho/frontend)
- `package.json`, `pnpm-lock.yaml` — وابستگی‌ها و اسکریپت‌ها
- `next.config.ts` — تنظیمات Next.js
- `tailwind.config.ts` — تنظیمات Tailwind (شامل RTL)
- `.github/workflows/` — Workflowهای CI/CD
- `vercel.json` — پیکربندی Vercel

پوشهٔ `src/`
- `app/` — App Router (صفحات، layoutها و route groups)
  - `(public)/home` — صفحهٔ لندینگ
  - `(auth)/login`, `(auth)/register` — صفحات احراز هویت
  - `(dashboard)/` — layout مشترک برای پنل‌ها (user/partner/support)
  - `api/` — APIهای mock برای توسعه محلی
- `components/` — کامپوننت‌های UI قابل استفاده مجدد (Header, Footer, Sidebar, cardها)
- `lib/` — کتابخانه‌های کمکی، wrapperهای API، mock data

فایل‌های مهم
- `src/app/layout.tsx` — ریشهٔ layout که فونت RTL و ThemeProvider را اعمال می‌کند.
- `src/lib/api.ts` — wrapper برای فراخوانی API (استفاده در کامپوننت‌ها)
- `src/lib/mockData.ts` — دادهٔ نمونه برای APIهای mock (در توسعه محلی)

راهنمای افزودن الهام‌بخشها
- کامپوننت‌های UI را در `src/components/` قرار دهید و از سبک‌دهی Tailwind استفاده کنید.
- صفحه‌های جدید را زیر `src/app/` اضافه کنید و در صورت نیاز route group جدید بسازید.
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
