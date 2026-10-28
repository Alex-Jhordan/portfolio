# Project overview

## Purpose

Build a personal portfolio and technical blog that presents the owner's software engineering background, selected work, professional experience, and technical writing. The site should help technical leads, senior developers, and recruiters understand the owner's skills and evaluate their work.

## Product vision

Create a fast, accessible, and maintainable static website that makes professional information and project details easy to explore. Manage projects, professional experience, and blog articles as Astro content collections, with Markdown as the initial authoring format.

## Intended audience

- Technical leads and hiring managers evaluating engineering experience.
- Senior developers and peers interested in the owner's projects and technical writing.
- Recruiters looking for a clear overview of skills, experience, and contact options.

## Project scope

The site will include:

- A home page introducing the owner and highlighting selected projects, professional experience, and recent articles.
- An about page with biography and technical skills.
- A projects directory with technology filtering and a detail page for each project.
- A blog directory and individual article pages.
- A contact page with a Formspree contact form and professional profile links.
- A downloadable CV stored with the site. The CV should be accessible to visitors through the website but excluded from search engine indexing.

The site will use Astro content collections for projects, experience, and articles. Project media, including images and video where needed, will be stored locally and organized with the content.

## Guiding principles

- Build the site with Astro and manage projects, experience, and articles through Astro content collections.
- Favor simple content authoring and a clear separation between content and presentation.
- Provide a consistent responsive experience across pages, from small mobile screens to desktop displays.
- Treat performance, accessibility, and search visibility as core product qualities.
- Keep external services limited to integrations that are genuinely needed, and document them separately.

## Success criteria

- Visitors can understand the owner's professional focus and navigate to projects, experience, articles, and contact information.
- Project and article detail pages are generated from local content and remain navigable by stable URLs.
- The site builds successfully with its content collections and generates the expected pages.
- Layouts and interactions remain usable on mobile, tablet, and desktop screen sizes.
- The site loads efficiently, supports accessible navigation and content, and provides appropriate search metadata.
- The downloadable CV is available from the site but carries an explicit instruction not to index it.