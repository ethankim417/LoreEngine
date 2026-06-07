export const BOOKMARK_STORAGE_KEY = "loreengine-bookmarks";

export function readLocalBookmarks() {
  try {
    const stored = window.localStorage.getItem(BOOKMARK_STORAGE_KEY);
    const parsed = stored ? (JSON.parse(stored) as unknown) : [];

    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function writeLocalBookmarks(bookmarkIds: string[]) {
  window.localStorage.setItem(BOOKMARK_STORAGE_KEY, JSON.stringify([...new Set(bookmarkIds)]));
  window.dispatchEvent(new Event("loreengine-bookmarks-updated"));
}

export async function loadRemoteBookmarks() {
  const response = await fetch("/api/bookmarks");

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as {
    status: "ok";
    bookmarkIds: string[];
    storageMode: "firebase" | "unconfigured";
  };
}

export async function syncRemoteBookmarks(bookmarkIds: string[]) {
  const response = await fetch("/api/bookmarks", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ bookmarkIds })
  });

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as {
    status: "ok";
    bookmarkIds: string[];
    storageMode: "firebase" | "unconfigured";
  };
}

export async function mergeBookmarksFromAccount() {
  const local = readLocalBookmarks();
  const remote = await loadRemoteBookmarks();

  if (!remote) {
    return { bookmarkIds: local, storageMode: "local" as const };
  }

  const merged = [...new Set([...remote.bookmarkIds, ...local])];
  writeLocalBookmarks(merged);
  const synced = await syncRemoteBookmarks(merged);

  return {
    bookmarkIds: synced?.bookmarkIds ?? merged,
    storageMode: synced?.storageMode ?? remote.storageMode
  };
}
