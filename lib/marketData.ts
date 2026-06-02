import { unstable_cache } from "next/cache";
import {
  staticMarketSnapshot,
  type MarketPlayer,
  type MarketSnapshot
} from "@/data/market";

const WEEK_SECONDS = 60 * 60 * 24 * 7;
const YAHOO_SYMBOLS: Partial<Record<string, string>> = {
  NVDA: "NVDA",
  AMD: "AMD",
  INTC: "INTC",
  MSFT: "MSFT",
  SONY: "SONY",
  NTDOY: "NTDOY",
  U: "U",
  TCEHY: "TCEHY",
  NTES: "NTES",
  EA: "EA",
  TTWO: "TTWO",
  RBLX: "RBLX",
  CCOEY: "CCOEY",
  KONMY: "KONMY",
  NCBDY: "NCBDY",
  SQNXF: "SQNXF"
};

type QuoteRow = {
  date: string;
  close: number;
};

export const getMarketSnapshot = unstable_cache(
  async () => refreshMarketSnapshot(),
  ["loreengine-market-snapshot-v1"],
  {
    revalidate: WEEK_SECONDS,
    tags: ["market-snapshot"]
  }
);

export async function refreshMarketSnapshot(): Promise<MarketSnapshot> {
  const settledPlayers = await Promise.all(
    staticMarketSnapshot.players.map((player) => refreshPlayer(player))
  );
  const updatedTickers = settledPlayers
    .filter((result) => result.updated)
    .map((result) => result.player.ticker);
  const failedTickers = settledPlayers
    .filter((result) => result.failed)
    .map((result) => result.player.ticker);
  const latestDate =
    settledPlayers.find((result) => result.latestDate)?.latestDate ?? staticMarketSnapshot.snapshotDate;

  if (updatedTickers.length === 0) {
    return {
      ...staticMarketSnapshot,
      refreshedAt: new Date().toISOString(),
      failedTickers
    };
  }

  return {
    snapshotDate: latestDate,
    players: settledPlayers.map((result) => result.player),
    groups: staticMarketSnapshot.groups,
    dataSourceLabel: "Yahoo public chart close-price feed",
    mode: "weekly-close-feed",
    refreshedAt: new Date().toISOString(),
    updatedTickers,
    failedTickers
  };
}

async function refreshPlayer(player: MarketPlayer): Promise<{
  player: MarketPlayer;
  updated: boolean;
  failed: boolean;
  latestDate?: string;
}> {
  const symbol = YAHOO_SYMBOLS[player.ticker];

  if (!symbol || player.price === null) {
    return { player, updated: false, failed: false };
  }

  try {
    const rows = await fetchYahooHistory(symbol);

    if (rows.length < 2) {
      return { player, updated: false, failed: true };
    }

    const latest = rows[rows.length - 1];
    const previous = rows[rows.length - 2];
    const first = rows[0];

    return {
      player: {
        ...player,
        price: roundCurrency(latest.close),
        dayChange: roundPercent(percentChange(latest.close, previous.close)),
        thirtyDayChange: roundPercent(percentChange(latest.close, first.close)),
        trend: normalizeTrend(rows.map((row) => row.close))
      },
      updated: true,
      failed: false,
      latestDate: latest.date
    };
  } catch {
    return { player, updated: false, failed: true };
  }
}

async function fetchYahooHistory(symbol: string): Promise<QuoteRow[]> {
  const url = new URL(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}`);
  url.searchParams.set("range", "1mo");
  url.searchParams.set("interval", "1d");

  const response = await fetch(url, {
    next: { revalidate: WEEK_SECONDS }
  });

  if (!response.ok) {
    throw new Error(`Yahoo chart request failed for ${symbol}`);
  }

  return parseYahooChart(await response.json()).slice(-30);
}

function parseYahooChart(payload: unknown): QuoteRow[] {
  const result = isRecord(payload)
    ? asArray(isRecord(payload.chart) ? payload.chart.result : undefined)[0]
    : undefined;
  const timestamps = isRecord(result) ? asArray(result.timestamp) : [];
  const quote = isRecord(result)
    ? asArray(isRecord(result.indicators) ? result.indicators.quote : undefined)[0]
    : undefined;
  const closes = isRecord(quote) ? asArray(quote.close) : [];

  return timestamps
    .map((timestamp, index) => {
      const close = Number(closes[index]);

      return {
        date: formatIsoDateFromUnix(Number(timestamp)),
        close
      };
    })
    .filter((row) => row.date && Number.isFinite(row.close) && row.close > 0);
}

function normalizeTrend(values: number[]) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = Math.max(max - min, 1);

  return values.map((value) => Math.round(((value - min) / range) * 60 + 20));
}

function percentChange(current: number, previous: number) {
  return ((current - previous) / previous) * 100;
}

function roundCurrency(value: number) {
  return Math.round(value * 100) / 100;
}

function roundPercent(value: number) {
  return Math.round(value * 10) / 10;
}

function formatIsoDateFromUnix(timestamp: number) {
  if (!Number.isFinite(timestamp)) {
    return "";
  }

  return new Date(timestamp * 1000).toISOString().slice(0, 10);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}
