import type { Language } from "@/lib/i18n";

export const weeklyEditorial: {
  leadArticleSlug: string;
  headline: Record<Language, string>;
  previousHeadlines: string[];
} = {
  leadArticleSlug: "id-xbox-ign-showcase-turns-indie-slots-into-cross-device-distribution",
  headline: {
    en: "Xbox turns indie discovery into a cross-device distribution bundle",
    ko: "Xbox가 인디 발견성을 기기 간 유통 묶음으로 만듭니다"
  },
  previousHeadlines: [
    "Unity turns the next engine cycle into a weekly migration decision",
    "Unity가 차세대 엔진 전환을 주간 단위의 마이그레이션 결정으로 만듭니다",
    "Fortnite makes creator packaging part of the publishing stack",
    "Fortnite가 크리에이터 패키징을 퍼블리싱 스택의 일부로 만듭니다",
    "Xbox turns franchise fandom into a platform operating layer",
    "Xbox가 프랜차이즈 팬덤을 플랫폼 운영 계층으로 만듭니다",
    "Fortnite turns LLM characters into a governed creator workflow",
    "Fortnite가 LLM 캐릭터를 관리 가능한 크리에이터 작업 흐름으로 바꿉니다",
    "Studio restructuring now comes with a labor operating model",
    "스튜디오 재편에는 이제 노사 운영 방식도 함께 따라옵니다",
    "Gamescom turns attention into shared industry infrastructure",
    "Gamescom이 관심을 산업의 공동 인프라로 바꿉니다"
  ]
};
