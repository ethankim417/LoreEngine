"use client";

import { useMemo, useState } from "react";
import { ArrowDownUp, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { categories, type Article, type ArticleCategory } from "@/data/articles";
import type { DashboardMetric } from "@/lib/metrics";

type SortMode = "newest" | "impact" | "trend";

type IntelligenceDashboardProps = {
  articles: Article[];
  metrics: DashboardMetric[];
};

export function IntelligenceDashboard({ articles, metrics }: IntelligenceDashboardProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArticleCategory | "All">("All");
  const [sortMode, setSortMode] = useState<SortMode>("impact");

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles
      .filter((article) => {
        const matchesCategory = category === "All" || article.category === category;
        const matchesQuery =
          normalizedQuery.length === 0 ||
          article.title.toLowerCase().includes(normalizedQuery) ||
          article.tldr.toLowerCase().includes(normalizedQuery) ||
          article.fullTldr.toLowerCase().includes(normalizedQuery);

        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (sortMode === "newest") {
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        }

        if (sortMode === "trend") {
          return b.trendScore - a.trendScore;
        }

        return b.impactScore - a.impactScore;
      });
  }, [articles, category, query, sortMode]);

  return (
    <div className="flex flex-col gap-6">
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section className="glass-panel rounded-lg p-4 sm:p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Intelligence Feed
            </div>
            <p className="mt-2 text-sm text-slate-400">
              {filteredArticles.length} brief{filteredArticles.length === 1 ? "" : "s"} matched
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-[minmax(14rem,1fr)_auto_auto] xl:w-[46rem]">
            <label className="relative block">
              <span className="sr-only">Search articles</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search title or TLDR"
                className="h-11 w-full rounded-lg border border-white/10 bg-black/20 pl-10 pr-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/15"
              />
            </label>

            <label className="relative block">
              <span className="sr-only">Filter category</span>
              <SlidersHorizontal className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value as ArticleCategory | "All")}
                className="h-11 w-full min-w-40 appearance-none rounded-lg border border-white/10 bg-black/20 px-10 text-sm font-semibold text-white outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/15"
              >
                <option value="All">All Categories</option>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="relative block">
              <span className="sr-only">Sort articles</span>
              <ArrowDownUp className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <select
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value as SortMode)}
                className="h-11 w-full min-w-40 appearance-none rounded-lg border border-white/10 bg-black/20 px-10 text-sm font-semibold text-white outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/15"
              >
                <option value="newest">Newest</option>
                <option value="impact">Impact Score</option>
                <option value="trend">Trend Score</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </section>

      {filteredArticles.length === 0 ? (
        <div className="glass-panel rounded-lg p-8 text-center text-slate-300">
          No matching intelligence briefs.
        </div>
      ) : null}
    </div>
  );
}

function MetricCard({ metric }: { metric: DashboardMetric }) {
  const toneClass = {
    cyan: "from-cyan-300/20 to-cyan-300/5 text-cyan-100",
    violet: "from-violet-300/20 to-violet-300/5 text-violet-100",
    green: "from-emerald-300/20 to-emerald-300/5 text-emerald-100",
    amber: "from-amber-300/20 to-amber-300/5 text-amber-100"
  }[metric.tone];

  return (
    <div className="glass-panel rounded-lg p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25">
      <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${toneClass}`} />
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        {metric.label}
      </p>
      <div className="mt-2 flex items-end justify-between gap-4">
        <p className="font-display text-3xl font-black text-white">{metric.value}</p>
        <p className="pb-1 text-sm font-semibold text-slate-300">{metric.delta}</p>
      </div>
    </div>
  );
}
