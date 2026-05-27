export function formatDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(year, month - 1, day));
}

export function categoryTone(category: string) {
  const tones: Record<string, string> = {
    Gaming: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
    AI: "border-violet-300/30 bg-violet-300/10 text-violet-100",
    Business: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
    Hardware: "border-sky-300/30 bg-sky-300/10 text-sky-100",
    Esports: "border-rose-300/30 bg-rose-300/10 text-rose-100",
    Platform: "border-amber-300/30 bg-amber-300/10 text-amber-100",
    Studio: "border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-100"
  };

  return tones[category] ?? "border-white/20 bg-white/10 text-white";
}
