# Codetopia Academy

The public site for Codetopia Academy — the education division delivering structured programs, courses, and certifications for the next generation of technologists.

A [codetopia.org](https://codetopia.org) initiative. Currently a coming-soon landing page.

---

## Stack

Vite · React 19 · TypeScript · Tailwind CSS v4 · Oxlint · pnpm

---

## Project structure

```
src/
  App.tsx       # the coming-soon page
  index.css     # Tailwind import + global styles
  main.tsx      # entry point
  assets/       # images (logo, etc.)
public/
  favicon.png   # site favicon
```

---

## Fonts

- **Inter** — body/supporting text
- **Space Grotesk** — display text (headline word, background wordmark)

Both loaded via Google Fonts in `index.html`, matching the pairing used on [codetopia.org](https://codetopia.org).

---

## Commands

```bash
pnpm dev       # start dev server
pnpm build     # type-check and build for production
pnpm preview   # preview the production build locally
pnpm lint      # run oxlint
```
