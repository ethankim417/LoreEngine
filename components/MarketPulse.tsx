import {
  Activity,
  BadgeDollarSign,
  Building2,
  ChevronUp,
  TrendingDown,
  TrendingUp
} from "lucide-react";
import { marketPlayers, type MarketPlayer, type MarketSentiment } from "@/data/market";

const sentimentTone: Record<MarketSentiment, string> = {
  Bullish: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  Watch: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  Pressure: "border-rose-300/25 bg-rose-300/10 text-rose-100"
};

export function MarketPulse() {
  const averageThirtyDay =
    marketPlayers.reduce((total, player) => total + player.thirtyDayChange, 0) / marketPlayers.length;
  const bullishCount = marketPlayers.filter((player) => player.sentiment === "Bullish").length;
  const pressureCount = marketPlayers.filter((player) => player.sentiment === "Pressure").length;
  const topMover = [...marketPlayers].sort(
    (a, b) => Math.abs(b.thirtyDayChange) - Math.abs(a.thirtyDayChange)
  )[0];

  return (
    <section className="glass-panel overflow-hidden rounded-lg" aria-label="Market pulse">
      <div className="relative border-b border-white/10 p-4 sm:p-5">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_86%_10%,rgba(50,217,255,0.18),transparent_28%),radial-gradient(circle_at_18%_0%,rgba(138,92,255,0.16),transparent_24%)]" />
        <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              <BadgeDollarSign className="h-4 w-4" />
              Market Pulse
            </div>
            <h2 className="mt-2 font-display text-2xl font-black text-white sm:text-3xl">
              Major Players Watchlist
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
              Demo stock snapshot for gaming platforms, publishers, engines, UGC, and AI hardware.
              Replace this cache later with a scheduled market-data job.
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-3 lg:w-[34rem]">
            <MarketStat label="Avg 30d move" value={formatPercent(averageThirtyDay)} tone={averageThirtyDay >= 0 ? "up" : "down"} />
            <MarketStat label="Bullish reads" value={`${bullishCount}/${marketPlayers.length}`} tone="up" />
            <MarketStat label="Under pressure" value={`${pressureCount}`} tone={pressureCount > 0 ? "down" : "flat"} />
          </div>
        </div>
      </div>

      <div className="grid gap-0 xl:grid-cols-[1fr_22rem]">
        <div className="grid gap-3 p-4 sm:p-5 lg:grid-cols-2">
          {marketPlayers.map((player) => (
            <MarketPlayerCard key={player.ticker} player={player} />
          ))}
        </div>

        <aside className="border-t border-white/10 bg-black/20 p-4 sm:p-5 xl:border-l xl:border-t-0">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-violet-200">
            <Activity className="h-4 w-4" />
            Brief Summary
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Market tone is tilted toward AI infrastructure and platform-scale companies. Hardware AI
            and cloud ecosystems look strongest, while engine and UGC names need clearer proof that
            developer trust, monetization, and engagement can compound.
          </p>
          <div className="mt-5 rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Largest 30d Signal
            </p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <div>
                <p className="font-display text-2xl font-black text-white">{topMover.ticker}</p>
                <p className="text-sm text-slate-400">{topMover.company}</p>
              </div>
              <p className={topMover.thirtyDayChange >= 0 ? "font-display text-2xl font-black text-emerald-100" : "font-display text-2xl font-black text-rose-100"}>
                {formatPercent(topMover.thirtyDayChange)}
              </p>
            </div>
          </div>
          <p className="mt-4 rounded-lg border border-amber-300/15 bg-amber-300/[0.06] p-3 text-xs leading-5 text-amber-100/90">
            Portfolio mode: figures are mock cached values for interface design only, not investment advice or live market data.
          </p>
        </aside>
      </div>
    </section>
  );
}

function MarketPlayerCard({ player }: { player: MarketPlayer }) {
  const isUp = player.thirtyDayChange >= 0;

  return (
    <article className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-white/[0.055]">
      <div aria-hidden="true" className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute right-[-3rem] top-[-3rem] h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl" />
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 font-display text-sm font-black text-cyan-100">
                {player.ticker.slice(0, 2)}
              </span>
              <div className="min-w-0">
                <h3 className="truncate font-display text-lg font-black text-white">{player.company}</h3>
                <p className="truncate text-xs text-slate-500">
                  {player.ticker} | {player.exchange}
                </p>
              </div>
            </div>
          </div>
          <span className={`shrink-0 rounded-full border px-2.5 py-1 text-[0.68rem] font-black uppercase tracking-[0.14em] ${sentimentTone[player.sentiment]}`}>
            {player.sentiment}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-[1fr_auto] items-end gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Last price</p>
            <p className="mt-1 font-display text-3xl font-black text-white">${player.price.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className={isUp ? "text-sm font-black text-emerald-100" : "text-sm font-black text-rose-100"}>
              {formatPercent(player.thirtyDayChange)} 30d
            </p>
            <p className={player.dayChange >= 0 ? "mt-1 text-xs text-emerald-200/75" : "mt-1 text-xs text-rose-200/75"}>
              {formatPercent(player.dayChange)} today
            </p>
          </div>
        </div>

        <TrendBars values={player.trend} positive={isUp} />

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300">
            <Building2 className="h-3.5 w-3.5 text-slate-500" />
            {player.segment}
          </span>
          <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs text-slate-300">
            {player.marketCap}
          </span>
          <span className={player.ytdChange >= 0 ? "rounded-full border border-emerald-300/15 bg-emerald-300/10 px-2.5 py-1 text-xs text-emerald-100" : "rounded-full border border-rose-300/15 bg-rose-300/10 px-2.5 py-1 text-xs text-rose-100"}>
            {formatPercent(player.ytdChange)} YTD
          </span>
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-300">{player.summary}</p>
        <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-5 text-slate-500">
          Watch: {player.watchSignal}
        </p>
      </div>
    </article>
  );
}

function TrendBars({ values, positive }: { values: number[]; positive: boolean }) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 1);

  return (
    <div className="mt-4 flex h-16 items-end gap-1.5 rounded-lg border border-white/10 bg-black/20 px-2 py-2">
      {values.map((value, index) => {
        const height = 22 + ((value - min) / range) * 74;

        return (
          <span
            key={`${value}-${index}`}
            className={positive ? "w-full rounded-t bg-cyan-300/70 shadow-[0_0_18px_rgba(50,217,255,0.16)]" : "w-full rounded-t bg-rose-300/65 shadow-[0_0_18px_rgba(251,113,133,0.14)]"}
            style={{ height: `${height}%` }}
          />
        );
      })}
    </div>
  );
}

function MarketStat({
  label,
  value,
  tone
}: {
  label: string;
  value: string;
  tone: "up" | "down" | "flat";
}) {
  const icon =
    tone === "up" ? <TrendingUp className="h-4 w-4" /> : tone === "down" ? <TrendingDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />;
  const toneClass =
    tone === "up"
      ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-100"
      : tone === "down"
        ? "border-rose-300/20 bg-rose-300/10 text-rose-100"
        : "border-cyan-300/20 bg-cyan-300/10 text-cyan-100";

  return (
    <div className={`rounded-lg border px-3 py-2 ${toneClass}`}>
      <div className="flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] opacity-80">
        {icon}
        {label}
      </div>
      <p className="mt-1 font-display text-xl font-black">{value}</p>
    </div>
  );
}

function formatPercent(value: number) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}
