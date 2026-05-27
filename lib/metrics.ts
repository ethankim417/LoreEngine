import { articles, type Article } from "@/data/articles";

export type DashboardMetric = {
  label: string;
  value: string;
  delta: string;
  tone: "cyan" | "violet" | "green" | "amber";
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
      label: "Industry Heat",
      value: `${averageImpact}/100`,
      delta: "+11 pts",
      tone: "cyan"
    },
    {
      label: "AI Disruption Index",
      value: `${aiDisruption}/100`,
      delta: "+18 pts",
      tone: "violet"
    },
    {
      label: "Trending Articles",
      value: `${highMomentum}`,
      delta: `${source.length} tracked`,
      tone: "green"
    },
    {
      label: "Market Momentum",
      value: `+${averageTrend}%`,
      delta: "+6% 7d",
      tone: "amber"
    }
  ];
}
