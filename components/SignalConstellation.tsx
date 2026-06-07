"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Network, Radar } from "lucide-react";
import type { Article } from "@/data/articles";

type SignalNode = {
  id: string;
  label: string;
  shortLabel: string;
  x: number;
  y: number;
  match: (article: Article) => boolean;
};

const signalNodes: SignalNode[] = [
  {
    id: "game-ai",
    label: "Game AI",
    shortLabel: "AI",
    x: 50,
    y: 18,
    match: (article) => article.category === "AI" || article.sectors.includes("Game AI")
  },
  {
    id: "platforms",
    label: "Platforms",
    shortLabel: "Platform",
    x: 76,
    y: 42,
    match: (article) =>
      article.category === "Platform" ||
      article.sectors.some((sector) => ["Console", "Cloud Gaming", "Storefronts", "Subscriptions"].includes(sector))
  },
  {
    id: "hardware",
    label: "Hardware",
    shortLabel: "HW",
    x: 70,
    y: 76,
    match: (article) => article.category === "Hardware" || article.sectors.includes("Hardware")
  },
  {
    id: "engines",
    label: "Engines",
    shortLabel: "Engines",
    x: 30,
    y: 76,
    match: (article) => article.sectors.includes("Game Engines") || article.category === "Studio"
  },
  {
    id: "studios",
    label: "Studios",
    shortLabel: "Studios",
    x: 24,
    y: 42,
    match: (article) =>
      article.category === "Studio" ||
      article.sectors.some((sector) => ["AAA Studios", "Indie Devs", "Studios"].includes(sector))
  },
  {
    id: "market",
    label: "Market",
    shortLabel: "Market",
    x: 50,
    y: 88,
    match: (article) =>
      article.category === "Business" ||
      article.sectors.some((sector) => ["Publishing", "Marketing", "Steam", "Mobile Gaming"].includes(sector))
  },
  {
    id: "creators",
    label: "Creators",
    shortLabel: "Creators",
    x: 50,
    y: 54,
    match: (article) =>
      article.sectors.some((sector) => ["Creator Economy", "YouTube", "UGC", "Streaming", "Esports"].includes(sector))
  }
];

const signalLinks = [
  ["game-ai", "hardware"],
  ["game-ai", "studios"],
  ["game-ai", "engines"],
  ["platforms", "market"],
  ["platforms", "hardware"],
  ["studios", "engines"],
  ["studios", "market"],
  ["creators", "market"],
  ["creators", "platforms"],
  ["creators", "engines"]
];

const nodeStyles = [
  "border-cyan-200/45 bg-cyan-300/[0.13] text-cyan-50 shadow-[0_0_34px_rgba(34,211,238,0.2)]",
  "border-violet-200/45 bg-violet-300/[0.13] text-violet-50 shadow-[0_0_34px_rgba(167,139,250,0.18)]",
  "border-emerald-200/40 bg-emerald-300/[0.12] text-emerald-50 shadow-[0_0_34px_rgba(52,211,153,0.16)]",
  "border-amber-200/40 bg-amber-300/[0.12] text-amber-50 shadow-[0_0_34px_rgba(251,191,36,0.14)]"
];

export function SignalConstellation({ articles, compact = false }: { articles: Article[]; compact?: boolean }) {
  const signals = useMemo(
    () =>
      signalNodes.map((node) => {
        const related = articles
          .filter(node.match)
          .sort((a, b) => b.impactScore + b.trendScore - (a.impactScore + a.trendScore));
        const averageImpact = related.length
          ? Math.round(related.reduce((sum, article) => sum + article.impactScore, 0) / related.length)
          : 0;
        const averageTrend = related.length
          ? Math.round(related.reduce((sum, article) => sum + article.trendScore, 0) / related.length)
          : 0;

        return {
          ...node,
          related,
          averageImpact,
          averageTrend,
          intensity: Math.min(100, Math.round(averageImpact * 0.72 + averageTrend * 0.9))
        };
      }),
    [articles]
  );
  const [selectedId, setSelectedId] = useState(signals[0]?.id ?? "game-ai");
  const [mapOpen, setMapOpen] = useState(false);
  const selectedSignal = signals.find((signal) => signal.id === selectedId) ?? signals[0];

  return (
    <section className="glass-panel overflow-hidden rounded-lg" aria-label="Signal constellation map">
      <div className={`items-center justify-between gap-3 border-b border-white/10 p-4 ${compact ? "flex" : "flex sm:hidden"}`}>
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
            <Network className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.12em] text-cyan-200">Signal Map</p>
            <p className="truncate font-display text-lg font-black text-white">{selectedSignal.label}</p>
          </div>
        </div>
        <MiniConstellation />
        <button
          type="button"
          onClick={() => setMapOpen((open) => !open)}
          aria-expanded={mapOpen}
          className="shrink-0 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-2 text-xs font-black text-cyan-50 transition hover:border-cyan-300/45"
        >
          {mapOpen ? "Hide" : "View"}
        </button>
      </div>
      <div className={compact ? `${mapOpen ? "grid" : "hidden"} lg:grid-cols-[minmax(0,1fr)_20rem]` : `${mapOpen ? "grid" : "hidden"} sm:grid lg:grid-cols-[minmax(0,1.25fr)_24rem]`}>
        <div className={`relative overflow-hidden p-4 sm:p-5 ${compact ? "min-h-[15rem] sm:min-h-[17rem]" : "min-h-[18rem] sm:min-h-[22rem]"}`}>
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(34,211,238,0.08),transparent_40%,rgba(167,139,250,0.1)),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_1px)] bg-[length:auto,42px_42px]" />
          <div className="absolute left-1/2 top-1/2 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10 sm:h-[19rem] sm:w-[19rem]" />
          <div className="absolute left-1/2 top-1/2 h-[9rem] w-[9rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/10 sm:h-[13rem] sm:w-[13rem]" />

          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.12em] text-cyan-200">
                <Network className="h-4 w-4" />
                Signal Map
              </div>
            </div>
            <div className="hidden rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-right sm:block">
              <p className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-slate-500">Signals</p>
              <p className="font-display text-2xl font-black text-white">{signals.length}</p>
            </div>
          </div>

          <div className="absolute inset-x-4 bottom-4 top-20 sm:inset-x-5 sm:bottom-5 sm:top-24">
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="signal-line" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="rgba(34,211,238,0.08)" />
                  <stop offset="50%" stopColor="rgba(167,139,250,0.34)" />
                  <stop offset="100%" stopColor="rgba(52,211,153,0.1)" />
                </linearGradient>
              </defs>
              {signalLinks.map(([fromId, toId]) => {
                const from = signals.find((signal) => signal.id === fromId);
                const to = signals.find((signal) => signal.id === toId);

                if (!from || !to) return null;

                const active = selectedSignal && (selectedSignal.id === from.id || selectedSignal.id === to.id);

                return (
                  <path
                    key={`${fromId}-${toId}`}
                    className="signal-line-flow"
                    d={getLinkPath(from, to)}
                    fill="none"
                    stroke="url(#signal-line)"
                    strokeLinecap="round"
                    strokeWidth={active ? 0.48 : 0.24}
                    opacity={active ? 0.9 : 0.36}
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>

            {signals.map((signal, index) => {
              const active = selectedSignal?.id === signal.id;
              const size = (compact ? 2.65 : 3.25) + Math.min(signal.related.length, 5) * 0.18;

              return (
                <button
                  key={signal.id}
                  type="button"
                  onClick={() => setSelectedId(signal.id)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border backdrop-blur-xl transition duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-200/50 ${
                    nodeStyles[index % nodeStyles.length]
                  } ${active ? "scale-110 ring-2 ring-white/25" : ""}`}
                  style={{
                    left: `${signal.x}%`,
                    top: `${signal.y}%`,
                    width: `${size}rem`,
                    height: `${size}rem`
                  }}
                >
                  {active ? (
                    <span className="absolute inset-[-0.45rem] rounded-full border border-current opacity-15 animate-ping [animation-duration:3.8s]" />
                  ) : null}
                  <span className="relative flex h-full flex-col items-center justify-center px-2 text-center">
                    <span className="text-[0.65rem] font-black uppercase tracking-[0.08em] text-current/70">
                      {signal.shortLabel}
                    </span>
                    <span className={`font-display font-black text-white ${compact ? "text-base sm:text-lg" : "text-lg sm:text-xl"}`}>
                      {signal.intensity}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <aside className="border-t border-white/10 bg-slate-950/45 p-4 sm:p-5 lg:border-l lg:border-t-0">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
              <Radar className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.12em] text-slate-500">Selected Signal</p>
              <h2 className="font-display text-2xl font-black text-white">{selectedSignal.label}</h2>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            <ConstellationStat label="Impact" value={selectedSignal.averageImpact.toString()} />
            <ConstellationStat label="Trend" value={`+${selectedSignal.averageTrend}%`} />
            <ConstellationStat label="Briefs" value={selectedSignal.related.length.toString()} />
          </div>

          <div className="mt-5 space-y-3">
            {selectedSignal.related.slice(0, compact ? 2 : 3).map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.slug}`}
                className="group block rounded-lg border border-white/10 bg-white/[0.035] p-3 transition hover:border-cyan-300/35 hover:bg-cyan-300/[0.07]"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold leading-5 text-slate-100">{article.title}</p>
                  <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-cyan-200" />
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Impact {article.impactScore}/100 · Trend +{article.trendScore}%
                </p>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function MiniConstellation() {
  return (
    <svg className="hidden h-9 w-14 shrink-0 sm:hidden min-[390px]:block" viewBox="0 0 56 36" fill="none" aria-hidden="true">
      <path d="M12 20 C22 5 32 30 44 12" stroke="rgba(50,217,255,0.32)" strokeWidth="1" strokeLinecap="round" />
      <path d="M18 28 C26 14 34 18 46 26" stroke="rgba(167,139,250,0.24)" strokeWidth="1" strokeLinecap="round" />
      <circle cx="12" cy="20" r="3" fill="#67e8f9" opacity="0.85" />
      <circle cx="28" cy="15" r="3.5" fill="#a78bfa" opacity="0.85" />
      <circle cx="44" cy="12" r="3" fill="#6ee7b7" opacity="0.85" />
      <circle cx="46" cy="26" r="2.7" fill="#fcd34d" opacity="0.8" />
    </svg>
  );
}

function getLinkPath(from: SignalNode, to: SignalNode) {
  const centerX = 50;
  const centerY = 54;
  const controlOneX = from.x + (centerX - from.x) * 0.38;
  const controlOneY = from.y + (centerY - from.y) * 0.38;
  const controlTwoX = to.x + (centerX - to.x) * 0.38;
  const controlTwoY = to.y + (centerY - to.y) * 0.38;

  return `M ${from.x} ${from.y} C ${controlOneX} ${controlOneY}, ${controlTwoX} ${controlTwoY}, ${to.x} ${to.y}`;
}

function ConstellationStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/20 p-3">
      <p className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-slate-500">{label}</p>
      <p className="mt-1 font-display text-xl font-black text-white">{value}</p>
    </div>
  );
}
