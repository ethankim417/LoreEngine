import { articles, type Article } from "@/data/articles";
import { getArticleLocalizationStatus } from "@/lib/localizedContent";
import { getUniqueSourceCount } from "@/lib/sourceStats";

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
  selectedBriefArticles: number;
  uniqueSourceOutlets: number;
  localization: ReturnType<typeof getArticleLocalizationStatus>;
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
  const localization = getArticleLocalizationStatus(articles);

  return {
    status: "scaffold",
    mode: "mock",
    cadence: "weekly",
    fetchedItems: 0,
    processedItems: articles.length,
    selectedBriefArticles: articles.length,
    uniqueSourceOutlets: getUniqueSourceCount(articles),
    localization,
    savedToCache: false,
    generatedAt: new Date().toISOString(),
    nextSteps: [
      "Add RSS feed URLs",
      "Add durable storage for cached weekly briefs",
      "Generate and save English/Korean summaries plus slug-matched Korean article translations in the same server job",
      "Write a fresh English and Korean editorial headline tied to the selected lead article",
      "Run the localization check and fail the weekly run if either language is missing or stale",
      "Add server-only AI summarization behind an API key",
      "Replace mock article import with cached weekly results"
    ]
  };
}
