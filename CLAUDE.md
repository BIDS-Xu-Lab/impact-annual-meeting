# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

A single-page static site for the **IMPACT-MH 2026 Annual Meeting** (September 22nd–23rd, 2026, Rockville, MD), built with Astro 6 and deployed to GitHub Pages at **https://annual.impact-mh.org**. See [README.md](README.md) for the human-facing overview and [DEPLOYMENT.md](DEPLOYMENT.md) for the pipeline.

## Stack & commands

**Use bun, not npm.** `bun.lock` is the lockfile, and the CI action auto-detects the package manager from it. Node `>=22.12.0`.

| Command           | Action                               |
| :---------------- | :----------------------------------- |
| `bun install`     | Install dependencies                 |
| `bun run dev`     | Dev server at `localhost:4321`       |
| `bun run build`   | Build the static site to `./dist/`   |
| `bun run preview` | Preview the production build         |

There is no test suite and no linter — `bun run build` completing cleanly is the check.

## Architecture

`src/pages/index.astro` is the only page. It composes `BaseLayout` → `Hero`, `Overview`, `Agenda`, `Presentations`, `Hotels`.

- `src/layouts/BaseLayout.astro` — `<head>` metadata (canonical URL, OG/Twitter cards, Google Fonts), renders `Header`/`Footer`, and owns the **global `.reveal` IntersectionObserver** (BaseLayout.astro:60-74). Any element given `class="reveal"` anywhere in the site animates in via that one observer.
- `src/components/Overview.astro` — holds the Leaflet map. Leaflet is a real npm dependency; the map reads from `src/data/locations.ts`.
- Astro's `site` is set in `astro.config.mjs` (needed for canonical URLs, OG images, and the sitemap integration). There is no `base` path.

## Content lives in data files, not markup

Prefer editing these over touching component markup:

- `src/data/agenda.ts` — the `event` object (title, dates, city, venue, `registerUrl`, `registrationCloses`) and the `agenda` array of days/items. Agenda items take `time`, `title`, optional `note`, and optional `kind` (`"session" | "break" | "social" | "breakout"` — social/break rows get a mint accent, breakout rows a coral one). General-session items also carry a `presentations` array of `{ site, org }`; `Presentations.astro` derives its side-by-side columns from those same entries, so the site order is edited here only.
- `src/data/locations.ts` — the single source for every event location. Each entry has `id`, `kind` (`"venue" | "reception" | "hotel"`), `name`, `address`, `lat`, `lng`, and optional `url`/`note`. The Overview map pins **all** entries; the Hotels section renders only the `hotel` ones. Plain lat/lng — no maps API key involved.
- `src/data/presentations.ts` — `presentationFormat`: the Day 1 talk length, slide count, and the six `topics` every site deck covers. Array order is the slide order — `Presentations.astro` numbers the cards `01`–`06` from the index, so reordering the array renumbers them. Day 2 breakout reference material belongs here too when it lands.

The registration URL and deadline are referenced from `event` in three places (Header, Hero, Agenda). Change them in `agenda.ts` only.

## Styling conventions

Plain CSS. **No Tailwind, no CSS framework, no UI library.**

- `src/styles/global.css` holds the design tokens in `:root` plus shared classes (`.container`, `.section`, `.section-a/-b`, `.surface-dark`, `.section-tag/-title/-lead`, `.btn*`, `.reveal`).
- **Never hardcode a hex color.** Use the palette tokens: `--navy-ink`, `--navy`, `--blue`, `--blue-pale`, `--mint`, `--coral`, `--pink`, `--pink-soft`, plus role tokens (`--text-heading/-body/-muted`, `--border-light/-dark`, `--surface-card`, `--shadow-card`). Semantically, mint reads as positive/social and coral as warning.
- Everything else goes in a component-local `<style>` block. **Astro scopes those per file** — a selector written in `Header.astro` will not match an element rendered by a child component such as `Button.astro`.
- Layout tokens: `--header-height: 68px`, `--radius-card`, `--radius-pill`. Sections with an `id` already get `scroll-margin-top` for the fixed header.
- Both animation systems respect `prefers-reduced-motion`; keep it that way. `.stagger` (with an inline `--i` index) is the hero's entrance animation and is local to `Hero.astro`; `.reveal` is the global scroll-in.

## Buttons

Use `src/components/Button.astro` — props are `href`, `variant` (`"pink" | "ghost"`, default pink), `size` (`"md" | "lg"`), and `newTab` (adds `target="_blank" rel="noopener noreferrer"`). Pink is the primary CTA; ghost is the secondary and is designed for dark surfaces.

**Exception:** inside `Header.astro`, write a raw `<a class="btn btn-pink">` instead. The header needs scoped `.nav-cta .btn` size overrides, and per-file scoping means those would not reach a `<a>` rendered by `Button.astro`.

Note `.btn-lg` becomes `width: 100%` under 480px (global.css), so flex containers holding large buttons want `align-items: flex-start` to avoid stretching above that breakpoint.

## Header gotchas

`src/components/Header.astro` packs several behaviors into one `<ul id="nav-links">`:

- Under 768px that same `<ul>` becomes the mobile dropdown panel. Anything added to it collapses into the hamburger menu; anything placed outside it stays visible on mobile and crowds the bar.
- The inline script attaches a close-the-drawer handler to **every** `<a>` inside `#nav-links`, so new links get that for free.
- The plain-link styles use `a:not(.btn)` and the scrollspy query is `a[href^="#"]:not(.btn)` — this deliberately excludes button links from the nav link treatment and the active-section underline. Keep the `.btn` class on any CTA added there.
- `.nav-links li:last-child` has its mobile divider removed, so the last item should be the CTA.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml` (`withastro/action@v6` → `actions/deploy-pages@v4`). `public/CNAME` pins the custom domain and `public/robots.txt` points at the generated sitemap.

`dist/` and `.astro/` are gitignored build artifacts — CI rebuilds from source, so never hand-edit them and never commit them. Don't edit `bun.lock` directly either; change it only through `bun install`.
