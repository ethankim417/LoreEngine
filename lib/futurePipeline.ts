import { articles, type Article } from "@/data/articles";

export type RawNewsItem = {
  title: string;
  source: string;
  url: string;
  publishedAt: string;
  excerpt: string;
};

export type WeeklyPipelineResult = {
  status: "scaffold";
  mode: "mock";
  cadence: "weekly";
  fetchedItems: number;
  processedItems: number;
  savedToCache: boolean;
  generatedAt: string;
  nextSteps: string[];
};

export type CachedSummary = Article;

// Future architecture note:
// Run this workflow from a scheduled server job, never from the browser.
// The weekly job should fetch RSS/news, summarize each selected article once,
// score the result, then save cached summaries to a database or JSON cache.
// Frontend users should only read cached results so page views do not create
// repeated AI API calls or uncontrolled cost growth.
export async function runWeeklyIntelligencePipeline(): Promise<WeeklyPipelineResult> {
  return {
    status: "scaffold",
    mode: "mock",
    cadence: "weekly",
    fetchedItems: 0,
    processedItems: articles.length,
    savedToCache: false,
    generatedAt: new Date().toISOString(),
    nextSteps: [
      "Add RSS feed URLs",
      "Add durable storage for cached weekly briefs",
      "Add server-only AI summarization behind an API key",
      "Replace mock article import with cached weekly results"
    ]
  };
}
