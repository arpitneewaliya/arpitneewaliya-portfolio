<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — Developer & AI Agent Guidelines

## 1. Project Overview
This repository contains the official portfolio website for **Arpit Neewaliya**, built as a modern, high-performance web application utilizing **Next.js 16 (App Router)** and **React 19**.

---

## 2. Tech Stack & Key Libraries

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 16.2 (App Router) |
| **UI Library** | React 19.2 |
| **Language** | TypeScript 5 (Strict Mode) |
| **Styling** | Tailwind CSS v4 (`@import "tailwindcss"`), OKLCH colors, `tw-animate-css` |
| **UI Primitives** | Base UI (`@base-ui/react`), Shadcn UI (`components.json`), Lucide Icons, React Icons |
| **Animations** | Motion / Framer Motion (`framer-motion`, `motion`), GSAP (`gsap`) |
| **Form Handling** | React Hook Form (`react-hook-form`), Zod (`zod`), `@hookform/resolvers` |
| **Email / Backend** | Next.js API Routes (`/api/contact`), Nodemailer |

---

## 3. Development Commands

```bash
# Start development server
npm run dev

# Create production build
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

---

## 4. Directory Structure & Path Aliases

- `@/` maps to `src/`
- `@/app` (`src/app/`): App router pages, layouts, and API routes (`/api/contact`).
- `@/components` (`src/components/`):
  - `@/components/ui`: Low-level reusable UI primitives (Button, Card, Input, Label, Textarea).
  - `@/components/sections`: Page section components (Hero, HeaderHero, About, ProjectsSection, ExperienceTimeline, SkillsGrid, TechStack, Contact, Blog).
- `@/data` (`src/data/`): Static content & data models (`data.ts`).
- `@/lib` (`src/lib/`): Core utilities (e.g., `cn(...)` in `utils.ts`).

---

## 5. Architectural & Coding Guidelines

### 5.1 Next.js 16 & React 19 Conventions
- **Server vs Client Components**: Use Server Components by default. Include `'use client'` directive at the top of files that utilize React state, hooks, DOM event handlers, or animation libraries.
- **Async Request APIs**: Next.js 16 introduces async request APIs (`params`, `searchParams`, `cookies()`, `headers()`). Always `await` these objects where applicable.

### 5.2 Styling Guidelines (Tailwind CSS v4)
- **Import Syntax**: Uses `@import "tailwindcss";` and `@theme inline` in `src/app/globals.css`.
- **Color Tokens**: Defined via OKLCH color space for both light and dark themes.
- **Class Merging**: Always use `cn(...)` from `@/lib/utils` when merging conditional dynamic class names.

### 5.3 Data Management
- Keep component code clean by centralizing static portfolio data inside `src/data/data.ts`.
- Avoid hardcoding user content (projects, experiences, bio) directly inside section components.

### 5.4 Form Validation & API Routes
- Use **React Hook Form** combined with **Zod** schema validation for interactive forms.
- Contact form submissions should target the `/api/contact` API route powered by **Nodemailer**.

### 5.5 Animations
- Use **Framer Motion (`motion`)** for component mount/unmount animations, scroll-triggered reveals, and micro-interactions.
- Use **GSAP** for advanced timelines or complex canvas/DOM manipulations when required.

---

## 6. Verification Checklist Before Committing
1. Run `npm run build` to verify there are no TypeScript or compilation errors.
2. Run `npm run lint` to enforce ESLint rules.
3. Ensure no hardcoded dummy data breaks responsive layout or theme switching.
