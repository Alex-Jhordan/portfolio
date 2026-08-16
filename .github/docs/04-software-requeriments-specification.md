# 04. System Requirements Specification (SRS)

## Functional Requirements
* **FR-01 (Home Page):** Display Hero summary, top featured projects, experience timeline, and latest blog posts.
* **FR-02 (Projects Showcase):** Filter projects by technology/tag, render detailed project breakdowns via dynamic slug routes (`src/pages/projects/[slug].astro`).
* **FR-03 (Blog):** List technical articles and render Markdown/HTML content safely.
* **FR-04 (Contact & About):** Direct access to professional profiles (GitHub, LinkedIn) and downloadable CV.

## Non-Functional Requirements
* **NFR-01 (Strict Typing):** All components and data helpers must compile with zero TypeScript errors (`astro check`).
* **NFR-02 (Accessibility):** WCAG 2.1 AA compliance (proper contrast ratios, semantic HTML elements, ARIA attributes where needed).