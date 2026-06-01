import { IntelligenceDashboard } from "@/components/IntelligenceDashboard";
import { articles } from "@/data/articles";
import { getDashboardMetrics } from "@/lib/metrics";

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
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 shadow-glow sm:h-12 sm:w-12">
            <div className="absolute inset-1 rounded-md border border-violet-300/20" />
            <span className="font-display text-lg font-black tracking-[0.18em] text-cyan-100">
              LE
            </span>
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

        <div className="max-w-3xl">
          <p className="text-balance text-xl font-medium text-cyan-50 sm:text-2xl">
            AI-powered gaming industry intelligence
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:mt-3 sm:text-base">
            A command-center dashboard for tracking the signals shaping studios,
            platforms, game AI, hardware, esports, and creator-led markets.
          </p>
        </div>
      </div>
    </section>
  );
}
