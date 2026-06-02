import type { ReactNode } from "react";
import type { Article } from "@/data/articles";

type SectorTheme = "ai" | "hardware" | "platform" | "engine" | "esports" | "market" | "gaming";

const themeClass: Record<SectorTheme, string> = {
  ai: "text-cyan-200",
  hardware: "text-emerald-200",
  platform: "text-violet-200",
  engine: "text-sky-200",
  esports: "text-fuchsia-200",
  market: "text-amber-200",
  gaming: "text-cyan-100"
};

export function SectorSignalArt({
  article,
  opacity = "soft"
}: {
  article: Article;
  opacity?: "subtle" | "soft";
}) {
  const theme = getSectorTheme(article);
  const opacityClass =
    opacity === "subtle"
      ? "opacity-[0.11] group-hover:opacity-[0.17]"
      : "opacity-[0.18] group-hover:opacity-[0.25]";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${themeClass[theme]} ${opacityClass} mix-blend-screen transition duration-500 [mask-image:radial-gradient(ellipse_at_80%_24%,black_0%,black_30%,transparent_70%)]`}
    >
      <div className="absolute right-[-3rem] top-[-1rem] h-64 w-80 transition duration-500 group-hover:scale-[1.04] sm:right-[-2rem]">
        {theme === "ai" ? <AiSignal /> : null}
        {theme === "hardware" ? <HardwareSignal /> : null}
        {theme === "platform" ? <PlatformSignal /> : null}
        {theme === "engine" ? <EngineSignal /> : null}
        {theme === "esports" ? <EsportsSignal /> : null}
        {theme === "market" ? <MarketSignal /> : null}
        {theme === "gaming" ? <GamingSignal /> : null}
      </div>
    </div>
  );
}

function getSectorTheme(article: Article): SectorTheme {
  const sectors = article.sectors.join(" ");

  if (article.category === "AI" || sectors.includes("Game AI")) return "ai";
  if (article.category === "Hardware" || sectors.includes("Hardware")) return "hardware";
  if (article.category === "Platform" || /Cloud Gaming|Console|Storefronts|Subscriptions/.test(sectors)) {
    return "platform";
  }
  if (/Game Engines|UGC|Virtual Production/.test(sectors)) return "engine";
  if (article.category === "Esports" || /Esports|Streaming|Sponsorship/.test(sectors)) return "esports";
  if (article.category === "Business" || /Steam|Publishing|Marketing|Creator Economy|Hiring/.test(sectors)) {
    return "market";
  }

  return "gaming";
}

function SignalSvg({ children }: { children: ReactNode }) {
  return (
    <svg className="h-full w-full overflow-visible" viewBox="0 0 320 256" fill="none">
      {children}
    </svg>
  );
}

function AiSignal() {
  return (
    <SignalSvg>
      <path d="M64 78C96 38 158 38 190 78C222 118 208 176 160 194C110 176 32 118 64 78Z" stroke="currentColor" strokeWidth="1.4" opacity="0.42" />
      <path d="M118 78L156 52L198 90L178 142L132 156L92 120L118 78Z" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <path d="M118 78L178 142M198 90L132 156M92 120L156 52" stroke="currentColor" strokeWidth="0.9" opacity="0.35" />
      {[118, 156, 198, 178, 132, 92].map((x, index) => (
        <circle key={x} cx={x} cy={[78, 52, 90, 142, 156, 120][index]} r="5.5" fill="currentColor" opacity="0.72" />
      ))}
      <path d="M210 66H252M224 104H292M210 150H272" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
    </SignalSvg>
  );
}

function HardwareSignal() {
  return (
    <SignalSvg>
      <rect x="92" y="56" width="132" height="132" rx="20" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      <rect x="124" y="88" width="68" height="68" rx="12" stroke="currentColor" strokeWidth="1.2" opacity="0.42" />
      <path d="M64 90H92M64 122H92M64 154H92M224 90H280M224 122H300M224 154H284M124 34V56M158 22V56M192 34V56M124 188V222M158 188V236M192 188V222" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <path d="M142 122H174M158 106V138" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
      <circle cx="158" cy="122" r="42" stroke="currentColor" strokeWidth="0.8" opacity="0.24" />
    </SignalSvg>
  );
}

function PlatformSignal() {
  return (
    <SignalSvg>
      <rect x="72" y="84" width="70" height="100" rx="14" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <rect x="174" y="54" width="92" height="62" rx="14" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <rect x="164" y="148" width="82" height="42" rx="12" stroke="currentColor" strokeWidth="1.2" opacity="0.45" />
      <path d="M142 126C168 96 196 88 242 98M142 136C166 160 186 166 205 168M107 84C126 54 164 34 214 40" stroke="currentColor" strokeWidth="1.2" opacity="0.46" />
      <circle cx="107" cy="134" r="6" fill="currentColor" opacity="0.65" />
      <circle cx="220" cy="85" r="6" fill="currentColor" opacity="0.65" />
      <circle cx="205" cy="168" r="5" fill="currentColor" opacity="0.65" />
    </SignalSvg>
  );
}

function EngineSignal() {
  return (
    <SignalSvg>
      <path d="M82 164L158 62L246 162L82 164Z" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
      <path d="M112 152L158 92L214 152L112 152Z" stroke="currentColor" strokeWidth="1" opacity="0.38" />
      <path d="M82 164L158 92M246 162L158 92M158 62V190M112 152L82 164M214 152L246 162" stroke="currentColor" strokeWidth="0.8" opacity="0.36" />
      <path d="M52 196H278M76 210H236M110 224H206" stroke="currentColor" strokeWidth="1" opacity="0.28" />
      <circle cx="158" cy="92" r="5" fill="currentColor" opacity="0.68" />
    </SignalSvg>
  );
}

function EsportsSignal() {
  return (
    <SignalSvg>
      <path d="M62 172C88 122 122 98 160 98C198 98 232 122 258 172" stroke="currentColor" strokeWidth="1.4" opacity="0.48" />
      <path d="M88 166C110 138 134 126 160 126C186 126 210 138 232 166" stroke="currentColor" strokeWidth="1.2" opacity="0.36" />
      <path d="M74 188H246M104 204H216" stroke="currentColor" strokeWidth="1.1" opacity="0.34" />
      <path d="M122 76L100 116M198 76L220 116M160 58V98" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
      <circle cx="160" cy="112" r="18" stroke="currentColor" strokeWidth="1.1" opacity="0.5" />
      <circle cx="160" cy="112" r="5" fill="currentColor" opacity="0.7" />
    </SignalSvg>
  );
}

function MarketSignal() {
  return (
    <SignalSvg>
      <path d="M62 182H270" stroke="currentColor" strokeWidth="1.1" opacity="0.32" />
      <path d="M76 158L114 132L148 148L184 88L220 108L260 62" stroke="currentColor" strokeWidth="1.8" opacity="0.62" />
      <path d="M82 96V160M128 86V144M174 74V154M222 52V124" stroke="currentColor" strokeWidth="1.1" opacity="0.32" />
      <rect x="72" y="118" width="18" height="40" rx="5" stroke="currentColor" opacity="0.45" />
      <rect x="118" y="96" width="18" height="48" rx="5" stroke="currentColor" opacity="0.45" />
      <rect x="164" y="106" width="18" height="48" rx="5" stroke="currentColor" opacity="0.45" />
      <rect x="212" y="76" width="18" height="48" rx="5" stroke="currentColor" opacity="0.45" />
    </SignalSvg>
  );
}

function GamingSignal() {
  return (
    <SignalSvg>
      <path d="M88 118C94 86 122 72 158 86C194 72 222 86 232 118L244 160C250 182 228 196 210 180L188 160H128L106 180C88 196 66 182 72 160L88 118Z" stroke="currentColor" strokeWidth="1.4" opacity="0.55" />
      <path d="M112 126H142M127 111V141M190 120H192M212 138H214" stroke="currentColor" strokeWidth="1.6" opacity="0.55" strokeLinecap="round" />
      <path d="M106 82C128 46 190 46 212 82M82 204C132 226 196 226 244 204" stroke="currentColor" strokeWidth="1" opacity="0.32" />
      <circle cx="192" cy="120" r="6" fill="currentColor" opacity="0.48" />
      <circle cx="214" cy="138" r="6" fill="currentColor" opacity="0.48" />
    </SignalSvg>
  );
}
