import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";
import { validateCronRequest } from "@/lib/cronAuth";
import { getMarketSnapshot } from "@/lib/marketData";

export const dynamic = process.env.GITHUB_PAGES === "true" ? "force-static" : "force-dynamic";

// Vercel Cron calls this route weekly to refresh the server-side market cache.
// This does not use AI and does not write to the repository at runtime.
export async function GET(request: NextRequest) {
  const auth = validateCronRequest(request);

  if (!auth.ok) {
    return NextResponse.json(auth.body, { status: auth.status });
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
