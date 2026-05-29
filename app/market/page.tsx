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
import {
  getMarketFocusPlayers,
  getMarketGroupPlayers,
  marketGroups,
  type MarketGroup,
  type MarketPlayer,
  type MarketSentiment
} from "@/data/market";

const sentimentTone: Record<MarketSentiment, string> = {
  Bullish: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  Watch: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  Pressure: "border-rose-300/25 bg-rose-300/10 text-rose-100"
};

export const metadata = {
  title: "Market Pulse | LoreEngine"
};

export default function MarketPage() {
  const focusPlayers = getMarketFocusPlayers();
  const averageThirtyDay =
    focusPlayers.reduce((total, player) => total + player.thirtyDayChange, 0) / focusPlayers.length;
  const bullishCount = focusPlayers.filter((player) => player.sentiment === "Bullish").length;
  const pressureCount = focusPlayers.filter((player) => player.sentiment === "Pressure").length;

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
                  Gaming Market Watchlists
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
                  Sample market board organized around hardware, game engines, and the largest
                  game-revenue leaders. Private companies are labeled clearly when no public ticker exists.
                </p>
                <p className="mt-4 inline-flex rounded-full border border-amber-300/20 bg-amber-300/[0.08] px-3 py-1 text-xs font-semibold text-amber-100">
                  Sample market data, not live prices
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-3">
                <SummaryStat label="Avg 30d" value={formatPercent(averageThirtyDay)} positive={averageThirtyDay >= 0} />
                <SummaryStat label="Bullish" value={`${bullishCount}/${focusPlayers.length}`} positive />
                <SummaryStat label="Pressure" value={`${pressureCount}`} positive={pressureCount === 0} />
              </div>
            </div>
          </div>

          <div className="grid gap-0 xl:grid-cols-[1fr_22rem]">
            <div className="space-y-4 p-4 sm:p-5">
              {marketGroups.map((group) => (
                <MarketGroupSection key={group.id} group={group} players={getMarketGroupPlayers(group)} />
              ))}
            </div>

            <aside className="border-t border-white/10 bg-black/20 p-5 xl:border-l xl:border-t-0">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-violet-200">
                <Database className="h-4 w-4" />
                Summary
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                The board separates hardware exposure from engine strategy and revenue leadership.
                Hardware momentum is strongest around AI chips and console-cycle names. Engine coverage
                includes Unity plus Epic as a private Unreal proxy, while the revenue bucket tracks the
                broader non-hardware revenue leaders.
              </p>
              <div className="mt-5 space-y-3">
                <Insight label="Hardware list" value="5 public market signals" />
                <Insight label="Engine list" value="Unity plus Epic private proxy" />
                <Insight label="Revenue list" value="10 leaders, excluding Sony and Nintendo" />
                <Insight label="Portfolio mode" value="Sample market data" />
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

function MarketGroupSection({
  group,
  players
}: {
  group: MarketGroup;
  players: MarketPlayer[];
}) {
  return (
    <section className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]">
      <div className="flex flex-col gap-2 border-b border-white/10 bg-white/[0.035] px-4 py-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{group.eyebrow}</p>
          <h2 className="mt-1 font-display text-2xl font-black text-white">{group.title}</h2>
          <p className="mt-1 text-sm text-slate-400">{group.description}</p>
        </div>
      </div>
      <div className="hidden grid-cols-[7rem_1fr_8rem_8rem_8rem_9rem] gap-4 border-b border-white/10 bg-black/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 lg:grid">
        <span>Ticker</span>
        <span>Company</span>
        <span>Price</span>
        <span>30d</span>
        <span>YTD</span>
        <span>Trend</span>
      </div>
      <div className="divide-y divide-white/10">
        {players.map((player) => (
          <MarketRow key={`${group.id}-${player.ticker}`} player={player} />
        ))}
      </div>
    </section>
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

      <MetricCell label="Price" value={formatPrice(player)} />
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

function formatPrice(player: MarketPlayer) {
  return player.price === null ? "Private" : `$${player.price.toFixed(2)}`;
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
