# 05. Deployment & CI/CD Strategy

## Build & Deployment Workflow
1. Push to `main` branch triggers Vercel deployment hook.
2. Build command executes: `astro build`.
3. Type checking step (`astro check` / `tsc`) runs automatically during build.
4. Deployment is blocked if type errors or broken page imports are detected.

## Environment Variables
* `WORDPRESS_GRAPHQL_ENDPOINT`: Public URL of the headless WPGraphQL API.