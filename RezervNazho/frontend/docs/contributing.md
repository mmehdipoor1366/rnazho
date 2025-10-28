# مشارکت و قوانین کد — RezervNazho Frontend

از علاقه‌مندی شما برای کمک و مشارکت در پروژه خوشحالم. لطفاً قبل از ارسال Pull Request موارد زیر را مطالعه کنید.

قوانین اصلی
- Fork & PR: برای تغییرات بزرگ ابتدا یک issue باز کنید، سپس شاخهٔ feature از `main` ایجاد کنید و PR بفرستید.
- نام‌گذاری شاخه: از قالب `feat/<short>`, `fix/<short>`, `chore/<short>`, `doc/<short>` استفاده کنید.
- پیام کمیت (commit): از Conventional Commits پیروی شود، مثلا:
  - `feat(ui): add landing hero`
  - `fix(api): correct appointments endpoint`
  - `docs: update README`

فرمت کد
- از ESLint و Prettier استفاده کنید. قبل از ارسال PR `pnpm lint` را اجرا کنید و خطاها را رفع کنید.

آزمایش و بررسی
- هر PR باید حداقل یک توصیف و اسکرین‌شات (یا GIF کوتاه) برای تغییرات UI داشته باشد.
- PRها بعد از ایجاد، توسط تیم مورد بازبینی قرار می‌گیرند؛ لطفا پاسخ بازخوردها را در همان شاخه اعمال کنید.

ممنوعیت‌ها
- از کامیت کردن توکن‌ها یا secrets در سورس خودداری کنید.

ارتباط
- اگر سوالی داشتید، یک issue باز کنید یا در PR از @mentions استفاده کنید.
# Contributing to RezervNazho Frontend

Thanks for wanting to contribute! Follow these guidelines to make your PRs smooth and reviewable.

## Branching
- Use feature branches: `dev/<area>/<short-desc>` or `feature/<short-desc>`.
- Small, focused PRs are preferred.

## Commit messages
Follow Conventional Commits: `<type>(scope?): subject`

Examples:
- `feat(ui): add hero section`
- `fix(api): handle missing id in appointments`
- `chore: update deps`

Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`.

## Pull Request
- Title should summarize the change (use Conventional Commit format if possible).
- Provide a description, screenshots (if UI changes), and testing steps.
- Link related issues (if any).
- Assign reviewers and add labels as appropriate.

## Code style
- TypeScript + React 18 (use functional components with hooks)
- Tailwind CSS for styling; try to use utility classes and small components.
- Keep components small and reusable under `/src/components`.

## Tests
- Add unit tests for logic where applicable.
- For UI, add small snapshot or component tests if possible.

## Review checklist (for reviewers)
- Does it build? (pnpm build)
- Are there any console warnings or errors?
- Is the UI responsive and RTL-friendly where applicable?
- Are new env vars documented in `.env.example` and `cloud-onboarding.md`?

## Other
- Be helpful and kind in reviews.
- When in doubt, open an issue to discuss before implementing a large change.
