import { Newspaper } from "lucide-react";

type SourceBadgeProps = {
  source: string;
  compact?: boolean;
};

export function SourceBadge({ source, compact = false }: SourceBadgeProps) {
  const initials = source
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

  return (
    <span className="inline-flex max-w-full items-center gap-2 rounded-lg border border-white/15 bg-slate-950/45 px-2.5 py-1.5 text-xs font-bold text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_28px_rgba(0,0,0,0.24)] backdrop-blur-xl">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-[0.62rem] font-black text-cyan-100">
        {initials || <Newspaper className="h-3.5 w-3.5" />}
      </span>
      {compact ? null : <span className="truncate">{source}</span>}
    </span>
  );
}
