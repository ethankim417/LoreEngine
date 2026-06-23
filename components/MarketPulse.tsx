"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, BadgeDollarSign } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { StockLineChart } from "@/components/StockLineChart";
import {
  getMarketFocusPlayersFromSnapshot,
  staticMarketSnapshot,
  type MarketPlayer,
  type MarketSnapshot
} from "@/data/market";
import { getMarketFreshnessLabel, getMarketPlayerText } from "@/lib/localizedMarket";

export function MarketPulse() {
  const { language } = useLanguage();
  const [snapshot, setSnapshot] = useState<MarketSnapshot>(staticMarketSnapshot);
  const [isRefreshing, setIsRefreshing] = useState(process.env.NEXT_PUBLIC_GITHUB_PAGES !== "true");
  const focusPlayers = getMarketFocusPlayersFromSnapshot(snapshot);
  const averageThirtyDay =
    focusPlayers.reduce((total, player) => total + player.thirtyDayChange, 0) / focusPlayers.length;
  const topMovers = [...focusPlayers]
    .sort((a, b) => Math.abs(b.thirtyDayChange) - Math.abs(a.thirtyDayChange))
    .slice(0, 5);
  const lead = getMarketPlayerText(topMovers[0], language);
  const marketRead = getMarketRead(lead, language);
  const copy = language === "ko" ? marketPulseCopy.ko : marketPulseCopy.en;

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GITHUB_PAGES === "true") {
      setIsRefreshing(false);
      return;
    }

    let isMounted = true;

    fetch("/api/market")
      .then((response) => (response.ok ? response.json() : null))
      .then((nextSnapshot: MarketSnapshot | null) => {
        if (isMounted && nextSnapshot?.players?.length) {
          setSnapshot(nextSnapshot);
        }
      })
      .catch(() => {
        // Keep the static fallback snapshot if the runtime API is unavailable.
      })
      .finally(() => {
        if (isMounted) {
          setIsRefreshing(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Link
      href="/market"
      className="market-pulse-card surface-panel premium-hover group relative block overflow-hidden rounded-lg transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/20 focus:outline-none focus:ring-2 focus:ring-cyan-300/25"
      aria-label={copy.openFull}
    >
      <section aria-label={copy.preview} className="relative p-3 sm:p-4">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(50,217,255,0.14),transparent_24%),radial-gradient(circle_at_18%_0%,rgba(138,92,255,0.12),transparent_24%)]" />

        <div className="relative z-10 flex flex-col gap-3">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">
              <BadgeDollarSign className="h-4 w-4" />
              {copy.title}
            </div>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-400">
              {copy.description}
            </p>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs leading-5 text-slate-500" aria-live="polite">
              <span>{getMarketFreshnessLabel(snapshot, language)}</span>
              {snapshot.failedTickers.length ? (
                <span>{copy.fallback(snapshot.failedTickers.length)}</span>
              ) : null}
              {isRefreshing ? (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-cyan-100">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-200" />
                  {copy.refreshing}
                </span>
              ) : null}
            </div>
          </div>

          <div className="grid gap-3 xl:grid-cols-[1fr_auto] xl:items-center">
            <div className="grid gap-2 md:grid-cols-[minmax(12rem,18rem)_1fr] md:items-center">
              <div className="market-lead-card rounded-lg bg-black/18 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-slate-500">
                      {copy.leadMover}
                    </p>
                    <p className="mt-1 font-display text-2xl font-black text-white">{lead.ticker}</p>
                    {isRefreshing ? <div className="market-skeleton mt-1 h-2 w-20 rounded-full" aria-hidden="true" /> : null}
                  </div>
                  <div className="text-right">
                    <p className={lead.thirtyDayChange >= 0 ? "font-display text-2xl font-black text-emerald-100" : "font-display text-2xl font-black text-rose-100"}>
                      {formatPercent(lead.thirtyDayChange)}
                    </p>
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-slate-500">
                      30d
                    </p>
                  </div>
                </div>
                <div className="relative mt-2 h-12 overflow-hidden rounded-md">
                  <StockLineChart
                    values={lead.trend}
                    positive={lead.thirtyDayChange >= 0}
                    height={44}
                    strokeWidth={1.8}
                    label={copy.chartLabel(lead.company)}
                    endLabel={formatPercent(lead.thirtyDayChange)}
                  />
                  {isRefreshing ? <div className="market-skeleton absolute inset-0 rounded-md" /> : null}
                </div>
              </div>

              <div className="grid gap-2 sm:hidden">
                {topMovers.slice(1, 3).map((player) => (
                  <TickerCell key={player.ticker} player={getMarketPlayerText(player, language)} compact isRefreshing={isRefreshing} chartLabel={copy.chartLabel} />
                ))}
              </div>

              <div className="hidden gap-2 sm:grid sm:grid-cols-2 lg:grid-cols-4">
                {topMovers.slice(1).map((player) => (
                  <TickerCell key={player.ticker} player={getMarketPlayerText(player, language)} isRefreshing={isRefreshing} chartLabel={copy.chartLabel} />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 xl:block xl:text-right">
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-slate-500">
                  {copy.avg30d}
                </p>
                <p className={averageThirtyDay >= 0 ? "font-display text-xl font-black text-emerald-100" : "font-display text-xl font-black text-rose-100"}>
                  {formatPercent(averageThirtyDay)}
                </p>
                <p className="mt-2 max-w-[15rem] text-xs leading-5 text-slate-500 xl:ml-auto">
                  {marketRead}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.045] px-3 py-2 text-sm font-black text-white transition group-hover:border-cyan-300/30 group-hover:text-cyan-100">
                {copy.fullMarket}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </Link>
  );
}

function TickerCell({
  player,
  compact = false,
  isRefreshing = false,
  chartLabel
}: {
  player: MarketPlayer;
  compact?: boolean;
  isRefreshing?: boolean;
  chartLabel: (company: string) => string;
}) {
  const positive = player.thirtyDayChange >= 0;

  return (
    <div className="market-ticker-cell relative overflow-hidden rounded-lg bg-white/[0.028] px-3 py-2">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-display text-sm font-black text-white">{player.ticker}</p>
          <p className="truncate text-[0.68rem] text-slate-500">{player.segment}</p>
        </div>
        <p className={positive ? "font-display text-sm font-black text-emerald-100" : "font-display text-sm font-black text-rose-100"}>
          {formatPercent(player.thirtyDayChange)}
        </p>
      </div>
      <div className={compact ? "hidden" : "mt-1.5 h-7"}>
        <StockLineChart
          values={player.trend}
          positive={positive}
          height={28}
          strokeWidth={1.35}
          label={chartLabel(player.company)}
        />
      </div>
      {isRefreshing ? (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/10">
          <div className="market-skeleton absolute left-3 top-3 h-2 w-12 rounded-full" />
          <div className="market-skeleton absolute bottom-3 left-3 right-3 h-1.5 rounded-full opacity-80" />
        </div>
      ) : null}
    </div>
  );
}

function formatPercent(value: number) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}

const marketPulseCopy = {
  en: {
    title: "Market Pulse",
    preview: "Market pulse preview",
    openFull: "Open full market pulse view",
    description: "Market context for hardware, engines, platforms, and major game revenue leaders.",
    refreshing: "Refreshing",
    leadMover: "Lead mover",
    avg30d: "Avg 30d",
    fullMarket: "Full Market",
    fallback: (count: number) => `${count} ticker fallback${count === 1 ? "" : "s"}`,
    chartLabel: (company: string) => `${company} 30 day line chart`
  },
  ko: {
    title: "Market Pulse",
    preview: "시장 펄스 미리보기",
    openFull: "전체 시장 펄스 보기",
    description: "하드웨어, 엔진, 플랫폼, 주요 게임 매출 기업의 시장 맥락입니다.",
    refreshing: "갱신 중",
    leadMover: "주요 변동",
    avg30d: "30일 평균",
    fullMarket: "전체 시장",
    fallback: (count: number) => `${count}개 티커 대체 데이터`,
    chartLabel: (company: string) => `${company} 30일 라인 차트`
  }
};

function getMarketRead(player: MarketPlayer, language: "en" | "ko") {
  const direction = player.thirtyDayChange >= 0 ? "strength" : "pressure";
  const koreanDirection = player.thirtyDayChange >= 0 ? "강세" : "압박";

  if (language === "ko") {
    if (/hardware|gpu|cpu|chip|하드웨어|칩/i.test(player.segment)) {
      return `하드웨어 ${koreanDirection}는 게임 AI, GPU 수요, 크리에이터 도구 해석에 영향을 줍니다.`;
    }

    if (/engine|엔진/i.test(player.segment)) {
      return `엔진 ${koreanDirection}는 제작 예산과 스튜디오 파이프라인 신뢰도에 중요합니다.`;
    }

    if (/platform|xbox|playstation|플랫폼/i.test(player.segment)) {
      return `플랫폼 ${koreanDirection}는 퍼블리셔의 유통 전략과 도달 범위 판단을 바꿀 수 있습니다.`;
    }

    return `게임 매출 리더의 ${koreanDirection}는 섹터 전반의 수요 해석에 참고가 됩니다.`;
  }

  if (player.segment.toLowerCase().includes("hardware")) {
    return `Hardware ${direction} can shape the read on game AI, GPU demand, and creator tooling.`;
  }

  if (player.segment.toLowerCase().includes("engine")) {
    return `Engine ${direction} matters because tools influence production budgets and studio pipeline confidence.`;
  }

  if (player.segment.toLowerCase().includes("platform")) {
    return `Platform ${direction} can change how publishers think about distribution and audience reach.`;
  }

  return `Game revenue leader ${direction} helps frame how investors may read demand across the broader sector.`;
}
