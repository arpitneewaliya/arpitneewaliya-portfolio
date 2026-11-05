# Arpit Neewaliya Portfolio

The personal portfolio website for Arpit Neewaliya, built with Next.js App Router, React, TypeScript, Tailwind CSS, and Framer Motion.

## Requirements

- Node.js 20+
- npm

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint |
| `npm run validate:portfolio` | Check portfolio links, assets, duplicate entries, and section navigation |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |

## Project structure

- `src/app/` - App Router pages and global layout
- `src/components/sections/` - Homepage and detail-page sections
- `src/components/ui/` - Reusable UI primitives
- `src/data/data.ts` - Single source of truth for profile, projects, skills, experience, and blog content
- `src/lib/` - Shared utilities
- `public/images/` - Portfolio and blog images
- `scripts/validate-portfolio.mjs` - Dependency-free content and asset validation

## Updating portfolio content

Edit [`src/data/data.ts`](./src/data/data.ts) to update profile information, social links, skills, projects, experience, or blog posts. Keep image paths relative to `public/`, for example `/images/project-name.png`, and use complete `https://` URLs for external links.

The homepage uses compact section components, while `/projects` and `/experience` use detailed views backed by the same data. Update the shared data instead of duplicating content in individual components.

After changing content, run:

```bash
npm run validate:portfolio
npm run lint
npm run build
```

## Deployment

The site can be deployed to Vercel or any platform that supports Next.js production builds:

```bash
npm run build
npm run start
```
