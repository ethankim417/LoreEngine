import { IntelligenceDashboard } from "@/components/IntelligenceDashboard";
import { articles } from "@/data/articles";
import { getDashboardMetrics } from "@/lib/metrics";
import { Radar, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AmbientBackground />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-3 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <Hero />
        <IntelligenceDashboard articles={articles} metrics={getDashboardMetrics(articles)} />
      </div>
    </main>
  );
}

function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="mesh-grid absolute inset-0 opacity-80" />
      <div className="absolute left-[-14rem] top-[-12rem] h-[34rem] w-[34rem] animate-slow-pan rounded-full bg-cyan-400/[0.12] blur-3xl" />
      <div className="absolute right-[-10rem] top-10 h-[30rem] w-[30rem] animate-slow-pan rounded-full bg-violet-500/[0.14] blur-3xl [animation-delay:2s]" />
      <div className="absolute bottom-[-14rem] left-1/3 h-[28rem] w-[28rem] animate-slow-pan rounded-full bg-emerald-400/[0.08] blur-3xl [animation-delay:4s]" />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 shadow-glow backdrop-blur-2xl sm:px-6 sm:py-7">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_70%_35%,rgba(50,217,255,0.2),transparent_32rem)]" />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/35 bg-slate-950/60 shadow-glow sm:h-16 sm:w-16">
            <div className="absolute inset-1 rounded-xl border border-violet-300/25" />
            <div className="absolute h-8 w-8 rounded-full border border-cyan-300/25" />
            <Radar className="relative h-7 w-7 text-cyan-100 sm:h-8 sm:w-8" />
            <Sparkles className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-cyan-300/20 p-0.5 text-cyan-100" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200/75">
              Weekly Brief
            </p>
            <h1 className="font-display text-4xl font-black tracking-normal text-white sm:text-6xl">
              LoreEngine
            </h1>
          </div>
        </div>

        <div className="max-w-4xl">
          <p className="text-balance text-xl font-medium text-cyan-50 sm:text-2xl">
            Weekly intelligence for the business of games.
          </p>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300 sm:mt-3 sm:text-base">
            LoreEngine turns gaming, AI, platform, hardware, esports, and market
            stories into a ranked executive brief: what changed, why it matters,
            and which studios, tools, and sectors are likely to feel it next.
          </p>
        </div>
      </div>
    </section>
  );
}
