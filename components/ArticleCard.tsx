"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Bookmark,
  BookmarkCheck,
  ChevronRight,
  ExternalLink,
  Gauge,
  TrendingUp
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { SourceBadge } from "@/components/SourceBadge";
import { SectorSignalArt } from "@/components/SectorSignalArt";
import type { Article } from "@/data/articles";
import { readLocalBookmarks, syncRemoteBookmarks, writeLocalBookmarks } from "@/lib/bookmarksClient";
import { categoryTone, formatDate } from "@/lib/format";
import { getArticleText, getCategoryLabel } from "@/lib/localizedContent";

export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  const { language, t } = useLanguage();
  const [bookmarked, setBookmarked] = useState(false);
  const [read, setRead] = useState(false);
  const priority = getPriority(article, t);
  const articleText = getArticleText(article, language);
  const categoryLabel = getCategoryLabel(article.category, language);
  const sourceLinkLabel =
    language === "ko" ? `${article.source} 원문 열기` : `Open source article from ${article.source}`;

  useEffect(() => {
    function syncState() {
      setBookmarked(readLocalBookmarks().includes(article.id));
      setRead(readStorageList("loreengine-read-briefs").includes(article.id));
    }

    syncState();
    window.addEventListener("storage", syncState);
    window.addEventListener("loreengine-bookmarks-updated", syncState);
    window.addEventListener("loreengine-read-updated", syncState);

    return () => {
      window.removeEventListener("storage", syncState);
      window.removeEventListener("loreengine-bookmarks-updated", syncState);
      window.removeEventListener("loreengine-read-updated", syncState);
    };
  }, [article.id]);

  function toggleBookmark() {
    const bookmarks = readLocalBookmarks();
    const next = bookmarks.includes(article.id)
      ? bookmarks.filter((id) => id !== article.id)
      : [...bookmarks, article.id];

    writeLocalBookmarks(next);
    void syncRemoteBookmarks(next);
    setBookmarked(next.includes(article.id));
  }

  return (
    <article className={`glass-panel premium-hover group relative flex min-h-[16.25rem] flex-col overflow-hidden rounded-lg transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/22 sm:min-h-[21.25rem] ${featured ? "xl:col-span-2 xl:min-h-[23rem]" : ""}`}>
      <div className={`absolute inset-y-0 left-0 z-20 w-1 ${priority.railClass}`} aria-hidden="true" />
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image
          src={article.visual.image}
          alt=""
          fill
          sizes={
            featured
              ? "(min-width: 1280px) 48vw, (min-width: 1024px) 50vw, 100vw"
              : "(min-width: 1280px) 28vw, (min-width: 1024px) 46vw, 100vw"
          }
          quality={72}
          className="translate-x-[14%] translate-y-[-8%] scale-[0.68] object-contain object-right-top opacity-[0.105] saturate-[0.85] transition duration-500 [mask-image:radial-gradient(ellipse_at_76%_24%,black_0%,black_28%,transparent_66%),linear-gradient(to_bottom,black,transparent_78%)] group-hover:scale-[0.71] group-hover:opacity-[0.15]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(50,217,255,0.075),transparent_22%),linear-gradient(145deg,rgba(6,7,13,0.46),rgba(6,7,13,0.96)_58%)]" />
        <SectorSignalArt article={article} opacity="subtle" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className={`rounded-full border px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.08em] ${priority.className}`}>
              {priority.label}
            </span>
            <span className={`rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold ${categoryTone(article.category)}`}>
              {categoryLabel}
            </span>
            <span className={`rounded-full border px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-[0.08em] ${
              read ? "border-slate-300/15 bg-slate-300/5 text-slate-400" : "border-cyan-300/25 bg-cyan-300/10 text-cyan-100"
            }`}>
              {read ? t("read") : t("newThisWeek")}
            </span>
            {bookmarked ? (
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.075] px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-[0.08em] text-emerald-100">
                {t("savedLabel")}
              </span>
            ) : null}
          </div>
          <button
            type="button"
            onClick={toggleBookmark}
            aria-label={bookmarked ? t("removeBookmark") : t("bookmarkArticle")}
            title={bookmarked ? t("removeBookmark") : t("bookmarkArticle")}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            {bookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500 sm:mt-4">
          <span className="font-medium">{formatDate(article.publishedAt, language)}</span>
          <span className="hidden sm:inline-flex">
            <SourceBadge source={article.source} credibility={article.sourceCredibility} compact />
          </span>
        </div>

        <h2 className={`mt-2 line-clamp-3 font-display font-black leading-snug tracking-normal text-white sm:mt-3 ${featured ? "text-base sm:text-xl xl:max-w-2xl xl:text-3xl" : "text-base sm:text-xl"}`}>
          {articleText.title}
        </h2>
        <p className={`mt-2 text-sm leading-6 text-slate-300 ${featured ? "line-clamp-1 sm:line-clamp-2 xl:max-w-2xl xl:line-clamp-3" : "line-clamp-1 sm:line-clamp-2"}`}>{articleText.tldr}</p>
        <p className="mt-2 line-clamp-1 text-xs font-semibold leading-5 text-slate-400">
          {t("whyOpen")}: {getWhyOpen(articleText.whyItMatters)}
        </p>

        {article.impactScore >= 90 ? (
          <div className="mt-3 hidden rounded-lg bg-white/[0.035] p-3 sm:block">
            <p className="text-[0.66rem] font-black uppercase tracking-[0.1em] text-slate-500">
              {t("whyItMatters")}
            </p>
            <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-300">{articleText.whyItMatters}</p>
          </div>
        ) : null}

        <div className="mt-3 grid grid-cols-2 gap-1.5">
          <MiniMetric
            icon={<Gauge className="h-4 w-4" />}
            label={t("industryImpact")}
            value={`${article.impactScore}`}
            description={t("impactMetricHelp")}
          />
          <MiniMetric
            icon={<TrendingUp className="h-4 w-4" />}
            label={t("momentum")}
            value={`+${article.trendScore}%`}
            description={t("momentumMetricHelp")}
          />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between gap-3 bg-black/10 px-4 py-3">
        <Link
          href={`/articles/${article.slug}`}
          className="inline-flex items-center gap-2 text-sm font-black text-white transition hover:text-cyan-100"
        >
          {t("readBrief")}
          <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={sourceLinkLabel}
          title={sourceLinkLabel}
          data-testid={`source-link-${article.slug}`}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.035] text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function readStorageList(key: string) {
  try {
    const stored = window.localStorage.getItem(key);
    const parsed = stored ? (JSON.parse(stored) as unknown) : [];

    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

function getWhyOpen(value: string) {
  const [firstSentence] = value.split(/(?<=[.!?])\s+/);

  return firstSentence || value;
}

function getPriority(article: Article, t: (key: "readFirst" | "monitor" | "background") => string) {
  if (article.impactScore >= 86 || article.trendScore >= 36) {
    return {
      label: t("readFirst"),
      className: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
      railClass: "bg-gradient-to-b from-emerald-200 via-cyan-300 to-transparent"
    };
  }

  if (article.impactScore >= 78 || article.trendScore >= 25) {
    return {
      label: t("monitor"),
      className: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
      railClass: "bg-gradient-to-b from-cyan-200 via-violet-300 to-transparent"
    };
  }

  return {
    label: t("background"),
    className: "border-slate-300/15 bg-slate-300/5 text-slate-300",
    railClass: "bg-gradient-to-b from-slate-300/55 via-slate-500/25 to-transparent"
  };
}

function MiniMetric({
  icon,
  label,
  value,
  description
}: {
  icon?: ReactNode;
  label: string;
  value: string;
  description: string;
}) {
  return (
    <div
      className="group/metric relative min-h-[3.25rem] rounded-lg bg-white/[0.035] px-2.5 py-2 outline-none transition focus-within:bg-white/[0.055] hover:bg-white/[0.055]"
      title={description}
      aria-label={`${label}: ${value}. ${description}`}
      tabIndex={0}
    >
      <div className="flex items-center gap-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.06em] text-slate-500">
        {icon}
        {label}
      </div>
      <p className="mt-0.5 font-display text-base font-black text-white">{value}</p>
      <span className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-0 z-20 hidden w-52 rounded-lg border border-cyan-300/20 bg-slate-950/95 p-3 text-xs leading-5 text-slate-200 shadow-[0_18px_60px_rgba(0,0,0,0.42)] group-hover/metric:block group-focus/metric:block">
        {description}
      </span>
    </div>
  );
}
