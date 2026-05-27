# Future AI Pipeline For LoreEngine

LoreEngine is currently a mock-data showcase app. The future production version should generate daily AI summaries on the server and cache the results before users visit the dashboard.

## Goals

- Fetch gaming and AI news once per day.
- Summarize each article once.
- Score impact, trend strength, confidence, and affected sectors.
- Save the processed result to a database or JSON cache.
- Let the frontend read only cached summaries.
- Avoid AI API calls from the browser.
- Avoid summarizing content on every page load.

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

## Daily Summarization

Use a scheduled backend job such as Vercel Cron, GitHub Actions, or a small worker. Run it once per day, ideally during low traffic hours.

The job should:

1. Fetch RSS/news items.
2. Deduplicate by URL and normalized title.
3. Filter for gaming industry relevance.
4. Send selected article excerpts to an AI API from the server only.
5. Produce a structured summary.
6. Score industry impact and trend momentum.
7. Save the result.

## Cache Strategy

For the first production version, a JSON cache can work:

```text
data/cache/daily-intelligence-2026-05-27.json
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
```

## Cost Control

The most important rule: never call an AI API directly from the browser.

Frontend page views can scale from 10 to 100,000 without increasing summarization cost if users only read cached results. AI spend should be tied to the number of daily articles processed, not the number of visitors.

Recommended limits:

- Run the summarizer once per day.
- Cap the number of articles processed per run.
- Skip duplicate or low-relevance stories.
- Store summaries permanently.
- Reuse cached summaries until the next scheduled refresh.
- Log token usage and per-run cost.

## Pseudo-Code

```ts
async function dailyLoreEngineJob() {
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

  await saveCachedDailyResults(cachedResults);

  return {
    processed: cachedResults.length,
    savedAt: new Date().toISOString()
  };
}
```

## Next Implementation Steps

1. Add RSS feed configuration.
2. Add a real storage layer such as Postgres, SQLite, or a durable JSON blob store.
3. Replace `lib/futurePipeline.ts` with actual fetch, summarize, score, and save functions.
4. Protect `app/api/admin/daily-ingest/route.ts` with a secret token.
5. Add a Vercel Cron schedule.
6. Update the dashboard to read from the cache instead of `data/articles.ts`.
