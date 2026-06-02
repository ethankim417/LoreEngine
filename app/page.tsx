import { IntelligenceDashboard } from "@/components/IntelligenceDashboard";
import { articles } from "@/data/articles";
import { getDashboardMetrics } from "@/lib/metrics";
import { Mail, Radar, Sparkles } from "lucide-react";

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
      <div className="relative flex flex-col gap-4">
        <a
          href="mailto:lore-engine@ethankim.cc"
          className="absolute right-0 top-0 hidden items-center gap-2 rounded-full border border-cyan-300/20 bg-slate-950/45 px-3 py-1.5 text-xs font-semibold text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_34px_rgba(0,0,0,0.22)] backdrop-blur-xl transition hover:border-cyan-300/45 hover:bg-cyan-300/[0.1] sm:inline-flex"
          aria-label="Email LoreEngine"
        >
          <Mail className="h-3.5 w-3.5" />
          <span className="text-cyan-200/70">Signal Desk</span>
          <span className="h-1 w-1 rounded-full bg-cyan-200/45" />
          <span>lore-engine@ethankim.cc</span>
        </a>

        <div className="flex items-center gap-4">
          <div className="soft-float relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/30 bg-slate-950/65 shadow-[0_0_42px_rgba(34,211,238,0.14),inset_0_1px_0_rgba(255,255,255,0.08)] sm:h-16 sm:w-16">
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
          aria-label="Email LoreEngine"
        >
          <Mail className="h-3.5 w-3.5" />
          <span className="text-cyan-200/70">Signal Desk</span>
          <span className="h-1 w-1 rounded-full bg-cyan-200/45" />
          <span>lore-engine@ethankim.cc</span>
        </a>
      </div>
    </section>
  );
}
