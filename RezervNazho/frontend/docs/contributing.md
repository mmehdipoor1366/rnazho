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
