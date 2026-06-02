# LoreEngine

LoreEngine is a portfolio web app for gaming industry intelligence. It presents a weekly executive-style brief for gaming news, AI disruption, market movement, and company/platform strategy in a polished dark dashboard.

The product direction is simple: give a studio executive, investor, creator, or analyst a fast read on what changed, why it matters, and which parts of the games business may be affected next.

## Live Demo

[Open the LoreEngine dashboard](https://ethankim417.github.io/LoreEngine/)

## What This Project Shows

- Product-minded dashboard design for a specific audience
- Next.js App Router with TypeScript
- Tailwind CSS responsive UI
- Component-based frontend architecture
- Mock intelligence data shaped for a future real backend
- Article detail pages with impact analysis and source links
- Search, category filtering, source filtering, and sorting
- Local bookmark interactions
- Market Pulse watchlist with cached quote snapshot data
- Cost-conscious scaffold for future scheduled AI summarization

## Current Data Status

LoreEngine is currently a showcase build.

- Article briefs are static mock intelligence records in `data/articles.ts`.
- Market prices are a cached portfolio snapshot in `data/market.ts`.
- The app does not fetch live news in the browser.
- The app does not call an AI API.
- The app does not stream real-time stock prices.

This is intentional for the portfolio version. The code is structured so a scheduled server job can later fetch news, summarize once, score once, cache the results, and let all users read the cached brief.

## Core Features

- Weekly gaming industry brief
- Executive brief with ranked stories
- Interactive Signal Map for sector relationships
- Dashboard metrics:
  - Industry Heat
  - AI Disruption Index
  - Trending Articles
  - Market Momentum
- Article cards with impact and momentum scoring
- Article detail pages with:
  - Full TLDR
  - Why it matters
  - Possible industry impact
  - Trend analysis
  - Affected companies and sectors
- Market Pulse page organized by:
  - Hardware-related companies
  - Game engines
  - Game revenue leaders
- Vercel Cron scaffold for future weekly ingest
- GitHub Pages workflow for static portfolio deployment

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- React
- Lucide icons
- GitHub Actions
- Vercel-ready server route scaffold

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

## Deployment

### GitHub Pages

This repository includes `.github/workflows/pages.yml`.

Every push to `main` builds the app and deploys the static export to GitHub Pages.

### Vercel

The project can also be imported into Vercel with the default Next.js settings.

No environment variables are required for the current mock-data build.

For the future weekly ingest scaffold, add this only when enabling protected scheduled jobs:

```text
CRON_SECRET=your-random-secret
```

## Future AI Pipeline

The intended production architecture is cost-conscious:

1. A scheduled backend job fetches gaming and AI news once per week.
2. The backend summarizes selected articles with an AI API.
3. Impact, momentum, confidence, companies, and sectors are scored once.
4. Results are saved to a database or JSON/blob cache.
5. Frontend users read cached summaries only.

Important constraints:

- Never call AI APIs from the browser.
- Never summarize articles on every page load.
- Tie AI cost to weekly article volume, not visitor count.

See [FUTURE_AI_PIPELINE.md](./FUTURE_AI_PIPELINE.md) for the planned architecture and pseudo-code.

## Project Structure

```text
app/
  api/admin/weekly-ingest/route.ts
  articles/[slug]/page.tsx
  market/page.tsx
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
  metrics.ts
```

## Portfolio Notes

This project is designed as a polished product prototype, not a basic news blog. The focus is on interaction design, data modeling, frontend architecture, and a credible path toward server-side AI automation.

For reviewer context, see [PORTFOLIO_NOTES.md](./PORTFOLIO_NOTES.md).
