# Agent instructions

## Project context

This project is a Spanish-language personal portfolio and technical blog built with Astro, TypeScript, Tailwind CSS, and pnpm. Projects, professional experience, and articles are managed through Astro content collections and authored in Markdown. The site is statically generated and deployed to Vercel; its contact form uses Formspree.

## Project documentation

Before making a change, consult the relevant specifications in `.github/docs/`. Use these documents as the source of truth:

- `project-overview.md` for the purpose, audience, scope, and success criteria.
- `software-requirements-specification.md` when implementing or changing pages, features, accessibility, responsive behavior, metadata, or release requirements.
- `technical-architecture.md` when changing the Astro application structure, rendering, routing, content collections, technologies, or integrations.
- `content-and-assets.md` when defining collection schemas, adding or editing content, or organizing project media and the CV.
- `design-and-user-experience.md` when changing layouts, components, navigation, visual styles, responsive behavior, or interaction patterns.
- `deployment-and-operations.md` when changing local setup, build verification, Vercel deployment, Formspree configuration, or production operations.

If requirements appear to conflict, do not silently choose an interpretation. Explain the conflict and ask for clarification when it affects the implementation.

## Task tracking

- Use `TASKLOG.md` as the implementation backlog and follow its phases and task steps.
- When a task is fully completed, update its checkbox from `- [ ]` to `- [x]` in the same change.
- Do not mark a task complete when any of its required steps remain unfinished or unverified.
- If implementation reveals a required step or detail missing from `TASKLOG.md`, revise the relevant task or add the necessary task and steps as part of the original plan. Write it as an intended requirement, not as a note about a later change, so the backlog remains sufficient to recreate the project from scratch.

## Engineering conventions

- Use Astro components and pages, TypeScript in strict mode, Tailwind CSS for styling, and pnpm for package management.
- Keep visitor-facing interface text and published content in Spanish; keep source code, filenames, and project documentation in English.
- Use Astro content collections for projects, professional experience, and blog articles. Use Markdown as the initial content format.
- Preserve responsive behavior across mobile, tablet, and desktop sizes and use semantic, keyboard-accessible HTML.
- Keep browser-side JavaScript limited to interactions that need it. Do not add application libraries or frameworks without a concrete requirement.
- Keep project media and the CV local. Ensure the CV remains downloadable and receives `X-Robots-Tag: noindex` through Vercel configuration.
- Keep Formspree configuration replaceable and do not commit private credentials. Search for `TO_REPLACE` placeholders before production release.
- Avoid unrelated refactoring and preserve existing behavior unless a task explicitly requires a change.

## Verification

- Follow the release checks in `.github/docs/deployment-and-operations.md`.
- Before release, run `pnpm exec astro check` and `pnpm build`, then manually review the main routes and interactions at mobile, tablet, and desktop sizes.
- Verify deployment-specific behavior, including the contact form and the CV response header, against the production site.
