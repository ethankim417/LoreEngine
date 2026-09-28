import type { Language } from "@/lib/i18n";

export const weeklyEditorial: {
  leadArticleSlug: string;
  headline: Record<Language, string>;
  previousHeadlines: string[];
} = {
  leadArticleSlug: "king-labor-pact-raises-the-floor-for-studio-change",
  headline: {
    en: "Studio restructuring now comes with a labor operating model",
    ko: "스튜디오 재편에는 이제 노사 운영 방식도 함께 따라옵니다"
  },
  previousHeadlines: [
    "Xbox turns cloud access into a metered service",
    "Xbox가 클라우드 이용을 시간제 서비스로 바꿉니다",
    "Gamescom turns attention into shared industry infrastructure",
    "Gamescom이 관심을 산업의 공동 인프라로 바꿉니다",
    "Hardware inflation turns access into a platform decision",
    "하드웨어 인플레이션이 게임 접근 방식을 바꿉니다",
    "GPU inflation spreads through Asia's retail channel",
    "GPU 가격 상승이 아시아 유통망 전반으로 번집니다",
    "The memory crunch reaches the console shelf",
    "메모리 부족이 콘솔 판매가를 밀어 올립니다",
    "Xbox concentrates franchise control while studios leave its portfolio",
    "Xbox가 스튜디오를 내보내며 프랜차이즈 관리 권한을 집중합니다"
  ]
};
