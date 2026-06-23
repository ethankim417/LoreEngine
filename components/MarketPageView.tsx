"use client";

import Link from "next/link";
import {
  ArrowLeft,
  BadgeDollarSign,
  Building2,
  Database,
  Info,
  TrendingDown,
  TrendingUp
} from "lucide-react";
import { LocalizedText } from "@/components/LocalizedText";
import { StockLineChart } from "@/components/StockLineChart";
import { useLanguage } from "@/components/LanguageProvider";
import {
  getMarketFocusPlayersFromSnapshot,
  getMarketGroupPlayersFrom,
  type MarketGroup,
  type MarketPlayer,
  type MarketSnapshot,
  type MarketSentiment
} from "@/data/market";
import { formatDate } from "@/lib/format";
import {
  getMarketFreshnessLabel,
  getMarketGroupText,
  getMarketPlayerText,
  getSentimentLabel
} from "@/lib/localizedMarket";

const sentimentTone: Record<MarketSentiment, string> = {
  Bullish: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  Watch: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  Pressure: "border-rose-300/25 bg-rose-300/10 text-rose-100"
};

const marketCopy = {
  en: {
    dashboard: "Dashboard",
    marketPulse: "Market Pulse",
    title: "Gaming Market Watchlists",
    intro:
      "Weekly market board organized around hardware, game engines, and the largest game-revenue leaders. Private companies are labeled clearly when no public ticker exists.",
    avg30d: "Avg 30d",
    bullish: "Bullish",
    pressure: "Pressure",
    summary: "Summary",
    summaryBody:
      "The board separates hardware exposure from engine strategy and revenue leadership. Hardware momentum is strongest around AI chips and console-cycle names. Engine coverage includes Unity plus Epic as a private Unreal proxy, while the revenue bucket tracks the broader non-hardware revenue leaders.",
    hardwareList: "Hardware list",
    hardwareValue: "5 public market signals",
    engineList: "Engine list",
    engineValue: "Unity plus Epic private proxy",
    revenueList: "Revenue list",
    revenueValue: "10 leaders, excluding Sony and Nintendo",
    snapshotDate: "Snapshot date",
    dataSource: "Data source",
    refreshStatus: "Refresh status",
    ticker: "Ticker",
    company: "Company",
    price: "Price",
    trend: "Trend",
    watch: "Watch",
    read: "read",
    fullRead: "Full read",
    private: "Private",
    allRefreshed: "All public tickers refreshed",
    tickerFallback: (count: number) => `${count} ticker fallback${count === 1 ? "" : "s"}`,
    tickers: "tickers",
    chartLabel: (company: string) => `${company} 30 day line chart`,
    showRead: (company: string) => `Show full market read for ${company}`
  },
  ko: {
    dashboard: "대시보드",
    marketPulse: "Market Pulse",
    title: "게임 시장 워치리스트",
    intro:
      "하드웨어, 게임 엔진, 주요 게임 매출 기업을 중심으로 정리한 주간 시장 보드입니다. 공개 티커가 없는 비상장 기업은 명확히 표시합니다.",
    avg30d: "30일 평균",
    bullish: "강세",
    pressure: "압박",
    summary: "요약",
    summaryBody:
      "이 보드는 하드웨어 노출도, 엔진 전략, 매출 리더십을 분리해서 봅니다. 하드웨어 모멘텀은 AI 칩과 콘솔 사이클 기업에서 강하게 나타나며, 엔진 영역은 Unity와 Epic을 Unreal의 비상장 프록시로 함께 봅니다. 매출 그룹은 비하드웨어 게임 매출 리더를 추적합니다.",
    hardwareList: "하드웨어 목록",
    hardwareValue: "상장 시장 신호 5개",
    engineList: "엔진 목록",
    engineValue: "Unity와 Epic 비상장 프록시",
    revenueList: "매출 목록",
    revenueValue: "Sony와 Nintendo 제외 10개 리더",
    snapshotDate: "스냅샷 날짜",
    dataSource: "데이터 출처",
    refreshStatus: "갱신 상태",
    ticker: "티커",
    company: "회사",
    price: "가격",
    trend: "트렌드",
    watch: "주시",
    read: "해석",
    fullRead: "전체 읽기",
    private: "비상장",
    allRefreshed: "상장 티커 모두 갱신됨",
    tickerFallback: (count: number) => `${count}개 티커 대체 데이터`,
    tickers: "개 티커",
    chartLabel: (company: string) => `${company} 30일 라인 차트`,
    showRead: (company: string) => `${company} 전체 시장 해석 보기`
  }
};

export function MarketPageView({ snapshot }: { snapshot: MarketSnapshot }) {
  const { language } = useLanguage();
  const copy = marketCopy[language];
  const focusPlayers = getMarketFocusPlayersFromSnapshot(snapshot);
  const averageThirtyDay =
    focusPlayers.reduce((total, player) => total + player.thirtyDayChange, 0) / focusPlayers.length;
  const bullishCount = focusPlayers.filter((player) => player.sentiment === "Bullish").length;
  const pressureCount = focusPlayers.filter((player) => player.sentiment === "Pressure").length;

  return (
    <main className="market-page relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="mesh-grid absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="absolute right-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {copy.dashboard}
        </Link>

        <section className="market-board glass-panel overflow-hidden rounded-lg">
          <div className="relative border-b border-white/10 p-5 sm:p-7">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(50,217,255,0.18),transparent_28%),radial-gradient(circle_at_20%_0%,rgba(138,92,255,0.16),transparent_26%)]" />
            <div className="relative z-10 grid gap-5 lg:grid-cols-[1fr_28rem] lg:items-end">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                  <BadgeDollarSign className="h-4 w-4" />
                  {copy.marketPulse}
                </div>
                <h1 className="mt-3 font-display text-4xl font-black text-white sm:text-5xl">{copy.title}</h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">{copy.intro}</p>
                <p className="mt-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1 text-xs font-semibold text-cyan-100">
                  {getMarketFreshnessLabel(snapshot, language)}
                </p>
              </div>

              <div className="grid gap-2 sm:grid-cols-3">
                <SummaryStat label={copy.avg30d} value={formatPercent(averageThirtyDay)} positive={averageThirtyDay >= 0} />
                <SummaryStat label={copy.bullish} value={`${bullishCount}/${focusPlayers.length}`} positive />
                <SummaryStat label={copy.pressure} value={`${pressureCount}`} positive={pressureCount === 0} />
              </div>
            </div>
          </div>

          <div className="grid gap-0 xl:grid-cols-[1fr_22rem]">
            <div className="space-y-4 p-4 sm:p-5">
              {snapshot.groups.map((group) => (
                <MarketGroupSection
                  key={group.id}
                  copy={copy}
                  group={getMarketGroupText(group, language)}
                  language={language}
                  players={getMarketGroupPlayersFrom(group, snapshot.players).map((player) =>
                    getMarketPlayerText(player, language)
                  )}
                />
              ))}
            </div>

            <aside className="border-t border-white/10 bg-black/20 p-5 xl:border-l xl:border-t-0">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-violet-200">
                <Database className="h-4 w-4" />
                {copy.summary}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-300">{copy.summaryBody}</p>
              <div className="mt-5 space-y-3">
                <Insight label={copy.hardwareList} value={copy.hardwareValue} />
                <Insight label={copy.engineList} value={copy.engineValue} />
                <Insight label={copy.revenueList} value={copy.revenueValue} />
                <Insight label={copy.snapshotDate} value={formatDate(snapshot.snapshotDate, language)} />
                <Insight label={copy.dataSource} value={formatSource(snapshot, language, copy)} />
                <Insight label={copy.refreshStatus} value={formatRefreshStatus(snapshot, copy)} />
              </div>
              <MarketDisclosure />
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

function MarketDisclosure() {
  return (
    <div className="group/disclosure relative mt-5 rounded-lg border border-amber-300/15 bg-amber-300/[0.055] p-3 text-xs leading-5 text-amber-100/90">
      <div className="flex items-center gap-2">
        <Info className="h-3.5 w-3.5 shrink-0 text-amber-100" />
        <span className="min-w-0"><LocalizedText k="marketDisclosureShort" /></span>
        <button
          type="button"
          className="font-bold text-cyan-100 underline decoration-cyan-300/25 underline-offset-4 outline-none transition hover:text-white focus:text-white"
          aria-label="Show Market Pulse disclaimer"
        >
          <LocalizedText k="details" />
        </button>
      </div>
      <div className="pointer-events-none absolute bottom-[calc(100%+0.75rem)] right-0 z-30 hidden w-[min(34rem,calc(100vw-2rem))] rounded-lg border border-cyan-300/18 bg-slate-950/95 p-4 text-left text-xs leading-5 text-slate-300 shadow-[0_24px_80px_rgba(0,0,0,0.48)] backdrop-blur-xl group-hover/disclosure:block group-focus-within/disclosure:block">
        <p className="font-black uppercase tracking-[0.14em] text-cyan-200">
          <LocalizedText k="marketPulseDisclaimer" />
        </p>
        <p className="mt-2"><LocalizedText k="marketDisclaimerBodyOne" /></p>
        <p className="mt-2"><LocalizedText k="marketDisclaimerBodyTwo" /></p>
        <p className="mt-2"><LocalizedText k="marketDisclaimerBodyThree" /></p>
      </div>
    </div>
  );
}

function MarketGroupSection({
  group,
  players,
  copy,
  language
}: {
  group: MarketGroup;
  players: MarketPlayer[];
  copy: typeof marketCopy.en;
  language: "en" | "ko";
}) {
  return (
    <section className="market-group-section rounded-lg border border-white/10 bg-white/[0.02]">
      <div className="flex flex-col gap-2 border-b border-white/10 bg-white/[0.035] px-4 py-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">{group.eyebrow}</p>
          <h2 className="mt-1 text-balance font-display text-2xl font-black text-white">{group.title}</h2>
          <p className="mt-1 text-sm text-slate-400">{group.description}</p>
        </div>
      </div>
      <div className="hidden grid-cols-[7rem_1fr_8rem_8rem_8rem_12rem] gap-4 border-b border-white/10 bg-black/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 lg:grid">
        <span>{copy.ticker}</span>
        <span>{copy.company}</span>
        <span>{copy.price}</span>
        <span>30d</span>
        <span>YTD</span>
        <span>{copy.trend}</span>
      </div>
      <div className="divide-y divide-white/10">
        {players.map((player) => (
          <MarketRow key={`${group.id}-${player.ticker}`} player={player} copy={copy} language={language} />
        ))}
      </div>
    </section>
  );
}

function MarketRow({ player, copy, language }: { player: MarketPlayer; copy: typeof marketCopy.en; language: "en" | "ko" }) {
  const positive = player.thirtyDayChange >= 0;

  return (
    <article className="market-row grid gap-3 bg-white/[0.015] px-4 py-4 transition hover:bg-white/[0.04] lg:grid-cols-[7rem_1fr_8rem_8rem_8rem_12rem] lg:items-center">
      <div className="flex items-center justify-between gap-3 lg:block">
        <div>
          <p className="font-display text-lg font-black text-white">{player.ticker}</p>
          <p className="text-xs text-slate-500">{player.exchange}</p>
        </div>
        <span className={`rounded-full border px-2.5 py-1 text-[0.66rem] font-black uppercase tracking-[0.14em] lg:mt-2 lg:inline-flex ${sentimentTone[player.sentiment]}`}>
          {getSentimentLabel(player.sentiment, language)}
        </span>
      </div>

      <div className="min-w-0">
        <h2 className="truncate font-display text-lg font-black text-white">{player.company}</h2>
        <p className="mt-1 flex min-w-0 items-center gap-1.5 text-sm text-slate-400">
          <Building2 className="h-3.5 w-3.5 text-slate-500" />
          <span className="min-w-0 break-words">{player.segment}</span>
        </p>
        <div className="group/readout relative mt-2 max-w-2xl">
          <p className="line-clamp-2 text-xs leading-5 text-slate-500">{player.summary}</p>
          <div className="pointer-events-none absolute left-0 top-[calc(100%+0.5rem)] z-30 hidden w-full max-w-xl rounded-lg border border-cyan-300/20 bg-slate-950/95 p-3 text-xs leading-5 text-slate-200 shadow-[0_18px_60px_rgba(0,0,0,0.42)] backdrop-blur-xl group-hover/readout:block group-focus-within/readout:block lg:w-[32rem]">
            <p className="font-black uppercase tracking-[0.16em] text-cyan-200">
              {getSentimentLabel(player.sentiment, language)} {copy.read}
            </p>
            <p className="mt-2">{player.summary}</p>
            <p className="mt-2 text-slate-500">{copy.watch}: {player.watchSignal}</p>
          </div>
          <button
            type="button"
            className="mt-1 text-[0.68rem] font-bold text-cyan-200/75 underline decoration-cyan-300/20 underline-offset-4 transition hover:text-cyan-100"
            aria-label={copy.showRead(player.company)}
          >
            {copy.fullRead}
          </button>
        </div>
      </div>

      <MetricCell label={copy.price} value={formatPrice(player, copy)} />
      <MetricCell label="30d" value={formatPercent(player.thirtyDayChange)} positive={positive} />
      <MetricCell label="YTD" value={formatPercent(player.ytdChange)} positive={player.ytdChange >= 0} />

      <div>
        <div className="mb-2 grid grid-cols-2 gap-1.5">
          <PerformanceBar label="30d" value={player.thirtyDayChange} />
          <PerformanceBar label="YTD" value={player.ytdChange} />
        </div>
        <div className="h-16 lg:h-12">
          <StockLineChart
            values={player.trend}
            positive={positive}
            height={48}
            strokeWidth={2.25}
            label={copy.chartLabel(player.company)}
          />
        </div>
      </div>
    </article>
  );
}

function formatPrice(player: MarketPlayer, copy: typeof marketCopy.en) {
  return player.price === null ? copy.private : `$${player.price.toFixed(2)}`;
}

function formatSource(snapshot: MarketSnapshot, language: "en" | "ko", copy: typeof marketCopy.en) {
  if (snapshot.mode === "weekly-close-feed") {
    return language === "ko"
      ? `${snapshot.dataSourceLabel}, ${snapshot.updatedTickers.length}${copy.tickers}`
      : `${snapshot.dataSourceLabel}, ${snapshot.updatedTickers.length} ${copy.tickers}`;
  }

  return language === "ko" && snapshot.dataSourceLabel === "Cached fallback snapshot"
    ? "캐시된 대체 스냅샷"
    : snapshot.dataSourceLabel;
}

function formatRefreshStatus(snapshot: MarketSnapshot, copy: typeof marketCopy.en) {
  if (snapshot.failedTickers.length === 0) {
    return copy.allRefreshed;
  }

  return copy.tickerFallback(snapshot.failedTickers.length);
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

function PerformanceBar({ label, value }: { label: string; value: number }) {
  const positive = value >= 0;
  const width = `${Math.min(Math.abs(value), 45) * 2.2}%`;

  return (
    <div>
      <div className="flex items-center justify-between gap-2 text-[0.58rem] font-black uppercase tracking-[0.12em] text-slate-500">
        <span>{label}</span>
        <span className={positive ? "text-emerald-100" : "text-rose-100"}>{formatPercent(value)}</span>
      </div>
      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/[0.07]">
        <div
          className={`h-full rounded-full ${positive ? "bg-emerald-300/70" : "bg-rose-300/70"}`}
          style={{ width }}
        />
      </div>
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
