import { NextResponse } from "next/server";
import { articles, briefSnapshotDate } from "@/data/articles";
import { staticMarketSnapshot } from "@/data/market";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "LoreEngine",
    version: "1.0.0",
    dataMode: {
      articles: "mock-weekly-brief",
      market: staticMarketSnapshot.mode,
      ai: "disabled"
    },
    briefSnapshotDate,
    marketSnapshotDate: staticMarketSnapshot.snapshotDate,
    articleCount: articles.length,
    marketTickerCount: staticMarketSnapshot.players.length,
    generatedAt: new Date().toISOString()
  });
}
