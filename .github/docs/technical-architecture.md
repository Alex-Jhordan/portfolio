# Technical architecture

## Architecture overview

The website is a statically generated portfolio and technical blog built with Astro. Astro content collections provide the structured source for projects, professional experience, and blog articles. Pages and reusable Astro components render that content into the published site.

The architecture separates authored content, page routing, presentation, and external-service integrations. Published pages are generated from the site's local content during the build.

## Technology and service choices

- **Astro:** Website framework, file-based routing, content collections, and static site generation.
- **Tailwind CSS:** Styling framework for responsive layouts and reusable visual patterns.
- **pnpm:** Package manager for installing dependencies and running project scripts.
- **Markdown:** Initial authoring format for project descriptions, experience entries, and blog articles.
- **Formspree:** External service that receives contact form submissions.
- **HTML, CSS, and TypeScript:** Web platform and implementation languages for accessible page structure, responsive presentation, and browser-side interactions.

Vercel is the deployment platform. No additional application libraries are currently planned. Deployment settings and release procedures belong in `deployment-and-operations.md`.

## Rendering and data flow

1. The site owner creates or updates collection entries and their associated local assets.
2. Astro validates collection entries against their schemas during development and build.
3. Astro pages query the collections and render directory pages, home-page previews, and slug-based detail pages.
4. The build outputs static pages and public assets for deployment.
5. Browser-side JavaScript is used only where needed for interactive behavior, such as project filtering and responsive navigation.

## Content collections

The site will use separate Astro content collections for:

- **Projects:** project summaries, technology metadata, featured status, external project links, and references to local media.
- **Experience:** professional roles, organizations, dates, and achievement or responsibility descriptions.
- **Articles:** Spanish-language technical writing authored in Markdown.

Collection schemas define required and optional fields and validate content during the build. The detailed fields and authoring conventions belong in `content-and-assets.md`.

## Routes and presentation

Astro's file-based routing will provide the home, about, projects directory, project detail, blog directory, article detail, and contact pages. Project and article detail routes will be generated from collection entries using stable slugs.

Shared layouts provide the page shell and common metadata. Reusable components render repeated interface elements such as navigation, project and article previews, technology labels, experience entries, and the footer. The implementation should preserve semantic markup and provide responsive layouts across mobile, tablet, and desktop viewports.

## Local assets

Project images and videos, along with the downloadable CV, are stored as local site assets and included in the production build. Project content references the media associated with each entry. Images should use suitable dimensions and formats for their display context; video should not be loaded unnecessarily before a visitor needs it.

The CV must remain directly downloadable while being excluded from search engine indexing. The deployment must serve the CV with an explicit `X-Robots-Tag: noindex` response header. A `robots.txt` disallow rule alone is not sufficient to guarantee that the file is not indexed.

## External service integration

The contact form submits to Formspree. The integration should provide clear validation and submission feedback, including an understandable failure state if Formspree cannot be reached. Any service configuration exposed in the browser must not contain private credentials.

Professional profile links are ordinary outbound links and do not require a runtime integration.

## Quality and release checks

The project does not require a dedicated automated test suite as a baseline. Before release:

- Run `astro check` to check Astro and TypeScript diagnostics.
- Run `astro build` to validate the production build and generate the static site.
- Manually review the primary routes and key interactions in a browser, including responsive layouts, project filtering, CV download, and contact form feedback.

These release checks complement the collection schema validation performed during the build.