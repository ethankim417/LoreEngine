"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { Bookmark, BookmarkCheck, ChevronRight, Gauge, RadioTower, TrendingUp } from "lucide-react";
import type { Article } from "@/data/articles";
import { categoryTone, formatDate } from "@/lib/format";

export function ArticleCard({ article }: { article: Article }) {
  const [bookmarked, setBookmarked] = useState(false);

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
    <article className="glass-panel group flex min-h-[26rem] flex-col overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-glow">
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${categoryTone(article.category)}`}>
              {article.category}
            </span>
            <span className="text-xs font-medium text-slate-500">{formatDate(article.publishedAt)}</span>
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

        <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          <RadioTower className="h-3.5 w-3.5" />
          {article.source}
        </div>

        <h2 className="mt-3 font-display text-xl font-black leading-snug tracking-normal text-white">
          {article.title}
        </h2>
        <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-300">{article.tldr}</p>

        <div className="mt-5 grid grid-cols-3 gap-2">
          <MiniMetric icon={<Gauge className="h-4 w-4" />} label="Impact" value={`${article.impactScore}`} />
          <MiniMetric icon={<TrendingUp className="h-4 w-4" />} label="Trend" value={`+${article.trendScore}%`} />
          <MiniMetric label="Trust" value={`${article.confidence}%`} />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {article.sectors.slice(0, 4).map((sector) => (
            <span
              key={sector}
              className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/20 p-4">
        <Link
          href={`/articles/${article.slug}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
        >
          Read More
          <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
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

function MiniMetric({
  icon,
  label,
  value
}: {
  icon?: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
      <div className="flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {icon}
        {label}
      </div>
      <p className="mt-1 font-display text-lg font-black text-white">{value}</p>
    </div>
  );
}
