# LoreEngine Data Model

LoreEngine currently uses local TypeScript data files so the product stays reliable as a portfolio project while leaving a clear path to real weekly ingestion later.

## Article Briefs

Source: `data/articles.ts`

Each article record includes:

- `title`, `source`, `sourceUrl`, and `publishedAt` for citation context.
- `sourceCredibility` for filtering by source type.
- `category` for high-level dashboard filtering.
- `tldr`, `fullTldr`, `whyItMatters`, `possibleImpact`, and `trendAnalysis` for brief-style editorial framing.
- `impactScore`, `trendScore`, and `confidence` for dashboard ranking.
- `sectors` and `companies` for affected-market context.
- `visual` for the article card and detail-page image treatment.

These records are mock/editorial sample intelligence. They do not update automatically yet.

## Market Snapshot

Source: `data/market.ts`

The market module stores a fallback snapshot with:

- `players`: public companies relevant to gaming hardware, engines, or game revenue.
- `groups`: dashboard groupings used by the Market Pulse page.
- `snapshotDate`, `refreshedAt`, and `mode` for freshness context.
- `updatedTickers` and `failedTickers` for refresh transparency.

On Vercel, `/api/market` can refresh weekly close-price data server-side through the public Yahoo chart endpoint. The browser only reads the cached response.

## Future Weekly Brief Contract

A future database or JSON cache can use the same shape as `Article` and `MarketSnapshot`. The intended pipeline is:

```text
fetch sources -> dedupe candidates -> summarize once server-side -> score impact -> save cached brief -> frontend reads cache
```

Cost-control rule: AI summarization should happen in scheduled backend work only. The browser should never call AI providers and page loads should never trigger summarization.
