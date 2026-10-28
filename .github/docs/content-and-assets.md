# Content and assets

## Content sources and language

Projects, professional experience, and blog articles are authored locally and managed through separate Astro content collections. Public-facing text and published content are written in Spanish.

The home, about, and contact pages contain site-level information and can be maintained as Astro pages unless a future requirement calls for them to become editable collection content.

## Authoring format

Use Markdown (`.md`) as the initial format for collection entries. Keep structured metadata in each entry's frontmatter and write its main descriptive content in the Markdown body.

MDX is not required for the initial content model. If a future article needs embedded interactive components, evaluate MDX for that entry or content type at that time rather than making it the default.

## Collection content

### Projects

Project entries should support:

- A title and stable slug.
- A short summary for cards and previews.
- Detailed descriptive content.
- A list of technologies.
- An optional featured flag and display order for home-page selection.
- Optional repository and live-demo links.
- Optional locally stored images or video.

Project media belongs to its project and should be referenced from the corresponding entry. Blog articles do not need project-style media galleries.

### Professional experience

Experience entries should support:

- Role and organization.
- Start date and optional end date, including an indication of a current role.
- A description of responsibilities or achievements.
- An ordering value or another consistent ordering convention for the home-page timeline.

### Blog articles

Article entries should support:

- A title and stable slug.
- A short description for article previews and metadata.
- A publication date.
- Markdown article content.
- Optional publication state metadata if drafts need to be kept alongside published articles.

## Content conventions

- Use lowercase kebab-case for slugs and asset filenames; avoid spaces and special characters.
- Keep slugs stable after publication where possible, since they form part of public URLs.
- Use consistent names for technologies across project entries so technology filtering does not create duplicate categories.
- Use ISO-formatted dates in content metadata.
- Provide concise summaries that make sense when shown outside the full detail page.
- Keep content accurate, proofread, and written for the intended Spanish-speaking audience.
- Omit optional metadata when it is not applicable rather than adding empty placeholder values.

## Local media and downloadable files

Store project images and videos locally in a clearly organized structure associated with their project entries. Use descriptive filenames and avoid duplicating the same asset unnecessarily.

- Use appropriately sized, optimized image files for their display context.
- Provide meaningful alternative text for informative images; use empty alternative text for purely decorative images.
- Use video only when it adds useful project context. Provide a poster image where appropriate and avoid loading large video files before playback is needed.
- Do not add project image or video galleries to blog articles unless the content requirements change.

Store the downloadable CV as a local site asset. It must be linked from the website, remain downloadable, and be served with an `X-Robots-Tag: noindex` response header so search engines are instructed not to index the file. Configure and verify this response behavior in the deployment environment; a `robots.txt` disallow rule alone is insufficient.

## Astro collection validation

Define collection schemas for required fields, optional fields, and expected data types. The build should report invalid entries clearly. The implementation's final directory layout and schema definitions should follow the Astro content collection approach selected during project setup.