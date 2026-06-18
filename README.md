# LoreEngine

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Frontend-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)

LoreEngine is a weekly gaming industry intelligence dashboard built to help me track the intersection of games, AI, market signals, platforms, engines, and studios.

I built it for two reasons: to create a tool I would actually use to stay current, and to test how far I could push Codex as a product-building partner while still making the product, architecture, and tradeoff decisions myself.

LoreEngine is not a commercial product yet; it is a portfolio-scale prototype designed to test product thinking, AI-assisted development, and a cache-first architecture for future weekly intelligence briefs.

**Custom Domain:** `https://lore-engine.ethankim.cc`  
**Current Public Mirror:** [GitHub Pages](https://ethankim417.github.io/LoreEngine/)  
**GitHub Repo:** [ethankim417/LoreEngine](https://github.com/ethankim417/LoreEngine)

## Quick Read

- Built a weekly gaming industry dashboard to track games, AI, platforms, engines, studios, and market signals.
- Used Codex as a build partner while directing product decisions, UX, architecture, and scope.
- Implemented a polished responsive dashboard with article briefs, filters, saved briefs, market pulse, and detail pages.
- Added server-side scaffolding for weekly market refreshes, future AI/news ingest, health checks, and cache-first architecture.
- Current article data is mock/cached by design; the system is structured for future scheduled summaries, not browser-side AI calls.

## Why I Built This

I wanted a project that was useful to me, not just a generic demo.

The gaming industry moves across too many disconnected sources: AI tools, game engines, public companies, console strategy, esports, creators, layoffs, hiring, and hardware. LoreEngine is my attempt to shape that noise into a weekly brief I would actually want to open.

The second goal was to test Codex as a product-building partner. I used it to move quickly through UI iteration, component structure, documentation, and deployment cleanup, while I directed the product decisions and kept the scope honest.

## What This Project Demonstrates

- Product thinking: weekly brief framing, source strategy, market context, and information hierarchy.
- Frontend execution: responsive Next.js dashboard, article detail views, filters, saved briefs, and polished dark UI.
- Data architecture: mock/cached article data, weekly market refresh route, health endpoint, cron scaffold, and fallback behavior.
- AI judgment: Codex-assisted iteration without browser-side AI calls or page-load summarization.
- Deployment readiness: Vercel routes, Firebase Auth/Firestore, GitHub Pages mirror, sitemap, robots, metadata, and documentation.

## Questions This Project Explores

- Whether Codex can help turn a rough product idea into a usable, polished web app.
- Whether I can use AI to iterate faster without losing product judgment.
- Whether a static prototype can be structured so it can later support real weekly summaries.
- Whether gaming industry news can be framed more like an intelligence brief than a news feed.

## Product Features

- Presents a weekly gaming industry brief.
- Tracks mock gaming, AI, market, studio, platform, esports, and hardware signals.
- Scores articles by impact, trend, confidence, and affected sectors.
- Supports search, category filters, source-type filters, and sorting.
- Opens article detail pages with TLDRs, why-it-matters context, and trend analysis.
- Supports optional Google login so saved briefs can sync to an account.
- Supports English/Korean UI language switching with account-based preference sync.
- Links directly to the GitHub repository for portfolio/code review.
- Includes a Market Pulse view for major public companies connected to gaming.
- Explains source selection and weekly cadence through a dedicated source strategy page.
- Includes compact dashboard and Market Pulse disclaimers for data/financial context.

## Technical Features

- Next.js App Router with TypeScript and Tailwind CSS.
- Server API routes for market data, health checks, and protected admin refresh jobs.
- Weekly Vercel Cron refresh for market close-price data.
- Firebase Auth Google login for saved brief sync.
- Firestore bookmark sync with a local browser fallback.
- Account-based language preference sync for English/Korean UI.
- Account deletion flow for synced bookmark data.
- Sitemap, robots, Open Graph metadata, GitHub Pages mirror, and Vercel-ready deployment.
- Includes a future weekly ingest scaffold for server-side AI/news summarization.

## Data And AI Boundaries

This version uses mock and cached data on purpose.

- Articles live in [data/articles.ts](./data/articles.ts).
- Market fallback snapshots live in [data/market.ts](./data/market.ts).
- On Vercel, `/api/market` can refresh public close-price data server-side.
- The browser does not call a news API.
- The browser does not call an AI API.
- Stock prices are weekly/cached close-price data, not real-time financial data.
- Dashboard and Market Pulse disclosures clarify that the project is informational only.
- Google login is optional. If Firebase is unavailable, bookmarks continue to work locally in the browser.

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
- **Auth/storage:** Firebase Auth and Firestore for saved briefs and language preference
- **Future backend:** Scheduled weekly ingest route and cache-first AI/news pipeline scaffold

## Architecture Overview

```text
app/
  api/admin/weekly-ingest/route.ts
  api/admin/market-refresh/route.ts
  api/health/route.ts
  api/market/route.ts
  articles/[slug]/page.tsx
  market/page.tsx
  methodology/page.tsx
  sources/page.tsx
  robots.ts
  sitemap.ts
  page.tsx
components/
  ArticleCard.tsx
  AuthAccount.tsx
  ExecutiveBrief.tsx
  IntelligenceDashboard.tsx
  MarketPulse.tsx
  SignalConstellation.tsx
data/
  articles.ts
  market.ts
  sourceStrategy.ts
lib/
  bookmarksClient.ts
  firebase.ts
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
- [Data Model](./docs/DATA_MODEL.md)
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
- The active schedule is Tuesday at 14:00 UTC.
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

No environment variables are required for the mock-data browsing experience. For protected cron routes, add:

```text
CRON_SECRET=your-random-secret
```

Google login and bookmark sync use Firebase Auth and Firestore client SDK configuration from [firebase-applet-config.json](./firebase-applet-config.json). In Firebase Console, enable the Google sign-in provider and add the deployed domains, including Vercel preview/production domains and `lore-engine.ethankim.cc`, to the authorized domains list.

Account deletion is available from the account menu. It deletes the synced Firebase user document, clears local saved briefs in the current browser, and signs the user out.

Firestore rules are included in [firestore.rules](./firestore.rules). Deploy them from Firebase tooling so users can read and write only their own `users/{uid}` document.

The privacy/legal page is available at `/privacy`.

### GitHub Pages

This repository also includes `.github/workflows/pages.yml` for static portfolio deployment from `main`.

## Suggested GitHub Metadata

Description:

```text
Weekly gaming industry intelligence dashboard built with Next.js, TypeScript, Tailwind CSS, cached market data, and Codex-assisted iteration.
```

Topics:

```text
nextjs, typescript, tailwindcss, dashboard, gaming, ai, portfolio, codex, vercel, firebase, google-auth, market-data
```
