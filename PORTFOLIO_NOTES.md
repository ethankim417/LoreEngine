# Portfolio Notes

## Project Summary

LoreEngine is a portfolio-grade intelligence dashboard for the gaming industry. It combines gaming news framing, AI industry analysis, and market watchlist patterns into a weekly brief experience.

The project was built to demonstrate product taste, frontend engineering, and practical AI-system planning without requiring a paid API in the initial version.

## Audience

The target user is someone who wants a fast strategic read on the games business:

- Studio executives
- Product and publishing teams
- Investors and analysts
- Gaming creators
- Business development teams

## Design Intent

The interface is meant to feel like a serious intelligence product rather than a news blog. Visual references include financial terminals, game platform dashboards, and AI command-center interfaces.

Key design choices:

- Dark interface for focus and premium tone
- Dense but controlled dashboard layout
- Compact executive brief above the article feed
- Sector relationship map to make the product feel analytical
- Article cards focused on impact and momentum
- Detail pages for deeper reasoning and source context

## Engineering Notes

- Built with Next.js, TypeScript, and Tailwind CSS.
- Uses typed local data files for mock articles and market players.
- Keeps AI/news automation server-side in the future pipeline.
- Includes a Vercel Cron-compatible route scaffold.
- Includes GitHub Pages deployment workflow for easy portfolio hosting.

## Data Honesty

The current version is not a live news or live market data product.

- News and summaries are mock records.
- Market prices are a cached snapshot.
- AI summaries are not generated at runtime.
- No AI API is called from the browser.

This is intentional. The portfolio build emphasizes product/UI quality while keeping deployment free and predictable.

## Future Production Path

A production version would add:

- RSS/news collection
- Deduplication and relevance filtering
- Server-only AI summarization
- Impact and momentum scoring
- Cached weekly results in a database or blob store
- Scheduled refresh via Vercel Cron or a worker
- Optional authenticated admin controls

The most important architectural rule is that users should only read cached summaries. Summarization should happen once per scheduled run, not on every page visit.

## Talking Points

- Why a weekly brief is more cost-conscious than live AI summarization.
- How the data model already supports cached AI-generated summaries.
- How source links, impact scores, trend scores, sectors, and confidence fields map to future automation.
- How the UI was iterated to reduce clutter while keeping a premium dashboard feel.
- How the market module is separated from the news intelligence module.

## Known Limitations

- No real backend database yet.
- No live RSS/news ingestion yet.
- No real-time stock quote integration yet.
- Market data is a cached snapshot, not streaming financial data.
- Impact and trend scores are sample values until a scoring pipeline is implemented.
