import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { getMarketSnapshot } from "@/lib/marketData";

export const dynamic = "force-dynamic";

// Vercel Cron calls this route weekly to refresh the server-side market cache.
// This does not use AI and does not write to the repository at runtime.
export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authorization = request.headers.get("authorization");

  if (cronSecret && authorization !== `Bearer ${cronSecret}`) {
    return NextResponse.json(
      {
        status: "unauthorized",
        message: "Missing or invalid cron authorization."
      },
      { status: 401 }
    );
  }

  revalidateTag("market-snapshot");
  const snapshot = await getMarketSnapshot();

  return NextResponse.json({
    status: "ok",
    message: "Market snapshot refreshed from public close-price data where available.",
    snapshotDate: snapshot.snapshotDate,
    dataSourceLabel: snapshot.dataSourceLabel,
    mode: snapshot.mode,
    refreshedAt: snapshot.refreshedAt,
    updatedTickers: snapshot.updatedTickers,
    failedTickers: snapshot.failedTickers
  });
}
