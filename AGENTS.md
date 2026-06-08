<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Veltacorp — Project conventions

Premium, corporate, single-page marketing site for **Veltacorp Wellness &
Fitness Solutions** (Lagos corporate-wellness company). Positions the company
as a corporate wellness & employee-engagement partner first; racket sports are
one service category, not the focus.

## Stack
- Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · `motion`
  (Framer Motion) for animation · `react-icons` · forms via Web3Forms.

## Conventions
- **All copy lives in `src/data/site.ts`** — the single source of truth. Edit
  content there, not in JSX. New certs/services/testimonials = append to arrays.
- Brand tokens are defined in `src/app/globals.css` under `@theme` (Tailwind v4
  has no `tailwind.config`). Use `brand-green`, `brand-blue`, `ink`, `muted`,
  `surface`, `line`. Fonts: `font-sans` (Inter), `font-display` (Jakarta).
- UI primitives in `src/components/ui/`; page sections in
  `src/components/sections/`; helpers in `src/lib/`.
- Single-page scroll: sections use `id` anchors matching `nav` in `site.ts`.
  Keep `scroll-padding-top` in sync with header height.
- Light theme only (no dark mode). Tasteful motion; respect
  `prefers-reduced-motion`.
- Client assets go in `public/assets/` (see its README for filenames).

