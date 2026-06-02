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
import { SourceBadge } from "@/components/SourceBadge";
import { SectorSignalArt } from "@/components/SectorSignalArt";
import type { Article } from "@/data/articles";
import { categoryTone, formatDate } from "@/lib/format";

export function ArticleCard({ article }: { article: Article }) {
  const [bookmarked, setBookmarked] = useState(false);
  const priority = getPriority(article);

  useEffect(() => {
    setBookmarked(readBookmarks().includes(article.id));
  }, [article.id]);

  function toggleBookmark() {
    const bookmarks = readBookmarks();
    const next = bookmarks.includes(article.id)
      ? bookmarks.filter((id) => id !== article.id)
      : [...bookmarks, article.id];

    window.localStorage.setItem("loreengine-bookmarks", JSON.stringify(next));
    setBookmarked(next.includes(article.id));
  }

  return (
    <article className="glass-panel premium-hover group relative flex min-h-[24rem] flex-col overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-glow sm:min-h-[25rem]">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image
          src={article.visual.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw"
          className="translate-x-[18%] translate-y-[-10%] scale-[0.72] object-contain object-right-top opacity-[0.12] transition duration-500 [mask-image:radial-gradient(circle_at_72%_22%,black_0%,black_30%,transparent_70%)] group-hover:scale-[0.76] group-hover:opacity-[0.18]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(50,217,255,0.08),transparent_22%),linear-gradient(145deg,rgba(6,7,13,0.42),rgba(6,7,13,0.98)_58%)]" />
        <SectorSignalArt article={article} opacity="subtle" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full border px-2.5 py-1 text-xs font-black uppercase tracking-[0.08em] ${priority.className}`}>
              {priority.label}
            </span>
            <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${categoryTone(article.category)}`}>
              {article.category}
            </span>
          </div>
          <button
            type="button"
            onClick={toggleBookmark}
            aria-label={bookmarked ? "Remove bookmark" : "Bookmark article"}
            title={bookmarked ? "Remove bookmark" : "Bookmark article"}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
          >
            {bookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <span className="font-medium">{formatDate(article.publishedAt)}</span>
          <SourceBadge source={article.source} credibility={article.sourceCredibility} compact />
        </div>

        <h2 className="mt-4 font-display text-lg font-black leading-snug tracking-normal text-white sm:text-xl">
          {article.title}
        </h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-300">{article.tldr}</p>

        {article.impactScore >= 85 ? (
          <div className="mt-4 rounded-lg border border-cyan-300/15 bg-cyan-300/[0.06] p-3">
            <p className="text-[0.66rem] font-black uppercase tracking-[0.1em] text-cyan-200">
              Why it matters
            </p>
            <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-300">{article.whyItMatters}</p>
          </div>
        ) : null}

        <div className="mt-4 grid grid-cols-2 gap-2">
          <MiniMetric
            icon={<Gauge className="h-4 w-4" />}
            label="Industry Impact"
            value={`${article.impactScore}`}
            description="Estimated business or production importance on a 0 to 100 scale."
          />
          <MiniMetric
            icon={<TrendingUp className="h-4 w-4" />}
            label="Momentum"
            value={`+${article.trendScore}%`}
            description="Estimated growth in attention around this topic."
          />
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-[1fr_auto] gap-3 border-t border-white/10 bg-black/20 p-3 sm:p-4">
        <Link
          href={`/articles/${article.slug}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.12] hover:text-cyan-50"
        >
          Read More
          <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
        <a
          href={article.sourceUrl}
          aria-label={`Open source article from ${article.source}`}
          title={`Open source article from ${article.source}`}
          data-testid={`source-link-${article.slug}`}
          className="grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-slate-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function readBookmarks() {
  try {
    const stored = window.localStorage.getItem("loreengine-bookmarks");
    const parsed = stored ? (JSON.parse(stored) as unknown) : [];

    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

function getPriority(article: Article) {
  if (article.impactScore >= 86 || article.trendScore >= 36) {
    return {
      label: "Read first",
      className: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100"
    };
  }

  if (article.impactScore >= 78 || article.trendScore >= 25) {
    return {
      label: "Monitor",
      className: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100"
    };
  }

  return {
    label: "Background",
    className: "border-slate-300/15 bg-slate-300/5 text-slate-300"
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
      className="group/metric relative min-h-[3.75rem] rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2 outline-none transition focus-within:border-cyan-300/35 hover:border-cyan-300/25"
      title={description}
      aria-label={`${label}: ${value}. ${description}`}
      tabIndex={0}
    >
      <div className="flex items-center gap-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.06em] text-slate-500">
        {icon}
        {label}
      </div>
      <p className="mt-1 font-display text-lg font-black text-white">{value}</p>
      <span className="pointer-events-none absolute bottom-[calc(100%+0.5rem)] left-0 z-20 hidden w-52 rounded-lg border border-cyan-300/20 bg-slate-950/95 p-3 text-xs leading-5 text-slate-200 shadow-[0_18px_60px_rgba(0,0,0,0.42)] group-hover/metric:block group-focus/metric:block">
        {description}
      </span>
    </div>
  );
}
