import Link from "next/link";
import {
  ArrowLeft,
  BadgeDollarSign,
  Building2,
  Database,
  TrendingDown,
  TrendingUp
} from "lucide-react";
import { StockLineChart } from "@/components/StockLineChart";
import { marketPlayers, type MarketPlayer, type MarketSentiment } from "@/data/market";

const sentimentTone: Record<MarketSentiment, string> = {
  Bullish: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  Watch: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  Pressure: "border-rose-300/25 bg-rose-300/10 text-rose-100"
};

export const metadata = {
  title: "Market Pulse | LoreEngine"
};

export default function MarketPage() {
  const sortedPlayers = [...marketPlayers].sort((a, b) => b.thirtyDayChange - a.thirtyDayChange);
  const averageThirtyDay =
    marketPlayers.reduce((total, player) => total + player.thirtyDayChange, 0) / marketPlayers.length;
  const bullishCount = marketPlayers.filter((player) => player.sentiment === "Bullish").length;
  const pressureCount = marketPlayers.filter((player) => player.sentiment === "Pressure").length;

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="mesh-grid absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="absolute right-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Dashboard
        </Link>

        <section className="glass-panel overflow-hidden rounded-lg">
          <div className="relative border-b border-white/10 p-5 sm:p-7">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(50,217,255,0.18),transparent_28%),radial-gradient(circle_at_20%_0%,rgba(138,92,255,0.16),transparent_26%)]" />
            <div className="relative z-10 grid gap-5 lg:grid-cols-[1fr_28rem] lg:items-end">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  <BadgeDollarSign className="h-4 w-4" />
                  Market Pulse
                </div>
                <h1 className="mt-3 font-display text-4xl font-black text-white sm:text-5xl">
                  Gaming Market Board
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
                  Mock cached stock board for the public companies shaping gaming AI, platforms,
                  engines, publishers, creator ecosystems, and mobile distribution.
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-3">
                <SummaryStat label="Avg 30d" value={formatPercent(averageThirtyDay)} positive={averageThirtyDay >= 0} />
                <SummaryStat label="Bullish" value={`${bullishCount}/${marketPlayers.length}`} positive />
                <SummaryStat label="Pressure" value={`${pressureCount}`} positive={pressureCount === 0} />
              </div>
            </div>
          </div>

          <div className="grid gap-0 xl:grid-cols-[1fr_22rem]">
            <div className="p-4 sm:p-5">
              <div className="overflow-hidden rounded-lg border border-white/10">
                <div className="hidden grid-cols-[7rem_1fr_8rem_8rem_8rem_9rem] gap-4 border-b border-white/10 bg-white/[0.035] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 lg:grid">
                  <span>Ticker</span>
                  <span>Company</span>
                  <span>Price</span>
                  <span>30d</span>
                  <span>YTD</span>
                  <span>Trend</span>
                </div>
                <div className="divide-y divide-white/10">
                  {sortedPlayers.map((player) => (
                    <MarketRow key={player.ticker} player={player} />
                  ))}
                </div>
              </div>
            </div>

            <aside className="border-t border-white/10 bg-black/20 p-5 xl:border-l xl:border-t-0">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-violet-200">
                <Database className="h-4 w-4" />
                Summary
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                The mock board currently favors AI infrastructure and platform-scale names. NVIDIA,
                Nintendo, and Take-Two show the strongest sample momentum, while Unity remains the
                clearest pressure signal tied to developer trust and engine economics.
              </p>
              <div className="mt-5 space-y-3">
                <Insight label="Strongest theme" value="Gaming AI infrastructure" />
                <Insight label="Risk pocket" value="Engine monetization trust" />
                <Insight label="Portfolio mode" value="Mock cached quotes" />
              </div>
              <p className="mt-5 rounded-lg border border-amber-300/15 bg-amber-300/[0.06] p-3 text-xs leading-5 text-amber-100/90">
                These numbers are sample values for dashboard design only. A production version should fetch quotes server-side on a schedule and cache the results.
              </p>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

function MarketRow({ player }: { player: MarketPlayer }) {
  const positive = player.thirtyDayChange >= 0;

  return (
    <article className="grid gap-3 bg-white/[0.015] px-4 py-4 transition hover:bg-white/[0.04] lg:grid-cols-[7rem_1fr_8rem_8rem_8rem_9rem] lg:items-center">
      <div className="flex items-center justify-between gap-3 lg:block">
        <div>
          <p className="font-display text-lg font-black text-white">{player.ticker}</p>
          <p className="text-xs text-slate-500">{player.exchange}</p>
        </div>
        <span className={`rounded-full border px-2.5 py-1 text-[0.66rem] font-black uppercase tracking-[0.14em] lg:mt-2 lg:inline-flex ${sentimentTone[player.sentiment]}`}>
          {player.sentiment}
        </span>
      </div>

      <div className="min-w-0">
        <h2 className="truncate font-display text-lg font-black text-white">{player.company}</h2>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-400">
          <Building2 className="h-3.5 w-3.5 text-slate-500" />
          {player.segment}
        </p>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">{player.watchSignal}</p>
      </div>

      <MetricCell label="Price" value={`$${player.price.toFixed(2)}`} />
      <MetricCell label="30d" value={formatPercent(player.thirtyDayChange)} positive={positive} />
      <MetricCell label="YTD" value={formatPercent(player.ytdChange)} positive={player.ytdChange >= 0} />

      <div className="h-16 lg:h-12">
        <StockLineChart
          values={player.trend}
          positive={positive}
          height={48}
          strokeWidth={2.25}
          label={`${player.company} 30 day line chart`}
        />
      </div>
    </article>
  );
}

function MetricCell({
  label,
  value,
  positive
}: {
  label: string;
  value: string;
  positive?: boolean;
}) {
  const color = positive === undefined ? "text-white" : positive ? "text-emerald-100" : "text-rose-100";

  return (
    <div className="flex items-center justify-between gap-3 lg:block">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 lg:hidden">{label}</p>
      <p className={`font-display text-xl font-black ${color}`}>{value}</p>
    </div>
  );
}

function SummaryStat({
  label,
  value,
  positive
}: {
  label: string;
  value: string;
  positive: boolean;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
        <span className={positive ? "text-emerald-100" : "text-rose-100"}>
          {positive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
        </span>
      </div>
      <p className="mt-2 font-display text-2xl font-black text-white">{value}</p>
    </div>
  );
}

function Insight({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-100">{value}</p>
    </div>
  );
}

function formatPercent(value: number) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}
