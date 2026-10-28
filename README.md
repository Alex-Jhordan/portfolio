# Personal portfolio and technical blog

A Spanish-language personal portfolio and technical blog built with Astro. The site is designed to present professional experience, selected projects, technical articles, and contact information through a responsive, statically generated website.

> **Project status:** This repository is being built from its specification and task backlog. Some or all application features described below may not be implemented yet. See [TASKLOG.md](./TASKLOG.md) for the implementation plan.

## Planned features

- Home page with an introduction, featured projects, professional experience, and recent articles.
- About page with a biography, skills, and a downloadable CV.
- Project directory with technology filters and individual project pages.
- Blog directory and Markdown article pages.
- Contact form powered by Formspree and links to professional profiles.
- Responsive layouts for mobile, tablet, and desktop.
- Static generation from Astro content collections.

## Technology

- [Astro](https://astro.build/) for the website, content collections, routing, and static generation.
- [Tailwind CSS](https://tailwindcss.com/) for styling.
- [TypeScript](https://www.typescriptlang.org/) for typed application code.
- [pnpm](https://pnpm.io/) for package management.
- [Formspree](https://formspree.io/) for contact form submissions.
- [Vercel](https://vercel.com/) for deployment.

No additional application libraries are currently planned.

## Project documentation

The project specifications are in [`.github/docs/`](./.github/docs/):

- [Project overview](./.github/docs/project-overview.md) — purpose, audience, scope, and success criteria.
- [Software requirements specification](./.github/docs/software-requirements-specification.md) — functional and non-functional requirements.
- [Technical architecture](./.github/docs/technical-architecture.md) — application structure, content collections, rendering, and integrations.
- [Content and assets](./.github/docs/content-and-assets.md) — Markdown authoring, collection content, and local media conventions.
- [Design and user experience](./.github/docs/design-and-user-experience.md) — visual system, responsive behavior, accessibility, layouts, and components.
- [Deployment and operations](./.github/docs/deployment-and-operations.md) — local development, release checks, and Vercel deployment.

See [AGENTS.md](./AGENTS.md) for project conventions and guidance for coding agents. See [TASKLOG.md](./TASKLOG.md) for the step-by-step implementation backlog.

## Getting started

After the Astro application has been initialized:

1. Install the required Node.js version and pnpm.
2. Install the locked dependencies:

   ```sh
   pnpm install --frozen-lockfile
   ```

3. If the contact form is configured to read its endpoint from an environment variable, copy `.env.example` to `.env` and replace the example value with the Formspree endpoint. Do not commit `.env` or private credentials.
4. Start the development server:

   ```sh
   pnpm dev
   ```

The available scripts are defined in `package.json`:

| Command | Action |
| :-- | :-- |
| `pnpm install` | Install dependencies from `pnpm-lock.yaml`. |
| `pnpm dev` | Start the local development server at `localhost:4321`. |
| `pnpm build` | Build the production site into `./dist/`. |
| `pnpm preview` | Preview the production build locally. |
| `pnpm exec astro check` | Run Astro and TypeScript diagnostics. |
| `pnpm astro ...` | Run other Astro CLI commands. |
| `pnpm astro -- --help` | Show Astro CLI help. |

Refer to the deployment guide for the full verification and release process.

## Want to learn more?

Feel free to consult the [Astro documentation](https://docs.astro.build) or explore the [Astro community](https://astro.build/chat).

## Content and placeholders

Projects, professional experience, and articles are maintained as Markdown entries in Astro content collections. Their schemas and authoring conventions are documented in [content-and-assets.md](./.github/docs/content-and-assets.md).

During development, example entries and page copy may use clearly identified fictional data. Replace demo content and every `TO_REPLACE` value before production. Search the repository for `TO_REPLACE` as part of the production readiness check.

The CV must be provided as a real local file before enabling its download link. Do not create a fabricated CV or leave a link to a missing file. In production, Vercel must serve the CV with `X-Robots-Tag: noindex` while keeping it publicly downloadable.

## Verification

Before a release, run:

```sh
pnpm exec astro check
pnpm build
```

Then manually review the main routes, interactions, and responsive layouts at mobile, tablet, and desktop sizes. Verify the Formspree submission flow and confirm the CV response includes the required no-index header in production.
