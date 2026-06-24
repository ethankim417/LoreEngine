"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Bookmark, LogOut, ShieldCheck, Trash2, UserRound } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import {
  mergeBookmarksFromAccount,
  writeLocalBookmarks
} from "@/lib/bookmarksClient";
import { auth, db, googleProvider } from "@/lib/firebase";
import {
  getRedirectResult,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut as firebaseSignOut,
  type User as FirebaseUser
} from "firebase/auth";
import { deleteDoc, doc, getDoc } from "firebase/firestore";

export function AuthAccount({ compact = false }: { compact?: boolean }) {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [open, setOpen] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const [storageMode, setStorageMode] = useState<"firebase" | "unconfigured" | "local">("local");
  const { setLanguage, t } = useLanguage();

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    let active = true;

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

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!active) return;
      setUser(currentUser);
      setIsSigningIn(false);
      if (currentUser) {
        const merged = await mergeBookmarksFromAccount(currentUser);
        setStorageMode(merged.storageMode);
        await loadLanguagePreference(currentUser);
      } else {
        setStorageMode("local");
      }
    });

    getRedirectResult(auth).catch((error) => {
      if (!active) return;
      console.error("Firebase Redirect Login Error", error);
      setIsSigningIn(false);
      setLoginError(getFirebaseLoginMessage(error, t));
    });

    return () => {
      active = false;
      unsubscribe();
    };
  }, [setLanguage, t]);

  async function handleGoogleLogin() {
    try {
      setLoginError(null);
      setIsSigningIn(true);
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Firebase Login Error", error);

      if (shouldTryRedirect(error)) {
        try {
          await startRedirectLogin();
          return;
        } catch (redirectError) {
          console.error("Firebase Redirect Start Error", redirectError);
          setLoginError(getFirebaseLoginMessage(redirectError, t));
        }
      } else {
        setLoginError(getFirebaseLoginMessage(error, t));
      }

      setIsSigningIn(false);
    }
  }

  async function startRedirectLogin() {
    const timeout = window.setTimeout(() => {
      setIsSigningIn(false);
      setLoginError(t("googleLoginNoOpen"));
    }, 7000);

    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      window.clearTimeout(timeout);
      throw error;
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
      t("deleteConfirm")
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

  if (user) {
    return (
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-9 items-center gap-2 rounded-full px-3 text-xs font-black text-emerald-50 transition hover:bg-emerald-300/[0.09] hover:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-300/25"
          aria-expanded={open}
        >
          <UserRound className="h-3.5 w-3.5" />
          {t("account")}
        </button>
        {open && portalReady ? createPortal(
          <AccountMenu
            deleteAccount={deleteAccount}
            signOut={signOut}
            storageMode={storageMode}
            onClose={() => setOpen(false)}
            t={t}
            user={user}
          />,
          document.body
        ) : null}
      </div>
    );
  }

  return (
    <div className="relative flex flex-col gap-1">
      <button
        type="button"
        onClick={handleGoogleLogin}
        disabled={isSigningIn}
        className="inline-flex h-9 items-center rounded-full px-3 text-xs font-black text-slate-100 transition hover:bg-white/[0.07] hover:text-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-300/25 disabled:cursor-wait disabled:opacity-70"
      >
        {isSigningIn ? t("openingGoogle") : t("continueWithGoogle")}
      </button>
      {loginError ? (
        <p className="max-w-56 rounded-lg border border-amber-300/15 bg-amber-300/[0.055] px-2 py-1 text-[0.65rem] leading-4 text-amber-100/90">
          {loginError}
        </p>
      ) : null}
      {!compact ? <p className="text-[0.65rem] text-slate-500">{t("saveBookmarks")}</p> : null}
    </div>
  );
}

function AccountMenu({
  deleteAccount,
  signOut,
  storageMode,
  onClose,
  t,
  user
}: {
  deleteAccount: () => void;
  signOut: () => void;
  storageMode: "firebase" | "unconfigured" | "local";
  onClose: () => void;
  t: ReturnType<typeof useLanguage>["t"];
  user: FirebaseUser;
}) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[9999]" onMouseDown={onClose}>
      <div
        className="fixed right-3 top-16 max-h-[calc(100vh-5rem)] w-[min(18rem,calc(100vw-1.5rem))] overflow-y-auto rounded-lg border border-cyan-300/18 bg-slate-950/96 p-3 text-xs text-slate-300 shadow-[0_22px_70px_rgba(0,0,0,0.48)] backdrop-blur-xl sm:right-6 sm:top-20"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <p className="font-black uppercase tracking-[0.14em] text-cyan-200">{t("signedIn")}</p>
        <p className="mt-2 truncate font-semibold text-white">{user.displayName || "User"}</p>
        <p className="truncate text-slate-500">{user.email}</p>
        <div className="mt-3 rounded-lg bg-white/[0.035] p-3">
          <div className="flex items-center gap-2 text-emerald-100">
            <ShieldCheck className="h-3.5 w-3.5" />
            {getStorageStatus(storageMode, t)}
          </div>
        </div>
        <div className="mt-3 grid gap-2">
          <Link href="/?saved=1" className="inline-flex items-center justify-center gap-2 rounded-lg border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-2 font-bold text-cyan-50 transition hover:border-cyan-300/40">
            <Bookmark className="h-3.5 w-3.5" />
            {t("viewBookmarks")}
          </Link>
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
    </div>
  );
}

function getFirebaseLoginMessage(error: unknown, t: ReturnType<typeof useLanguage>["t"]) {
  const code = typeof error === "object" && error && "code" in error ? String(error.code) : "";

  if (code.includes("unauthorized-domain")) {
    return t("googleLoginUnauthorizedDomain");
  }

  if (code.includes("popup-closed-by-user")) {
    return t("googleLoginClosed");
  }

  if (code.includes("operation-not-allowed") || code.includes("configuration-not-found")) {
    return t("googleLoginNotEnabled");
  }

  return t("googleLoginGeneric");
}

function shouldTryRedirect(error: unknown) {
  const code = typeof error === "object" && error && "code" in error ? String(error.code) : "";

  return (
    code.includes("popup-blocked") ||
    code.includes("popup-closed-by-user") ||
    code.includes("cancelled-popup-request")
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
