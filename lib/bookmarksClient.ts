import { type User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const BOOKMARK_STORAGE_KEY = "loreengine-bookmarks";

export function readLocalBookmarks() {
  return readBookmarks(getBookmarkStorageKey());
}

function getBookmarkStorageKey() {
  return auth.currentUser ? `${BOOKMARK_STORAGE_KEY}:${auth.currentUser.uid}` : BOOKMARK_STORAGE_KEY;
}

function readBookmarks(key: string) {
  try {
    const stored = window.localStorage.getItem(key);
    const parsed = stored ? (JSON.parse(stored) as unknown) : [];

    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function writeLocalBookmarks(bookmarkIds: string[]) {
  try {
    window.localStorage.setItem(getBookmarkStorageKey(), JSON.stringify([...new Set(bookmarkIds)]));
  } catch {
    // Cloud sync can still run when browser storage is blocked.
  }
  window.dispatchEvent(new Event("loreengine-bookmarks-updated"));
}

export async function syncRemoteBookmarks(bookmarkIds: string[]) {
  const user = auth.currentUser;

  if (!user) return;

  try {
    await setDoc(
      doc(db, "users", user.uid),
      {
        bookmarkIds: [...new Set(bookmarkIds)].slice(0, 250),
        updatedAt: new Date().toISOString()
      },
      { merge: true }
    );
  } catch (error) {
    console.error("Firebase Bookmark Sync Error:", error);
  }
}

export async function mergeBookmarksFromAccount(user: User) {
  const local = [...new Set([
    ...readBookmarks(`${BOOKMARK_STORAGE_KEY}:${user.uid}`),
    ...readBookmarks(BOOKMARK_STORAGE_KEY).filter((id) => !/^le-\d+$/.test(id))
  ])].slice(0, 250);

  try {
    const dbDoc = doc(db, "users", user.uid);
    const snap = await getDoc(dbDoc);

    if (auth.currentUser?.uid !== user.uid) {
      return { bookmarkIds: local, storageMode: "local" as const };
    }

    if (!snap.exists()) {
      await setDoc(
        dbDoc,
        { bookmarkIds: local, updatedAt: new Date().toISOString() },
        { merge: true }
      );
      if (auth.currentUser?.uid === user.uid) writeLocalBookmarks(local);
      return { bookmarkIds: local, storageMode: "firebase" as const };
    }

    const remoteData = snap.data();
    const remote = Array.isArray(remoteData.bookmarkIds)
      ? remoteData.bookmarkIds.filter((id): id is string => typeof id === "string")
      : [];

    const merged = [...new Set([...remote, ...local])].slice(0, 250);
    writeLocalBookmarks(merged);

    await setDoc(
      dbDoc,
      { bookmarkIds: merged, updatedAt: new Date().toISOString() },
      { merge: true }
    );

    return {
      bookmarkIds: merged,
      storageMode: "firebase" as const
    };
  } catch (error) {
    console.error("Firebase Bookmark Sync Error:", error);
    if (auth.currentUser?.uid === user.uid) writeLocalBookmarks(local);
    return { bookmarkIds: local, storageMode: "unconfigured" as const };
  }
}
