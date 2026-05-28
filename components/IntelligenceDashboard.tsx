"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowDownUp,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Database,
  Info,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  X
} from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { categories, type Article, type ArticleCategory } from "@/data/articles";
import { formatDate } from "@/lib/format";
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
  const [selectedMetric, setSelectedMetric] = useState<DashboardMetric | null>(null);

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
      <DailyBriefStatus articles={articles} metrics={metrics} />

      <section aria-label="Dashboard metrics" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} onSelect={() => setSelectedMetric(metric)} />
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
                className="h-11 w-full min-w-40 appearance-none rounded-lg border border-cyan-300/15 bg-slate-950/35 px-10 pr-9 text-sm font-semibold text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_34px_rgba(0,0,0,0.22)] outline-none backdrop-blur-xl transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.08] focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-300/20 [&>option]:bg-slate-950 [&>option]:text-cyan-50"
              >
                <option value="All">All Categories</option>
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-200/70" />
            </label>

            <label className="relative block">
              <span className="sr-only">Sort articles</span>
              <ArrowDownUp className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <select
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value as SortMode)}
                className="h-11 w-full min-w-40 appearance-none rounded-lg border border-violet-300/15 bg-slate-950/35 px-10 pr-9 text-sm font-semibold text-violet-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_34px_rgba(0,0,0,0.22)] outline-none backdrop-blur-xl transition hover:border-violet-300/35 hover:bg-violet-300/[0.08] focus:border-violet-300/60 focus:ring-2 focus:ring-violet-300/20 [&>option]:bg-slate-950 [&>option]:text-violet-50"
              >
                <option value="newest">Newest</option>
                <option value="impact">Impact Score</option>
                <option value="trend">Trend Score</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-200/70" />
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

      <MetricExplainerDialog metric={selectedMetric} onClose={() => setSelectedMetric(null)} />
    </div>
  );
}

function DailyBriefStatus({
  articles,
  metrics
}: {
  articles: Article[];
  metrics: DashboardMetric[];
}) {
  const latestPublishedAt = articles.reduce((latest, article) => {
    const articleTime = new Date(article.publishedAt).getTime();
    const latestTime = new Date(latest).getTime();

    return articleTime > latestTime ? article.publishedAt : latest;
  }, articles[0]?.publishedAt ?? new Date().toISOString());
  const trendingCount = metrics.find((metric) => metric.id === "trending-articles")?.value ?? "0";

  return (
    <section className="glass-panel rounded-lg p-4 sm:p-5" aria-label="Daily brief status">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
            <CalendarDays className="h-5 w-5" />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-display text-xl font-black text-white">Daily Brief</p>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.16em] text-emerald-100">
                Cached
              </span>
            </div>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Last updated {formatDate(latestPublishedAt)} | demo intelligence cache | no live AI calls
            </p>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[32rem]">
          <BriefPill
            icon={<Database className="h-4 w-4" />}
            label="Tracked signals"
            value={articles.length.toString()}
          />
          <BriefPill
            icon={<Sparkles className="h-4 w-4" />}
            label="Action threshold"
            value={trendingCount}
          />
          <BriefPill
            icon={<ShieldCheck className="h-4 w-4" />}
            label="Pipeline mode"
            value="Mock cache"
          />
        </div>
      </div>
    </section>
  );
}

function BriefPill({
  icon,
  label,
  value
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-h-16 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 bg-black/20 text-cyan-100">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="truncate text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>
        <p className="truncate font-display text-base font-black text-white">{value}</p>
      </div>
    </div>
  );
}

function MetricCard({
  metric,
  onSelect
}: {
  metric: DashboardMetric;
  onSelect: () => void;
}) {
  const toneClass = {
    cyan: "from-cyan-300/20 to-cyan-300/5 text-cyan-100",
    violet: "from-violet-300/20 to-violet-300/5 text-violet-100",
    green: "from-emerald-300/20 to-emerald-300/5 text-emerald-100",
    amber: "from-amber-300/20 to-amber-300/5 text-amber-100"
  }[metric.tone];

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Explain ${metric.label}`}
      className="glass-panel group rounded-lg p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
    >
      <div className="flex items-center justify-between gap-3">
        <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${toneClass}`} />
        <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition group-hover:border-cyan-300/35 group-hover:text-cyan-100">
          <Info className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        {metric.label}
      </p>
      <div className="mt-2 flex items-end justify-between gap-4">
        <p className="font-display text-3xl font-black text-white">{metric.value}</p>
        <p className="pb-1 text-sm font-semibold text-slate-300">{metric.delta}</p>
      </div>
      <p className="mt-3 line-clamp-2 text-xs leading-5 text-slate-400">{metric.shortDescription}</p>
    </button>
  );
}

function MetricExplainerDialog({
  metric,
  onClose
}: {
  metric: DashboardMetric | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!metric) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [metric, onClose]);

  if (!metric) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="metric-dialog-title"
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-3 backdrop-blur-md sm:items-center sm:p-6"
      onClick={onClose}
    >
      <div
        className="glass-panel w-full max-w-2xl overflow-hidden rounded-lg"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
              Metric Methodology
            </p>
            <h2 id="metric-dialog-title" className="mt-2 font-display text-3xl font-black text-white">
              {metric.label}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{metric.shortDescription}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close metric explanation"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/40 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-[1fr_12rem] sm:p-6">
          <div className="space-y-5">
            <MetricDetail title="Definition" body={metric.definition} />
            <MetricDetail title="Calculation" body={metric.calculation} />
            <MetricDetail title="How To Read It" body={metric.interpretation} />
          </div>

          <aside className="rounded-lg border border-white/10 bg-black/20 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Current Read
            </p>
            <p className="mt-2 font-display text-4xl font-black text-white">{metric.value}</p>
            <p className="mt-1 text-sm font-semibold text-cyan-100">{metric.delta}</p>
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Inputs
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {metric.inputs.map((input) => (
                  <span
                    key={input}
                    className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-medium text-cyan-50"
                  >
                    {input}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <div className="border-t border-white/10 bg-black/20 p-4 sm:p-5">
          <Link
            href="/methodology"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200 sm:w-auto"
            onClick={onClose}
          >
            Full Methodology
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function MetricDetail({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h3 className="font-display text-base font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
    </section>
  );
}
