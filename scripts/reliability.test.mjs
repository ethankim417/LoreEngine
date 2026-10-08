import assert from "node:assert/strict";
import test from "node:test";
import { loadTypeScript } from "./load-typescript.mjs";

function bookmarkFixture(getDoc = async () => ({ exists: () => false })) {
  const storage = new Map();
  const writes = [];
  const auth = { currentUser: null };
  const bookmarks = loadTypeScript("lib/bookmarksClient.ts", {
    console: { error() {} },
    Event,
    window: {
      localStorage: { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) },
      dispatchEvent() {}
    },
    require: (name) => {
      if (name === "./firebase") return { auth, db: {} };
      if (name === "firebase/firestore") return {
        doc: (_, collection, uid) => ({ collection, uid }), getDoc,
        setDoc: async (ref, data) => writes.push({ ref, data })
      };
      throw new Error(`Unexpected import ${name}`);
    }
  });
  return { bookmarks, auth, storage, writes };
}

test("bookmarks stay separate across signed-in accounts and guest mode", () => {
  const { bookmarks, auth } = bookmarkFixture();
  bookmarks.writeLocalBookmarks(["guest-story"]);
  auth.currentUser = { uid: "alice" };
  bookmarks.writeLocalBookmarks(["alice-story"]);
  auth.currentUser = { uid: "bob" };
  assert.equal(bookmarks.readLocalBookmarks().length, 0);
  bookmarks.writeLocalBookmarks(["bob-story"]);
  auth.currentUser = { uid: "alice" };
  assert.deepEqual(Array.from(bookmarks.readLocalBookmarks()), ["alice-story"]);
  auth.currentUser = null;
  assert.deepEqual(Array.from(bookmarks.readLocalBookmarks()), ["guest-story"]);
});

test("guest merge keeps stable article slugs and does not reuse weekly slot IDs", async () => {
  const { bookmarks, auth, writes } = bookmarkFixture();
  bookmarks.writeLocalBookmarks(["le-001", "original-article-slug"]);
  auth.currentUser = { uid: "alice" };
  await bookmarks.mergeBookmarksFromAccount(auth.currentUser);
  assert.deepEqual(Array.from(bookmarks.readLocalBookmarks()), ["original-article-slug"]);
  assert.deepEqual(Array.from(writes[0].data.bookmarkIds), ["original-article-slug"]);
});

test("an account switch during cloud loading cannot merge another user's bookmarks", async () => {
  let resolveRead;
  const { bookmarks, auth, writes } = bookmarkFixture(() => new Promise((resolve) => { resolveRead = resolve; }));
  auth.currentUser = { uid: "alice" };
  const loading = bookmarks.mergeBookmarksFromAccount(auth.currentUser);
  auth.currentUser = { uid: "bob" };
  resolveRead({ exists: () => true, data: () => ({ bookmarkIds: ["alice-private-story"] }) });
  await loading;
  assert.equal(writes.length, 0);
  assert.equal(bookmarks.readLocalBookmarks().length, 0);
});

test("cloud failure keeps a guest's bookmarks available locally after sign-in", async () => {
  const { bookmarks, auth } = bookmarkFixture(async () => { throw new Error("Offline"); });
  bookmarks.writeLocalBookmarks(["guest-story"]);
  auth.currentUser = { uid: "alice" };
  const result = await bookmarks.mergeBookmarksFromAccount(auth.currentUser);
  assert.equal(result.storageMode, "unconfigured");
  assert.deepEqual(Array.from(bookmarks.readLocalBookmarks()), ["guest-story"]);
});

test("failed market refresh preserves the actual fallback data timestamp", async () => {
  const snapshot = {
    snapshotDate: "2026-09-01", refreshedAt: "2026-09-01T00:00:00Z", mode: "cached-fallback",
    players: [{ ticker: "NVDA", price: 100 }], groups: [], updatedTickers: [], failedTickers: []
  };
  const market = loadTypeScript("lib/marketData.ts", {
    URL, AbortSignal, setTimeout: (callback) => { callback(); },
    fetch: async () => { throw new Error("Upstream unavailable"); },
    require: (name) => {
      if (name === "next/cache") return { unstable_cache: (callback) => callback };
      if (name === "@/data/market") return { staticMarketSnapshot: snapshot };
      throw new Error(`Unexpected import ${name}`);
    }
  });
  const result = await market.refreshMarketSnapshot();
  assert.equal(result.snapshotDate, snapshot.snapshotDate);
  assert.equal(result.refreshedAt, snapshot.refreshedAt);
  assert.equal(result.mode, "cached-fallback");
  assert.deepEqual(Array.from(result.failedTickers), ["NVDA"]);
});

test("deployed cron routes require a secret in preview and production", () => {
  const request = { headers: new Headers() };
  for (const env of [
    { NODE_ENV: "production", VERCEL_ENV: "preview" },
    { NODE_ENV: "production" },
    { VERCEL_ENV: "production" }
  ]) {
    const { validateCronRequest } = loadTypeScript("lib/cronAuth.ts", { process: { env } });
    const result = validateCronRequest(request);
    assert.equal(result.ok, false);
    assert.equal(result.status, 500);
  }
});

test("cron authorization accepts only the configured secret", () => {
  const { validateCronRequest } = loadTypeScript("lib/cronAuth.ts", {
    process: { env: { NODE_ENV: "production", CRON_SECRET: "test-secret" } }
  });
  assert.equal(validateCronRequest({ headers: new Headers() }).status, 401);
  assert.equal(validateCronRequest({ headers: new Headers({ authorization: "Bearer wrong-secret" }) }).status, 401);
  assert.equal(validateCronRequest({ headers: new Headers({ authorization: "Bearer test-secret" }) }).ok, true);
});
