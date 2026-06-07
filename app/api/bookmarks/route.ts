import { NextResponse } from "next/server";
import { articles } from "@/data/articles";
import { getSessionUser } from "@/lib/authSession";
import { readUserBookmarks, writeUserBookmarks } from "@/lib/bookmarkStore";

export const dynamic = "force-dynamic";

const validArticleIds = new Set(articles.map((article) => article.id));

export async function GET() {
  const user = getSessionUser();

  if (!user) {
    return NextResponse.json({ status: "unauthorized" }, { status: 401 });
  }

  const result = await readUserBookmarks(user);

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

  const body = (await request.json()) as { bookmarkIds?: unknown };
  const bookmarkIds = Array.isArray(body.bookmarkIds)
    ? body.bookmarkIds.filter((id): id is string => typeof id === "string" && validArticleIds.has(id))
    : [];
  const result = await writeUserBookmarks(user, bookmarkIds);

  return NextResponse.json({
    status: "ok",
    ...result
  });
}
