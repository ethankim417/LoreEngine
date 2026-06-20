import { NextResponse, type NextRequest } from "next/server";
import { validateCronRequest } from "@/lib/cronAuth";
import { runWeeklyIntelligencePipeline } from "@/lib/futurePipeline";

export const dynamic = "force-dynamic";

// Future news/AI route. The active Vercel Cron currently calls
// /api/admin/market-refresh, while this endpoint remains a safe scaffold.
// Keep future AI/news work on the server: fetch articles, summarize once,
// score once, save cached results, then let the frontend read saved summaries.
export async function GET(request: NextRequest) {
  const auth = validateCronRequest(request);

  if (!auth.ok) {
    return NextResponse.json(auth.body, { status: auth.status });
  }

  const result = await runWeeklyIntelligencePipeline();

  return NextResponse.json({
    ...result,
    message:
      "Weekly ingest scaffold only. This mock build does not fetch live news or call AI APIs yet. Source outlet counts and English/Korean content completeness are reported together."
  });
}
