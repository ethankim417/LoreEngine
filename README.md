# LoreEngine

![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel%20TBD-black?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Frontend-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)
![AI Assisted](https://img.shields.io/badge/AI--assisted-build-purple?style=for-the-badge)

LoreEngine is an AI-assisted gaming industry intelligence dashboard. I built it to test how far Codex can help me turn an idea into a usable product, while also creating a tool that helps me stay current on gaming, AI, market, studio, platform, and hardware signals.

**Live Demo:** [Live Demo - Vercel link here]  
**Planned Custom Domain:** `https://lore-engine.ethankim.cc`  
**Current Public Mirror:** [GitHub Pages](https://ethankim417.github.io/LoreEngine/)  
**GitHub Repo:** [ethankim417/LoreEngine](https://github.com/ethankim417/LoreEngine)

## Why I Built This

I wanted a project that was useful to me, not just a generic demo.

The gaming industry moves across too many disconnected sources: AI tools, game engines, public companies, console strategy, esports, creators, layoffs, hiring, and hardware. LoreEngine is my attempt to shape that noise into a weekly brief I would actually want to open.

The second goal was to test Codex as a product-building partner. I used it to move quickly through UI iteration, component structure, documentation, and deployment cleanup, while I directed the product decisions and kept the scope honest.

## What I Am Testing

- Can Codex help build a polished product from a rough idea?
- Can I use AI to iterate faster without losing product judgment?
- Can a static prototype be structured so it can later support real weekly summaries?
- Can gaming industry news be framed more like an intelligence brief than a news feed?

## What LoreEngine Does

- Presents a weekly gaming industry brief.
- Tracks mock gaming, AI, market, studio, platform, esports, and hardware signals.
- Scores articles by impact, trend, confidence, and affected sectors.
- Supports search, category filters, source-type filters, and sorting.
- Opens article detail pages with TLDRs, why-it-matters context, and trend analysis.
- Includes a Market Pulse view for major public companies connected to gaming.
- Includes a weekly Vercel Cron refresh for market close-price data.
- Includes compact dashboard and Market Pulse disclaimers for data/financial context.
- Includes a future weekly ingest scaffold for server-side AI/news summarization.

## Current Data Status

This version uses mock and cached data on purpose.

- Articles live in [data/articles.ts](./data/articles.ts).
- Market fallback snapshots live in [data/market.ts](./data/market.ts).
- On Vercel, `/api/market` can refresh public close-price data server-side.
- The browser does not call a news API.
- The browser does not call an AI API.
- Stock prices are weekly/cached close-price data, not real-time financial data.
- Dashboard and Market Pulse disclosures clarify that the project is informational only.

The intended future version would fetch sources on a schedule, summarize selected articles once on the server, cache the finished brief, and let users read that cached result.

## Screenshot / GIF

Real screenshots should be added after the final Vercel deployment:

- `docs/screenshots/loreengine-dashboard.png`
- `docs/screenshots/loreengine-article-detail.png`
- `docs/screenshots/loreengine-market-pulse.png`

See [docs/screenshots/README.md](./docs/screenshots/README.md).

The app also includes a branded favicon and Open Graph preview asset:

- [public/favicon.svg](./public/favicon.svg)
- [public/loreengine-og.svg](./public/loreengine-og.svg)

## Tech Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** React components, Lucide icons
- **Data:** Local TypeScript mock/cached datasets
- **Deployment:** Vercel-ready, GitHub Pages static export workflow
- **Runtime data:** Vercel API route for weekly/cached market close-price refresh
- **Future backend:** Scheduled weekly ingest route and cache-first AI/news pipeline scaffold

## Architecture Overview

```text
app/
  api/admin/weekly-ingest/route.ts
  api/admin/market-refresh/route.ts
  api/market/route.ts
  articles/[slug]/page.tsx
  market/page.tsx
  methodology/page.tsx
  page.tsx
components/
  ArticleCard.tsx
  ExecutiveBrief.tsx
  IntelligenceDashboard.tsx
  MarketPulse.tsx
  SignalConstellation.tsx
data/
  articles.ts
  market.ts
lib/
  format.ts
  futurePipeline.ts
  marketData.ts
  metrics.ts
scripts/
  smoke.mjs
```

Read more:

- [Architecture](./docs/ARCHITECTURE.md)
- [Design Rationale](./docs/DESIGN.md)
- [Product Brief](./docs/PRODUCT_BRIEF.md)
- [Roadmap](./docs/ROADMAP.md)
- [Future AI Pipeline](./FUTURE_AI_PIPELINE.md)

## AI-Assisted Workflow

Codex helped accelerate implementation, copy iteration, layout adjustments, documentation, and repo cleanup. I used it as a build partner, not as an autopilot: the product framing, audience, iteration requests, and tradeoff decisions came from me.

The most important AI architecture rule in this repo is simple: never call AI APIs directly from the browser, and never summarize articles on every page load. Future summaries should be generated in a scheduled backend job and served from cache.

## Product Direction

LoreEngine is meant to feel like a daily or weekly command brief for the gaming industry. The design goal is closer to an intelligence dashboard than a blog: fewer paragraphs, clearer signals, stronger prioritization, and fast paths into detail when something matters.

Current market automation:

- Vercel Cron calls `/api/admin/market-refresh` weekly.
- The refresh pulls public chart close-price data where available.
- The app falls back to the local snapshot if a ticker or provider fails.
- The GitHub Pages mirror remains static because it cannot run backend routes.

Future improvements:

- Replace mock articles with a weekly RSS/news ingest.
- Add a database or object cache for generated briefs.
- Add source freshness and editorial review status.
- Add tests around filtering, sorting, scoring, and article routing.
- Add real screenshots and the final Vercel URL.

## Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
```

Smoke checks against a running local or deployed app:

```bash
npm run smoke
BASE_URL=https://lore-engine.ethankim.cc npm run smoke
```

## Deployment

### Vercel

Import the repository into Vercel using the default Next.js settings.

No environment variables are required for the current mock-data build. If the future protected weekly ingest endpoint is enabled, add:

```text
CRON_SECRET=your-random-secret
```

### GitHub Pages

This repository also includes `.github/workflows/pages.yml` for static portfolio deployment from `main`.

## Suggested GitHub Metadata

Description:

```text
AI-assisted gaming industry intelligence dashboard built with Next.js, TypeScript, and Tailwind CSS.
```

Topics:

```text
nextjs, typescript, tailwindcss, dashboard, gaming, ai, codex, vercel
```
