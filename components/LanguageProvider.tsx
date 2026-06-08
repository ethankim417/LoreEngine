"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { type Language, type TranslationKey, translations } from "@/lib/i18n";

const LANGUAGE_KEY = "loreengine-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const stored = readStoredLanguage();

    if (stored) {
      setLanguageState(stored);
    }

    fetch("/api/preferences")
      .then((response) => (response.ok ? response.json() : null))
      .then((payload: { language?: Language } | null) => {
        if (payload?.language) {
          window.localStorage.setItem(LANGUAGE_KEY, payload.language);
          setLanguageState(payload.language);
        }
      })
      .catch(() => {
        // Local language preference remains active when account preferences are unavailable.
      });
  }, []);

  function setLanguage(nextLanguage: Language) {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(LANGUAGE_KEY, nextLanguage);
    void fetch("/api/preferences", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ language: nextLanguage })
    }).catch(() => undefined);
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key: TranslationKey) => translations[language][key] ?? translations.en[key]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider.");
  }

  return context;
}

function readStoredLanguage(): Language | null {
  try {
    const value = window.localStorage.getItem(LANGUAGE_KEY);

    return value === "en" || value === "ko" ? value : null;
  } catch {
    return null;
  }
}
