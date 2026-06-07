import { unstable_cache } from "next/cache";
import {
  staticMarketSnapshot,
  type MarketPlayer,
  type MarketSnapshot
} from "@/data/market";

const WEEK_SECONDS = 60 * 60 * 24 * 7;
const YAHOO_TIMEOUT_MS = 7000;
const YAHOO_RETRY_DELAY_MS = 450;
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
  ["loreengine-market-snapshot-v2"],
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
  const failedTickerReasons = Object.fromEntries(
    settledPlayers
      .filter((result) => result.failed)
      .map((result) => [result.player.ticker, result.failureReason ?? "Unknown refresh failure"])
  );
  const latestDate =
    settledPlayers
      .map((result) => result.latestDate)
      .filter((date): date is string => Boolean(date))
      .sort()
      .at(-1) ?? staticMarketSnapshot.snapshotDate;

  if (updatedTickers.length === 0) {
    return {
      ...staticMarketSnapshot,
      refreshedAt: new Date().toISOString(),
      failedTickers,
      failedTickerReasons
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
    failedTickers,
    failedTickerReasons
  };
}

async function refreshPlayer(player: MarketPlayer): Promise<{
  player: MarketPlayer;
  updated: boolean;
  failed: boolean;
  latestDate?: string;
  failureReason?: string;
}> {
  const symbol = YAHOO_SYMBOLS[player.ticker];

  if (!symbol || player.price === null) {
    return { player, updated: false, failed: false };
  }

  try {
    const rows = await fetchYahooHistory(symbol);

    if (rows.length < 2) {
      return {
        player,
        updated: false,
        failed: true,
        failureReason: `Only ${rows.length} valid close rows returned`
      };
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
  } catch (error) {
    return {
      player,
      updated: false,
      failed: true,
      failureReason: error instanceof Error ? error.message : "Unknown upstream error"
    };
  }
}

async function fetchYahooHistory(symbol: string): Promise<QuoteRow[]> {
  const payload = await fetchYahooHistoryPayload(symbol);

  return parseYahooChart(payload).slice(-30);
}

async function fetchYahooHistoryPayload(symbol: string): Promise<unknown> {
  const url = new URL(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}`);
  url.searchParams.set("range", "1mo");
  url.searchParams.set("interval", "1d");

  let lastError: Error | undefined;

  for (let attempt = 1; attempt <= 2; attempt += 1) {
    try {
      const response = await fetch(url, {
        next: { revalidate: WEEK_SECONDS },
        signal: AbortSignal.timeout(YAHOO_TIMEOUT_MS)
      });

      if (!response.ok) {
        throw new Error(`Yahoo chart request failed for ${symbol}: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error("Unknown Yahoo chart request failure");

      if (attempt < 2) {
        await delay(YAHOO_RETRY_DELAY_MS);
      }
    }
  }

  throw lastError ?? new Error(`Yahoo chart request failed for ${symbol}`);
}

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
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
