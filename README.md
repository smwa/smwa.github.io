# Mechstack — production site

Static site, built with Vite. Outputs a small `dist/` folder you can drop on
any host (Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, GitHub Pages,
nginx, …).

## One-time setup

```bash
cd prod
npm install
```

You need [Node.js](https://nodejs.org) 18 or newer.

## Edit content

Almost everything visible on the site lives in **`src/site.js`**. Open it,
edit the strings, save. That's the only file you need to touch for normal
copy/portfolio updates.

For the four blueprint diagrams in the Work section, see **`src/diagrams.jsx`**.

For colors and layout, see **`src/v1.css`**.

## Develop locally

```bash
npm run dev
```

Opens [http://localhost:5173](http://localhost:5173) with hot reload — saving
any file refreshes the browser automatically.

## Build for production

```bash
npm run build
```

Produces a `dist/` folder containing:

- `index.html`
- `assets/` — minified, content-hashed JS + CSS bundle
- your images (logo, favicon, og-image, headshot)

Upload the **contents** of `dist/` to your host. That's the entire deploy.

## Preview the production build

```bash
npm run preview
```

Serves `dist/` locally so you can sanity-check before deploying.

## Replace the headshot

Drop your real photo at `public/assets/headshot-placeholder.png` (3:4 portrait
recommended, ~900×1200), or rename it and update `about.portrait.image` in
`src/site.js`.

To hide the portrait entirely, set `about.portrait.image: null` in `src/site.js`.

## Deploy: GitHub Pages (automated)

A workflow at `.github/workflows/deploy.yml` builds and publishes the site
on every push to `main`.

**One-time setup:**

1. Push the repo to GitHub. Make sure the `prod/` folder (including
   `prod/.github/workflows/deploy.yml`) is at the repo root.
   *Note:* the workflow file must live at the **repo root** under
   `.github/workflows/`, not inside `prod/`. If you've kept everything
   in `prod/`, move the `.github` folder up one level so the path is
   `<repo-root>/.github/workflows/deploy.yml`.
2. In GitHub: **Settings → Pages → Build and deployment → Source:
   "GitHub Actions"**.
3. Commit a `package-lock.json` (run `npm install` once locally and
   commit the result) — the workflow uses `npm ci`.
4. Push to `main`. The Action runs, builds `prod/dist/`, and publishes it.

Your site lives at `https://<user>.github.io/<repo>/`.

**Custom domain (e.g. `mechstack.dev`):**

1. In **Settings → Pages**, set the custom domain to `mechstack.dev`.
   GitHub creates a `CNAME` file in the published artifact for you.
2. At your DNS provider, point `mechstack.dev` (apex) to GitHub Pages
   IPs (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) and
   `www` as a `CNAME` to `<user>.github.io`.
3. Edit the workflow: change `VITE_BASE: /${{ github.event.repository.name }}/`
   to `VITE_BASE: /` so assets resolve from the domain root.

## Deploy targets — other options

**Netlify / Vercel / Cloudflare Pages:** point at this folder, set build
command `npm run build`, publish directory `dist`.

**Plain web host / nginx:** upload contents of `dist/` to your web root.

## File map

```
prod/
├── package.json         # dependencies + npm scripts
├── vite.config.js       # build config (rarely needs changes)
├── index.html           # html shell + meta tags + favicon
├── public/              # static files copied as-is to dist/
│   └── assets/          # logo, favicon, og-image, headshot
└── src/
    ├── main.jsx         # app entry — mounts <App /> into #root
    ├── site.js          # ★ all visible copy lives here ★
    ├── diagrams.jsx     # the 4 blueprint SVGs in Work section
    ├── v1.jsx           # page layout (presentation only)
    └── v1.css           # styles
```
