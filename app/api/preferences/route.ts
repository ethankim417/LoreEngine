import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/authSession";
import { readUserPreferences, writeUserPreferences } from "@/lib/bookmarkStore";
import type { Language } from "@/lib/i18n";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = getSessionUser();

  if (!user) {
    return NextResponse.json({ status: "unauthorized" }, { status: 401 });
  }

  const result = await readUserPreferences(user);

  return NextResponse.json({
    status: "ok",
    ...result
  });
}

export async function PUT(request: Request) {
  const user = getSessionUser();

  if (!user) {
    return NextResponse.json({ status: "unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as { language?: unknown };
  const language = parseLanguage(body.language);

  if (!language) {
    return NextResponse.json({ status: "error", message: "Unsupported language." }, { status: 400 });
  }

  const result = await writeUserPreferences(user, language);

  return NextResponse.json({
    status: "ok",
    ...result
  });
}

function parseLanguage(value: unknown): Language | null {
  return value === "en" || value === "ko" ? value : null;
}
