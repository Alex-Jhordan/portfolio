# Development task log

## Phase 1: Project foundation

- [X] **Task 1.1: Initialize the Astro application with pnpm and strict TypeScript**
  - Create the Astro project in the repository root using the current stable Astro release and its strict TypeScript setup. To initialize it directly in the current root directory, run `pnpm create astro@latest . --template minimal`.
  - Use pnpm as the package manager and verify that `package.json` and `pnpm-lock.yaml` exist so installs are reproducible. If dependencies are not installed yet, run `pnpm install` to generate or update the lockfile.
  - Set the Node.js engine requirement in `package.json` to a version supported by the selected Astro release and available in Vercel; confirm this manually.
  - Add `@astrojs/check` and `typescript` as development dependencies so `astro check` can validate the application. Run `pnpm add --save-dev @astrojs/check typescript`.
  - Add the standard Astro scripts for local development, production build, preview, and type checking. Define the type-check script as `check` with the command `astro check`; for example, run `pnpm pkg set scripts.check="astro check"`.
  - Keep `tsconfig.json` in strict mode and resolve project diagnostics rather than weakening compiler settings; verify that it extends `astro/tsconfigs/strict`.
  - Create the initial application directories `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/`, and `src/content/`.

- [X] **Task 1.2: Configure Tailwind CSS and the site design tokens**
  - Install Tailwind CSS and its Vite integration using pnpm, following the integration compatible with the selected Astro and Tailwind versions.
  - Register the Tailwind Vite plugin in `astro.config.mjs`.
  - Create `src/styles/global.css`, import Tailwind, and define the design tokens for seasalt `#F4F7F5`, rich black `#0E131F`, rose quartz `#A7A2A9`, accent red `#E60023`, and selective yellow `#FFBA08`.
  - Define the sans-serif font stack `"Segoe UI", "Helvetica Neue", Arial, sans-serif` and monospace font stack `"SFMono-Regular", "Consolas", "Liberation Mono", monospace`.
  - Confirm the palette and font stacks are available to Astro components through Tailwind utilities and apply a clear base style for page background, text, links, and focus states.

- [ ] **Task 1.3: Establish project-wide metadata and static asset conventions**
  - Set a searchable placeholder URL ending in `TO_REPLACE` as Astro's `site` value in `astro.config.mjs`, for example `https://portfolio-TO_REPLACE.vercel.app`, so canonical URL generation works during development.
  - Add the site favicon under `public/` and reference it from the shared layout.
  - Establish predictable locations and naming for public assets, project media, and the downloadable CV as described in `.github/docs/content-and-assets.md`.
  - Ensure local environment files such as `.env` are excluded from version control and add `.env.example` with a clearly searchable non-secret placeholder such as `PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/FORM_ID_TO_REPLACE` when the form integration is configured.
  - Use the literal suffix `TO_REPLACE` in every fake URL or configuration value that a project owner must replace, so these values can be found with a repository-wide search before launch.

## Phase 2: Content collections and source material

- [ ] **Task 2.1: Define validated Astro content collections**
  - Create `src/content.config.ts` using the content collection API supported by the selected Astro version.
  - Define separate `projects`, `experience`, and `articles` collections with typed schemas for the fields specified in `.github/docs/content-and-assets.md`.
  - Validate required titles, summaries, dates, technology lists, featured ordering, optional external links, and references to local project media.
  - Use local content loaders and Markdown entries; configure asset image schemas where needed so project media can be validated and optimized by Astro.
  - Ensure invalid required values fail the build with useful schema errors and optional fields can be omitted safely.

- [ ] **Task 2.2: Add project entries and organize their local media**
  - Create project entry files under `src/content/projects/` with lowercase kebab-case filenames that match stable public slugs.
  - Create at least one clearly identified demonstration project using fictional titles, lorem ipsum-style summary and description, sample technologies, and optional links with `TO_REPLACE` in their URLs; do not use content from another portfolio or imply that the fictional project is real.
  - Populate the demonstration entry with every required schema field and representative optional values, including featured status and display order, so it demonstrates how the project collection is used.
  - Store a clearly identified placeholder image and, if useful for exercising the media schema, a sample video in a local directory associated with the demonstration project; label them as replaceable demo assets and reference them from the entry.
  - Add meaningful sample alternative text that also identifies the image as a demonstration asset.
  - Add meaningful alternative text for informative images, use empty alternative text only for decorative images, and provide poster images for video where appropriate.
  - Keep all demonstration data and assets clearly labeled as fictional and replaceable; never present them as verified owner projects.

- [ ] **Task 2.3: Add professional experience entries**
  - Create Markdown entries under `src/content/experience/` using stable kebab-case filenames.
  - Create at least one clearly identified fictional experience entry using a sample role, organization, ISO-formatted dates, and lorem ipsum-style responsibilities or achievements.
  - Populate the demonstration entry with the required schema fields and representative optional values, including a current-role example only if the schema supports it.
  - Define and apply a consistent ordering convention so the home-page experience timeline displays entries in the intended order.
  - Make it explicit in the entry content that the experience is demo data and must be replaced; do not invent or imply actual employment history.

- [ ] **Task 2.4: Add Spanish-language blog articles**
  - Create Markdown article entries under `src/content/articles/` using stable kebab-case filenames and slugs.
  - Create at least one clearly identified demonstration article with a fictional title, lorem ipsum-style Spanish summary and Markdown body, and a valid sample publication date.
  - Populate the demonstration entry with every required schema field and representative optional metadata.
  - Add publication-state metadata only if draft articles need to be stored in the same collection, and ensure drafts are excluded from public routes and listings.
  - Mark the entry visibly as replaceable demo content and do not attribute fabricated technical claims or experiences to the site owner.
  - Keep blog articles focused on readable text; do not add project-style media galleries.

## Phase 3: Shared application shell and components

- [ ] **Task 3.1: Build the shared page layout and metadata**
  - Create `src/layouts/BaseLayout.astro` with the document type, Spanish `lang` attribute, character encoding, viewport metadata, favicon, page title, description, canonical URL, and social-sharing metadata.
  - Import `src/styles/global.css` from the shared layout and include the shared `Header` and `Footer` around the page slot.
  - Use typed Astro props for the title, description, optional social image, and canonical URL.
  - Ensure each route can supply page-specific metadata and that the default metadata is valid when optional values are omitted.

- [ ] **Task 3.2: Implement responsive site navigation and footer**
  - Create `src/components/Header.astro` with a clearly identified placeholder site identity such as `Portfolio name TO_REPLACE` and Spanish navigation links to `/`, `/about/`, `/projects/`, `/blog/`, and `/contact/`.
  - Make navigation adapt to narrow viewports with a keyboard-operable mobile menu and an accessible expanded/collapsed state.
  - Create `src/components/Footer.astro` with placeholder copyright information and sample profile links whose URLs contain `TO_REPLACE`; ensure the placeholder status is obvious in both labels and destinations.
  - Use semantic navigation landmarks, descriptive link text, visible focus indicators, and responsive Tailwind classes.

- [ ] **Task 3.3: Build reusable portfolio and content components**
  - Create `src/components/Hero.astro` for the home-page introduction, concise profile, and primary calls to action.
  - Create `src/components/TechBadge.astro` for technology labels used by project cards and detail pages.
  - Create `src/components/ProjectCard.astro` with project image, title, summary, technologies, and a link to `/projects/[slug]/`.
  - Create `src/components/ArticleCard.astro` with article title, publication date, summary, and a link to `/blog/[slug]/`.
  - Create `src/components/ExperienceItem.astro` for role, organization, dates, and description in the timeline.
  - Declare typed `Props` interfaces in each Astro component and handle optional content without broken markup.

- [ ] **Task 3.4: Implement the Formspree contact form component**
  - Create `src/components/ContactForm.astro` with persistent Spanish labels for name, email, and message fields, required-field validation, and an accessible status region.
  - Configure the form to read its endpoint from a clearly named public setting such as `PUBLIC_FORMSPREE_ENDPOINT`, with a fake Formspree form ID ending in `TO_REPLACE` in `.env.example` and Vercel's environment settings.
  - Ensure the form displays a clear configuration placeholder or non-submitting state when the endpoint still contains `TO_REPLACE`; never submit demo form data to a placeholder URL.
  - Keep `.env` ignored by version control and document the placeholder key and replacement requirement in `.env.example`.
  - Provide understandable success and failure feedback and prevent duplicate submissions while a request is in progress.
  - Use a browser-side script only as needed for submission status behavior; do not add a client framework or expose private credentials.

## Phase 4: Site routes and content rendering

- [ ] **Task 4.1: Build the home page**
  - Create `src/pages/index.astro` and compose `BaseLayout`, `Hero`, `ProjectCard`, `ExperienceItem`, and `ArticleCard`.
  - Query the `projects`, `experience`, and `articles` collections at build time.
  - Display featured projects in configured order, experience entries in the agreed timeline order, and the latest published articles by publication date.
  - Write clearly identified fictional Spanish placeholder copy for the introduction, calls to action, section descriptions, and empty states; use `TO_REPLACE` for the displayed owner or portfolio name.
  - Link each section to its corresponding directory and render intentional empty states if a collection has no public entries.

- [ ] **Task 4.2: Build the about page and CV download link**
  - Create `src/pages/about.astro` with clearly identified fictional Spanish biography and skills content, using lorem ipsum-style copy and sample technologies rather than inventing facts about a real person.
  - Add a visible indication that the CV asset is pending replacement; do not create or link to a fabricated CV file and do not leave a download link that points to a missing asset.
  - Place an HTML `TODO` comment next to the CV placeholder identifying the required local asset path and instructing the maintainer to replace the placeholder with the real CV before enabling the download link.
  - Add the download link only when a real CV asset is supplied, and ensure it points to the final public path.
  - Keep the about-page layout responsive and provide page-specific title and description metadata through `BaseLayout`.

- [ ] **Task 4.3: Build the projects directory and accessible technology filter**
  - Create `src/pages/projects/index.astro` and list all published project entries using `ProjectCard`.
  - Derive the technology filter options from the project collection and provide an option to show all projects.
  - Implement filtering with a small browser-side script that preserves keyboard access, communicates the selected filter state, and leaves project links usable.
  - Ensure the full project list remains available when scripting is unavailable or no filter is selected.

- [ ] **Task 4.4: Build project detail routes**
  - Create `src/pages/projects/[slug].astro` and generate static paths from the project collection using each stable slug.
  - Create `src/layouts/ProjectLayout.astro` to render project summary, detailed Markdown content, local image/video media, technology badges, and configured repository or live-demo links.
  - Use Astro image handling for local images where appropriate, preserve intrinsic dimensions, and avoid eager loading large media that is not initially visible.
  - Return a proper not-found result for unknown slugs and ensure optional project media or links do not break the page.

- [ ] **Task 4.5: Build the blog directory and article detail routes**
  - Create `src/pages/blog/index.astro` to list published article entries with `ArticleCard`, ordered newest first.
  - Create `src/pages/blog/[slug].astro` and generate static paths from published article slugs only.
  - Create `src/layouts/ArticleLayout.astro` to display the article title, publication date, and rendered Markdown with a readable content width and heading hierarchy.
  - Provide appropriate metadata for each article and handle invalid or unknown slugs with a proper not-found result.

- [ ] **Task 4.6: Build the contact page and not-found page**
  - Create `src/pages/contact.astro` with `ContactForm` and clearly marked sample professional profile links containing `TO_REPLACE` in their URLs.
  - Add a visible placeholder notice or HTML `TODO` comment next to each fake profile link so maintainers can find and replace every example value.
  - Create `src/pages/404.astro` with a Spanish not-found message and working links back to the home page and primary sections.
  - Confirm both pages use `BaseLayout`, page-appropriate metadata, semantic landmarks, and responsive layouts.

## Phase 5: Search visibility, assets, and Vercel configuration

- [ ] **Task 5.1: Configure the downloadable CV and its no-index response**
  - Add the owner-provided CV file under the selected public asset path and link to it from `src/pages/about.astro`.
  - Add or update `vercel.json` in the `portfolio-new/` repository root with a response-header rule matching only the CV's exact URL path and setting `X-Robots-Tag: noindex`.
  - Keep the CV publicly accessible through the download link and do not disallow its path in `public/robots.txt`.
  - Confirm Vercel applies the custom header to the static file and that the rule does not unintentionally apply `noindex` to other public pages or assets.

- [ ] **Task 5.2: Add site-wide search and social metadata**
  - Ensure `src/layouts/BaseLayout.astro` emits page-specific title, description, canonical URL, Open Graph metadata, and social image metadata.
  - Add `public/robots.txt` with rules that permit crawling of public pages and do not block the CV from being fetched for its `X-Robots-Tag` directive.
  - Keep a production-domain placeholder ending in `TO_REPLACE` in Astro's `site` configuration until the real Vercel domain is available, then replace it and verify canonical URLs on the generated pages.
  - Do not introduce sitemap or SEO packages unless a concrete requirement arises; use Astro and static files for the initial metadata needs.

- [ ] **Task 5.3: Configure the Vercel project for Astro deployments**
  - Connect the `portfolio-new/` repository root to a Vercel project and select the Astro framework preset.
  - Configure dependency installation from the pnpm lockfile and set the Vercel build command to run the type check and production build in sequence, such as `pnpm run check && pnpm run build`.
  - Set `dist` as the generated output directory and confirm it matches Astro's configured build output.
  - Set the production branch and verify that non-production changes create preview deployments.
  - Configure a fake Formspree endpoint ending in `TO_REPLACE` in Vercel's project environment as a searchable placeholder, and replace it with the real endpoint before enabling production form submissions.
  - Ensure preview deployments are treated separately from the production domain and verify production canonical URLs after the first deployment.

## Phase 6: Verification and release

- [ ] **Task 6.1: Verify collection data, routes, and production build**
  - Run `pnpm install --frozen-lockfile` from the `portfolio-new/` repository root.
  - Run `pnpm exec astro check` and resolve Astro, TypeScript, component-prop, and content-schema diagnostics.
  - Run `pnpm build` and confirm Astro generates the static site into `dist/` without missing content, broken imports, or invalid collection entries.
  - Inspect generated output for the expected home, about, projects, project detail, blog, article detail, contact, and 404 pages, plus the CV and project media assets.

- [ ] **Task 6.2: Manually verify responsive behavior, accessibility, and interactions**
  - Review the deployed or locally previewed site at mobile, tablet, and desktop viewport sizes and confirm no unintended horizontal scrolling.
  - Verify the mobile menu, keyboard navigation, visible focus states, project technology filters, project and article links, and CV download.
  - Check semantic headings, form labels, alternative text, text/control contrast, and reduced-motion behavior if animations are present.
  - Submit the contact form through Formspree and verify clear success and failure feedback.
  - Search the entire repository for `TO_REPLACE` before production release and replace every placeholder value; confirm none remain in production links, metadata, form settings, or visible content.
  - Search the content collections and page copy for demo labels and lorem ipsum, and replace fictional examples with owner-approved content before production release.
  - Confirm the real CV file has been supplied and the placeholder notice and adjacent TODO comment have been removed before enabling its download link.
  - Confirm every visitor-facing page and message is in Spanish and that no empty optional content produces broken layouts.

- [ ] **Task 6.3: Verify the Vercel production deployment and CV indexing directive**
  - Confirm the production deployment succeeds from the configured branch and that all primary routes and local assets load on the production domain.
  - Request the CV URL with an HTTP HEAD request and verify the response includes `X-Robots-Tag: noindex` while returning the file successfully.
  - Confirm public HTML pages do not inherit the CV's no-index header and that the CV path is not blocked by `robots.txt`.
  - Verify the production contact form endpoint, canonical URLs, page metadata, and responsive navigation after deployment.
