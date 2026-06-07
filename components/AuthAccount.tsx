"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LogOut, ShieldCheck, Trash2, UserRound } from "lucide-react";
import {
  mergeBookmarksFromAccount,
  readLocalBookmarks,
  syncRemoteBookmarks,
  writeLocalBookmarks
} from "@/lib/bookmarksClient";

type AuthUser = {
  id: string;
  email: string;
  name: string;
  picture?: string;
};

type SessionResponse = {
  authenticated: boolean;
  user: AuthUser | null;
};

type GoogleCredentialResponse = {
  credential?: string;
};

declare global {
  interface Window {
    google?: {
      accounts?: {
        id?: {
          initialize: (config: {
            client_id: string;
            callback: (response: GoogleCredentialResponse) => void;
          }) => void;
          renderButton: (
            element: HTMLElement,
            options: {
              theme: "filled_black" | "outline";
              size: "medium" | "large";
              shape: "pill" | "rectangular";
              text: "signin_with" | "continue_with";
              width?: number;
            }
          ) => void;
        };
      };
    };
  }
}

export function AuthAccount({ compact = false }: { compact?: boolean }) {
  const googleButtonRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Save bookmarks across devices.");
  const [storageMode, setStorageMode] = useState<"firebase" | "unconfigured" | "local">("local");
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    fetch("/api/auth/session")
      .then((response) => (response.ok ? response.json() : null))
      .then(async (session: SessionResponse | null) => {
        if (session?.authenticated && session.user) {
          setUser(session.user);
          const merged = await mergeBookmarksFromAccount();
          setStorageMode(merged.storageMode);
          setStatus(getStorageStatus(merged.storageMode));
        }
      })
      .catch(() => {
        setStatus("Account status unavailable.");
      });
  }, []);

  useEffect(() => {
    if (!googleClientId || user) {
      return;
    }

    const clientId = googleClientId;
    const scriptId = "google-identity-services";

    function renderGoogleButton() {
      if (!window.google?.accounts?.id || !googleButtonRef.current) {
        return;
      }

      googleButtonRef.current.innerHTML = "";
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleCredential
      });
      window.google.accounts.id.renderButton(googleButtonRef.current, {
        theme: "filled_black",
        size: compact ? "medium" : "large",
        shape: "pill",
        text: "continue_with",
        width: compact ? 190 : 230
      });
    }

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (existing) {
      renderGoogleButton();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = renderGoogleButton;
    document.head.appendChild(script);
  }, [compact, googleClientId, user]);

  async function handleGoogleCredential(response: GoogleCredentialResponse) {
    if (!response.credential) {
      setStatus("Google did not return a credential.");
      return;
    }

    setStatus("Signing in...");
    const login = await fetch("/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential: response.credential })
    });

    if (!login.ok) {
      setStatus("Google sign-in failed.");
      return;
    }

    const payload = (await login.json()) as { user: AuthUser };
    setUser(payload.user);
    const merged = await mergeBookmarksFromAccount();
    setStorageMode(merged.storageMode);
    setStatus(getStorageStatus(merged.storageMode));
    setOpen(true);
  }

  async function syncNow() {
    const result = await syncRemoteBookmarks(readLocalBookmarks());
    const nextMode = result?.storageMode ?? "local";

    setStorageMode(nextMode);
    setStatus(getStorageStatus(nextMode));
  }

  async function signOut() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setOpen(false);
    setStorageMode("local");
    setStatus("Signed out. Saved briefs remain on this device.");
  }

  async function deleteAccount() {
    const confirmed = window.confirm(
      "Delete your LoreEngine account data? This removes cloud-synced bookmarks, clears local saved briefs on this browser, and signs you out."
    );

    if (!confirmed) {
      return;
    }

    await fetch("/api/user", { method: "DELETE" });
    writeLocalBookmarks([]);
    setUser(null);
    setOpen(false);
    setStorageMode("local");
    setStatus("Account data deleted.");
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
          Account
        </button>
        {open ? (
          <div className="absolute right-0 top-[calc(100%+0.55rem)] z-40 w-72 rounded-lg border border-cyan-300/18 bg-slate-950/96 p-3 text-xs text-slate-300 shadow-[0_22px_70px_rgba(0,0,0,0.48)] backdrop-blur-xl">
            <p className="font-black uppercase tracking-[0.14em] text-cyan-200">Signed In</p>
            <p className="mt-2 truncate font-semibold text-white">{user.name}</p>
            <p className="truncate text-slate-500">{user.email}</p>
            <div className="mt-3 rounded-lg bg-white/[0.035] p-3">
              <div className="flex items-center gap-2 text-emerald-100">
                <ShieldCheck className="h-3.5 w-3.5" />
                {getStorageStatus(storageMode)}
              </div>
              <p className="mt-1 leading-5 text-slate-500">
                Cloud sync uses Firebase when configured; otherwise bookmarks remain local to this browser.
              </p>
            </div>
            <div className="mt-3 grid gap-2">
              <button type="button" onClick={syncNow} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-bold text-slate-100 transition hover:border-cyan-300/35">
                Sync saved briefs
              </button>
              <button type="button" onClick={signOut} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 font-bold text-slate-100 transition hover:border-cyan-300/35">
                <LogOut className="h-3.5 w-3.5" />
                Sign out
              </button>
              <button type="button" onClick={deleteAccount} className="inline-flex items-center justify-center gap-2 rounded-lg border border-rose-300/20 bg-rose-300/[0.07] px-3 py-2 font-bold text-rose-100 transition hover:border-rose-300/40">
                <Trash2 className="h-3.5 w-3.5" />
                Delete account data
              </button>
            </div>
            <Link href="/privacy" className="mt-3 inline-flex text-cyan-200/80 underline decoration-cyan-300/20 underline-offset-4 hover:text-cyan-100">
              Privacy and data rights
            </Link>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="relative flex flex-col gap-1">
      {googleClientId ? (
        <div ref={googleButtonRef} className="min-h-8" />
      ) : (
        <button
          type="button"
          disabled
          className="rounded-full border border-white/10 bg-slate-950/35 px-3 py-1.5 text-xs font-semibold text-slate-500"
          title="Set NEXT_PUBLIC_GOOGLE_CLIENT_ID to enable Google sign-in."
        >
          Google login pending
        </button>
      )}
      {!compact ? <p className="text-[0.65rem] text-slate-500">{status}</p> : null}
    </div>
  );
}

function getStorageStatus(mode: "firebase" | "unconfigured" | "local") {
  if (mode === "firebase") {
    return "Bookmarks synced";
  }

  if (mode === "unconfigured") {
    return "Signed in; cloud storage pending";
  }

  return "Local bookmark mode";
}
