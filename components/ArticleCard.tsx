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
  RadioTower,
  TrendingUp
} from "lucide-react";
import { SourceBadge } from "@/components/SourceBadge";
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
    <article className="glass-panel group relative flex min-h-[26rem] flex-col overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-glow">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image
          src={article.visual.image}
          alt=""
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 50vw, 100vw"
          className="translate-x-[18%] translate-y-[-10%] scale-[0.72] object-contain object-right-top opacity-[0.32] transition duration-500 [mask-image:radial-gradient(circle_at_72%_22%,black_0%,black_34%,transparent_72%)] group-hover:scale-[0.76] group-hover:opacity-[0.42]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(50,217,255,0.13),transparent_24%),linear-gradient(145deg,rgba(6,7,13,0.18),rgba(6,7,13,0.98)_62%)]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${categoryTone(article.category)}`}>
              {article.category}
            </span>
            <span className="text-xs font-medium text-slate-500">{formatDate(article.publishedAt)}</span>
            <SourceBadge source={article.source} credibility={article.sourceCredibility} compact />
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
          Signal Brief
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

      <div className="relative z-10 grid grid-cols-[1fr_auto] gap-3 border-t border-white/10 bg-black/20 p-4">
        <Link
          href={`/articles/${article.slug}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200"
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
