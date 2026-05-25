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
│   │   └── Section.astro          # Heading + slot wrapper
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
