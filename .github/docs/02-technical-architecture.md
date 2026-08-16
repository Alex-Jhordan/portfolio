# 02. Technical Architecture & Stack

## System Architecture Overview
* **Headless CMS Backend:** WordPress + WPGraphQL + Custom Fields (ACF).
* **Frontend Generator:** Astro 5+ (SSG - Static Site Generation).
* **Language:** TypeScript (Strict Mode).
* **Styling Engine:** Tailwind CSS.
* **Deployment & Hosting:** Vercel with automated CI/CD pipelines.

## API & Data Flow Layer
* **Protocol:** GraphQL over HTTP POST using native `fetch`.
* **Type Safety:** All responses mapped to `src/types/wordpress.ts` (`Project`, `Experience`, `Post`, `ACFFields`).
* **Caching:** Static page generation at build time with incremental revalidation options.