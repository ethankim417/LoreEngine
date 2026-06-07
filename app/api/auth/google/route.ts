import { NextResponse } from "next/server";
import { setSessionUser } from "@/lib/authSession";
import { verifyGoogleCredential } from "@/lib/googleAuth";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { credential?: string };

    if (!body.credential) {
      return NextResponse.json({ status: "error", message: "Missing Google credential." }, { status: 400 });
    }

    const user = await verifyGoogleCredential(body.credential);
    setSessionUser(user);

    return NextResponse.json({ status: "ok", user });
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: error instanceof Error ? error.message : "Google sign-in failed."
      },
      { status: 401 }
    );
  }
}
