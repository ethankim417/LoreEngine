"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { TranslationKey } from "@/lib/i18n";

export function LocalizedText({ k }: { k: TranslationKey }) {
  const { t } = useLanguage();

  return <>{t(k)}</>;
}
