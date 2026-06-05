import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, Database, ShieldCheck } from "lucide-react";
import { articles, sourceCredibilityTypes } from "@/data/articles";
import { sourcePrinciples, sourceTiers, weeklyBriefCadence } from "@/data/sourceStrategy";
import { formatDate } from "@/lib/format";

export const metadata = {
  title: "Source Strategy | LoreEngine"
};

export default function SourcesPage() {
  const sourceCount = new Set(articles.map((article) => article.source)).size;
  const activeSourceTypes = sourceCredibilityTypes.filter((type) =>
    articles.some((article) => article.sourceCredibility === type)
  );

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
            <SourceStat icon={<Database className="h-4 w-4" />} label="Outlets sampled" value={`${sourceCount}`} />
            <SourceStat icon={<Clock3 className="h-4 w-4" />} label="Cadence" value={weeklyBriefCadence.label} />
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
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
