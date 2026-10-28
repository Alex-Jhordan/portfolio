# Design and user experience

## Experience goals

The website should make the owner's professional profile, projects, experience, writing, and contact options easy to find and understand. Its presentation should feel clear, professional, and consistent, with content taking priority over decorative effects.

All visitor-facing interface text and published content will be in Spanish.

## Information architecture

The primary navigation should provide access to:

- Home
- About
- Projects
- Blog
- Contact

The home page should introduce the owner and provide concise paths to selected projects, professional experience, recent articles, and contact information. Project and article previews should make it clear that they lead to detail pages. The about page should present the owner's biography, skills, and CV download.

## Responsive behavior

Design layouts for small mobile screens first, then adapt them for tablet and desktop viewports. Content should remain readable and controls usable at each size without unintended horizontal scrolling.

- Navigation should remain clear and operable on narrow screens.
- Grids should adapt the number and width of columns to the available space.
- Project media and article content should scale within their containers without obscuring or distorting the content.
- Buttons, links, form fields, and filtering controls should remain comfortably usable on touch screens.

## Visual system

Use a consistent visual hierarchy for page titles, section headings, body text, metadata, and calls to action. Apply spacing, color, typography, borders, and imagery consistently across the site. Distinguish interactive controls from static content and provide clear hover, active, focus, and disabled states where applicable.

### Color palette

Use the following palette:

| Token | Color | Intended use |
|---|---|---|
| Seasalt | `#F4F7F5` | Primary light backgrounds |
| Rich black | `#0E131F` | Dark section backgrounds and primary text |
| Rose quartz | `#A7A2A9` | Muted text, borders, and secondary details |
| Accent red | `#E60023` | Primary accent for links, highlights, and selected details |
| Selective yellow | `#FFBA08` | Secondary accent for emphasis and small highlights |

### Typography

Use a sans-serif stack for general text: `"Segoe UI", "Helvetica Neue", Arial, sans-serif`.

Use a monospace stack for compact labels and metadata: `"SFMono-Regular", "Consolas", "Liberation Mono", monospace`.

### Overall appearance

Use a light presentation with seasalt as the primary background, interspersed with rich-black sections to create contrast and visual rhythm. Use accent red and selective yellow sparingly to highlight links, labels, and key details; rose quartz should support secondary information and subtle dividers.

Do not provide a dark-mode theme or theme switch. Preserve the clean, restrained portfolio style: clear typography, generous spacing, structured grids, strong section headings, and project imagery as supporting content. This describes the intended visual direction without requiring an exact copy of another site's implementation.

## Layouts and components

The application will use the following layouts and components. Components should be shared when they serve repeated interface patterns; avoid creating components for one-off markup without a clear benefit.

### Layouts

- **BaseLayout:** Shared document shell, site-wide header and footer, page metadata, and global page structure.
- **ProjectLayout:** Consistent detail-page structure for a project, including its summary, media, descriptive content, technologies, and configured links.
- **ArticleLayout:** Readable detail-page structure for a blog article, including its title, publication date, and Markdown content.

### Components

- **Header:** Site identity and primary navigation, including its responsive mobile behavior.
- **Footer:** Copyright and professional profile links.
- **Hero:** Introductory section on the home page with a concise profile and prominent navigation actions.
- **ProjectCard:** Project preview for the home page and project directory.
- **ArticleCard:** Article preview for the home page and blog directory.
- **ExperienceItem:** Individual entry in the professional experience timeline.
- **TechBadge:** Compact label for a technology used in a project.
- **ContactForm:** Labeled contact form with validation and Formspree submission feedback.

Project media presentation may remain part of `ProjectLayout` initially. A separate reusable media component can be introduced if the project gallery behavior requires it.

## Interaction patterns

- Provide consistent navigation and clear links between directory and detail pages.
- Make the selected state of project technology filters visually apparent. Filtering should not make projects inaccessible to keyboard or assistive technology users.
- Give contact form fields persistent labels, indicate validation problems clearly, and provide understandable submission success or failure feedback.
- Identify the CV link as a download so visitors understand its action.
- Ensure any mobile navigation control communicates its expanded or collapsed state to assistive technology.

## Accessibility

- Use semantic HTML elements that reflect each page's structure.
- Provide keyboard access and visible focus indicators for navigation and interactive controls.
- Maintain readable text and control contrast against their backgrounds.
- Provide meaningful alternative text for informative images and empty alternative text for decorative images.
- Avoid communicating information through color alone.
- Respect reduced-motion preferences if animations or transitions are introduced.

## Content presentation

Use consistent layouts for project cards, article previews, project details, article details, and experience entries. Summaries should be easy to scan, and detailed content should have readable line lengths, clear heading hierarchy, and appropriate spacing.

Project images and video should support the explanation of the work rather than distract from it. Blog article pages prioritize readable Markdown content and do not require project-style media galleries.

## Validation

Review the main routes manually at mobile, tablet, and desktop sizes before release. Check that navigation, project filters, links, media, CV download, and contact form feedback are understandable and usable with both pointer and keyboard input.