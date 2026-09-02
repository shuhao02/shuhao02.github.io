# shuhao02.github.io

Personal academic homepage for Shuhao Chen, built with [Astro](https://astro.build).
Live site: <https://shuhao02.github.io>.

## Quick start

```bash
npm install      # first time only
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into ./dist
npm run preview  # serve ./dist locally
```

Node 18.17+ is required. The repo is committed with `node_modules/` and
`dist/` ignored — you don't need either of them in git.

## Editing content

Everything you'll routinely change lives in two places:

| Want to change                                      | Edit                                          |
| --------------------------------------------------- | --------------------------------------------- |
| Name, bio, contacts, news, education, awards, etc.  | [`src/data/site.ts`](src/data/site.ts)        |
| Add / remove / reorder a paper                      | A file under `src/content/publications/`      |
| Visual styling (colors, spacing, fonts)             | [`src/styles/global.css`](src/styles/global.css) |
| Page layout / section order                         | [`src/pages/index.astro`](src/pages/index.astro) |
| Visitor counter (enable, label, what it counts)      | `visitorCounter` in [`src/data/site.ts`](src/data/site.ts) |

### Adding a paper

Create `src/content/publications/<slug>.md`:

```yaml
---
title: "Your Paper Title"
authors:
  - Shuhao Chen
  - Co Author
venue: "NeurIPS 2025"
date: 2025-09-01
tldr: "One-sentence summary (optional)."
links:
  arxiv: "https://arxiv.org/abs/..."
  code:  "https://github.com/..."
highlight: false   # set true to add a subtle left-border accent
---
```

Save — Astro hot-reloads. Papers are auto-sorted by `date` (newest first).

The schema is enforced in [`src/content/config.ts`](src/content/config.ts) —
typos in frontmatter will fail the build with a clear error.

### Profile photo

`public/images/profile.png`. Replace the file in place.

### Visitor counter

The footer can show a `Visits · 1,234` counter, powered by
[GoatCounter](https://www.goatcounter.com) — free for personal sites, sets no
cookies, and stores neither IP addresses nor User-Agent strings, so there is
nothing to put behind a consent banner. The same signup also gives you a
private dashboard (referrers, top pages, countries) at
`https://<code>.goatcounter.com`.

It ships **disabled**. To turn it on:

1. Sign up at <https://www.goatcounter.com>. The *Code* you choose becomes your
   subdomain, e.g. `shuhao02` → `https://shuhao02.goatcounter.com`.
2. In that site's **Settings**, tick **"Allow adding visitor counts on your
   website"**. Without this the public counter endpoint returns 403 and the
   footer line stays hidden.
3. Set the code in [`src/data/site.ts`](src/data/site.ts):

   ```ts
   export const visitorCounter = {
     code: 'shuhao02',   // <- was ''
     ...
   };
   ```

4. `git push` — the existing Pages workflow deploys it.

Notes:

- With `code: ''` no tracking script and no footer line are emitted, and
  GoatCounter is never contacted. That is the intended "off" state, not a
  broken build.
- GoatCounter caches counter values for up to **4 hours**, so your own visit
  will not move the number right away.
- The number is fetched client-side and the footer line only appears once a
  real value arrives — if GoatCounter is slow, blocked by an ad blocker, or
  down, the footer simply renders without it.
- `path: 'TOTAL'` counts the whole site; change it to `'/'` to count only the
  home page.

## Deployment

`.github/workflows/deploy.yml` runs on every push to `main`: builds with Node 20,
then publishes `dist/` via GitHub Pages.

One-time setup on GitHub:

1. Repository **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

After that, `git push` is the entire deploy story.

## Project structure

```
.
├── .github/workflows/deploy.yml   # CI: build + deploy to GitHub Pages
├── astro.config.mjs               # Astro config
├── public/                        # Copied to dist/ as-is
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/
│       └── profile.png
├── src/
│   ├── components/
│   │   ├── PaperEntry.astro       # One paper row (title, authors, venue, links)
│   │   ├── Section.astro          # Heading + slot wrapper
│   │   └── VisitorCounter.astro   # Footer visit counter (GoatCounter)
│   ├── content/
│   │   ├── config.ts              # Zod schema for paper entries
│   │   └── publications/*.md      # Peer-reviewed papers
│   ├── data/site.ts               # Profile, bio, news, education, services
│   ├── layouts/BaseLayout.astro   # <html> shell + global styles
│   ├── pages/
│   │   ├── index.astro            # The home page
│   │   └── 404.astro
│   └── styles/global.css          # All styling (no Tailwind / framework)
└── package.json
```
