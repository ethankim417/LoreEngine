import { articles, type Article } from "@/data/articles";

export type DashboardMetric = {
  id: "industry-heat" | "ai-disruption-index" | "trending-articles" | "market-momentum";
  label: string;
  value: string;
  delta: string;
  tone: "cyan" | "violet" | "green" | "amber";
  shortDescription: string;
  definition: string;
  calculation: string;
  interpretation: string;
  inputs: string[];
};

const average = (values: number[]) =>
  values.length === 0
    ? 0
    : Math.round(values.reduce((total, value) => total + value, 0) / values.length);

export function getDashboardMetrics(source: Article[] = articles): DashboardMetric[] {
  const averageImpact = average(source.map((article) => article.impactScore));
  const averageTrend = average(source.map((article) => article.trendScore));
  const aiArticles = source.filter((article) =>
    article.category === "AI" || article.sectors.some((sector) => sector.includes("AI"))
  );
  const aiDisruption = average(aiArticles.map((article) => article.impactScore));
  const highMomentum = source.filter(
    (article) => article.impactScore >= 80 || article.trendScore >= 30
  ).length;

  return [
    {
      id: "industry-heat",
      label: "Industry Heat",
      value: `${averageImpact}/100`,
      delta: "+11 pts",
      tone: "cyan",
      shortDescription: "A blended pressure gauge for how consequential this weekly brief looks.",
      definition:
        "Industry Heat compresses the average impact score across the current intelligence feed into a 0-100 market temperature.",
      calculation:
        "Average of all article Industry Impact Scores, rounded to the nearest whole number.",
      interpretation:
        "70+ suggests an unusually active news cycle. 85+ means several stories could affect strategy, budgets, hiring, or platform positioning.",
      inputs: ["Article impact scores", "Current filtered intelligence corpus", "Mock analyst scoring"]
    },
    {
      id: "ai-disruption-index",
      label: "AI Disruption Index",
      value: `${aiDisruption}/100`,
      delta: "+18 pts",
      tone: "violet",
      shortDescription: "A focused read on how strongly AI-related stories may reshape game production.",
      definition:
        "AI Disruption Index isolates AI-tagged and AI-sector stories, then measures their average strategic impact.",
      calculation:
        "Average impact score for articles categorized as AI or tagged with an AI-related affected sector.",
      interpretation:
        "A high score means AI is not just present in the feed; it is attached to stories with credible production, labor, platform, or cost implications.",
      inputs: ["AI category stories", "Affected sectors containing AI", "Article impact scores"]
    },
    {
      id: "trending-articles",
      label: "Trending Articles",
      value: `${highMomentum}`,
      delta: `${source.length} tracked`,
      tone: "green",
      shortDescription: "The number of briefs crossing LoreEngine's high-momentum threshold.",
      definition:
        "Trending Articles counts stories that are either strategically important or accelerating quickly enough to deserve executive attention.",
      calculation:
        "Count of articles with an impact score of 80+ or a trend score of 30%+.",
      interpretation:
        "This is a workload signal. If it jumps, the feed has more items worth reading during the weekly brief review.",
      inputs: ["Impact score threshold", "Trend growth threshold", "Total tracked articles"]
    },
    {
      id: "market-momentum",
      label: "Market Momentum",
      value: `+${averageTrend}%`,
      delta: "+6% 7d",
      tone: "amber",
      shortDescription: "A directional growth signal based on the feed's average trend score.",
      definition:
        "Market Momentum estimates how quickly the tracked themes are gaining attention compared with the baseline feed.",
      calculation:
        "Average of all article Trend Scores, expressed as percentage growth.",
      interpretation:
        "Higher momentum favors fast-moving narratives such as platform shifts, AI tooling launches, layoffs, and creator-market spikes.",
      inputs: ["Article trend scores", "Theme velocity assumptions", "Mock growth estimates"]
    }
  ];
}
