# TASKLOG.md - Development Backlog

## Phase 1: WordPress Headless Setup & GraphQL API

- [X] **Task 1.1: Install and configure WPGraphQL plugin**
  * Verify WPGraphQL plugin is active on the WordPress instance.
  * Ensure the GraphQL endpoint URL is accessible and accepting POST queries.
  * Test default GraphQL queries for posts and pages via GraphiQL IDE in WordPress dashboard.

- [X] **Task 1.2: Set up Custom Fields with Advanced Custom Fields (ACF)**
  * Create Custom Post Type (CPT) for `Projects` in WordPress and add support for: `title` and `featured_image`.
  * Configure ACF Field Group for `Projects`: `content` (WYSIWYG editor), `summary` (Text), `tech_stack` (Select), `github_url` (URL), `live_url` (URL), `is_featured` (True/False) and `display_order` (Number).
  * Create Custom Post Type (CPT) for `Experience` in WordPress.
  * Configure ACF Field Group for `Experiences`: `company_name` (Text), `role` (Text), `start_date` (Date), `end_date` (Date/Present), and `key_achievements` (WYSIWYG editor).
  * Enable "Show in GraphQL" setting for all custom post types and ACF field groups.

- [X] **Task 1.3: Populate initial portfolio content**
  * Add at least 3 real projects with complete ACF fields and imagery.
  * Add career milestones in `Experiences`.
  * Create 2 technical blog posts to test content rendering.

---

## Phase 2: Frontend Foundation & Project Setup

- [X] **Task 2.1: Initialize Astro project**
  * Create a clean Astro 5+ project in the repository root (`npm create astro@latest`).
  * Select the Strict TypeScript template during setup.
  * Configure project directory structure (`src/components`, `src/layouts`, `src/pages`, `src/styles`, `src/lib`, `src/types`).
  * Create `.env` and `.env.example` files containing `WORDPRESS_GRAPHQL_ENDPOINT`.

- [X] **Task 2.2: Configure Tailwind CSS and design tokens**
  * Install Tailwind CSS integration in Astro.
  * Configure custom color tokens in Tailwind configuration: `seasalt` (`#F4F7F5`), `rich-black` (`#0E131F`), `rose-quartz` (`#A7A2A9`), `accent-red` (`#E60023`), and `selective-yellow` (`#FFBA08`).
  * Configure primary sans-serif and monospace font families in `src/styles/global.css`.

- [x] **Task 2.3: Build base layout and SEO metadata component**
  * Create `src/layouts/BaseLayout.astro` containing standard HTML5 structure, meta charset, viewport, and favicon references.
  * Implement dynamic `<head>` properties for page titles, meta descriptions, and OpenGraph social tags.
  * Import `global.css` into `BaseLayout.astro`.

---

## Phase 3: Data Layer & API Integration

- [x] **Task 3.1: Configure GraphQL client and TypeScript interfaces**
  * Create `src/lib/graphql.ts` helper using native `fetch` to send HTTP POST requests to `WORDPRESS_GRAPHQL_ENDPOINT`.
  * Create `src/types/wordpress.ts` defining strict TypeScript interfaces for `Project`, `Experience`, `Post`.
  * Write static GraphQL query strings in `src/lib/graphql.ts`: `GET_PROJECTS`, `GET_EXPERIENCES`, `GET_POSTS`, `GET_PROJECT_BY_SLUG`, and `GET_POST_BY_SLUG`.

- [x] **Task 3.2: Implement error handling and build-time fallback data**
  * Add try-catch blocks in `src/lib/graphql.ts` to log GraphQL errors clearly during static site generation.
  * Ensure clear error logging if environment variables are missing or if WPGraphQL endpoint is unreachable.

---

## Phase 4: UI Components & Core Layouts

- [x] **Task 4.1: Build Header and Navigation components**
  * Create `src/components/Header.astro` with logo, desktop navigation links.
  * Implement responsive mobile navigation drawer with lightweight client-side script.

- [x] **Task 4.2: Build Footer and TechBadge components**
  * Create `src/components/TechBadge.astro` accepting `name` prop to render small stylized technology tags.
  * Create `src/components/Footer.astro` with copyright statement, social media links (GitHub, LinkedIn), and status indicator.

- [x] **Task 4.3: Build Hero and ExperienceItem components**
  * Create `src/components/Hero.astro` presenting main intro headline, short bio, tech stack badges, and primary call-to-action buttons.
  * Create `src/components/ExperienceItem.astro` rendering timeline nodes with dates, company name, role title, and responsibilities.

- [x] **Task 4.4: Build ProjectCard and PostCard components**
  * Create `src/components/ProjectCard.astro` displaying project thumbnail image, title, summary, `TechBadge` list, and dynamic detail link.
  * Create `src/components/PostCard.astro` displaying article title, publish date, estimated read time, summary, and article link.

---

## Phase 5: Pages & Routing Implementation

- [x] **Task 5.1: Build Home page (`src/pages/index.astro`)**
  * Fetch data using `GET_FEATURED_PROJECTS`, `GET_EXPERIENCES`, and recent posts inside Astro frontmatter.
  * Assemble `Hero`, featured `ProjectCard` grid, `ExperienceItem` timeline, and recent `PostCard` grid inside `BaseLayout`.

- [x] **Task 5.2: Build Projects directory page (`src/pages/projects/index.astro`)**
  * Fetch all projects using `GET_PROJECTS`.
  * Render complete grid of `ProjectCard` components with optional tech filtering UI.

- [x] **Task 5.3: Build dynamic Project detail page (`src/pages/projects/[slug].astro`)**
  * Implement `getStaticPaths()` fetching all project slugs from WPGraphQL.
  * Create `src/layouts/ProjectLayout.astro` to display full project overview, key challenges, architecture details, GitHub link, and live demo link.

- [x] **Task 5.4: Build About page (`src/pages/about.astro`)**
  * Create full biography page detailing software development background, current focus areas, and technical skills.
  * Include call-to-action link to download updated CV.

- [x] **Task 5.5: Build Blog directory and dynamic Post page**
  * Create `src/pages/blog/index.astro` listing all articles fetched via `GET_POSTS`.
  * Create `src/pages/blog/[slug].astro` using `getStaticPaths()` and `src/layouts/PostLayout.astro` to render HTML post content safely.

- [ ] **Task 5.6: Build Contact page (`src/pages/contact.astro`)**
  * Render direct contact links, social media handles, email address, and professional profiles (GitHub, LinkedIn).

---

## Phase 6: Build Verification, Optimization & Deployment

- [ ] **Task 6.1: Run TypeScript verification and Astro build check**
  * Execute `npx astro check` to verify zero TypeScript or prop interface errors across all components.
  * Execute `npm run build` locally to verify successful HTML static generation.

- [ ] **Task 6.2: Connect repository to Vercel and configure CI/CD**
  * Connect GitHub repository to Vercel.
  * Set `WORDPRESS_GRAPHQL_ENDPOINT` environment variable in production build settings.
  * Perform first live deployment and verify route navigation, responsiveness, and image loading.