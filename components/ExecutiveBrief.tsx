import Link from "next/link";
import {
  ArrowRight,
  ListChecks,
  Sparkles
} from "lucide-react";
import type { Article } from "@/data/articles";

export function ExecutiveBrief({ articles, compact = false }: { articles: Article[]; compact?: boolean }) {
  const topStories = [...articles]
    .sort((a, b) => b.impactScore + b.trendScore * 0.6 - (a.impactScore + a.trendScore * 0.6))
    .slice(0, 3);
  const topAiStory =
    topStories.find((article) => article.category === "AI" || article.sectors.some((sector) => sector.includes("AI"))) ??
    articles.find((article) => article.category === "AI") ??
    topStories[0];
  const marketStory =
    articles.find((article) =>
      article.category === "Business" ||
      article.sectors.some((sector) => ["Hardware", "Platform", "Steam", "Mobile Gaming"].includes(sector))
    ) ?? topStories[0];
  const watchItem = topStories[1] ?? topStories[0];

  return (
    <section className="glass-panel premium-hover relative overflow-hidden rounded-lg" aria-label="Executive brief">
      <div className="relative border-b border-white/10 p-4">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(84,240,169,0.14),transparent_26%),radial-gradient(circle_at_18%_0%,rgba(50,217,255,0.14),transparent_28%)]" />
        <div className="relative z-10 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-200">
              <Sparkles className="h-4 w-4" />
              This Week&apos;s Read
            </div>
            <h2 className="mt-2 font-display text-2xl font-black text-white">
              {topStories[0]?.category ?? "Industry"} is setting the tone
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              Start with the biggest strategic shift, then scan the AI signal, market context, and next item to watch.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-emerald-100">
            <ListChecks className="h-4 w-4" />
            3 things to know
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[4rem_1fr]">
        <div className="hidden border-r border-white/10 bg-black/20 p-4 lg:block">
          <div className="[writing-mode:vertical-rl] rotate-180 text-xs font-black uppercase tracking-[0.16em] text-cyan-200/70">
            Priority Lane
          </div>
        </div>

        <div>
          <div className="grid gap-2 border-b border-white/10 p-4 md:grid-cols-4">
            <NarrativeCell label="Biggest shift" body={topStories[0]?.tldr ?? "No lead story available."} />
            <NarrativeCell label="AI signal" body={topAiStory?.tldr ?? "No AI signal available."} />
            <NarrativeCell label="Market signal" body={marketStory?.tldr ?? "No market signal available."} />
            <NarrativeCell label="Watch next" body={watchItem?.trendAnalysis ?? "No watch item available."} />
          </div>
          <div className="divide-y divide-white/10">
          {topStories.map((article, index) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className={`group grid gap-3 p-4 transition hover:bg-white/[0.035] sm:grid-cols-[3rem_1fr_auto] sm:items-center ${compact ? "min-h-[9.5rem]" : ""}`}
            >
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 font-display text-lg font-black text-cyan-100">
                {index + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                  {article.category} | Impact {article.impactScore}
                </span>
                <span className="mt-1 block font-display text-lg font-black text-white">
                  {article.title}
                </span>
                <span className={`${compact ? "line-clamp-1" : "line-clamp-2"} mt-1 block text-sm leading-6 text-slate-400`}>
                  {article.tldr}
                </span>
              </span>
              <span className="hidden items-center gap-2 text-sm font-black text-slate-300 transition group-hover:text-cyan-100 sm:inline-flex">
                Read
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NarrativeCell({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
      <p className="text-[0.62rem] font-black uppercase tracking-[0.12em] text-emerald-200/75">
        {label}
      </p>
      <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-300">{body}</p>
    </div>
  );
}
