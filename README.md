# LoreEngine

LoreEngine is a production-ready portfolio web app for gaming industry intelligence. It presents trending gaming news and AI-related market signals in a dark, executive-grade dashboard inspired by Bloomberg terminals, IGN energy, Steam market awareness, and AI command-center interfaces.

The current version uses static mock data only. It does not call a paid AI API, fetch live news, or summarize articles at runtime.

## Live Demo

[Open the LoreEngine sample dashboard](https://ethankim417.github.io/LoreEngine/)

## Features

- Next.js, TypeScript, and Tailwind CSS
- Responsive dark interface with glassmorphism cards and animated glow background
- 15 realistic mock intelligence briefs across gaming, AI, business, hardware, esports, platform, and studio categories
- Dashboard metrics for Industry Heat, AI Disruption Index, Trending Articles, and Market Momentum
- Search by title or summary
- Category filtering
- Sorting by newest, impact score, or trend score
- Article detail pages with TLDR, why it matters, industry impact, trend analysis, affected companies, and sectors
- Local browser bookmarks for showcase interaction
- Placeholder backend route for a future scheduled daily ingest job

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy On Vercel

1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Deploy.

No environment variables are required for the mock-data version.

## Deploy On GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

After changes are pushed to `main`, GitHub Pages builds a static export and publishes it to:

[https://ethankim417.github.io/LoreEngine/](https://ethankim417.github.io/LoreEngine/)

## Mock Data

All current article data lives in `data/articles.ts`. The mock records are typed and structured to resemble future cached AI summaries, including impact score, trend score, confidence, sectors, affected companies, and long-form analysis fields.

## Future AI Summaries

The intended production architecture is cost-conscious:

- A scheduled backend job fetches RSS/news articles once per day.
- The server summarizes and scores each article once with an AI API.
- Results are saved to a database or JSON cache.
- Frontend users read cached summaries only.
- AI APIs are never called directly from the browser.
- Articles are never summarized on every page load.

See `FUTURE_AI_PIPELINE.md` for the planned pipeline and pseudo-code.

## Project Structure

```text
app/
  api/admin/daily-ingest/route.ts
  articles/[slug]/page.tsx
  page.tsx
components/
  ArticleCard.tsx
  IntelligenceDashboard.tsx
data/
  articles.ts
lib/
  format.ts
  futurePipeline.ts
  metrics.ts
```
