"use client";

import Link from "next/link";
import {
  ArrowRight,
  ListChecks,
  Sparkles
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import type { Article } from "@/data/articles";
import { getArticleText, getCategoryLabel } from "@/lib/localizedContent";

export function ExecutiveBrief({ articles, compact = false }: { articles: Article[]; compact?: boolean }) {
  const { language, t } = useLanguage();
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
  const topCategory = topStories[0] ? getCategoryLabel(topStories[0].category, language) : t("industryImpact");
  const headline = formatToneHeadline(topCategory, t("isSettingTone"), language);
  const strategicRead = topStories[0] ? getStrategicRead(topStories[0], language) : t("noLeadStory");

  return (
    <section className="surface-panel premium-hover relative overflow-hidden rounded-lg" aria-label={t("thisWeeksRead")}>
      <div className="relative border-b border-white/[0.07] p-4">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_88%_12%,rgba(84,240,169,0.14),transparent_26%),radial-gradient(circle_at_18%_0%,rgba(50,217,255,0.14),transparent_28%)]" />
        <div className="relative z-10 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-emerald-200">
              <Sparkles className="h-4 w-4" />
              {t("thisWeeksRead")}
            </div>
            <h2 className="mt-2 font-display text-2xl font-black text-white">
              {headline}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              {t("executiveBriefIntro")}
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-lg border border-emerald-300/15 bg-emerald-300/[0.055] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-emerald-100">
            <ListChecks className="h-4 w-4" />
            {t("thingsToKnow")}
          </div>
        </div>
        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {topStories[0] ? (
            <Link
              href={`/articles/${topStories[0].slug}`}
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
            >
              {t("readTopBrief")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
          <a
            href="#feed"
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-black text-slate-200 transition hover:border-cyan-300/25 hover:text-cyan-100"
          >
            {t("viewAllSignals")}
          </a>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[4rem_1fr]">
        <div className="hidden border-r border-white/[0.07] bg-black/10 p-4 lg:block">
          <div className="[writing-mode:vertical-rl] rotate-180 text-xs font-black uppercase tracking-[0.16em] text-cyan-200/55">
            {t("priorityLane")}
          </div>
        </div>

        <div>
          <div className="grid gap-2 border-b border-white/[0.07] p-4 md:grid-cols-4">
            <NarrativeCell label={t("strategicRead")} body={strategicRead} />
            <NarrativeCell label={t("aiSignal")} body={topAiStory ? getArticleText(topAiStory, language).tldr : t("noAiSignal")} />
            <NarrativeCell label={t("marketSignal")} body={marketStory ? getArticleText(marketStory, language).tldr : t("noMarketSignal")} />
            <NarrativeCell label={t("watchNext")} body={watchItem ? getArticleText(watchItem, language).trendAnalysis : t("noWatchItem")} />
          </div>
          <div className="divide-y divide-white/[0.07]">
          {topStories.map((article, index) => (
            <Link
              key={article.id}
              href={`/articles/${article.slug}`}
              className={`group grid gap-3 p-4 transition hover:bg-white/[0.025] sm:grid-cols-[3rem_1fr_auto] sm:items-center ${compact ? "min-h-[9.5rem]" : ""}`}
            >
              {(() => {
                const articleText = getArticleText(article, language);
                return (
                  <>
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/15 bg-cyan-300/[0.07] font-display text-lg font-black text-cyan-100">
                {index + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-slate-500">
                  {getCategoryLabel(article.category, language)} | {t("impact")} {article.impactScore}
                </span>
                <span className="mt-1 block font-display text-lg font-black text-white">
                  {articleText.title}
                </span>
                <span className={`${compact ? "line-clamp-1" : "line-clamp-2"} mt-1 block text-sm leading-6 text-slate-400`}>
                  {articleText.tldr}
                </span>
              </span>
              <span className="hidden items-center gap-2 text-sm font-black text-slate-300 transition group-hover:text-cyan-100 sm:inline-flex">
                {t("read")}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
                  </>
                );
              })()}
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function formatToneHeadline(category: string, suffix: string, language: "en" | "ko") {
  return language === "ko" ? `${category}${suffix}` : `${category} ${suffix}`;
}

function getStrategicRead(article: Article, language: "en" | "ko") {
  const articleText = getArticleText(article, language);
  const candidates = [
    articleText.whyItMatters,
    articleText.possibleImpact,
    articleText.trendAnalysis,
    articleText.fullTldr
  ];
  const tldr = normalizeBriefText(articleText.tldr);
  const distinctCandidate = candidates.find((candidate) => normalizeBriefText(candidate) !== tldr);
  const firstSentence = (distinctCandidate ?? articleText.whyItMatters).split(/(?<=[.!?])\s+/)[0];

  return firstSentence || articleText.whyItMatters;
}

function normalizeBriefText(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function NarrativeCell({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-lg bg-white/[0.025] p-3">
      <p className="text-[0.62rem] font-black uppercase tracking-[0.12em] text-emerald-200/65">
        {label}
      </p>
      <p className="mt-2 line-clamp-3 text-xs leading-5 text-slate-300">{body}</p>
    </div>
  );
}
