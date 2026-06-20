"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type InterfaceTheme = "dark" | "light";

const THEME_KEY = "loreengine-theme";

type ThemeContextValue = {
  theme: InterfaceTheme;
  setTheme: (theme: InterfaceTheme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<InterfaceTheme>("dark");

  useEffect(() => {
    const stored = readStoredTheme();
    if (stored) {
      setThemeState(stored);
      document.documentElement.dataset.theme = stored;
      return;
    }

    document.documentElement.dataset.theme = "dark";
  }, []);

  const setTheme = useCallback((nextTheme: InterfaceTheme) => {
    setThemeState(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(THEME_KEY, nextTheme);
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider.");
  }

  return context;
}

function readStoredTheme(): InterfaceTheme | null {
  try {
    const value = window.localStorage.getItem(THEME_KEY);

    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
}
