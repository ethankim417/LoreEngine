import type { Language } from "@/lib/i18n";

export const weeklyEditorial: {
  leadArticleSlug: string;
  headline: Record<Language, string>;
  previousHeadlines: string[];
} = {
  leadArticleSlug: "epic-ai-megajam-puts-agentic-production-under-a-public-deadline",
  headline: {
    en: "Epic turns agentic game creation into a four-day public production test",
    ko: "Epic이 에이전트 기반 게임 제작을 4일짜리 공개 제작 시험으로 만듭니다"
  },
  previousHeadlines: [
    "Game Pass makes cloud, handheld, PC, and console coverage part of the launch contract",
    "Game Pass가 클라우드·핸드헬드·PC·콘솔 지원을 출시 약속의 일부로 만듭니다",
    "Xbox turns indie discovery into a cross-device distribution bundle",
    "Xbox가 인디 발견성을 기기 간 유통 묶음으로 만듭니다",
    "Unity turns the next engine cycle into a weekly migration decision",
    "Unity가 차세대 엔진 전환을 주간 단위의 마이그레이션 결정으로 만듭니다",
    "Fortnite makes creator packaging part of the publishing stack",
    "Fortnite가 크리에이터 패키징을 퍼블리싱 스택의 일부로 만듭니다",
    "Xbox turns franchise fandom into a platform operating layer",
    "Xbox가 프랜차이즈 팬덤을 플랫폼 운영 계층으로 만듭니다",
    "Fortnite turns LLM characters into a governed creator workflow",
    "Fortnite가 LLM 캐릭터를 관리 가능한 크리에이터 작업 흐름으로 바꿉니다"
  ]
};
