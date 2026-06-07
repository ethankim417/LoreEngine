import { createHash, createSign } from "node:crypto";
import type { AuthUser } from "@/lib/authSession";

const FIRESTORE_SCOPE = "https://www.googleapis.com/auth/datastore";
const TOKEN_URL = "https://oauth2.googleapis.com/token";

type StoredBookmarks = {
  bookmarkIds: string[];
  storageMode: "firebase" | "unconfigured";
};

type FirestoreValue = {
  stringValue?: string;
  timestampValue?: string;
  arrayValue?: {
    values?: FirestoreValue[];
  };
};

type FirestoreDocument = {
  fields?: Record<string, FirestoreValue>;
};

export async function readUserBookmarks(user: AuthUser): Promise<StoredBookmarks> {
  if (!hasFirebaseConfig()) {
    return { bookmarkIds: [], storageMode: "unconfigured" };
  }

  const response = await firestoreFetch(user, "", { method: "GET" });

  if (response.status === 404) {
    return { bookmarkIds: [], storageMode: "firebase" };
  }

  if (!response.ok) {
    throw new Error(`Firestore bookmark read failed: ${response.status}`);
  }

  const document = (await response.json()) as FirestoreDocument;
  const values = document.fields?.bookmarkIds?.arrayValue?.values ?? [];

  return {
    bookmarkIds: values.map((value) => value.stringValue).filter((id): id is string => Boolean(id)),
    storageMode: "firebase"
  };
}

export async function writeUserBookmarks(user: AuthUser, bookmarkIds: string[]): Promise<StoredBookmarks> {
  const nextIds = normalizeBookmarkIds(bookmarkIds);

  if (!hasFirebaseConfig()) {
    return { bookmarkIds: nextIds, storageMode: "unconfigured" };
  }

  const body: FirestoreDocument = {
    fields: {
      bookmarkIds: {
        arrayValue: {
          values: nextIds.map((id) => ({ stringValue: id }))
        }
      },
      updatedAt: {
        timestampValue: new Date().toISOString()
      }
    }
  };

  const response = await firestoreFetch(user, "?updateMask.fieldPaths=bookmarkIds&updateMask.fieldPaths=updatedAt", {
    method: "PATCH",
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`Firestore bookmark write failed: ${response.status}`);
  }

  return { bookmarkIds: nextIds, storageMode: "firebase" };
}

export async function deleteUserData(user: AuthUser) {
  if (!hasFirebaseConfig()) {
    return { storageMode: "unconfigured" as const, deleted: false };
  }

  const response = await firestoreFetch(user, "", { method: "DELETE" });

  if (!response.ok && response.status !== 404) {
    throw new Error(`Firestore account deletion failed: ${response.status}`);
  }

  return { storageMode: "firebase" as const, deleted: true };
}

function normalizeBookmarkIds(bookmarkIds: string[]) {
  return [...new Set(bookmarkIds.filter((id) => /^[a-z0-9-]+$/i.test(id)))].slice(0, 250);
}

function hasFirebaseConfig() {
  return Boolean(
    process.env.FIREBASE_PROJECT_ID &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PRIVATE_KEY
  );
}

async function firestoreFetch(user: AuthUser, suffix: string, init: RequestInit) {
  const projectId = process.env.FIREBASE_PROJECT_ID;

  if (!projectId) {
    throw new Error("FIREBASE_PROJECT_ID is not configured.");
  }

  const accessToken = await getAccessToken();
  const userId = createHash("sha256").update(user.id).digest("hex");
  const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/users/${userId}${suffix}`;

  return fetch(url, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {})
    }
  });
}

async function getAccessToken() {
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error("Firebase service account credentials are not configured.");
  }

  const now = Math.floor(Date.now() / 1000);
  const assertion = signServiceAccountJwt(
    {
      alg: "RS256",
      typ: "JWT"
    },
    {
      iss: clientEmail,
      scope: FIRESTORE_SCOPE,
      aud: TOKEN_URL,
      iat: now,
      exp: now + 3600
    },
    privateKey
  );

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion
    })
  });

  if (!response.ok) {
    throw new Error(`Firebase access token request failed: ${response.status}`);
  }

  const payload = (await response.json()) as { access_token?: string };

  if (!payload.access_token) {
    throw new Error("Firebase access token response was missing access_token.");
  }

  return payload.access_token;
}

function signServiceAccountJwt(header: Record<string, unknown>, payload: Record<string, unknown>, privateKey: string) {
  const body = `${encode(header)}.${encode(payload)}`;
  const signature = createSign("RSA-SHA256").update(body).sign(privateKey, "base64url");

  return `${body}.${signature}`;
}

function encode(value: Record<string, unknown>) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}
