import type { Language } from "@/lib/i18n";

export const weeklyEditorial: {
  leadArticleSlug: string;
  headline: Record<Language, string>;
  previousHeadlines: string[];
} = {
  leadArticleSlug: "fortnite-llm-template-makes-conversation-a-creator-tool",
  headline: {
    en: "Fortnite turns LLM characters into a governed creator workflow",
    ko: "Fortnite가 LLM 캐릭터를 관리 가능한 크리에이터 작업 흐름으로 바꿉니다"
  },
  previousHeadlines: [
    "Studio restructuring now comes with a labor operating model",
    "스튜디오 재편에는 이제 노사 운영 방식도 함께 따라옵니다",
    "Gamescom turns attention into shared industry infrastructure",
    "Gamescom이 관심을 산업의 공동 인프라로 바꿉니다",
    "Hardware inflation turns access into a platform decision",
    "하드웨어 인플레이션이 게임 접근 방식을 바꿉니다",
    "GPU inflation spreads through Asia's retail channel",
    "GPU 가격 상승이 아시아 유통망 전반으로 번집니다",
    "The memory crunch reaches the console shelf",
    "메모리 부족이 콘솔 판매가를 밀어 올립니다",
    "GPU inflation spreads through Asia's retail channel",
    "GPU 가격 상승이 아시아 유통망 전반으로 번집니다"
  ]
};
