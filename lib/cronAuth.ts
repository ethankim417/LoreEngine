import type { NextRequest } from "next/server";

export function validateCronRequest(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authorization = request.headers.get("authorization");
  const productionRuntime = process.env.VERCEL_ENV === "production";

  if (!cronSecret && productionRuntime) {
    return {
      ok: false,
      status: 500,
      body: {
        status: "misconfigured",
        message: "CRON_SECRET must be configured before admin cron routes run in production."
      }
    };
  }

  if (cronSecret && authorization !== `Bearer ${cronSecret}`) {
    return {
      ok: false,
      status: 401,
      body: {
        status: "unauthorized",
        message: "Missing or invalid cron authorization."
      }
    };
  }

  return { ok: true };
}
