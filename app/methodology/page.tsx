import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, BarChart3, BrainCircuit, Flame, Radar, TrendingUp } from "lucide-react";
import { articles } from "@/data/articles";
import { getDashboardMetrics, type DashboardMetric } from "@/lib/metrics";

const iconMap: Record<DashboardMetric["id"], ReactNode> = {
  "industry-heat": <Flame className="h-5 w-5" />,
  "ai-disruption-index": <BrainCircuit className="h-5 w-5" />,
  "trending-articles": <Radar className="h-5 w-5" />,
  "market-momentum": <TrendingUp className="h-5 w-5" />
};

export const metadata = {
  title: "Metric Methodology | LoreEngine"
};

export default function MethodologyPage() {
  const metrics = getDashboardMetrics(articles);

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="mesh-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute left-[-12rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-cyan-400/[0.12] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-16rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-violet-500/[0.14] blur-3xl"
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
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              <BarChart3 className="h-4 w-4" />
              LoreEngine Methodology
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-black leading-tight text-white sm:text-5xl">
              How the dashboard metrics work
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              These indicators are portfolio-showcase mock analytics. They are designed to
              model how a future daily summarization system could convert cached gaming and
              AI news into executive-ready market signals.
            </p>
          </div>

          <div className="grid gap-4 p-5 sm:p-7 lg:grid-cols-2">
            {metrics.map((metric) => (
              <MetricMethodCard key={metric.id} metric={metric} />
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
          <div className="glass-panel rounded-lg p-5 sm:p-6">
            <h2 className="font-display text-2xl font-black text-white">Scoring Philosophy</h2>
            <p className="mt-3 leading-7 text-slate-300">
              LoreEngine separates story importance from story velocity. Impact scores answer
              whether a brief could matter to studios, investors, creators, platforms, or
              technical leaders. Trend scores answer whether that theme appears to be gaining
              attention quickly enough to change planning priority.
            </p>
          </div>

          <div className="glass-panel rounded-lg p-5 sm:p-6">
            <h2 className="font-display text-2xl font-black text-white">Future Real Data</h2>
            <p className="mt-3 leading-7 text-slate-300">
              In production, these scores should be generated once per day on the server,
              saved to a database or JSON cache, and read by the frontend. They should never
              be recalculated by browser users or regenerated on every page load.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

function MetricMethodCard({ metric }: { metric: DashboardMetric }) {
  const toneClass = {
    cyan: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
    violet: "border-violet-300/25 bg-violet-300/10 text-violet-100",
    green: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
    amber: "border-amber-300/25 bg-amber-300/10 text-amber-100"
  }[metric.tone];

  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 ${toneClass}`}>
            {iconMap[metric.id]}
            <span className="text-xs font-bold uppercase tracking-[0.2em]">{metric.label}</span>
          </div>
          <p className="mt-4 font-display text-3xl font-black text-white">{metric.value}</p>
        </div>
        <p className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm font-semibold text-slate-300">
          {metric.delta}
        </p>
      </div>

      <div className="mt-5 space-y-4">
        <MethodBlock title="Definition" body={metric.definition} />
        <MethodBlock title="Calculation" body={metric.calculation} />
        <MethodBlock title="Readout" body={metric.interpretation} />
      </div>
    </article>
  );
}

function MethodBlock({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
    </section>
  );
}
