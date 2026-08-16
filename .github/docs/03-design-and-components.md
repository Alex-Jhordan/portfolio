# 03. Design System & Component Architecture

## Layouts Structure
* `src/layouts/BaseLayout.astro`: Base HTML shell, SEO head tags, fonts, global footer.
* `src/layouts/ProjectLayout.astro`: Template for individual project breakdown pages.
* `src/layouts/PostLayout.astro`: Template for technical blog posts.

## UI Components Directory
* `src/components/Header.astro`: Top navigation bar with responsive mobile menu.
* `src/components/Footer.astro`: Social links, copyright, system status indicator.
* `src/components/Hero.astro`: Main bio section with call-to-action buttons.
* `src/components/ProjectCard.astro`: Reusable project preview card with tech badges.
* `src/components/TechBadge.astro`: Small visual tag for stack items (e.g., Tailwind, Astro, Python).
* `src/components/ExperienceItem.astro`: Timeline item for career and academic milestones.
* `src/components/PostCard.astro`: Article preview card for blog listings.