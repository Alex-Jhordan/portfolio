# Headless Portfolio & Tech Blog

A high-performance personal portfolio and technical blog built with **Astro 5+**, **TypeScript**, **Tailwind CSS**, and **WPGraphQL** as a headless CMS.

## 🚀 Tech Stack

* **Frontend Framework:** [Astro](https://astro.build/) (Static Site Generation - SSG)
* **Language:** TypeScript (Strict Mode)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Backend / CMS:** Headless WordPress via [WPGraphQL](https://www.wpgraphql.com/) + [Custom Post Type UI](https://pe.wordpress.org/plugins/custom-post-type-ui/) + [Advanced Custom Fields](https://www.advancedcustomfields.com/)
* **Deployment & CI/CD:** Vercel

## 📁 Repository Structure

.
├── .github/
│   └── docs/            # System architecture & technical specs
├── public/              # Static assets (favicons, icons)
├── src/
│   ├── components/      # Reusable Astro UI components
│   ├── layouts/         # Page layout templates (Base, Project, Post)
│   ├── lib/             # GraphQL API client & fetch helpers
│   ├── pages/           # File-based routing (about, projects, blog, contact)
│   ├── styles/          # Global CSS & Tailwind imports
│   └── types/           # TypeScript interfaces for WPGraphQL data
├── AGENTS.md            # Agent rules & coding guidelines
├── TASKLOG.md           # Project execution roadmap & checklist
└── astro.config.mjs

## 📋 Prerequisites & Setup

1. **Clone the repository:**
   git clone [https://github.com/Alex-Jhordan/portfolio.git](https://github.com/Alex-Jhordan/portfolio.git)
   cd portfolio

2. **Install dependencies:**
   pnpm install

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory based on `.env.example`:
   WORDPRESS_GRAPHQL_ENDPOINT=[https://your-wordpress-domain.com/graphql](https://your-wordpress-domain.com/graphql)

4. **Run Development Server:**
   npm run dev

5. **Build for Production:**
   npm run build

## ⚙️ Quality Assurance

To verify type safety and build integrity prior to deployment:

npx astro check