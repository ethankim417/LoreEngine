import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, Database, ExternalLink, ShieldCheck } from "lucide-react";
import { articles, sourceCredibilityTypes, type ArticleCategory, type SourceCredibility } from "@/data/articles";
import { sourcePipeline, sourcePrinciples, sourceTiers, weeklyBriefCadence } from "@/data/sourceStrategy";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "Source Strategy | LoreEngine"
};

export default function SourcesPage() {
  const sourceCount = new Set(articles.map((article) => article.source)).size;
  const activeSourceTypes = sourceCredibilityTypes.filter((type) =>
    articles.some((article) => article.sourceCredibility === type)
  );
  const briefSources = getBriefSources();

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="mesh-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute left-[-12rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-emerald-400/[0.11] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-16rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.12] blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Dashboard
        </Link>

        <section className="glass-panel overflow-hidden rounded-lg">
          <div className="border-b border-white/10 p-5 sm:p-7">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">
              <ShieldCheck className="h-4 w-4" />
              Source Strategy
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-black leading-tight text-white sm:text-5xl">
              Why these sources make the weekly brief
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              LoreEngine is designed to rank signals, not scrape everything. The brief starts
              with sources that are verifiable, timestamped, and useful for understanding how
              gaming, AI, platforms, hardware, esports, and public companies are moving.
            </p>
          </div>

          <div className="grid gap-3 p-5 sm:grid-cols-3 sm:p-7">
            <SourceStat icon={<CalendarDays className="h-4 w-4" />} label="Current brief" value={formatDate(weeklyBriefCadence.snapshotDate)} />
            <SourceStat icon={<Database className="h-4 w-4" />} label="Sources cited" value={`${sourceCount}`} />
            <SourceStat icon={<Clock3 className="h-4 w-4" />} label="Cadence" value={weeklyBriefCadence.label} />
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="glass-panel rounded-lg p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
              Publishing Window
            </p>
            <h2 className="mt-3 font-display text-2xl font-black text-white">
              {weeklyBriefCadence.schedule}
            </h2>
            <p className="mt-2 text-sm font-semibold text-slate-400">
              {weeklyBriefCadence.localReadout}
            </p>
            <p className="mt-4 leading-7 text-slate-300">{weeklyBriefCadence.reason}</p>
          </div>

          <div className="glass-panel rounded-lg p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">
              Weekly Triage
            </p>
            <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <TriageNumber label="Candidates" value={sourcePipeline.candidateTarget.toString()} />
              <span className="h-px bg-gradient-to-r from-cyan-300/40 via-white/20 to-emerald-300/40" />
              <TriageNumber label="Shortlist" value={sourcePipeline.shortlistTarget.toString()} />
            </div>
            <p className="mt-4 leading-7 text-slate-300">{sourcePipeline.description}</p>
          </div>

          <div className="glass-panel rounded-lg p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
              Source Mix
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeSourceTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-emerald-300/18 bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-black text-emerald-50"
                >
                  {type}
                </span>
              ))}
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              The live product should collect a wider candidate pool, dedupe it, then promote
              only the strongest signals into the weekly brief. The dashboard shows the final
              brief, while this page explains the source logic behind that selection.
            </p>
          </div>
        </section>

        <section className="glass-panel rounded-lg p-5 sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                Current Brief Sources
              </p>
              <h2 className="mt-3 font-display text-2xl font-black text-white">
                {sourceCount} outlets used this week
              </h2>
            </div>
            <p className="text-sm font-semibold text-slate-400">
              Updated {formatDate(weeklyBriefCadence.snapshotDate)}
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {briefSources.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="premium-hover group rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan-300/28 hover:bg-white/[0.055]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-base font-black text-white">{source.name}</h3>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-emerald-200/80">
                      {source.credibility}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-cyan-100" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Used for {source.articleCount} brief{source.articleCount === 1 ? "" : "s"} across{" "}
                  {source.categories.join(", ")}.
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          {sourceTiers.map((tier) => (
            <details key={tier.tier} className="glass-panel group rounded-lg p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl font-black text-white">{tier.tier}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{tier.examples}</p>
                </div>
                <span className="mt-1 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-black text-cyan-100 transition group-open:border-emerald-300/25 group-open:bg-emerald-300/10 group-open:text-emerald-100">
                  View
                </span>
              </summary>
              <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-slate-300">
                {tier.reason}
              </p>
            </details>
          ))}
        </section>

        <section className="glass-panel rounded-lg p-5 sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">
            Selection Rules
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {sourcePrinciples.map((principle) => (
              <article key={principle.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                  <div>
                    <h3 className="font-display text-base font-black text-white">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{principle.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function getBriefSources() {
  const sourceMap = new Map<
    string,
    {
      name: string;
      credibility: SourceCredibility;
      url: string;
      articleCount: number;
      categories: Set<ArticleCategory>;
    }
  >();

  articles.forEach((article) => {
    const existing = sourceMap.get(article.source);

    if (existing) {
      existing.articleCount += 1;
      existing.categories.add(article.category);
      return;
    }

    sourceMap.set(article.source, {
      name: article.source,
      credibility: article.sourceCredibility,
      url: article.sourceUrl,
      articleCount: 1,
      categories: new Set([article.category])
    });
  });

  return Array.from(sourceMap.values())
    .map((source) => ({
      ...source,
      categories: Array.from(source.categories)
    }))
    .sort((a, b) => {
      const tierDelta =
        sourceCredibilityTypes.indexOf(a.credibility) - sourceCredibilityTypes.indexOf(b.credibility);

      if (tierDelta !== 0) {
        return tierDelta;
      }

      return a.name.localeCompare(b.name);
    });
}

function SourceStat({
  icon,
  label,
  value
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-center gap-2 text-cyan-100">
        {icon}
        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
      </div>
      <p className="mt-2 font-display text-2xl font-black text-white">{value}</p>
    </div>
  );
}

function TriageNumber({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-3 text-center">
      <p className="font-display text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
    </div>
  );
}
