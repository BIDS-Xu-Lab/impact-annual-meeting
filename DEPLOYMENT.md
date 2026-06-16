# Deployment & Updates

This site is hosted on **GitHub Pages** at **https://annual.impact-mh.org** and deploys
automatically via GitHub Actions. Most work is handled by the CI pipeline — you generally only
edit content and push.

## How deployment works

1. You push to the `main` branch (or trigger the workflow manually).
2. The workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs:
   - **build** — [`withastro/action`](https://github.com/withastro/action) auto-detects **bun**
     from `bun.lock`, installs dependencies, runs `astro build`, and uploads `dist/` as the Pages
     artifact.
   - **deploy** — [`actions/deploy-pages`](https://github.com/actions/deploy-pages) publishes that
     artifact to GitHub Pages.
3. A few moments later the changes are live at https://annual.impact-mh.org.

There is **no manual build/upload step** — never commit the `dist/` folder (it's gitignored).

## Making content updates

All routine content lives in a few files (see the [README](README.md) for the full map):

| What to change | Where |
| :-- | :-- |
| Event title, dates, city, venue, **registration link** | `src/data/agenda.ts` (`event` object) |
| Agenda sessions | `src/data/agenda.ts` (`agenda` array) |
| Hotel cards | `src/components/Hotels.astro` |
| Footer copyright | `src/components/Footer.astro` |
| Colors / theme tokens | `src/styles/global.css` (`:root`) |

To update:

```bash
bun install        # first time only
bun run dev        # preview live at http://localhost:4321 while editing
```

Then commit and push to `main`:

```bash
git add -A
git commit -m "Update agenda"
git push origin main
```

The pipeline rebuilds and redeploys automatically. Watch progress under the repo's **Actions** tab.

### Preview a production build locally (optional)

```bash
bun run build      # outputs to dist/
bun run preview    # serves the built site at http://localhost:4321
```

### Trigger a redeploy without code changes

GitHub → **Actions** tab → **Deploy to GitHub Pages** → **Run workflow** (uses `workflow_dispatch`).

## One-time setup (already-configured infrastructure)

These steps are done once per repo. They're recorded here for reference / disaster recovery.

1. **DNS (Route53):** a `CNAME` record for `annual.impact-mh.org` points at the GitHub org's
   `<org>.github.io`. *(Already in place.)*
2. **Pages source:** GitHub → **Settings → Pages → Build and deployment → Source = "GitHub
   Actions"**. This is required for the workflow to publish.
3. **Custom domain:** GitHub → **Settings → Pages → Custom domain** = `annual.impact-mh.org`, then
   tick **Enforce HTTPS** once the TLS certificate finishes provisioning (can take a few minutes).
   The [`public/CNAME`](public/CNAME) file keeps this binding intact on every deploy.

## Notes & troubleshooting

- **Action versions:** the workflow pins `actions/checkout@v6` and `withastro/action@v6`. If a run
  fails to resolve those (`Unable to resolve action ... @v6`), change them to the known-published
  majors `actions/checkout@v4` and `withastro/action@v3` — no other edits needed.
- **Custom domain got cleared after a deploy:** confirm `public/CNAME` still contains
  `annual.impact-mh.org` (it should be copied verbatim into the build output).
- **SEO:** the production URL is set as `site` in `astro.config.mjs`, which powers the canonical
  link, Open Graph/Twitter card tags (in `src/layouts/BaseLayout.astro`), and the generated
  `sitemap-index.xml` (referenced from `public/robots.txt`). Update `site` if the domain ever
  changes.
- **Images:** the brain mark lives in `src/assets/` and is optimized automatically by Astro's
  `<Image>` component. The social-card image is `public/logos/impact-wordmark.png`.
