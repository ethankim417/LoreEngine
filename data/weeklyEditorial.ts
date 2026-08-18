import type { Language } from "@/lib/i18n";

export const weeklyEditorial: {
  leadArticleSlug: string;
  headline: Record<Language, string>;
  previousHeadlines: string[];
} = {
  leadArticleSlug: "us-gpu-prices-jump-as-memory-pressure-spreads",
  headline: {
    en: "Hardware inflation turns access into a platform decision",
    ko: "하드웨어 인플레이션이 게임 접근 방식을 바꿉니다"
  },
  previousHeadlines: [
    "GPU inflation spreads through Asia's retail channel",
    "GPU 가격 상승이 아시아 유통망 전반으로 번집니다",
    "The memory crunch reaches the console shelf",
    "메모리 부족이 콘솔 판매가를 밀어 올립니다",
    "Game creation moves inside the player app",
    "게임 제작이 플레이 앱 안으로 들어옵니다",
    "AI is setting the tone",
    "AI가 흐름을 주도합니다"
  ]
};
