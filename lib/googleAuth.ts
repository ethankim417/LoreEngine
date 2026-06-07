import { createPublicKey, verify } from "node:crypto";
import type { AuthUser } from "@/lib/authSession";

type GoogleJwtHeader = {
  kid?: string;
  alg?: string;
};

type GoogleJwtPayload = {
  aud?: string;
  iss?: string;
  sub?: string;
  email?: string;
  email_verified?: boolean;
  name?: string;
  picture?: string;
  exp?: number;
};

type GoogleJwk = {
  kid: string;
  kty: string;
  n: string;
  e: string;
};

export async function verifyGoogleCredential(credential: string): Promise<AuthUser> {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!clientId) {
    throw new Error("NEXT_PUBLIC_GOOGLE_CLIENT_ID is not configured.");
  }

  const [encodedHeader, encodedPayload, encodedSignature] = credential.split(".");

  if (!encodedHeader || !encodedPayload || !encodedSignature) {
    throw new Error("Invalid Google credential.");
  }

  const header = decodeJwtPart<GoogleJwtHeader>(encodedHeader);
  const payload = decodeJwtPart<GoogleJwtPayload>(encodedPayload);

  if (header.alg !== "RS256" || !header.kid) {
    throw new Error("Unsupported Google credential signature.");
  }

  const key = await getGooglePublicKey(header.kid);
  const valid = verify(
    "RSA-SHA256",
    Buffer.from(`${encodedHeader}.${encodedPayload}`),
    key,
    Buffer.from(encodedSignature, "base64url")
  );

  if (!valid) {
    throw new Error("Google credential signature could not be verified.");
  }

  if (payload.aud !== clientId) {
    throw new Error("Google credential audience does not match this app.");
  }

  if (payload.iss !== "accounts.google.com" && payload.iss !== "https://accounts.google.com") {
    throw new Error("Google credential issuer is not trusted.");
  }

  if (!payload.exp || payload.exp < Date.now() / 1000) {
    throw new Error("Google credential is expired.");
  }

  if (!payload.sub || !payload.email || !payload.email_verified) {
    throw new Error("Google account email is not verified.");
  }

  return {
    id: payload.sub,
    email: payload.email,
    name: payload.name ?? payload.email,
    picture: payload.picture
  };
}

async function getGooglePublicKey(kid: string) {
  const response = await fetch("https://www.googleapis.com/oauth2/v3/certs", {
    next: { revalidate: 60 * 60 }
  });

  if (!response.ok) {
    throw new Error("Could not load Google public keys.");
  }

  const payload = (await response.json()) as { keys?: GoogleJwk[] };
  const jwk = payload.keys?.find((key) => key.kid === kid);

  if (!jwk) {
    throw new Error("Matching Google public key was not found.");
  }

  return createPublicKey({ key: jwk, format: "jwk" });
}

function decodeJwtPart<T>(part: string): T {
  return JSON.parse(Buffer.from(part, "base64url").toString("utf8")) as T;
}
