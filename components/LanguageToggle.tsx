"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { auth, db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import type { Language } from "@/lib/i18n";

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, t } = useLanguage();

  function handleChange(nextLanguage: Language) {
    setLanguage(nextLanguage);

    const currentUser = auth.currentUser;
    if (currentUser) {
      setDoc(
        doc(db, "users", currentUser.uid),
        { language: nextLanguage, updatedAt: new Date().toISOString() },
        { merge: true }
      ).catch(console.error);
    }
  }

  return (
    <div
      className="inline-flex h-10 items-center rounded-full border border-white/10 bg-slate-950/46 p-1 text-xs font-black text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-xl"
      aria-label={t("language")}
      title={t("language")}
    >
      {!compact ? <Languages className="ml-2 mr-1 h-3.5 w-3.5 text-cyan-100/85" /> : null}
      {(["en", "ko"] as Language[]).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => handleChange(item)}
          aria-pressed={language === item}
          className={`h-8 rounded-full px-2.5 transition ${
            language === item
              ? "bg-cyan-300 text-slate-950 shadow-[0_0_22px_rgba(34,211,238,0.22)]"
              : "text-slate-400 hover:bg-white/[0.055] hover:text-cyan-50"
          }`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
