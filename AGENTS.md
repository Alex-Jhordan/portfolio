# AGENTS.md - Portfolio Engineering Guidelines & Agent Rules

## Project Context
This repository contains a headless developer portfolio built with **Astro 5+**, **TypeScript** (Strict Mode), **Tailwind CSS**, and **WPGraphQL** as a headless CMS backend.

## General Agent Principles
1. **Spec-Driven Execution:** Always consult documentation files located in `.github/docs/` before writing code.
2. **Task Management:** Follow tasks strictly from `TASKLOG.md`. When a task is completed, update its checkbox (`- [x]`) in `TASKLOG.md`.
3. **No Unrequested Refactoring:** Write clean, modular, and production-ready code. Do not refactor untouched files unless explicitly requested.
4. **TypeScript Strictness:** Never use `any`. Always import or define appropriate interfaces from `src/types/wordpress.ts`.

## Core Technical Stack & Conventions
* **Framework:** Astro (`.astro` components).
* **Language:** TypeScript (`strict: true`). Use `<script lang="ts">` for client-side scripts.
* **Styling:** Tailwind CSS. Use semantic design tokens and custom palette defined in configuration.
* **Component Props:** Every Astro component MUST declare an `interface Props` for type safety.
* **Data Fetching:** Native `fetch` with GraphQL POST requests in `src/lib/graphql.ts`.

## File Naming Conventions
* **Language Convention:** File names, routes, and directory names MUST be in **English**.
* **Pages (`src/pages/`):**
  * `index.astro` (Home)
  * `about.astro` (About Me)
  * `projects/index.astro` (Projects Directory)
  * `projects/[slug].astro` (Project Detail)
  * `blog/index.astro` (Blog Directory)
  * `blog/[slug].astro` (Post Detail)
  * `contact.astro` (Contact)
* **Components & Layouts:** PascalCase (e.g., `src/components/ProjectCard.astro`, `src/layouts/BaseLayout.astro`).
* **Utilities & Types:** camelCase or lowercase (e.g., `src/lib/graphql.ts`, `src/types/wordpress.ts`).

## Color Palette (Design Tokens)
* `seasalt`: `#F4F7F5`
* `rich-black`: `#0E131F`
* `rose-quartz`: `#A7A2A9`
* `accent-red`: `#E60023`
* `selective-yellow`: `#FFBA08`

## Verification Rule
Before concluding any task, verify that `npm run build` succeeds without TypeScript or Astro syntax errors.