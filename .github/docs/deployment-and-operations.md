# Deployment and operations

## Deployment model

Build the website as a static site and deploy the generated output to Vercel. Connect the project repository to Vercel so commits can produce deployments, with preview deployments for changes and a production deployment from the selected production branch.

The site must be built from the project source and its local content collections. Do not rely on a separately running application server to serve published pages.

Vercel's project configuration should use the Astro framework preset, install dependencies with pnpm, run the production build, and serve Astro's generated `dist` directory. Keep provider-specific configuration in the repository where practical so it is version-controlled.

## Local development

- Use the Node.js version required by the Astro version specified in the project configuration.
- Use pnpm to install dependencies and run project scripts.
- Install dependencies from the lockfile with `pnpm install --frozen-lockfile`.
- Start the local development server with the development script defined in `package.json`.
- Keep any required public service configuration, such as the Formspree form endpoint, in the project configuration or environment as appropriate. Never commit private credentials.

The exact script names should follow `package.json`; this document does not prescribe additional scripts or tools.

## Build and verification

Before deploying a release:

1. Install the locked dependencies.
2. Run `pnpm exec astro check` and resolve reported Astro or TypeScript issues.
3. Run `pnpm build` and confirm Astro generates the static site successfully.
4. Review the build output for expected routes, content, and static assets.
5. Manually check the built site in a browser at mobile, tablet, and desktop sizes.
6. Verify navigation, project filtering, project and article detail pages, media display, the CV download, and contact form success and failure feedback.

No dedicated automated test suite is required as a baseline. Add focused tests if future features introduce non-trivial logic that benefits from automated coverage.

## Production deployment

- Deploy only after the build and release checks pass.
- Configure Vercel to serve the generated static output directory (`dist`) produced by Astro.
- Set the production branch and confirm that preview deployments are created for changes that are not production releases.
- Configure a production Formspree endpoint for the contact form and verify that a test submission is received.
- Configure a Vercel response header rule in `vercel.json` for the CV's exact public path, setting `X-Robots-Tag: noindex`. Keep the file accessible to visitors through its site link.
- Verify the deployed CV response header directly in production, for example with `curl -I <CV_URL>`. Do not block the file in `robots.txt`, since crawlers need to fetch it to see the no-index directive.
- Confirm the deployed site's canonical URLs and page metadata use the production domain.

Vercel automatically adds `X-Robots-Tag: noindex` to preview deployments and outdated production deployments to prevent duplicate-content indexing. This does not replace the explicit rule for the CV in the current production deployment.

## Content and asset operations

- Add or update project, experience, and article entries in their respective Astro content collections.
- Keep media assets organized with the relevant project content and follow the conventions in `content-and-assets.md`.
- Run the production build after content changes so collection schemas validate entries and generated pages are refreshed.
- Review changes to published slugs carefully because they affect public URLs.
- Replace the CV by updating the local asset, then verify the published download and its `X-Robots-Tag: noindex` response header.

## Operational checks

After deployment, confirm that the home, about, projects, blog, and contact pages load successfully, that detail routes resolve, and that there are no missing local assets. Periodically verify the Formspree integration and the CV's download and no-index behavior in the production deployment.