import { TrendingDown, TrendingUp } from "lucide-react";
import type { MarketPlayer } from "@/data/market";

export function MarketHeatStrip({ players }: { players: MarketPlayer[] }) {
  const movers = [...players]
    .filter((player) => player.price !== null)
    .sort((a, b) => Math.abs(b.dayChange) - Math.abs(a.dayChange))
    .slice(0, 10);

  return (
    <div className="overflow-hidden rounded-lg border border-white/10 bg-black/25">
      <div className="flex items-center gap-2 overflow-x-auto px-3 py-2 [scrollbar-width:none]">
        <span className="shrink-0 text-[0.62rem] font-black uppercase tracking-[0.18em] text-slate-500">
          Market Heat
        </span>
        {movers.map((player) => {
          const positive = player.dayChange >= 0;

          return (
            <span
              key={player.ticker}
              className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-black ${
                positive
                  ? "border-emerald-300/20 bg-emerald-300/[0.08] text-emerald-100"
                  : "border-rose-300/20 bg-rose-300/[0.08] text-rose-100"
              }`}
            >
              {positive ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
              {player.ticker}
              <span>{formatPercent(player.dayChange)}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

function formatPercent(value: number) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}
