import type { Language } from "@/lib/i18n";

export const weeklyEditorial: {
  leadArticleSlug: string;
  headline: Record<Language, string>;
  previousHeadlines: string[];
} = {
  leadArticleSlug: "xbox-raises-console-prices-as-memory-costs-surge",
  headline: {
    en: "The memory crunch reaches the console shelf",
    ko: "메모리 부족이 콘솔 판매가를 밀어 올립니다"
  },
  previousHeadlines: [
    "Game creation moves inside the player app",
    "게임 제작이 플레이 앱 안으로 들어옵니다",
    "AI is setting the tone",
    "AI가 흐름을 주도합니다"
  ]
};
