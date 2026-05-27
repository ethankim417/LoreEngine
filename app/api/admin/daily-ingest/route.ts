import { NextResponse } from "next/server";

// Vercel Cron can call this route once per day in a future production version.
// Keep AI work on the server: fetch articles, summarize once, score once, save
// cached results, then let the frontend read only the saved summaries.
export async function GET() {
  return NextResponse.json(
    {
      status: "not_configured",
      message:
        "Future daily ingest endpoint. This mock build intentionally does not call news or AI APIs."
    },
    { status: 501 }
  );
}
