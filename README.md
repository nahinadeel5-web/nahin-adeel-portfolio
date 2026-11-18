# Nahin Adeel — Lavender & Plum Portfolio

A responsive personal developer portfolio built with Next.js 14, React, TypeScript and plain CSS. It uses no paid templates, paid APIs, icon packages or external UI libraries.

## Requirements

- Node.js 18.17 or newer
- npm
- VS Code (recommended)

## Run on Windows

1. Extract this ZIP.
2. Open the extracted `nahin-lavender-plum-portfolio` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

```bash
npm install
npm run dev
```

5. Visit http://localhost:3000

To check a production build:

```bash
npm run build
npm start
```

## Before publishing

Open `src/app/page.tsx` and update:

- The GitHub links currently point to the generic GitHub homepage. Replace them with your actual profile URL when you have it.
- The CV button points to `/Nahin-Adeel-CV.pdf`. Put your final CV PDF in the `public` folder using that exact filename, or change the link.
- Project cards 3–6 are deliberately marked **Planned**. Do not change them to Built until those projects actually work.
- The contact email is set to `nahinadeel5@gmail.com`.

## Design features

- Lavender, plum and warm cream palette
- Responsive desktop, tablet and mobile layout
- Mobile navigation menu
- Light/dark mode toggle
- Custom CSS illustration of a developer desk (no stock image dependency)
- Project cards with honest Built / Planned labels
- Email contact links
- Accessible labels on icon controls

## Free publishing

You can publish the source on GitHub for free. For a live Next.js deployment, use a provider's current free tier if eligible; check its current limits before deploying. A custom domain is optional.

## Important

This is the portfolio website, not the six separate project applications. The two cards marked Built are based on projects you have told me you made. The remaining cards are planned portfolio builds and are labelled honestly.
