import type { Article } from "@/data/articles";

export type RawNewsItem = {
  title: string;
  source: string;
  url: string;
  publishedAt: string;
  excerpt: string;
};

export type CachedSummary = Article;

// Future architecture note:
// Run this workflow from a scheduled server job, never from the browser.
// The job should fetch RSS/news once per day, summarize each article once,
// score the result, then save cached summaries to a database or JSON cache.
// Frontend users should only read cached results so page views do not create
// repeated AI API calls or uncontrolled cost growth.
export async function runDailyIntelligencePipeline(): Promise<CachedSummary[]> {
  throw new Error(
    "Placeholder only: connect RSS collection, AI summarization, scoring, and cache persistence here."
  );
}
