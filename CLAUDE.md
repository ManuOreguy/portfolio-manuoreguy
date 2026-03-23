# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev      # Start development server
yarn build    # Build for production
yarn start    # Start production server
yarn lint     # Run ESLint
```

No test suite is configured.

## Architecture

Single-page portfolio built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v3**.

### Data flow

All content (experience, projects, nav items, social links) lives in `src/app/constants/data.ts` as typed constants. Types are defined in `src/app/lib/types.ts`. To update portfolio content, edit `data.ts` — no other files need changing.

### Page structure

`src/app/page.tsx` composes the single-page layout with four sections: Hero, TechStack, ExperienceTimeline, and ContactForm. A Projects section exists but is currently commented out.

### Components

All components live under `src/app/_components/` organized by section:
- `layout/` — `Header` and `Footer` (used in root layout)
- `home/` — `Hero`, `TechStack`
- `experience/` — `ExperienceTimeline`, `ExperienceCard`
- `contact/` — `ContactForm`
- `projects/` — `ProjectCard` (unused, section commented out)
- `ui/` — `Input`, `WhatsAppQR`

### Email API

`src/app/api/sendEmail/route.ts` — Next.js Route Handler that uses **nodemailer** with Gmail SMTP. Requires three env vars at runtime:

```
EMAIL_USER=<gmail address>
EMAIL_APP_PASSWORD=<gmail app password>
EMAIL_TO=<recipient address>
```

### Styling conventions

- Dark theme enforced via `bg-gray-900` on `<body>` — ignore the light-mode CSS variables in `globals.css`, they are unused.
- Purple (`purple-500`) is the accent color throughout.
- Three Google Fonts are loaded: Outfit (`font-outfit`), Plus Jakarta Sans (`font-plus-jakarta`), Inter (`font-inter`). Default body font is Plus Jakarta Sans.
- Use `clsx` + `tailwind-merge` (via `src/app/lib/utils.ts`) for conditional class composition.
