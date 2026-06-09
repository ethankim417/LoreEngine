"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LogOut, ShieldCheck, Trash2, UserRound } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import {
  mergeBookmarksFromAccount,
  readLocalBookmarks,
  writeLocalBookmarks
} from "@/lib/bookmarksClient";
import { languageLabels, type Language } from "@/lib/i18n";
import { auth, db, googleProvider } from "@/lib/firebase";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
  type User as FirebaseUser
} from "firebase/auth";
import { deleteDoc, doc, getDoc, setDoc } from "firebase/firestore";

export function AuthAccount({ compact = false }: { compact?: boolean }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [open, setOpen] = useState(false);
  const [storageMode, setStorageMode] = useState<"firebase" | "unconfigured" | "local">("local");
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const merged = await mergeBookmarksFromAccount(currentUser);
        setStorageMode(merged.storageMode);
        await loadLanguagePreference(currentUser);
      } else {
        setStorageMode("local");
      }
    });
    return () => unsubscribe();
  }, []);

  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Firebase Login Error", error);
    }
  }

  async function loadLanguagePreference(currentUser: FirebaseUser) {
    try {
      const snap = await getDoc(doc(db, "users", currentUser.uid));
      const value = snap.exists() ? snap.data().language : null;

      if (value === "en" || value === "ko") {
        setLanguage(value);
      }
    } catch (error) {
      console.error("Firebase Language Preference Error", error);
    }
  }

  async function syncNow() {
    if (!user) return;
    try {
      const dbDoc = doc(db, "users", user.uid);
      const bookmarks = readLocalBookmarks();
      await setDoc(
        dbDoc,
        {
          bookmarkIds: bookmarks,
          language,
          updatedAt: new Date().toISOString()
        },
        { merge: true }
      );
      setStorageMode("firebase");
    } catch (e) {
      console.error(e);
      setStorageMode("local");
    }
  }

  async function signOut() {
    await firebaseSignOut(auth);
    setUser(null);
    setOpen(false);
    setStorageMode("local");
  }

  async function deleteAccount() {
    const confirmed = window.confirm(
      "Delete your account data?"
    );
    if (!confirmed || !user) return;

    try {
      await deleteDoc(doc(db, "users", user.uid));
      writeLocalBookmarks([]);
      await signOut();
    } catch (error) {
      console.error(error);
    }
  }

  function handleLanguageChange(value: string) {
    if (value === "en" || value === "ko") {
      setLanguage(value);
      if (user) {
        setDoc(
          doc(db, "users", user.uid),
          { language: value, updatedAt: new Date().toISOString() },
          { merge: true }
        ).catch(console.error);
      }
    }
  }

  if (user) {
    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-300/18 bg-slate-950/42 px-3 py-1.5 text-xs font-semibold text-emerald-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-xl transition hover:border-emerald-300/38 hover:bg-emerald-300/[0.08]"
          aria-expanded={open}
        >
          <UserRound className="h-3.5 w-3.5" />
          {t("account")}
        </button>
        {open ? (
          <div className="absolute right-0 top-[calc(100%+0.55rem)] z-40 w-72 rounded-lg border border-cyan-300/18 bg-slate-950/96 p-3 text-xs text-slate-300 shadow-[0_22px_70px_rgba(0,0,0,0.48)] backdrop-blur-xl">
            <p className="font-black uppercase tracking-[0.14em] text-cyan-200">{t("signedIn")}</p>
            <p className="mt-2 truncate font-semibold text-white">{user.displayName || "User"}</p>
            <p className="truncate text-slate-500">{user.email}</p>
            <label className="mt-3 block">
              <span className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-slate-500">
                {t("language")}
              </span>
              <select
                value={language}
                onChange={(event) => handleLanguageChange(event.target.value)}
                className="mt-1 h-9 w-full rounded-lg border border-white/10 bg-slate-950/70 px-3 text-xs font-semibold text-white outline-none"
              >
                {(Object.keys(languageLabels) as Language[]).map((item) => (
                  <option key={item} value={item}>
                    {languageLabels[item]}
                  </option>
                ))}
              </select>
            </label>
            <div className="mt-3 rounded-lg bg-white/[0.035] p-3">
              <div className="flex items-center gap-2 text-emerald-100">
                <ShieldCheck className="h-3.5 w-3.5" />
                {getStorageStatus(storageMode, t)}
              </div>
              <p className="mt-1 leading-5 text-slate-500">
                Cloud sync uses Firebase when configured; otherwise bookmarks remain local to this browser.
              </p>
            </div>
            <div className="mt-3 grid gap-2">
              <button type="button" onClick={syncNow} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-bold text-slate-100 transition hover:border-cyan-300/35">
                {t("syncSavedBriefs")}
              </button>
              <button type="button" onClick={signOut} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-bold text-slate-100 transition hover:border-cyan-300/35">
                <LogOut className="h-3.5 w-3.5" />
                {t("signOut")}
              </button>
              <button type="button" onClick={deleteAccount} className="inline-flex items-center justify-center gap-2 rounded-lg border border-rose-300/20 bg-rose-300/[0.07] px-3 py-2 font-bold text-rose-100 transition hover:border-rose-300/40">
                <Trash2 className="h-3.5 w-3.5" />
                {t("deleteAccountData")}
              </button>
            </div>
            <Link href="/privacy" className="mt-3 inline-flex text-cyan-200/80 underline decoration-cyan-300/20 underline-offset-4 hover:text-cyan-100">
              {t("privacyRights")}
            </Link>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="relative flex flex-col gap-1">
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="rounded-full border border-white/10 bg-slate-950/35 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-900 transition"
      >
        Continue with Google
      </button>
      {!compact ? <p className="text-[0.65rem] text-slate-500">{t("saveBookmarks")}</p> : null}
    </div>
  );
}

function getStorageStatus(
  mode: "firebase" | "unconfigured" | "local",
  t: (key: "bookmarksSynced" | "cloudPending" | "localBookmarkMode") => string
) {
  if (mode === "firebase") return t("bookmarksSynced");
  if (mode === "unconfigured") return t("cloudPending");
  return t("localBookmarkMode");
}
