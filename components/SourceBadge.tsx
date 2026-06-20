"use client";

import { Newspaper } from "lucide-react";
import type { SourceCredibility } from "@/data/articles";
import { useLanguage } from "@/components/LanguageProvider";
import { getSourceCredibilityLabel } from "@/lib/localizedContent";

type SourceBadgeProps = {
  source: string;
  credibility?: SourceCredibility;
  compact?: boolean;
};

const credibilityTone: Record<SourceCredibility, string> = {
  "Official source": "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  "Trade press": "border-violet-300/25 bg-violet-300/10 text-violet-100",
  "Market analysis": "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  "Vendor report": "border-amber-300/25 bg-amber-300/10 text-amber-100"
};

export function SourceBadge({ source, credibility, compact = false }: SourceBadgeProps) {
  const { language } = useLanguage();

  return (
    <span className="inline-flex min-w-0 max-w-full items-center gap-2 rounded-lg border border-white/15 bg-slate-950/45 px-2.5 py-1.5 text-xs font-bold text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_28px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-[0.62rem] font-black text-cyan-100">
        <Newspaper className="h-3.5 w-3.5" />
      </span>
      <span className={compact ? "min-w-0 max-w-28 truncate sm:max-w-36" : "min-w-0 truncate"}>
        {source}
      </span>
      {credibility ? (
        <span
          className={`shrink-0 rounded-full border px-2 py-0.5 text-[0.62rem] font-black uppercase tracking-[0.12em] ${credibilityTone[credibility]}`}
        >
          {getSourceCredibilityLabel(credibility, language, compact)}
        </span>
      ) : null}
    </span>
  );
}
