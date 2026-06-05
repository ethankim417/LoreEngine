"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDownUp,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Info,
  Search,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  X
} from "lucide-react";
import { ArticleCard } from "@/components/ArticleCard";
import { ExecutiveBrief } from "@/components/ExecutiveBrief";
import { MarketPulse } from "@/components/MarketPulse";
import { SignalConstellation } from "@/components/SignalConstellation";
import {
  briefSnapshotDate,
  categories,
  sourceCredibilityTypes,
  type Article,
  type ArticleCategory,
  type SourceCredibility
} from "@/data/articles";
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
  const [sourceType, setSourceType] = useState<SourceCredibility | "All">("All");
  const [sortMode, setSortMode] = useState<SortMode>("impact");
  const [selectedMetric, setSelectedMetric] = useState<DashboardMetric | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const activeFilterCount =
    (query.trim() ? 1 : 0) + (category !== "All" ? 1 : 0) + (sourceType !== "All" ? 1 : 0) + (sortMode !== "impact" ? 1 : 0);
  const resetFilters = () => {
    setQuery("");
    setCategory("All");
    setSourceType("All");
    setSortMode("impact");
    setFiltersOpen(false);
  };

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles
      .filter((article) => {
        const matchesCategory = category === "All" || article.category === category;
        const matchesSourceType = sourceType === "All" || article.sourceCredibility === sourceType;
        const matchesQuery =
          normalizedQuery.length === 0 ||
          article.title.toLowerCase().includes(normalizedQuery) ||
          article.tldr.toLowerCase().includes(normalizedQuery) ||
          article.fullTldr.toLowerCase().includes(normalizedQuery);

        return matchesCategory && matchesSourceType && matchesQuery;
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
  }, [articles, category, query, sortMode, sourceType]);

  return (
    <div className="flex flex-col gap-5 pb-20 sm:gap-7 sm:pb-0 lg:gap-8">
      <WeeklyBriefStatus articles={articles} />

      <div id="mobile-brief" className="-mx-3 flex snap-x gap-3 overflow-x-auto px-3 pb-1 md:hidden">
        <div className="w-[min(22rem,calc(100vw-2rem))] shrink-0 snap-center">
          <ExecutiveBrief articles={articles} compact />
        </div>
        <div className="w-[min(22rem,calc(100vw-2rem))] shrink-0 snap-center">
          <SignalConstellation articles={articles} />
        </div>
        <div id="mobile-market" className="w-[min(22rem,calc(100vw-2rem))] shrink-0 snap-center">
          <MarketPulse />
        </div>
      </div>
      <div className="flex justify-center gap-1.5 md:hidden" aria-hidden="true">
        <span className="h-1.5 w-5 rounded-full bg-cyan-200/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      </div>

      <div className="hidden md:block">
        <ExecutiveBrief articles={articles} />
      </div>

      <div className="hidden md:block">
        <SignalConstellation articles={articles} />
      </div>

      <section aria-label="Dashboard metrics" className="space-y-3">
        <div className="flex items-center justify-between gap-3 px-1">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Dashboard Scores</p>
          <Link
            href="/methodology"
            className="inline-flex items-center gap-1.5 text-xs font-black text-cyan-200/85 transition hover:text-cyan-100"
          >
            How scores work
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} onSelect={() => setSelectedMetric(metric)} />
          ))}
        </div>
      </section>

      <section id="feed" className="glass-panel glass-panel-soft rounded-lg p-4 sm:p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
                <Sparkles className="h-4 w-4" />
                Intelligence Feed
              </div>
              <p className="mt-2 text-sm text-slate-400">
                {filteredArticles.length} brief{filteredArticles.length === 1 ? "" : "s"} matched
              </p>
            </div>
            <button
              type="button"
              onClick={() => setFiltersOpen((open) => !open)}
              aria-expanded={filtersOpen}
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-2 text-xs font-black text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-cyan-300/45 md:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters{activeFilterCount ? ` (${activeFilterCount})` : ""}
            </button>
          </div>

          <div className="grid gap-2.5 sm:gap-3 md:grid-cols-[minmax(14rem,1fr)_auto_auto_auto] xl:w-[58rem]">
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

            <label className="relative hidden md:block">
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

            <label className="relative hidden md:block">
              <span className="sr-only">Filter source type</span>
              <ShieldCheck className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <select
                value={sourceType}
                onChange={(event) => setSourceType(event.target.value as SourceCredibility | "All")}
                className="h-11 w-full min-w-40 appearance-none rounded-lg border border-emerald-300/15 bg-slate-950/35 px-10 pr-9 text-sm font-semibold text-emerald-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_34px_rgba(0,0,0,0.22)] outline-none backdrop-blur-xl transition hover:border-emerald-300/35 hover:bg-emerald-300/[0.08] focus:border-emerald-300/60 focus:ring-2 focus:ring-emerald-300/20 [&>option]:bg-slate-950 [&>option]:text-emerald-50"
              >
                <option value="All">All Sources</option>
                {sourceCredibilityTypes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-200/70" />
            </label>

            <label className="relative hidden md:block">
              <span className="sr-only">Sort articles</span>
              <ArrowDownUp className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <select
                value={sortMode}
                onChange={(event) => setSortMode(event.target.value as SortMode)}
                className="h-11 w-full min-w-40 appearance-none rounded-lg border border-violet-300/15 bg-slate-950/35 px-10 pr-9 text-sm font-semibold text-violet-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_34px_rgba(0,0,0,0.22)] outline-none backdrop-blur-xl transition hover:border-violet-300/35 hover:bg-violet-300/[0.08] focus:border-violet-300/60 focus:ring-2 focus:ring-violet-300/20 [&>option]:bg-slate-950 [&>option]:text-violet-50"
              >
                <option value="newest">Newest</option>
                <option value="impact">Industry Impact</option>
                <option value="trend">Momentum</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-200/70" />
            </label>
          </div>
        </div>
        <ActiveFilterChips
          query={query}
          category={category}
          sourceType={sourceType}
          sortMode={sortMode}
          onClearQuery={() => setQuery("")}
          onClearCategory={() => setCategory("All")}
          onClearSourceType={() => setSourceType("All")}
          onResetSort={() => setSortMode("impact")}
          onClearAll={resetFilters}
        />
      </section>

      {filtersOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Article filters"
          className="fixed inset-0 z-50 flex items-end bg-black/65 p-3 backdrop-blur-md md:hidden"
          onClick={() => setFiltersOpen(false)}
        >
          <div className="glass-panel w-full rounded-lg p-4" onClick={(event) => event.stopPropagation()}>
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-200">Filters</p>
                <p className="mt-1 text-sm text-slate-400">{filteredArticles.length} briefs matched</p>
              </div>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300"
                aria-label="Close filters"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="grid gap-3">
              <label className="relative block">
                <span className="sr-only">Filter category</span>
                <SlidersHorizontal className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <select
                  value={category}
                  onChange={(event) => setCategory(event.target.value as ArticleCategory | "All")}
                  className="h-11 w-full appearance-none rounded-lg border border-cyan-300/15 bg-slate-950/55 px-10 pr-9 text-sm font-semibold text-cyan-50 outline-none"
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
                <span className="sr-only">Filter source type</span>
                <ShieldCheck className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <select
                  value={sourceType}
                  onChange={(event) => setSourceType(event.target.value as SourceCredibility | "All")}
                  className="h-11 w-full appearance-none rounded-lg border border-emerald-300/15 bg-slate-950/55 px-10 pr-9 text-sm font-semibold text-emerald-50 outline-none"
                >
                  <option value="All">All Sources</option>
                  {sourceCredibilityTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-200/70" />
              </label>
              <label className="relative block">
                <span className="sr-only">Sort articles</span>
                <ArrowDownUp className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <select
                  value={sortMode}
                  onChange={(event) => setSortMode(event.target.value as SortMode)}
                  className="h-11 w-full appearance-none rounded-lg border border-violet-300/15 bg-slate-950/55 px-10 pr-9 text-sm font-semibold text-violet-50 outline-none"
                >
                  <option value="newest">Newest</option>
                  <option value="impact">Industry Impact</option>
                  <option value="trend">Momentum</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-200/70" />
              </label>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={resetFilters}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-black text-slate-200"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={() => setFiltersOpen(false)}
                className="rounded-lg bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="hidden md:block">
        <MarketPulse />
      </div>

      <section className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={article.id} article={article} featured={index === 0} />
        ))}
      </section>

      {filteredArticles.length === 0 ? (
        <EmptyFilterState onClearAll={resetFilters} />
      ) : null}

      <MetricExplainerDialog metric={selectedMetric} onClose={() => setSelectedMetric(null)} />
      <MobileActionBar onOpenFilters={() => setFiltersOpen(true)} activeFilterCount={activeFilterCount} />
    </div>
  );
}

function MobileActionBar({
  onOpenFilters,
  activeFilterCount
}: {
  onOpenFilters: () => void;
  activeFilterCount: number;
}) {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-4 overflow-hidden rounded-lg border border-white/10 bg-slate-950/82 text-[0.68rem] font-black text-slate-300 shadow-[0_20px_80px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl md:hidden">
      <a href="#mobile-brief" className="px-2 py-3 text-center text-cyan-100">Brief</a>
      <a href="#mobile-market" className="px-2 py-3 text-center">Market</a>
      <button type="button" onClick={onOpenFilters} className="px-2 py-3 text-center">
        Filters{activeFilterCount ? ` ${activeFilterCount}` : ""}
      </button>
      <a href="#top" className="px-2 py-3 text-center">Top</a>
    </nav>
  );
}

function EmptyFilterState({ onClearAll }: { onClearAll: () => void }) {
  return (
    <div className="glass-panel rounded-lg p-6 text-center sm:p-8">
      <div className="mx-auto grid h-11 w-11 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
        <Search className="h-5 w-5" />
      </div>
      <h2 className="mt-4 font-display text-xl font-black text-white">No briefs match these filters</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-400">
        Try clearing the source type, category, or search query to bring the weekly brief back into view.
      </p>
      <button
        type="button"
        onClick={onClearAll}
        className="mt-5 inline-flex items-center justify-center rounded-lg bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
      >
        Clear filters
      </button>
    </div>
  );
}

function WeeklyBriefStatus({
  articles
}: {
  articles: Article[];
}) {
  const sourceCount = new Set(articles.map((article) => article.source)).size;

  return (
    <section className="glass-panel glass-panel-soft rounded-lg p-4" aria-label="Weekly brief status">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
            <CalendarDays className="h-4 w-4" />
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-display text-lg font-black text-white">Weekly Brief</p>
              <Link
                href="/archive"
                className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.1em] text-cyan-100 transition hover:border-cyan-300/35"
              >
                Archive
              </Link>
              <Link
                href="/sources"
                aria-label={`View source strategy for ${sourceCount} sources used`}
                className="source-shimmer group/source inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/[0.075] px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.1em] text-emerald-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-emerald-300/45 hover:bg-emerald-300/[0.11] hover:text-emerald-50"
              >
                <Shield className="h-3 w-3" />
                {sourceCount} Sources Used
                <ArrowRight className="h-3 w-3 text-cyan-100/70 transition group-hover/source:translate-x-0.5 group-hover/source:text-cyan-50" />
              </Link>
            </div>
            <p className="mt-0.5 text-sm leading-5 text-slate-400">
              Updated {formatDate(briefSnapshotDate)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActiveFilterChips({
  query,
  category,
  sourceType,
  sortMode,
  onClearQuery,
  onClearCategory,
  onClearSourceType,
  onResetSort,
  onClearAll
}: {
  query: string;
  category: ArticleCategory | "All";
  sourceType: SourceCredibility | "All";
  sortMode: SortMode;
  onClearQuery: () => void;
  onClearCategory: () => void;
  onClearSourceType: () => void;
  onResetSort: () => void;
  onClearAll: () => void;
}) {
  const normalizedQuery = query.trim();
  const hasFilters =
    normalizedQuery.length > 0 || category !== "All" || sourceType !== "All" || sortMode !== "impact";

  if (!hasFilters) {
    return null;
  }

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
      <span className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
        Active filters
      </span>
      {normalizedQuery.length > 0 ? (
        <FilterChip label={`Search: ${normalizedQuery}`} onClear={onClearQuery} />
      ) : null}
      {category !== "All" ? <FilterChip label={`Category: ${category}`} onClear={onClearCategory} /> : null}
      {sourceType !== "All" ? (
        <FilterChip label={`Source: ${sourceType}`} onClear={onClearSourceType} />
      ) : null}
      {sortMode !== "impact" ? (
        <FilterChip label={`Sorted by ${sortMode === "newest" ? "Newest" : "Momentum"}`} onClear={onResetSort} />
      ) : null}
      <button
        type="button"
        onClick={onClearAll}
        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-slate-300 transition hover:border-rose-300/30 hover:text-rose-100"
      >
        Clear all
      </button>
    </div>
  );
}

function FilterChip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <button
      type="button"
      onClick={onClear}
      className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold text-cyan-50 transition hover:border-cyan-300/50"
      title={`Remove ${label}`}
    >
      <span className="truncate">{label}</span>
      <X className="h-3.5 w-3.5 shrink-0" />
    </button>
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
      className="glass-panel glass-panel-soft premium-hover group relative overflow-hidden rounded-lg p-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="h-1.5 w-16 overflow-hidden rounded-full bg-white/[0.06]">
          <div className={`metric-fill h-full rounded-full bg-gradient-to-r ${toneClass}`} />
        </div>
        <span className="grid h-7 w-7 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition group-hover:border-cyan-300/35 group-hover:text-cyan-100">
          <Info className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.11em] text-slate-500">
        {metric.label}
      </p>
      <div className="mt-2 flex items-end justify-between gap-4">
        <p className="font-display text-2xl font-black text-white">{metric.value}</p>
        <p className="pb-1 text-sm font-semibold text-slate-300">{metric.delta}</p>
      </div>
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
        className="glass-panel max-h-[calc(100vh-1.5rem)] w-full max-w-2xl overflow-y-auto rounded-lg"
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
