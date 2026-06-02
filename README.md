# LoreEngine

![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel%20TBD-black?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-Frontend-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=for-the-badge&logo=tailwindcss)
![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-black?style=for-the-badge&logo=vercel)
![AI Assisted](https://img.shields.io/badge/AI--assisted-build-purple?style=for-the-badge)
![Portfolio Project](https://img.shields.io/badge/Portfolio-Project-22c55e?style=for-the-badge)

LoreEngine is a recruiter-facing portfolio prototype for gaming industry intelligence. It turns gaming, AI, market, studio, platform, and hardware signals into a polished weekly executive brief.

**Live Demo:** [Live Demo - Vercel link here]  
**Current Public Mirror:** [GitHub Pages](https://ethankim417.github.io/LoreEngine/)  
**GitHub Repo:** [ethankim417/LoreEngine](https://github.com/ethankim417/LoreEngine)

## For Recruiters

LoreEngine is designed to demonstrate the kind of hybrid product and technical judgment expected from a Technical Program Manager, AI-savvy technical manager, or product-minded operator.

- **Product thinking:** turns a vague domain need into a focused weekly intelligence workflow.
- **Technical fluency:** uses Next.js, TypeScript, Tailwind CSS, component architecture, static data modeling, and a future backend ingest scaffold.
- **Program management instincts:** separates MVP scope from future automation, documents tradeoffs, and makes deployment/readiness visible.
- **AI-native workflow:** uses AI as an execution accelerator while keeping product direction, architecture decisions, and cost controls explicit.

## What This Demonstrates

- Turning an ambiguous product idea into a scoped MVP.
- Designing a dashboard for executive scanning instead of casual browsing.
- Structuring a modern frontend with reusable typed components.
- Thinking ahead about AI cost, caching, deployment, and operational risk.
- Communicating tradeoffs clearly through repo documentation.

## Why This Project Is Interesting

Gaming leaders often need to scan news across AI tools, engines, platforms, esports, creators, hardware, and public markets. A normal news feed is noisy; LoreEngine reframes that stream as an executive brief with impact scores, trend movement, affected sectors, and market context.

The current version is a portfolio MVP using mock/cached data, but the repository is structured for a later scheduled backend job that can fetch articles, summarize them once, score them once, cache the result, and serve the same brief to every visitor without calling AI APIs from the browser.

## Screenshot / GIF

Screenshots are intentionally not invented in this repo. Add real captures after deployment:

- `docs/screenshots/loreengine-dashboard.png`
- `docs/screenshots/loreengine-article-detail.png`
- `docs/screenshots/loreengine-market-pulse.png`

See [docs/screenshots/README.md](./docs/screenshots/README.md) for capture guidance.

## My Role

Built and directed by **Ethan Kim** as an AI-assisted portfolio project.

Responsibilities represented in the repo:

- Defined the product concept, target user, and weekly brief framing.
- Iterated on information hierarchy, dashboard language, and visual clarity.
- Structured the frontend into reusable components and typed data models.
- Added documentation for design rationale, architecture, roadmap, and future AI ingestion.
- Kept the MVP cost-conscious by using mock/cached data instead of live AI calls.

## Features

- Weekly executive brief dashboard for gaming and AI industry signals
- Futuristic dark interface with responsive layouts and subtle visual systems
- Article cards with TLDRs, impact scoring, trend scoring, confidence, sectors, and source links
- Search, category filtering, source-type filtering, and sorting
- Article detail pages with why-it-matters analysis and trend context
- Market Pulse view for hardware companies, game engines, and game revenue leaders
- Static/cached market snapshot data for portfolio realism
- Vercel Cron scaffold for future weekly ingest
- GitHub Pages workflow for public portfolio hosting

## Tech Stack

- **Framework:** Next.js App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI:** React components, Lucide icons
- **Data:** Local TypeScript mock/cached datasets
- **Deployment:** Vercel-ready, GitHub Pages static export workflow
- **Future backend:** Scheduled weekly ingest route and cache-first AI pipeline scaffold

## Architecture Overview

```text
app/
  api/admin/weekly-ingest/route.ts
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
  metrics.ts
```

The frontend reads local mock/cached records today. The planned production path is server-side only: collect RSS/news sources on a schedule, summarize with an AI provider once, save the results, and let the dashboard read from the cache.

Read more:

- [Architecture](./docs/ARCHITECTURE.md)
- [Design Rationale](./docs/DESIGN.md)
- [Product Brief](./docs/PRODUCT_BRIEF.md)
- [Roadmap](./docs/ROADMAP.md)
- [Future AI Pipeline](./FUTURE_AI_PIPELINE.md)

## Product And Design Reasoning

LoreEngine is not meant to feel like a generic blog. The interface is built around a daily/weekly brief mental model: quick headline scanning, stronger signals surfaced first, market context nearby, and deeper article analysis one click away.

Key decisions:

- Use mock data first so the product story and UI can be judged without backend complexity.
- Show scores and sectors to make each article feel decision-oriented.
- Keep detailed methodology available without overloading the dashboard.
- Use a compact market view to support industry context without turning the product into a trading terminal.
- Document the AI pipeline before enabling it, so cost and privacy constraints are clear.

## AI-Assisted Workflow

AI accelerated implementation, design iteration, copy refinement, and documentation drafting. Ethan directed the product goals, selected the scope, evaluated the UI, requested design changes, and made the core tradeoff decisions.

The app does **not** call an AI API in the browser. The intended future approach is to use AI only in a scheduled backend workflow, then serve cached summaries to users.

## Data Status

Current version:

- Uses mock article intelligence in [data/articles.ts](./data/articles.ts)
- Uses cached/manual market snapshot data in [data/market.ts](./data/market.ts)
- Does not fetch live news on page load
- Does not stream real-time stock prices
- Does not call a paid AI API

This keeps the portfolio demo reliable, fast, and free to run.

## Tradeoffs

- Mock data makes the demo stable but does not prove live data ingestion yet.
- Cached market prices communicate the product concept but should not be treated as financial data.
- The future ingest route is scaffolded, not connected to real RSS feeds, databases, or AI providers.
- The design prioritizes executive scanning over exhaustive article detail.

## Next Improvements

- Add the real Vercel deployment URL to this README.
- Capture and add real dashboard screenshots/GIFs.
- Connect a weekly RSS/news collection job.
- Store generated briefs in a database or object cache.
- Add source freshness metadata and editorial review status.
- Add tests around scoring, filtering, and data validation.

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

### Vercel

Import the repository into Vercel using the default Next.js settings.

No environment variables are required for the current mock-data build. If the future protected weekly ingest endpoint is enabled, add:

```text
CRON_SECRET=your-random-secret
```

### GitHub Pages

This repository also includes `.github/workflows/pages.yml` for static portfolio deployment from `main`.

## GitHub Repo Polish

Suggested GitHub repository description:

```text
AI-assisted gaming industry intelligence dashboard built with Next.js, TypeScript, and Tailwind CSS.
```

Suggested topics:

```text
nextjs, typescript, tailwindcss, portfolio, dashboard, gaming, ai, product-management, vercel
```
