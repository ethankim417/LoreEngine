import { NextResponse } from "next/server";
import { articles, briefSnapshotDate } from "@/data/articles";
import { getMarketSnapshot } from "@/lib/marketData";
import { getUniqueSourceCount } from "@/lib/sourceStats";

export const dynamic = process.env.GITHUB_PAGES === "true" ? "force-static" : "force-dynamic";

const STALE_MARKET_HOURS = 24 * 8;

export async function GET() {
  const marketSnapshot = await getMarketSnapshot();
  const marketDataAgeHours = getAgeHours(marketSnapshot.refreshedAt);
  const marketIsStale = marketDataAgeHours > STALE_MARKET_HOURS;
  const marketIsDegraded = marketSnapshot.failedTickers.length > 0 || marketSnapshot.mode === "cached-fallback";
  const status = marketIsStale ? "stale" : marketIsDegraded ? "degraded" : "ok";

  return NextResponse.json({
    status,
    app: "LoreEngine",
    version: "1.0.0",
    dataMode: {
      articles: "mock-weekly-brief",
      market: marketSnapshot.mode,
      ai: "disabled"
    },
    briefSnapshotDate,
    marketSnapshotDate: marketSnapshot.snapshotDate,
    marketRefreshedAt: marketSnapshot.refreshedAt,
    marketDataAgeHours,
    articleCount: articles.length,
    sourceCount: getUniqueSourceCount(articles),
    marketTickerCount: marketSnapshot.players.length,
    marketUpdatedTickerCount: marketSnapshot.updatedTickers.length,
    marketFailedTickers: marketSnapshot.failedTickers,
    marketFailureReasons: marketSnapshot.failedTickerReasons ?? {},
    generatedAt: new Date().toISOString()
  });
}

function getAgeHours(timestamp: string) {
  const time = new Date(timestamp).getTime();

  if (!Number.isFinite(time)) {
    return Number.POSITIVE_INFINITY;
  }

  return Math.round(((Date.now() - time) / (1000 * 60 * 60)) * 10) / 10;
}
