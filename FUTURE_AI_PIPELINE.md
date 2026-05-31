# Future Weekly AI Pipeline For LoreEngine

LoreEngine is currently a mock-data showcase app. The planned production version should generate a weekly intelligence brief on the server, cache the result, and let users read that cached brief.

## Goals

- Fetch gaming and AI news once per week.
- Summarize selected articles once.
- Score industry impact, momentum, confidence, and affected sectors.
- Save the processed result to a database or JSON cache.
- Let the frontend read only cached summaries.
- Avoid AI API calls from the browser.
- Avoid summarizing content on every page load.

## Current Scaffold

The repo now includes:

- `vercel.json` with a weekly Monday cron schedule.
- `app/api/admin/weekly-ingest/route.ts` as the scheduled server endpoint.
- `lib/futurePipeline.ts` as the placeholder pipeline entry point.

The scaffold intentionally does not fetch live news or call AI APIs yet. It returns a safe mock response so Vercel can deploy the route without creating API cost.

## RSS And News Collection

Start with RSS feeds from public sources that allow collection, then normalize each item into a common shape:

```ts
type RawNewsItem = {
  title: string;
  source: string;
  url: string;
  publishedAt: string;
  excerpt: string;
};
```

Possible feed categories:

- Gaming business and publishing
- AI tooling and model releases relevant to games
- Hardware and GPU platforms
- Game engines
- Esports and streaming
- Mobile gaming
- Console and PC storefronts

## Weekly Summarization

Use a scheduled backend job such as Vercel Cron, GitHub Actions, or a small worker. Run it once per week.

The job should:

1. Fetch RSS/news items.
2. Deduplicate by URL and normalized title.
3. Filter for gaming industry relevance.
4. Send selected article excerpts to an AI API from the server only.
5. Produce a structured summary.
6. Score industry impact and trend momentum.
7. Save the result.

## Cache Strategy

For the first production version, a JSON cache or hosted blob can work:

```text
weekly-intelligence-2026-W22.json
```

For a larger version, use a database table:

```text
articles
- id
- slug
- title
- source
- category
- tldr
- full_tldr
- why_it_matters
- possible_impact
- trend_analysis
- impact_score
- trend_score
- confidence
- sectors
- companies
- source_url
- published_at
- summarized_at
- brief_week
```

## Cost Control

The most important rule: never call an AI API directly from the browser.

Frontend page views can scale from 10 to 100,000 without increasing summarization cost if users only read cached results. AI spend should be tied to the number of weekly articles processed, not the number of visitors.

Recommended limits:

- Run the summarizer once per week.
- Cap the number of articles processed per run.
- Skip duplicate or low-relevance stories.
- Store summaries permanently.
- Reuse cached summaries until the next scheduled refresh.
- Log token usage and per-run cost.

## Vercel Cron

`vercel.json` currently schedules:

```json
{
  "crons": [
    {
      "path": "/api/admin/weekly-ingest",
      "schedule": "0 13 * * 1"
    }
  ]
}
```

That runs every Monday at 13:00 UTC. Vercel Cron uses UTC.

Add `CRON_SECRET` in Vercel when moving beyond scaffold mode. The route checks for:

```text
Authorization: Bearer <CRON_SECRET>
```

## Pseudo-Code

```ts
async function weeklyLoreEngineJob() {
  const feeds = [
    "https://example.com/gaming-business.rss",
    "https://example.com/ai-news.rss",
    "https://example.com/esports.rss"
  ];

  const rawItems = await fetchArticlesFromRss(feeds);
  const uniqueItems = dedupeByUrlAndTitle(rawItems);
  const relevantItems = filterForGamingIndustryRelevance(uniqueItems);
  const cappedItems = relevantItems.slice(0, 40);

  const cachedResults = [];

  for (const item of cappedItems) {
    const summary = await summarizeOnServerOnly({
      title: item.title,
      source: item.source,
      excerpt: item.excerpt,
      url: item.url
    });

    const scored = {
      ...summary,
      impactScore: scoreIndustryImpact(summary),
      trendScore: scoreTrendMomentum(summary),
      confidence: scoreConfidence(item, summary),
      sectors: inferAffectedSectors(summary),
      sourceUrl: item.url,
      publishedAt: item.publishedAt,
      summarizedAt: new Date().toISOString()
    };

    cachedResults.push(scored);
  }

  await saveCachedWeeklyResults(cachedResults);

  return {
    processed: cachedResults.length,
    savedAt: new Date().toISOString()
  };
}
```

## Next Implementation Steps

1. Add RSS feed configuration.
2. Add a durable storage layer such as Supabase, Neon, Vercel Postgres, Upstash, or blob storage.
3. Replace the scaffold in `lib/futurePipeline.ts` with actual fetch, summarize, score, and save functions.
4. Add `CRON_SECRET` in Vercel project environment variables.
5. Update the dashboard to read from the cache instead of `data/articles.ts`.
