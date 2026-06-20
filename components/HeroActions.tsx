"use client";

import { Github, Mail } from "lucide-react";
import { AuthAccount } from "@/components/AuthAccount";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";

export function HeroActions({ className = "" }: { className?: string }) {
  const { language, t } = useLanguage();
  const contactLabel =
    language === "ko" ? "LoreEngine 문의: lore-engine@ethankim.cc" : "Contact LoreEngine at lore-engine@ethankim.cc";

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/42 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_42px_rgba(0,0,0,0.22)] backdrop-blur-xl">
        <AuthAccount compact />
        <a
          href="https://github.com/ethankim417/LoreEngine"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-full px-3 text-xs font-black text-emerald-50 transition hover:bg-emerald-300/[0.09] hover:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-300/25"
          title="View source on GitHub"
        >
          <Github className="h-3.5 w-3.5" />
          <span>GitHub</span>
        </a>
        <a
          href="mailto:lore-engine@ethankim.cc"
          className="group/contact relative inline-flex h-9 items-center gap-2 rounded-full px-3 text-xs font-black text-cyan-50 transition hover:bg-cyan-300/[0.09] hover:text-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300/25"
          aria-label={contactLabel}
          title={contactLabel}
        >
          <Mail className="h-3.5 w-3.5" />
          <span>{t("contact")}</span>
          <span className="pointer-events-none absolute right-0 top-[calc(100%+0.6rem)] hidden rounded-lg border border-cyan-300/18 bg-slate-950/95 px-3 py-2 text-xs font-semibold text-slate-200 shadow-[0_16px_50px_rgba(0,0,0,0.4)] group-hover/contact:block group-focus/contact:block">
            lore-engine@ethankim.cc
          </span>
        </a>
      </div>
      <LanguageToggle />
    </div>
  );
}
