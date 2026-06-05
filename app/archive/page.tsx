import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { articles } from "@/data/articles";

const archiveWeeks = [
  {
    date: "2026-06-05",
    title: "Showcase Week AI Pressure",
    summary:
      "Adaptive NPCs, generative asset workflows, and AI voice licensing shaped the highest-impact production signals.",
    focus: ["Game AI", "Engines", "Voice"]
  },
  {
    date: "2026-05-25",
    title: "Platform Strategy Reset",
    summary:
      "Console strategy, cloud distribution, and storefront economics drove the weekly platform read.",
    focus: ["Xbox", "PlayStation", "Cloud"]
  },
  {
    date: "2026-05-18",
    title: "Market And Creator Momentum",
    summary:
      "Hardware names, creator-led launches, and Steam wishlist behavior formed the strongest market signals.",
    focus: ["Hardware", "Creators", "Steam"]
  }
];

export const metadata = {
  title: "Weekly Brief Archive | LoreEngine"
};

export default function ArchivePage() {
  const topBriefs = [...articles]
    .sort((a, b) => b.impactScore + b.trendScore - (a.impactScore + a.trendScore))
    .slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="mesh-grid absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="absolute left-[-12rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-cyan-400/[0.12] blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-5">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Dashboard
        </Link>

        <section className="glass-panel overflow-hidden rounded-lg">
          <div className="relative border-b border-white/10 p-5 sm:p-7">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(50,217,255,0.14),transparent_28%),radial-gradient(circle_at_20%_0%,rgba(138,92,255,0.14),transparent_26%)]" />
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                <CalendarDays className="h-4 w-4" />
                Weekly Archive
              </div>
              <h1 className="mt-3 text-balance font-display text-4xl font-black text-white sm:text-5xl">
                LoreEngine brief history
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                Sample weekly snapshots showing how LoreEngine could evolve into a recurring
                intelligence archive once the scheduled ingest pipeline is connected.
              </p>
            </div>
          </div>

          <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-3">
            {archiveWeeks.map((week, index) => (
              <article key={week.date} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  Week {index + 1}
                </p>
                <h2 className="mt-2 font-display text-2xl font-black text-white">{week.title}</h2>
                <p className="mt-1 text-sm font-semibold text-cyan-100">{formatArchiveDate(week.date)}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{week.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {week.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-bold text-cyan-50"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="glass-panel glass-panel-soft rounded-lg p-4 sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">Current brief</p>
              <h2 className="mt-1 font-display text-2xl font-black text-white">Top signals this week</h2>
            </div>
            <Link href="/#feed" className="inline-flex w-fit items-center gap-2 text-sm font-black text-cyan-100">
              Open feed
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-4 grid gap-3 lg:grid-cols-3">
            {topBriefs.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group rounded-lg border border-white/10 bg-black/15 p-4 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
              >
                <p className="text-xs font-black uppercase tracking-[0.12em] text-cyan-200">
                  Impact {article.impactScore}
                </p>
                <h3 className="mt-2 line-clamp-2 font-display text-lg font-black text-white">
                  {article.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-400">{article.tldr}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function formatArchiveDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(value));
}
