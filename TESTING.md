# Testing Guide

This portfolio uses **Playwright** for end-to-end tests plus a manual QA checklist.

## Automated tests (Playwright)

### One-time setup

```bash
npm install
npx playwright install --with-deps
```

### Run the suite

```bash
npm test          # headless, runs against a production preview build
npm run test:ui   # interactive UI mode
```

Playwright auto-runs `npm run build && npm run preview` (see `playwright.config.js`)
and tests against `http://localhost:4173` on both a desktop (Chromium) and a
mobile (iPhone 13) project.

### What the E2E suite covers (`tests/portfolio.spec.js`)

1. Document title is `John Loyd Belen | Full Stack Developer`.
2. All sections render: `#home`, `#project`, `#about`, `#timeline`, `#contact`.
3. Nav menu links point at each section anchor.
4. All 5 project cards link to their correct external URLs.
5. Every GitHub link uses `github.com/Jol0o` (no `jloyd9836`).
6. Every `<img>` has meaningful `alt` text (no `alt="image"` / `alt="me"`).
7. "Download CV" link resolves to the resume URL.
8. Contact section exposes email (`mailto:`) and phone (`tel:`) links.
9. Served HTML includes description + Open Graph meta tags.

> Note: tests assert on hrefs/alt/text, not pixel content, so they pass even
> before the `suprah.png` / `wizyemm.png` images are added — missing images fall
> back to an inline placeholder via the `onError` handler in `Projects.jsx`.

## Manual QA checklist

Run `npm run dev` and verify in a browser:

- [ ] Splash screen animates and clears after ~2.5s.
- [ ] Spline 3D hero scene loads (or shows the loading fallback gracefully).
- [ ] Smooth scrolling (Lenis) works; the down-arrow button jumps to Projects.
- [ ] Nav active-section highlight updates while scrolling.
- [ ] Mobile (≤768px): hamburger opens/closes the menu; links scroll and close it.
- [ ] Project cards hover/scale; all open the correct site in a new tab.
- [ ] New project images (`suprah.png`, `wizyemm.png`) render once added; until
      then a "Preview coming soon" placeholder shows instead of a broken image.
- [ ] All social links (Hero sidebar + Contact) open the right profiles.
- [ ] "Download CV" opens the resume.
- [ ] No errors in the browser console.
- [ ] Lighthouse spot-check: SEO and Accessibility scores are healthy.

## Adding the new project screenshots

Drop the files into `public/project/`:

- `public/project/suprah.png`
- `public/project/wizyemm.png`

No code change needed — they're already referenced in `src/data/portfolio.js`.
