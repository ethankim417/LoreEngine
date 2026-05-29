import Link from "next/link";
import { ArrowRight, BadgeDollarSign, TrendingDown, TrendingUp } from "lucide-react";
import { StockLineChart } from "@/components/StockLineChart";
import { getMarketFocusPlayers, marketGroups, type MarketPlayer } from "@/data/market";

export function MarketPulse() {
  const focusPlayers = getMarketFocusPlayers();
  const averageThirtyDay =
    focusPlayers.reduce((total, player) => total + player.thirtyDayChange, 0) / focusPlayers.length;
  const topMovers = [...focusPlayers]
    .sort((a, b) => Math.abs(b.thirtyDayChange) - Math.abs(a.thirtyDayChange))
    .slice(0, 5);
  const lead = topMovers[0];

  return (
    <Link
      href="/market"
      className="glass-panel group block overflow-hidden rounded-lg transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
      aria-label="Open full market pulse view"
    >
      <section aria-label="Market pulse preview" className="relative p-4 sm:p-5">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(50,217,255,0.18),transparent_26%),radial-gradient(circle_at_16%_0%,rgba(138,92,255,0.16),transparent_24%)]" />

        <div className="relative z-10 grid gap-5 xl:grid-cols-[1fr_28rem] xl:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              <BadgeDollarSign className="h-4 w-4" />
              Market Pulse
            </div>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between xl:block">
              <div>
                <h2 className="font-display text-2xl font-black text-white sm:text-3xl">
                  Market Watchlist Snapshot
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                  A compact cached read across hardware, game engines, and top game-revenue leaders.
                </p>
                <p className="mt-3 inline-flex rounded-full border border-amber-300/20 bg-amber-300/[0.08] px-3 py-1 text-xs font-semibold text-amber-100">
                  Sample market data, not live prices
                </p>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-black text-white transition group-hover:border-cyan-300/35 group-hover:text-cyan-100">
                Full Market View
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-[minmax(0,1fr)_12rem]">
              <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Lead Mover
                    </p>
                    <p className="mt-1 font-display text-3xl font-black text-white">{lead.ticker}</p>
                    <p className="text-sm text-slate-400">{lead.company}</p>
                  </div>
                  <div className="text-right">
                    <p className={lead.thirtyDayChange >= 0 ? "font-display text-3xl font-black text-emerald-100" : "font-display text-3xl font-black text-rose-100"}>
                      {formatPercent(lead.thirtyDayChange)}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">30d</p>
                  </div>
                </div>
                <div className="mt-4 h-24">
                  <StockLineChart
                    values={lead.trend}
                    positive={lead.thirtyDayChange >= 0}
                    height={72}
                    strokeWidth={3}
                    label={`${lead.company} 30 day line chart`}
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <MarketMiniStat label="Avg 30d" value={formatPercent(averageThirtyDay)} positive={averageThirtyDay >= 0} />
                <MarketMiniStat label="Buckets" value={`${marketGroups.length}`} positive />
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
            <div className="flex items-center justify-between px-1 pb-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Biggest 30d Changes
              </p>
              <p className="text-xs text-slate-500">Sample data</p>
            </div>
            <div className="divide-y divide-white/10">
              {topMovers.map((player) => (
                <MoverRow key={player.ticker} player={player} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

function MoverRow({ player }: { player: MarketPlayer }) {
  const positive = player.thirtyDayChange >= 0;

  return (
    <div className="grid grid-cols-[4.5rem_1fr_5rem] items-center gap-3 py-3">
      <div>
        <p className="font-display text-base font-black text-white">{player.ticker}</p>
        <p className="truncate text-xs text-slate-500">{player.segment}</p>
      </div>
      <div className="h-11">
        <StockLineChart
          values={player.trend}
          positive={positive}
          height={44}
          strokeWidth={2}
          label={`${player.company} 30 day line chart`}
        />
      </div>
      <div className="text-right">
        <p className={positive ? "font-display text-base font-black text-emerald-100" : "font-display text-base font-black text-rose-100"}>
          {formatPercent(player.thirtyDayChange)}
        </p>
        <p className="text-xs text-slate-500">{formatPrice(player)}</p>
      </div>
    </div>
  );
}

function MarketMiniStat({
  label,
  value,
  positive
}: {
  label: string;
  value: string;
  positive: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
        <p className="mt-1 font-display text-xl font-black text-white">{value}</p>
      </div>
      <span className={positive ? "text-emerald-100" : "text-rose-100"}>
        {positive ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
      </span>
    </div>
  );
}

function formatPercent(value: number) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}

function formatPrice(player: MarketPlayer) {
  return player.price === null ? "Private" : `$${player.price.toFixed(2)}`;
}
