import type { Language } from "@/lib/i18n";

export const weeklyEditorial: {
  leadArticleSlug: string;
  headline: Record<Language, string>;
  previousHeadlines: string[];
} = {
  leadArticleSlug: "roblox-build-moves-ai-game-creation-onto-phones",
  headline: {
    en: "Game creation moves inside the player app",
    ko: "게임 제작이 플레이 앱 안으로 들어옵니다"
  },
  previousHeadlines: [
    "AI is setting the tone",
    "AI가 흐름을 주도합니다"
  ]
};
