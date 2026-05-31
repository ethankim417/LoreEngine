import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeDollarSign,
  Lightbulb,
  ListChecks,
  Sparkles
} from "lucide-react";
import type { Article } from "@/data/articles";

type BriefItem = {
  label: string;
  article: Article;
  note: string;
};

export function ExecutiveBrief({ articles }: { articles: Article[] }) {
  const topStories = [...articles]
    .sort((a, b) => b.impactScore + b.trendScore * 0.6 - (a.impactScore + a.trendScore * 0.6))
    .slice(0, 3);
  const riskArticle =
    articles.find((article) => article.slug.includes("voice-generation")) ??
    articles.find((article) => article.slug.includes("layoffs")) ??
    topStories[0];
  const opportunityArticle =
    articles.find((article) => article.slug.includes("adaptive-ai-npcs")) ??
    articles.find((article) => article.slug.includes("generative-asset")) ??
    topStories[1];
  const marketArticle =
    articles.find((article) => article.slug.includes("nvidia-gaming-ai-stack")) ??
    articles.find((article) => article.category === "Hardware") ??
    topStories[2];

  const briefItems: BriefItem[] = [
    {
      label: "Risk to monitor",
      article: riskArticle,
      note: "Rights, labor, regulation, or execution risk that could slow adoption."
    },
    {
      label: "Opportunity",
      article: opportunityArticle,
      note: "A signal with practical upside for studios, tools, creators, or platforms."
    },
    {
      label: "Market signal",
      article: marketArticle,
      note: "A hardware, platform, or capital-market read worth tracking alongside the news."
    }
  ];

  return (
    <section className="glass-panel overflow-hidden rounded-lg" aria-label="Executive brief">
      <div className="relative border-b border-white/10 p-4 sm:p-5">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(84,240,169,0.14),transparent_26%),radial-gradient(circle_at_18%_0%,rgba(50,217,255,0.14),transparent_28%)]" />
        <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
              <Sparkles className="h-4 w-4" />
              Executive Brief
            </div>
            <h2 className="mt-2 font-display text-2xl font-black text-white sm:text-3xl">
              Read This First
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              A short decision layer for the daily brief: the top stories, the main risk,
              the clearest opportunity, and the market signal to keep in view.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-emerald-300/20 bg-emerald-300/[0.08] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-100">
            <ListChecks className="h-4 w-4" />
            3 things to know
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_24rem]">
        <div className="divide-y divide-white/10">
          {topStories.map((article, index) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className="group grid gap-3 p-4 transition hover:bg-white/[0.035] sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:p-5"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 font-display text-lg font-black text-cyan-100">
                {index + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
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

        <aside className="border-t border-white/10 bg-black/20 p-4 sm:p-5 lg:border-l lg:border-t-0">
          <div className="space-y-3">
            {briefItems.map((item) => (
              <BriefSignal key={item.label} item={item} />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function BriefSignal({ item }: { item: BriefItem }) {
  const icon = {
    "Risk to monitor": <AlertTriangle className="h-4 w-4" />,
    Opportunity: <Lightbulb className="h-4 w-4" />,
    "Market signal": <BadgeDollarSign className="h-4 w-4" />
  }[item.label];

  return (
    <Link
      href={`/articles/${item.article.slug}`}
      className="group block rounded-lg border border-white/10 bg-white/[0.035] p-3 transition hover:border-cyan-300/30 hover:bg-white/[0.055]"
    >
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        <span className="text-cyan-100">{icon}</span>
        {item.label}
      </div>
      <p className="mt-2 line-clamp-2 font-display text-base font-black text-white">
        {item.article.title}
      </p>
      <p className="mt-2 text-xs leading-5 text-slate-400">{item.note}</p>
    </Link>
  );
}
