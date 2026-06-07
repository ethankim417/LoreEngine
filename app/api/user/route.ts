import { NextResponse } from "next/server";
import { clearSessionUser, getSessionUser } from "@/lib/authSession";
import { deleteUserData } from "@/lib/bookmarkStore";

export const dynamic = "force-dynamic";

export async function DELETE() {
  const user = getSessionUser();

  if (!user) {
    clearSessionUser();
    return NextResponse.json({ status: "ok", deleted: false });
  }

  const result = await deleteUserData(user);
  clearSessionUser();

  return NextResponse.json({
    status: "ok",
    ...result
  });
}
