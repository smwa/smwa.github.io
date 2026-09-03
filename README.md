# mechstack.dev

Source for [mechstack.dev](https://mechstack.dev). A static site built with
Vite + React, prerendered to plain HTML at build time, deployed to GitHub Pages
by the workflow in `.github/workflows/deploy.yml` on every push to `master`.

## Editing content

Every visible string lives in **`src/site.js`** — copy, services, portfolio
entries, status panel rows, contact links, nav labels. That's the only file to
touch for normal updates.

Layout is `src/App.jsx`, styles are `src/styles.css`.

**Type rule:** `--ms-text` (Inter) carries prose — headlines, paragraphs, card
titles. `--ms-mono` (JetBrains Mono) is reserved for things that are genuinely
machine-ish: labels, codes, the status panel readout. Don't set mono globally.

## Commands

```bash
npm install     # once, Node 20+
npm run dev     # http://localhost:5173, hot reload
npm run build   # → dist/
npm run preview # serve dist/ locally
```

## How the build works

`npm run build` runs three steps:

1. `vite build` — the normal client bundle, writing `dist/index.html` and
   `dist/privacy-policy/index.html` with an empty `<div id="root">`.
2. `vite build --config vite.ssr.config.js` — bundles `src/entry-server.jsx`
   into `.prerender/` (a Node-only build artifact, gitignored).
3. `node scripts/prerender.js` — renders the React tree to a string and injects
   it into that empty `<div id="root">`.

The result is a page whose full text is in the HTML, so crawlers, link-preview
bots, and readers without JavaScript get real content. The client bundle
hydrates it rather than re-rendering from scratch (`src/main.jsx`).

Anything rendered at build time that would differ in the browser must not
change the first client render, or hydration will mismatch. The clock in the
status panel handles this by rendering `--:--:--` until `useEffect` runs
(`useNow` in `src/App.jsx`); the copyright year uses `suppressHydrationWarning`.

## Deploying

Push to `master`. The Action builds, copies `index.html` to `404.html`,
touches `.nojekyll`, and publishes `dist/` to Pages. `CNAME` pins the custom
domain; `VITE_BASE=/` in the workflow keeps asset paths at the domain root.

## Layout

```
├── index.html                  # shell + meta for /
├── privacy-policy/index.html   # shell + meta for /privacy-policy
├── vite.config.js              # client build
├── vite.ssr.config.js          # prerender build
├── scripts/prerender.js        # injects rendered HTML into dist/
├── public/assets/              # logo, favicon, og-image, headshot
└── src/
    ├── main.jsx                # client entry for /
    ├── privacy-policy-main.jsx # client entry for /privacy-policy
    ├── entry-server.jsx        # build-time render entry
    ├── site.js                 # ★ all visible copy ★
    ├── App.jsx                 # page layout
    ├── PrivacyPolicy.jsx       # privacy policy page
    └── styles.css              # styles for both pages
```
