# IMPACT-MH 2026 Annual Meeting

Single-page static site for the IMPACT-MH 2026 Annual Meeting — September 22nd–23rd, 2026, Rockville, MD. Built with [Astro](https://astro.build) and [bun](https://bun.sh), styled with plain CSS using the IMPACT-MH palette from [impact-mh.org](https://impact-mh.org).

## Commands

All commands run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `bun install`     | Install dependencies                         |
| `bun run dev`     | Start dev server at `localhost:4321`         |
| `bun run build`   | Build the static site to `./dist/`           |
| `bun run preview` | Preview the production build locally         |

## Project structure

```text
/
├── public/
│   ├── favicon.png            # IMPACT-MH brain mark (favicon)
│   ├── CNAME                  # custom domain pin for GitHub Pages
│   ├── robots.txt             # references the generated sitemap
│   └── logos/                 # full wordmark PNG (used as the social/OG image)
└── src/
    ├── assets/impact-brain.png # brain mark, optimized via astro:assets
    ├── data/agenda.ts         # agenda + event metadata (edit content here)
    ├── styles/global.css      # theme tokens, shared utilities, breakpoints
    ├── layouts/BaseLayout.astro
    ├── components/            # Header, Hero, Overview, Agenda, Hotels, Footer, Button
    └── pages/index.astro
```

Hosted on GitHub Pages at **https://annual.impact-mh.org** — see [DEPLOYMENT.md](DEPLOYMENT.md) for the CI/CD pipeline and redeployment steps.

## Updating content

- **Registration** — the form URL and closing date live in the `event` object in `src/data/agenda.ts` (`registerUrl`, `registrationCloses`); they feed the header, hero, and Agenda CTAs. The notice wording and contact address are in the `.registration-notice` block of `src/components/Agenda.astro`.
- **Agenda sessions** — add items to the `agenda` array in `src/data/agenda.ts`. Each item takes `time`, `title`, optional `note`, and optional `kind` (`"session" | "break" | "social"` — social/break items get a mint accent). Session types are separated by rail color.
- **Map & hotels** — both read from `src/data/locations.ts`, the single source for all event locations. Each entry takes `id`, `kind` (`"venue" | "reception" | "hotel"`), `name`, `address`, `lat`, `lng`, and optional `url`/`note`. The Overview map pins every entry; the Hotels section renders the `hotel` ones. Coordinates are plain lat/lng — no API key is involved.
- **Footer copyright** — edit `src/components/Footer.astro`.
- **Colors** — all theme tokens live in `:root` of `src/styles/global.css`.
