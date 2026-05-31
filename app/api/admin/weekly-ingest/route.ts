import { NextResponse, type NextRequest } from "next/server";
import { runWeeklyIntelligencePipeline } from "@/lib/futurePipeline";

export const dynamic = "force-dynamic";

// Vercel Cron should call this route once per week.
// Keep future AI/news work on the server: fetch articles, summarize once,
// score once, save cached results, then let the frontend read saved summaries.
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

  const result = await runWeeklyIntelligencePipeline();

  return NextResponse.json({
    ...result,
    message:
      "Weekly ingest scaffold only. This mock build does not fetch live news or call AI APIs yet."
  });
}
