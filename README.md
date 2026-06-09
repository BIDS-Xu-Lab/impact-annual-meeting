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
│   ├── favicon.png            # IMPACT-MH brain mark
│   └── logos/                 # brain mark + full wordmark PNGs
└── src/
    ├── data/agenda.ts         # agenda + event metadata (edit content here)
    ├── styles/global.css      # theme tokens, shared utilities, breakpoints
    ├── layouts/BaseLayout.astro
    ├── components/            # Header, Hero, Overview, Agenda, Hotels, Footer, Button
    └── pages/index.astro
```

## Updating content

- **Registration link** — set `event.registerUrl` in `src/data/agenda.ts` (currently a `#` placeholder); every Register button reads from it.
- **Agenda sessions** — add items to the `agenda` array in `src/data/agenda.ts`. Each item takes `time`, `title`, optional `note`, and optional `kind` (`"session" | "break" | "social"` — social/break items get a mint accent).
- **Hotels** — replace the placeholder cards in `src/components/Hotels.astro` once options are available.
- **Footer copyright** — edit `src/components/Footer.astro`.
- **Colors** — all theme tokens live in `:root` of `src/styles/global.css`.
