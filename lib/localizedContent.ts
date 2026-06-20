import type { Article, ArticleCategory, SourceCredibility } from "@/data/articles";
import type { DashboardMetric } from "@/lib/metrics";
import type { Language } from "@/lib/i18n";

type ArticleText = Pick<Article, "title" | "tldr" | "fullTldr" | "whyItMatters" | "possibleImpact" | "trendAnalysis">;

const categoryLabels: Record<ArticleCategory, Record<Language, string>> = {
  Gaming: { en: "Gaming", ko: "게임" },
  AI: { en: "AI", ko: "AI" },
  Business: { en: "Business", ko: "비즈니스" },
  Hardware: { en: "Hardware", ko: "하드웨어" },
  Esports: { en: "Esports", ko: "e스포츠" },
  Platform: { en: "Platform", ko: "플랫폼" },
  Studio: { en: "Studio", ko: "스튜디오" }
};

const sourceCredibilityLabels: Record<SourceCredibility, Record<Language, { full: string; compact: string }>> = {
  "Official source": {
    en: { full: "Official source", compact: "Official" },
    ko: { full: "공식 출처", compact: "공식" }
  },
  "Trade press": {
    en: { full: "Trade press", compact: "Press" },
    ko: { full: "전문 매체", compact: "매체" }
  },
  "Market analysis": {
    en: { full: "Market analysis", compact: "Market" },
    ko: { full: "시장 분석", compact: "시장" }
  },
  "Vendor report": {
    en: { full: "Vendor report", compact: "Vendor" },
    ko: { full: "벤더 리포트", compact: "벤더" }
  }
};

const sectorLabels: Record<string, string> = {
  UGC: "UGC",
  "Creator Economy": "크리에이터 경제",
  Discovery: "발견성",
  "Live Ops": "라이브 운영",
  Steam: "Steam",
  "Indie Devs": "인디 개발사",
  Publishing: "퍼블리싱",
  Marketing: "마케팅",
  "Game AI": "게임 AI",
  Hardware: "하드웨어",
  "Developer Tools": "개발 도구",
  "Creator Tools": "크리에이터 도구",
  "Cloud Gaming": "클라우드 게임",
  "PC Gaming": "PC 게임",
  "Subscription Gaming": "구독형 게임",
  Platform: "플랫폼",
  Education: "교육",
  "Social Impact": "사회적 영향",
  "Art Pipelines": "아트 파이프라인",
  Console: "콘솔",
  "First-Party IP": "퍼스트파티 IP",
  "Platform Tools": "플랫폼 도구",
  "Game Engines": "게임 엔진",
  "PC Ports": "PC 포팅",
  "Mobile Gaming": "모바일 게임",
  "Apple Platforms": "애플 플랫폼",
  "Porting Tools": "포팅 도구",
  "Performance Optimization": "성능 최적화",
  "Live Content": "라이브 콘텐츠",
  Monetization: "수익화",
  "Asset Delivery": "에셋 배포",
  Xbox: "Xbox",
  "Console Strategy": "콘솔 전략",
  "Multiplatform": "멀티플랫폼",
  "First-Party Studios": "퍼스트파티 스튜디오",
  Esports: "e스포츠",
  "Showcase Media": "쇼케이스 미디어",
  Creators: "크리에이터",
  "Event Marketing": "이벤트 마케팅",
  "D2C": "D2C",
  "Mobile Publishers": "모바일 퍼블리셔",
  "Platform Fees": "플랫폼 수수료",
  "Customer Data": "고객 데이터",
  "AI Talent": "AI 인재",
  "Spatial Computing": "공간 컴퓨팅",
  "Generative Tools": "생성형 도구",
  "Policy": "정책",
  "Disclosure": "공개 고지",
  "Production Tools": "제작 도구"
};

const articleTranslations: Record<string, ArticleText> = {
  "le-001": {
    title: "Roblox 발견성 업데이트가 크리에이터 게임의 성장 공식을 바꾼다",
    tldr: "Roblox는 추천, 검색, 품질 신호가 좋은 크리에이터 게임을 더 큰 관객에게 연결하는 방식을 더 명확히 설명했다.",
    fullTldr:
      "Roblox의 6월 발견성 글은 크리에이터가 플랫폼 유통 방식을 더 구체적으로 이해하도록 만든다. UGC 플랫폼의 성공은 커뮤니티 홍보만이 아니라 유지율, 품질, 발견성 적합도에 점점 더 좌우된다.",
    whyItMatters:
      "크리에이터 기반 게임은 점점 전문 시장이 되고 있다. 발견 규칙이 명확해지면 팀은 공개 전 프로토타입, 소프트런칭, 온보딩을 더 체계적으로 설계하게 된다.",
    possibleImpact:
      "Roblox 스튜디오들은 분석, 세션 설계, 첫 이용 경험을 공개 전 핵심 제작 단계로 다룰 가능성이 커진다.",
    trendAnalysis: "UGC 생태계가 라이브 서비스 운영처럼 성숙하면서 플랫폼은 성장 로직을 더 많이 공개하고 있다."
  },
  "le-002": {
    title: "Steam Next Fest가 인디 출시 전략에서 데모 중심 발견성을 다시 확인시킨다",
    tldr: "Valve의 6월 Next Fest는 데모가 인디 출시 인프라의 핵심이 되었음을 보여준다.",
    fullTldr:
      "Steam Next Fest는 PC 게임 발견성이 이제 트레일러와 위시리스트만이 아니라 공개 플레이 가능 데모에 크게 의존한다는 점을 강화한다. 데모는 매장 테스트, 크리에이터 소재, 초기 전환 퍼널이 동시에 되었다.",
    whyItMatters: "소규모 팀에게 성공적인 데모 주간은 유료 마케팅 일부를 대체할 수 있다.",
    possibleImpact: "더 많은 스튜디오가 데모 완성도, 행사 후 유지 전략, 크리에이터 친화적 프리뷰를 일정의 중심에 둘 것이다.",
    trendAnalysis: "짧고 강한 훅, 빠른 첫 루프, 방송하기 쉬운 순간을 만드는 데모가 유리하다."
  },
  "le-003": {
    title: "NVIDIA Blackwell 벤치마크가 로컬 AI 성능을 게임 제작 스택으로 끌어들인다",
    tldr: "NVIDIA는 에이전트형 AI 벤치마크로 로컬 및 워크스테이션 AI 작업의 GPU 가치를 강조하고 있다.",
    fullTldr:
      "NVIDIA의 벤치마크 글은 게임 전용 소식은 아니지만 아트, QA, 툴, 크리에이터 파이프라인에 에이전트 워크플로가 들어오고 있다는 점에서 중요하다.",
    whyItMatters: "게임 AI 투자는 하드웨어 경제성과 연결된다. 로컬 AI 성능이 강해질수록 스튜디오는 더 많은 작업을 내부 장비에서 처리할 수 있다.",
    possibleImpact: "툴 벤더들은 로컬 추론, 자동 테스트, 에셋 반복 기능을 워크스테이션 GPU 성능과 묶어 홍보할 가능성이 높다.",
    trendAnalysis: "클라우드 전용 AI에서 벗어나 프라이버시와 지연시간이 중요한 작업은 로컬 가속기로 처리하는 하이브리드 흐름이 강해지고 있다."
  },
  "le-004": {
    title: "GeForce NOW 여름 할인은 클라우드 게임 경쟁이 접근성과 가격으로 옮겨갔음을 보여준다",
    tldr: "NVIDIA는 멤버십 할인을 통해 클라우드 게임을 유지율과 가격 경쟁의 영역으로 밀어 넣고 있다.",
    fullTldr: "GeForce NOW 할인은 콘텐츠 발표보다 가격 신호에 가깝다. 고성능 PC 게임을 서비스처럼 빌려 쓰는 가치 제안을 다시 상기시키는 움직임이다.",
    whyItMatters: "클라우드 게임 전략은 기술 데모보다 가입, 유지, 카탈로그 효용이 중요해지고 있다.",
    possibleImpact: "퍼블리셔는 하드웨어 장벽이 높은 PC 게임의 보조 발견 채널로 클라우드 프로모션을 볼 수 있다.",
    trendAnalysis: "클라우드 게임은 가격 이벤트, 카탈로그 주기, 기기 접근성을 중시하는 서비스 플레이북으로 정착하고 있다."
  },
  "le-005": {
    title: "Roblox Games for Change가 크리에이터 게임에 사회적 영향 의제를 더한다",
    tldr: "Roblox와 Games for Change는 크리에이터 대회를 통해 UGC 게임을 단순한 참여 루프 이상으로 포지셔닝하고 있다.",
    fullTldr: "이 챌린지는 긍정적 연결을 주제로 한 학생 및 크리에이터 프로젝트를 조명한다. 플랫폼은 브랜드 안전성과 문화적 설득력을 갖춘 경험을 원한다.",
    whyItMatters: "UGC 플랫폼은 부모, 교육자, 브랜드에게 신뢰를 얻어야 한다.",
    possibleImpact: "플랫폼 주도 챌린지는 인재 발굴, 안전 메시지, 다양한 장르 실험의 증거로 더 자주 쓰일 수 있다.",
    trendAnalysis: "크리에이터 게임은 대회, 커리큘럼, 파트너 주제를 통해 취미에서 포트폴리오와 직업 경로로 전문화되고 있다."
  },
  "le-006": {
    title: "RTX의 DiffusionGemma가 로컬 생성형 AI를 크리에이터 툴 논의의 중심에 둔다",
    tldr: "NVIDIA의 로컬 DiffusionGemma 가속은 AI 크리에이터 도구를 소비자 및 워크스테이션 GPU와 연결한다.",
    fullTldr: "로컬 이미지 생성과 에셋 아이데이션은 게임 프리프로덕션에 점점 더 들어오고 있다. 벤더들은 지연시간, 비용, 프라이버시를 이유로 로컬 워크플로를 강조한다.",
    whyItMatters: "소규모 팀과 크리에이터는 클라우드 비용과 에셋 보안에 민감하다.",
    possibleImpact: "AI 아트 및 툴 업체는 로컬 모델 지원을 제작상의 장점으로 계속 포장할 것이다.",
    trendAnalysis: "AI 도입은 데모보다 빠르고 반복 가능한 실제 제작 워크플로에 맞는지가 중요해지고 있다."
  },
  "le-007": {
    title: "Nintendo Direct가 Switch 2 흐름을 쇼케이스 주간의 역프로그래밍으로 만든다",
    tldr: "Nintendo는 6월 Direct와 Treehouse 후속 편성으로 Switch 2 소프트웨어 모멘텀을 유지했다.",
    fullTldr: "Nintendo는 하드웨어 출시 이후 대화를 소프트웨어 편성 관리로 확장했다. 자체 이벤트 주도권은 경쟁 쇼케이스가 많은 주간에도 생태계 관심을 지켜준다.",
    whyItMatters: "Nintendo는 관심 창을 직접 통제할 때 강하다.",
    possibleImpact: "Nintendo는 경쟁 이벤트가 몰릴 때 Direct, 후속 방송, 업그레이드 메시지를 함께 묶을 가능성이 높다.",
    trendAnalysis: "플랫폼 홀더는 공개, 데모, 후속 콘텐츠를 며칠에 걸쳐 운영하는 라이브스트림 편성을 전략 자산으로 관리하고 있다."
  },
  "le-008": {
    title: "Apple의 에이전트형 포팅 세션은 게임 전략을 워크플로 비용 문제로 바꾼다",
    tldr: "Apple의 WWDC26 게임 포팅 세션은 에이전트 코딩을 플랫폼 확장 논리 안으로 끌어들였다.",
    fullTldr: "Apple은 Mac, iPad, iPhone 지원을 엔지니어링 마찰을 줄이는 문제로 설명한다. 핵심은 AI 열기가 아니라 포팅 실험 비용이 충분히 낮아지는지다.",
    whyItMatters: "플랫폼 전략은 도구 비용에 좌우된다.",
    possibleImpact: "중견 팀은 에이전트 포팅으로 가능성을 먼저 검토한 뒤 최적화와 인증 투자 여부를 결정할 수 있다.",
    trendAnalysis: "플랫폼 확장은 맞춤형 포트보다 재사용 가능한 워크플로와 반복 작업 자동화 쪽으로 기울고 있다."
  },
  "le-009": {
    title: "Apple Metal 성능 세션은 포트 수만큼 포트 품질도 중요하다고 말한다",
    tldr: "Apple은 게임 포팅에서 성능 품질과 최적화 도구를 함께 강조하고 있다.",
    fullTldr: "Apple 생태계 확장은 단순히 더 많은 게임을 가져오는 문제가 아니다. 플랫폼 신뢰를 얻으려면 프레임 안정성, 로딩, 에너지 효율이 필요하다.",
    whyItMatters: "나쁜 포트는 플랫폼 인식을 해칠 수 있다.",
    possibleImpact: "스튜디오는 Apple 플랫폼 지원을 검토할 때 자동 포팅뿐 아니라 최적화 예산도 함께 계산하게 된다.",
    trendAnalysis: "포팅 경쟁은 이제 수량보다 품질과 운영 비용을 함께 보는 단계로 이동하고 있다."
  },
  "le-010": {
    title: "Apple StoreKit과 Background Assets 세션이 라이브 콘텐츠 운영을 겨냥한다",
    tldr: "Apple은 결제, 에셋 배포, 백그라운드 다운로드를 라이브 게임 운영의 핵심으로 다루고 있다.",
    fullTldr: "StoreKit과 Background Assets는 모바일 및 Apple 플랫폼 게임의 라이브 운영 비용과 경험 품질에 직접 연결된다.",
    whyItMatters: "라이브 게임은 콘텐츠 업데이트와 결제 흐름이 매끄러워야 한다.",
    possibleImpact: "Apple 생태계에서 운영하는 팀은 다운로드, 콘텐츠 전달, 결제 UX를 더 세밀하게 다듬을 필요가 있다.",
    trendAnalysis: "플랫폼 도구는 출시보다 운영 단계의 마찰을 줄이는 방향으로 진화하고 있다."
  },
  "le-011": {
    title: "Xbox 쇼케이스는 독점작과 멀티플랫폼 퍼블리싱을 같은 판 위에 올렸다",
    tldr: "Xbox는 독점작, Game Pass, 멀티플랫폼 확장을 동시에 관리하는 전략을 보여줬다.",
    fullTldr: "쇼케이스는 Xbox가 하드웨어 충성도와 퍼블리싱 확장을 함께 추구한다는 점을 보여준다. 독점성은 더 이상 단순한 이분법이 아니다.",
    whyItMatters: "플랫폼 전략은 콘텐츠 소유권, 구독 가치, 여러 기기에서의 수익화를 동시에 조율해야 한다.",
    possibleImpact: "스튜디오와 투자자는 Xbox 발표를 콘솔 판매뿐 아니라 IP 수익화 전략의 신호로 읽게 된다.",
    trendAnalysis: "플랫폼 홀더는 독점작을 유지하면서도 더 넓은 플레이어 기반을 향한 퍼블리싱 옵션을 열어두고 있다."
  },
  "le-012": {
    title: "Summer Game Fest 시청 기록은 쇼케이스 주간이 미디어 이벤트가 되었음을 확인한다",
    tldr: "Summer Game Fest의 높은 시청 지표는 게임 발표가 대형 미디어 편성으로 자리 잡았음을 보여준다.",
    fullTldr: "쇼케이스 주간은 단순 발표 모음이 아니라 크리에이터, 스트리머, 플랫폼이 함께 움직이는 미디어 이벤트가 되었다.",
    whyItMatters: "발표 타이밍과 영상화 가능성은 게임 마케팅의 중요한 자산이다.",
    possibleImpact: "퍼블리셔는 발표 소재를 커뮤니티 반응, 클립, 후속 콘텐츠까지 고려해 설계할 것이다.",
    trendAnalysis: "게임 공개는 라이브 이벤트, 숏폼, 크리에이터 반응을 묶는 멀티채널 캠페인으로 진화하고 있다."
  },
  "le-013": {
    title: "모바일 퍼블리셔가 D2C를 마진과 통제력 확보 전략으로 계속 밀고 있다",
    tldr: "모바일 게임사는 플랫폼 수수료와 고객 데이터 통제 문제 때문에 직접 결제와 웹 스토어 전략을 강화하고 있다.",
    fullTldr: "D2C는 단순한 결제 우회가 아니라 마진, 데이터, 충성도 프로그램을 직접 관리하려는 전략이다.",
    whyItMatters: "모바일 게임 수익성은 플랫폼 정책과 결제 경로에 크게 좌우된다.",
    possibleImpact: "상위 모바일 퍼블리셔는 웹 스토어, 보상, CRM을 더 적극적으로 운영할 가능성이 높다.",
    trendAnalysis: "모바일 시장은 플랫폼 의존도를 낮추고 직접 고객 관계를 확보하려는 방향으로 움직이고 있다."
  },
  "le-014": {
    title: "Roblox가 AI 창업자 영입으로 현실 비전 가속을 노린다",
    tldr: "Roblox는 AI 인재 영입을 통해 생성, 안전, 3D 경험 제작 역량을 강화하려 한다.",
    fullTldr: "AI 창업자 영입은 Roblox가 현실감 있는 UGC 제작과 플랫폼 안전성을 AI로 확장하려는 신호다.",
    whyItMatters: "UGC 플랫폼의 다음 경쟁력은 제작 도구와 안전 시스템을 얼마나 자동화하느냐에 달려 있다.",
    possibleImpact: "Roblox는 크리에이터가 더 빠르게 3D 경험을 만들고 운영하도록 AI 도구를 강화할 가능성이 높다.",
    trendAnalysis: "대형 플랫폼은 AI 인재를 제품 속도, 안전, 제작 효율성의 핵심 자산으로 보고 있다."
  },
  "le-015": {
    title: "Summer Game Fest AI 고지가 생성형 도구 사용을 전면에 올렸다",
    tldr: "게임 공개 행사에서 AI 사용 고지가 늘어나며 생성형 도구의 투명성이 중요한 이슈가 되고 있다.",
    fullTldr: "생성형 AI가 제작 과정에 들어오면서 발표 현장에서도 사용 여부와 방식에 대한 설명 요구가 커지고 있다.",
    whyItMatters: "스튜디오는 AI 도구 사용이 창작, 노동, IP 논쟁과 연결된다는 점을 피하기 어렵다.",
    possibleImpact: "행사 주최자와 퍼블리셔는 AI 사용 고지, 정책, 내부 검토 기준을 더 명확히 해야 할 것이다.",
    trendAnalysis: "AI 도구는 숨은 제작 도구에서 공개적으로 설명해야 하는 산업 정책 이슈로 이동하고 있다."
  }
};

const metricTranslations: Record<DashboardMetric["id"], Partial<DashboardMetric>> = {
  "industry-heat": {
    label: "산업 열기",
    shortDescription: "이번 주 브리프가 얼마나 전략적으로 중요한지 보여주는 종합 압력 지표입니다.",
    definition: "현재 인텔리전스 피드의 평균 영향도 점수를 0~100 시장 온도로 압축한 값입니다.",
    calculation: "모든 기사 산업 영향도 점수의 평균을 반올림합니다.",
    interpretation: "70 이상은 활발한 뉴스 사이클, 85 이상은 전략과 예산에 영향을 줄 수 있는 주제가 많다는 뜻입니다.",
    formulaHint: "평균 영향도"
  },
  "ai-disruption-index": {
    label: "AI 변화 지수",
    shortDescription: "AI 관련 뉴스가 게임 제작 방식을 얼마나 바꿀 수 있는지 읽는 지표입니다.",
    definition: "AI 카테고리와 AI 관련 섹터 기사를 분리해 평균 전략 영향도를 측정합니다.",
    calculation: "AI 기사 또는 AI 섹터가 포함된 기사의 영향도 평균입니다.",
    interpretation: "점수가 높으면 AI가 단순히 언급되는 수준이 아니라 제작, 인력, 비용, 플랫폼 전략과 연결되어 있다는 뜻입니다.",
    formulaHint: "AI 기사 기준"
  },
  "trending-articles": {
    label: "주목 브리프",
    shortDescription: "LoreEngine의 고모멘텀 기준을 넘은 브리프 수입니다.",
    definition: "전략적으로 중요하거나 빠르게 관심이 커지는 브리프를 집계합니다.",
    calculation: "영향도 80 이상 또는 트렌드 점수 30% 이상인 기사 수입니다.",
    interpretation: "값이 높을수록 이번 주 읽어야 할 항목이 많다는 뜻입니다.",
    formulaHint: "80+ 영향도 또는 30%+ 트렌드"
  },
  "market-momentum": {
    label: "시장 모멘텀",
    shortDescription: "피드의 평균 트렌드 점수를 기반으로 한 방향성 신호입니다.",
    definition: "추적 중인 주제가 기준 피드 대비 얼마나 빠르게 관심을 얻는지 추정합니다.",
    calculation: "모든 기사 트렌드 점수의 평균을 성장률처럼 표시합니다.",
    interpretation: "값이 높을수록 플랫폼 변화, AI 툴, 구조조정, 크리에이터 시장 같은 빠른 내러티브가 많다는 뜻입니다.",
    formulaHint: "평균 트렌드"
  }
};

export function getCategoryLabel(category: ArticleCategory, language: Language) {
  return categoryLabels[category][language];
}

export function getSourceCredibilityLabel(credibility: SourceCredibility, language: Language, compact = false) {
  const labels = sourceCredibilityLabels[credibility][language];
  return compact ? labels.compact : labels.full;
}

export function getSectorLabel(sector: string, language: Language) {
  return language === "ko" ? sectorLabels[sector] ?? sector : sector;
}

export function getArticleText(article: Article, language: Language): ArticleText {
  return language === "ko" ? articleTranslations[article.id] ?? article : article;
}

export function getMetricText(metric: DashboardMetric, language: Language): DashboardMetric {
  if (language === "en") {
    return metric;
  }

  const translated = metricTranslations[metric.id] ?? {};

  return {
    ...metric,
    ...translated,
    inputs: metric.inputs.map((input) => getMetricInputLabel(input))
  };
}

function getMetricInputLabel(input: string) {
  const labels: Record<string, string> = {
    "Article impact scores": "기사 영향도 점수",
    "Current filtered intelligence corpus": "현재 필터링된 인텔리전스 묶음",
    "Mock analyst scoring": "샘플 분석 점수",
    "AI category stories": "AI 카테고리 기사",
    "Affected sectors containing AI": "AI가 포함된 영향 섹터",
    "Impact score threshold": "영향도 기준",
    "Trend growth threshold": "트렌드 성장 기준",
    "Total tracked articles": "전체 추적 기사",
    "Article trend scores": "기사 트렌드 점수",
    "Theme velocity assumptions": "테마 속도 가정",
    "Mock growth estimates": "샘플 성장 추정"
  };

  return labels[input] ?? input;
}
