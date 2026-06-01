import Link from "next/link";
import { ArrowRight, BadgeDollarSign } from "lucide-react";
import { MarketHeatStrip } from "@/components/MarketHeatStrip";
import { StockLineChart } from "@/components/StockLineChart";
import { getMarketFocusPlayers, marketSnapshotDate, type MarketPlayer } from "@/data/market";
import { formatDate } from "@/lib/format";

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
      className="glass-panel premium-hover group relative block overflow-hidden rounded-lg transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-cyan-300/30"
      aria-label="Open full market pulse view"
    >
      <section aria-label="Market pulse preview" className="relative p-3 sm:p-4">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(50,217,255,0.14),transparent_24%),radial-gradient(circle_at_18%_0%,rgba(138,92,255,0.12),transparent_24%)]" />

        <div className="relative z-10 flex flex-col gap-3">
          <div className="grid gap-3 xl:grid-cols-[15rem_1fr] xl:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                <BadgeDollarSign className="h-4 w-4" />
                Market Pulse
              </div>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Updated {formatDate(marketSnapshotDate)}
              </p>
            </div>
            <MarketHeatStrip players={focusPlayers} />
          </div>

          <div className="grid gap-3 xl:grid-cols-[1fr_auto] xl:items-center">
            <div className="grid gap-2 md:grid-cols-[minmax(12rem,18rem)_1fr] md:items-center">
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Lead mover
                  </p>
                  <p className="mt-1 font-display text-2xl font-black text-white">{lead.ticker}</p>
                </div>
                <div className="text-right">
                  <p className={lead.thirtyDayChange >= 0 ? "font-display text-2xl font-black text-emerald-100" : "font-display text-2xl font-black text-rose-100"}>
                    {formatPercent(lead.thirtyDayChange)}
                  </p>
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                    30d
                  </p>
                </div>
              </div>
              <div className="mt-2 h-12">
                <StockLineChart
                  values={lead.trend}
                  positive={lead.thirtyDayChange >= 0}
                  height={44}
                  strokeWidth={2.4}
                  label={`${lead.company} 30 day line chart`}
                />
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {topMovers.slice(1).map((player) => (
                <TickerCell key={player.ticker} player={player} />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between gap-3 xl:block xl:text-right">
            <div>
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Avg 30d
              </p>
              <p className={averageThirtyDay >= 0 ? "font-display text-xl font-black text-emerald-100" : "font-display text-xl font-black text-rose-100"}>
                {formatPercent(averageThirtyDay)}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-black text-white transition group-hover:border-cyan-300/35 group-hover:text-cyan-100">
              Full Market
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </span>
          </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

function TickerCell({ player }: { player: MarketPlayer }) {
  const positive = player.thirtyDayChange >= 0;

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-display text-sm font-black text-white">{player.ticker}</p>
          <p className="truncate text-[0.68rem] text-slate-500">{player.segment}</p>
        </div>
        <p className={positive ? "font-display text-sm font-black text-emerald-100" : "font-display text-sm font-black text-rose-100"}>
          {formatPercent(player.thirtyDayChange)}
        </p>
      </div>
      <div className="mt-1.5 h-7">
        <StockLineChart
          values={player.trend}
          positive={positive}
          height={28}
          strokeWidth={1.8}
          label={`${player.company} 30 day line chart`}
        />
      </div>
    </div>
  );
}

function formatPercent(value: number) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}
