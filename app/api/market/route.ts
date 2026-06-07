import { NextResponse } from "next/server";
import { getMarketSnapshot } from "@/lib/marketData";

export const dynamic = "force-dynamic";

export async function GET() {
  const snapshot = await getMarketSnapshot();

  return NextResponse.json(snapshot, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
