import { NextResponse } from "next/server";
import { clearSessionUser } from "@/lib/authSession";

export const dynamic = "force-dynamic";

export async function POST() {
  clearSessionUser();

  return NextResponse.json({ status: "ok" });
}
