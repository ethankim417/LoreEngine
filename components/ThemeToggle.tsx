"use client";

import { Moon, Sun } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { useTheme, type InterfaceTheme } from "@/components/ThemeProvider";

const themes: InterfaceTheme[] = ["dark", "light"];

export function ThemeToggle() {
  const { language } = useLanguage();
  const { theme, setTheme } = useTheme();
  const label = language === "ko" ? "인터페이스 테마" : "Interface theme";
  const names =
    language === "ko"
      ? { dark: "다크", light: "라이트" }
      : { dark: "Dark", light: "Light" };

  return (
    <div
      className="inline-flex h-10 items-center rounded-full border border-white/10 bg-slate-950/46 p-1 text-xs font-black text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_12px_36px_rgba(0,0,0,0.2)] backdrop-blur-xl"
      aria-label={label}
      title={label}
    >
      {themes.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setTheme(item)}
          aria-label={names[item]}
          aria-pressed={theme === item}
          className={`grid h-8 w-8 place-items-center rounded-full transition ${
            theme === item
              ? "bg-cyan-300 text-slate-950 shadow-[0_0_22px_rgba(34,211,238,0.22)]"
              : "text-slate-400 hover:bg-white/[0.055] hover:text-cyan-50"
          }`}
        >
          {item === "dark" ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
        </button>
      ))}
    </div>
  );
}
