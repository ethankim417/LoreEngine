import Link from "next/link";
import {
  ArrowRight,
  ListChecks,
  Sparkles
} from "lucide-react";
import type { Article } from "@/data/articles";

export function ExecutiveBrief({ articles }: { articles: Article[] }) {
  const topStories = [...articles]
    .sort((a, b) => b.impactScore + b.trendScore * 0.6 - (a.impactScore + a.trendScore * 0.6))
    .slice(0, 3);

  return (
    <section className="glass-panel premium-hover relative overflow-hidden rounded-lg" aria-label="Executive brief">
      <div className="relative border-b border-white/10 p-4">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(84,240,169,0.14),transparent_26%),radial-gradient(circle_at_18%_0%,rgba(50,217,255,0.14),transparent_28%)]" />
        <div className="relative z-10 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-200">
              <Sparkles className="h-4 w-4" />
              Executive Brief
            </div>
            <h2 className="mt-2 font-display text-2xl font-black text-white">
              Read This First
            </h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-400">
              A short decision layer for the weekly brief: the top stories, the main risk,
              the clearest opportunity, and the market signal to keep in view.
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

        <div className="divide-y divide-white/10">
          {topStories.map((article, index) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group grid gap-3 p-4 transition hover:bg-white/[0.035] sm:grid-cols-[3rem_1fr_auto] sm:items-center"
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
                <span className="mt-1 line-clamp-2 block text-sm leading-6 text-slate-400">
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
    </section>
  );
}
