import { IntelligenceDashboard } from "@/components/IntelligenceDashboard";
import { articles } from "@/data/articles";
import { getDashboardMetrics } from "@/lib/metrics";
import { Info, Mail, Radar, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AmbientBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-5 px-3 py-4 sm:gap-7 sm:px-6 sm:py-6 lg:gap-8 lg:px-8 lg:py-8">
        <Hero />
        <IntelligenceDashboard articles={articles} metrics={getDashboardMetrics(articles)} />
        <DisclosureFooter />
      </div>
    </main>
  );
}

function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="mesh-grid absolute inset-0 opacity-80" />
      <div className="ambient-particles absolute inset-0 opacity-20" />
      <div className="page-scanline absolute left-0 top-0 h-40 w-full opacity-35" />
      <div className="absolute left-[-14rem] top-[-12rem] h-[34rem] w-[34rem] animate-slow-pan rounded-full bg-cyan-400/[0.09] blur-3xl" />
      <div className="absolute right-[-10rem] top-10 h-[30rem] w-[30rem] animate-slow-pan rounded-full bg-violet-500/[0.1] blur-3xl [animation-delay:2s]" />
      <div className="absolute bottom-[-14rem] left-1/3 h-[28rem] w-[28rem] animate-slow-pan rounded-full bg-emerald-400/[0.08] blur-3xl [animation-delay:4s]" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(9,13,26,0.82),rgba(8,10,20,0.62))] px-4 py-5 shadow-glow backdrop-blur-2xl sm:px-6 sm:py-7">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_18%,rgba(50,217,255,0.18),transparent_42%),radial-gradient(ellipse_at_18%_92%,rgba(138,92,255,0.14),transparent_38%),linear-gradient(90deg,rgba(255,255,255,0.045),transparent_34%,rgba(84,240,169,0.045))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
      <div className="absolute inset-y-0 left-[-18%] w-1/3 animate-slow-pan bg-gradient-to-r from-transparent via-cyan-200/[0.055] to-transparent blur-sm [animation-duration:14s]" />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-300/[0.06] blur-3xl" />
      <HeroRadar />
      <div className="relative flex flex-col gap-4">
        <a
          href="mailto:lore-engine@ethankim.cc"
          className="absolute right-0 top-0 hidden items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950/45 px-3 py-1.5 text-xs font-semibold text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_34px_rgba(0,0,0,0.22)] backdrop-blur-xl transition hover:border-cyan-300/45 hover:bg-cyan-300/[0.1] sm:inline-flex"
          aria-label="Contact LoreEngine at lore-engine@ethankim.cc"
        >
          <Mail className="h-3.5 w-3.5" />
          Contact
        </a>

        <div className="flex items-center gap-4">
          <div className="signal-logo soft-float relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/30 bg-slate-950/65 shadow-[0_0_42px_rgba(34,211,238,0.14),inset_0_1px_0_rgba(255,255,255,0.08)] sm:h-16 sm:w-16">
            <div className="absolute inset-1 rounded-xl border border-violet-300/20" />
            <div className="absolute h-9 w-9 rounded-full border border-cyan-300/20" />
            <div className="absolute h-5 w-5 rounded-full border border-emerald-200/20" />
            <Radar className="relative h-7 w-7 text-cyan-100/90 sm:h-8 sm:w-8" />
            <span className="absolute bottom-1.5 right-1.5 rounded-md border border-cyan-200/25 bg-cyan-300/10 px-1.5 py-0.5 font-display text-[0.58rem] font-black leading-none text-cyan-50">
              LE
            </span>
            <Sparkles className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-cyan-300/15 p-0.5 text-cyan-100" />
          </div>
          <div>
            <p className="inline-flex rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-200/80">
              Weekly Brief
            </p>
            <h1 className="mt-2 font-display text-4xl font-black tracking-normal text-white sm:text-6xl">
              LoreEngine
            </h1>
          </div>
        </div>

        <div className="max-w-4xl">
          <p className="text-balance text-xl font-medium text-cyan-50 sm:text-2xl">
            The gaming industry, distilled weekly.
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300 sm:mt-3 sm:text-base">
            LoreEngine turns gaming, AI, platform, hardware, esports, and market signals
            into a ranked brief: what changed, why it matters, and who may feel it next.
          </p>
        </div>

        <a
          href="mailto:lore-engine@ethankim.cc"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950/45 px-3 py-1.5 text-xs font-semibold text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition hover:border-cyan-300/45 hover:bg-cyan-300/[0.1] sm:hidden"
          aria-label="Contact LoreEngine at lore-engine@ethankim.cc"
        >
          <Mail className="h-3.5 w-3.5" />
          Contact
        </a>
      </div>
    </section>
  );
}

function HeroRadar() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute bottom-4 right-5 hidden h-40 w-40 opacity-80 sm:block lg:h-48 lg:w-48"
    >
      <svg className="h-full w-full overflow-visible" viewBox="0 0 180 180" fill="none">
        <circle cx="90" cy="90" r="58" stroke="rgba(50,217,255,0.18)" strokeWidth="1" />
        <circle cx="90" cy="90" r="36" stroke="rgba(167,139,250,0.16)" strokeWidth="1" />
        <circle cx="90" cy="90" r="14" stroke="rgba(84,240,169,0.16)" strokeWidth="1" />
        <path
          className="hero-radar-sweep"
          d="M90 90 L90 25 A65 65 0 0 1 142 52 Z"
          fill="url(#hero-radar-glow)"
        />
        <path d="M38 90H162" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <path d="M90 38V162" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        {[
          [55, 68],
          [122, 76],
          [104, 124],
          [73, 111]
        ].map(([x, y], index) => (
          <circle
            key={`${x}-${y}`}
            className="hero-radar-dot"
            cx={x}
            cy={y}
            r="2.8"
            fill={index % 2 ? "#a78bfa" : "#67e8f9"}
            style={{ animationDelay: `${index * 0.35}s` }}
          />
        ))}
        <defs>
          <radialGradient id="hero-radar-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(90 90) rotate(-44) scale(74)">
            <stop stopColor="rgba(50,217,255,0.2)" />
            <stop offset="1" stopColor="rgba(50,217,255,0)" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function DisclosureFooter() {
  return (
    <footer className="pb-3">
      <div className="group/disclosure relative inline-flex max-w-full flex-wrap items-center gap-2 rounded-lg border border-white/10 bg-slate-950/45 px-3 py-2 text-xs text-slate-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:rounded-full">
        <Info className="h-3.5 w-3.5 shrink-0 text-cyan-200/80" />
        <span>
          Informational demo. Market data is weekly/cached, not real-time financial data.
        </span>
        <button
          type="button"
          className="rounded-full text-cyan-200/80 underline decoration-cyan-300/25 underline-offset-4 outline-none transition hover:text-cyan-100 focus:text-cyan-100"
          aria-label="Show LoreEngine disclaimer"
        >
          Disclaimer
        </button>
        <div className="pointer-events-none absolute bottom-[calc(100%+0.75rem)] left-0 z-30 hidden w-[min(34rem,calc(100vw-2rem))] rounded-lg border border-cyan-300/18 bg-slate-950/95 p-4 text-left text-xs leading-5 text-slate-300 shadow-[0_24px_80px_rgba(0,0,0,0.48)] backdrop-blur-xl group-hover/disclosure:block group-focus-within/disclosure:block">
          <p className="font-black uppercase tracking-[0.14em] text-cyan-200">LoreEngine Disclaimer</p>
          <p className="mt-2">
            LoreEngine is an experimental industry intelligence dashboard for informational and educational
            purposes only. It is not financial, investment, legal, or professional advice.
          </p>
          <p className="mt-2">
            Market data may be delayed, incomplete, or inaccurate and should not be used for trading or
            investment decisions. Company names, tickers, and trademarks belong to their respective owners.
          </p>
          <p className="mt-2">
            Article intelligence uses mock/cached data unless stated otherwise. Future AI-generated summaries
            may contain errors and should be checked against original sources.
          </p>
        </div>
      </div>
    </footer>
  );
}
