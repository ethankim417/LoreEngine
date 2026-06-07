import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/authSession";

export const dynamic = "force-dynamic";

export async function GET() {
  const user = getSessionUser();

  return NextResponse.json({
    authenticated: Boolean(user),
    user
  });
}
