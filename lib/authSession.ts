import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";

const SESSION_COOKIE = "loreengine_session";
const SESSION_DAYS = 30;
const SESSION_SECONDS = SESSION_DAYS * 24 * 60 * 60;

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  picture?: string;
};

type SessionPayload = AuthUser & {
  exp: number;
};

export function getSessionUser(): AuthUser | null {
  const token = cookies().get(SESSION_COOKIE)?.value;

  return token ? verifySessionToken(token) : null;
}

export function setSessionUser(user: AuthUser) {
  const token = signSessionToken({
    ...user,
    exp: Math.floor(Date.now() / 1000) + SESSION_SECONDS
  });

  cookies().set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: SESSION_SECONDS,
    path: "/"
  });
}

export function clearSessionUser() {
  cookies().set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/"
  });
}

function signSessionToken(payload: SessionPayload) {
  const body = base64UrlEncode(JSON.stringify(payload));
  const signature = createHmac("sha256", getSessionSecret()).update(body).digest("base64url");

  return `${body}.${signature}`;
}

function verifySessionToken(token: string): AuthUser | null {
  const [body, signature] = token.split(".");

  if (!body || !signature) {
    return null;
  }

  const expected = createHmac("sha256", getSessionSecret()).update(body).digest("base64url");

  if (!safeEqual(signature, expected)) {
    return null;
  }

  try {
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as Partial<SessionPayload>;

    if (!payload.id || !payload.email || !payload.name || !payload.exp || payload.exp < Date.now() / 1000) {
      return null;
    }

    return {
      id: payload.id,
      email: payload.email,
      name: payload.name,
      picture: payload.picture
    };
  } catch {
    return null;
  }
}

function getSessionSecret() {
  return process.env.AUTH_SESSION_SECRET ?? process.env.CRON_SECRET ?? "loreengine-local-dev-session-secret";
}

function base64UrlEncode(value: string) {
  return Buffer.from(value, "utf8").toString("base64url");
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  return leftBuffer.length === rightBuffer.length && timingSafeEqual(leftBuffer, rightBuffer);
}
