# Software requirements specification

## Introduction

### Purpose

This document defines the functional and non-functional requirements for the personal portfolio and technical blog.

### Product scope

The website presents the owner's professional profile, projects, experience, technical articles, and contact options. It also provides a downloadable CV. Public-facing content will be written in Spanish.

### User groups

- Recruiters and hiring managers reviewing the owner's background and work.
- Developers and other visitors exploring projects or technical articles.
- The site owner maintaining content and downloadable assets.

## Functional requirements

### Site-wide navigation

- **FR-01:** The site shall provide navigation to the home, about, projects, blog, and contact pages.
- **FR-02:** The site shall provide a consistent way to return to the home page and navigate between the main sections.
- **FR-03:** The site shall present its visitor-facing interface and content in Spanish.

### Home page

- **FR-04:** The home page shall introduce the owner and provide clear paths to projects and contact information.
- **FR-05:** The home page shall display selected projects, professional experience, and recent blog articles when corresponding content is available.
- **FR-06:** Each preview displayed on the home page shall link to its corresponding detail page or directory.

### About page

- **FR-07:** The about page shall present the owner's biography and technical skills.
- **FR-08:** The about page shall provide access to the downloadable CV.

### Projects

- **FR-09:** The projects directory shall list projects managed through the projects content collection.
- **FR-10:** Visitors shall be able to filter the project list by technology.
- **FR-11:** Each project shall have a detail page accessible through a stable slug-based URL.
- **FR-12:** A project detail page shall display its descriptive content, technology list, and configured project links.
- **FR-13:** A project may include locally stored images or video. The project detail page shall display configured media appropriately.
- **FR-14:** A project marked as featured shall be eligible for display in the home page's selected-project section.

### Blog

- **FR-15:** The blog directory shall list articles managed through the articles content collection.
- **FR-16:** Each article shall have a detail page accessible through a stable slug-based URL.
- **FR-17:** An article page shall display its title, publication date when available, and Markdown content.
- **FR-18:** Blog articles shall not require project image or video galleries.

### Experience

- **FR-19:** The home page shall display professional experience entries managed through the experience content collection.
- **FR-20:** Each experience entry shall present its role, organization, dates, and description when those values are provided.

### Contact

- **FR-21:** The contact page shall provide a form that submits messages through Formspree.
- **FR-22:** The contact form shall validate required input before submission and provide visitors with clear submission status feedback.
- **FR-23:** The contact page shall link to the owner's professional profiles.

### CV

- **FR-24:** Visitors shall be able to download the CV from a link on the website.
- **FR-25:** The CV shall be excluded from search engine indexing while remaining accessible to visitors who follow the website's download link.

## Non-functional requirements

### Language and content

- **NFR-01:** All visitor-facing interface text and published content shall be in Spanish.
- **NFR-02:** Projects, experience entries, and articles shall be maintained as structured Astro content collections, with Markdown as the initial authoring format.
- **NFR-03:** The content structure shall support stable slugs and the metadata needed to render directory previews and detail pages.

### Accessibility and usability

- **NFR-04:** Pages shall use semantic HTML and accessible names for interactive controls.
- **NFR-05:** All navigation and interactive elements shall be operable by keyboard, with a visible focus indication.
- **NFR-06:** Text and controls shall have sufficient contrast against their backgrounds to remain readable.
- **NFR-07:** The site shall use responsive layouts so content and interactive controls remain usable on mobile, tablet, and desktop viewports without unintended horizontal scrolling.

### Performance and reliability

- **NFR-08:** The site shall generate static pages from its local content collections at build time.
- **NFR-09:** Images and video shall be sized and delivered appropriately for their use to avoid unnecessary loading costs.
- **NFR-10:** The production build shall validate content against its collection schemas and fail clearly when required content is invalid.
- **NFR-11:** Missing optional content shall not break page rendering or navigation.

### Search visibility and metadata

- **NFR-12:** Public pages shall provide page-appropriate titles and descriptions for search and social sharing.
- **NFR-13:** The CV file shall include an explicit crawler directive to prevent indexing.

### External services

- **NFR-14:** Contact form submissions shall use Formspree and shall not expose private service credentials in client-visible code.
- **NFR-15:** The website shall remain usable if an optional external service is unavailable; service-dependent actions shall communicate failures clearly.

### Release verification

- **NFR-16:** Before a release, the project shall pass `astro check` and `astro build`.
- **NFR-17:** Before a release, the built site shall be manually checked in a browser for its main routes, responsive navigation and layouts, project filtering, CV download, and contact form feedback.