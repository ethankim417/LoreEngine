import type { Article, ArticleCategory, SourceCredibility } from "@/data/articles";
import type { DashboardMetric } from "@/lib/metrics";
import type { Language } from "@/lib/i18n";

type ArticleText = Pick<Article, "title" | "tldr" | "fullTldr" | "whyItMatters" | "possibleImpact" | "trendAnalysis">;
type ArticleTranslation = ArticleText & { sourceSlug: string };

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

const previousArticleTranslations: Record<string, ArticleTranslation> = {
  "le-001": {
    sourceSlug: "xbox-restructure-turns-studio-ownership-into-margin-discipline",
    title: "Xbox 구조조정이 스튜디오 보유 전략을 수익성 규율로 바꾼다",
    tldr: "Microsoft는 Xbox 전반에서 대규모 감원을 진행하고 여러 스튜디오를 완전 내부 소유 구조 밖으로 옮기려 하고 있다.",
    fullTldr: "The Verge는 Microsoft가 Xbox 조직을 크게 재편하며 수천 명 규모의 게임 부문 감원과 Double Fine, Compulsion, Ninja Theory, Undead Labs 같은 스튜디오 매각 또는 분사를 검토하고 있다고 보도했다. 핵심 신호는 퍼스트파티의 폭이 이제 마진, 관리 복잡도, 프랜차이즈 규모와 함께 평가되고 있다는 점이다.",
    whyItMatters: "Activision Blizzard 인수 이후 Xbox의 논리는 거대한 콘텐츠 포트폴리오를 느슨한 스튜디오 묶음이 아니라 집중된 플랫폼 사업처럼 운영할 수 있는지에 달려 있다.",
    possibleImpact: "퍼스트파티 예산, 지원 스튜디오 모델, Game Pass 경제성, 내부 자금을 받을 프로젝트의 기준에 대한 검증이 더 강해질 수 있다.",
    trendAnalysis: "대형 퍼블리셔가 가장 큰 프랜차이즈는 가까이 두고 작거나 위험한 창작 베팅은 독립 구조로 밀어내는 포트폴리오 압축 흐름이다."
  },
  "le-002": {
    sourceSlug: "xbox-profit-pressure-becomes-industry-warning-signal",
    title: "Xbox 수익 압박이 게임 산업의 경고 신호가 된다",
    tldr: "Xbox 구조조정은 콘솔 경제성, 구독 성장, AAA 비용 통제의 더 넓은 문제를 보여주는 사례로 해석되고 있다.",
    fullTldr: "Business Insider는 Xbox 감원을 콘솔 모멘텀 약화, Game Pass 기대치, 하드웨어 비용 상승, 소수의 장수 게임에 플레이어가 몰리는 현상과 연결했다. 신호는 Microsoft만의 문제가 아니다. 규모 자체가 게임 산업의 마진 문제를 해결하지 못하고 있다.",
    whyItMatters: "가장 큰 자본력을 가진 회사 중 하나가 내부 개발 노출을 줄인다면 중견 스튜디오와 서비스형 베팅에는 더 차가운 자금 환경이 올 수 있다.",
    possibleImpact: "퍼블리셔는 검증된 IP, 공유 기술, 저위험 공동 개발, 여러 플랫폼으로 이동 가능한 출시 전략을 더 선호할 가능성이 높다.",
    trendAnalysis: "스튜디오를 더 많이 소유하는 것보다 각 스튜디오가 반복적으로 수익을 낼 수 있음을 증명하는 운영 레버리지 중심의 흐름이다."
  },
  "le-003": {
    sourceSlug: "playstation-disc-backlash-keeps-digital-ownership-risk-visible",
    title: "PlayStation 디스크 논란이 디지털 소유권 리스크를 다시 드러낸다",
    tldr: "Sony가 PlayStation 물리 디스크에서 멀어지는 움직임은 소유권과 가격 결정력에 대한 소비자 반발을 계속 키우고 있다.",
    fullTldr: "Business Insider는 Sony가 2028년부터 PlayStation 게임 디스크 생산을 중단하려는 계획에 대한 비판이 이어지고 있다고 보도했다. 디지털 유통은 물류만의 문제가 아니라 중고 시장, 보존, 라이선스 리스크, 소비자 신뢰를 바꾸는 문제다.",
    whyItMatters: "디지털 전용 플랫폼은 마진을 높이고 유통을 단순화할 수 있지만, 그만큼 스토어 거버넌스와 계정 신뢰가 플레이어 관계의 핵심이 된다.",
    possibleImpact: "환불 기준, 라이브러리 보장, 디스크 드라이브 액세서리, 컬렉터 에디션, 디지털 스토어 가격 경쟁에 대한 압박이 커질 수 있다.",
    trendAnalysis: "플랫폼이 디스크 대신 라이선스로 이용자를 이동시키면서 플레이어가 더 강한 권리와 투명한 스토어 정책을 요구하는 소유권 불안 흐름이다."
  },
  "le-004": {
    sourceSlug: "nintendo-eu-battery-rule-turns-hardware-compliance-into-platform-planning",
    title: "Nintendo의 EU 배터리 규정 대응이 하드웨어 계획 문제로 번진다",
    tldr: "Nintendo는 EU의 사용자 교체 가능 배터리 규정에 맞추기 위해 유럽에서 기존 Switch 판매를 단계적으로 중단한다.",
    fullTldr: "The Verge는 Nintendo가 2027년 유럽에서 기존 Switch 모델 판매를 중단하고 EU 배터리 규정에 맞춘 개정 하드웨어를 내놓을 예정이라고 보도했다. 당장은 지역 규제 대응이지만, 더 큰 신호는 하드웨어 플랫폼이 수리권과 지속가능성 계획을 제품 수명주기에 포함해야 한다는 점이다.",
    whyItMatters: "규제는 후속 기기가 출시된 뒤에도 성숙한 콘솔 하드웨어, 액세서리 공급, 수리 흐름, 지역 재고 전략을 바꿀 수 있다.",
    possibleImpact: "지역별 SKU, 수리 문서, 액세서리 재설계, 휴대용 콘솔 생태계의 긴 컴플라이언스 관리가 더 중요해질 수 있다.",
    trendAnalysis: "지속가능성과 수리 가능성 규정이 출시와 단종 전략의 제약 조건이 되는 규제형 하드웨어 디자인 흐름이다."
  },
  "le-005": {
    sourceSlug: "memory-price-cooling-still-leaves-gaming-hardware-under-pressure",
    title: "메모리 가격 상승 둔화에도 게임 하드웨어 압박은 계속된다",
    tldr: "TrendForce는 소비자 저항으로 속도는 둔화되지만 3분기 DRAM과 NAND 가격 상승이 이어질 것으로 본다.",
    fullTldr: "Tom's Hardware는 TrendForce 전망을 인용해 2026년 3분기 DRAM 계약 가격이 13~18%, NAND가 10~15% 오를 수 있다고 전했다. AI 인프라 수요가 강한 가운데 소비자 전자 기업은 가격 부담에 저항하고 있어 콘솔, PC, 휴대용 기기가 부품비 긴장에 노출되어 있다.",
    whyItMatters: "메모리 가격은 AI 투자와 게임 하드웨어 가격을 직접 연결한다. 콘솔 가격, SSD 번들, GPU 보드 비용, 할인 여력에 영향을 준다.",
    possibleImpact: "하드웨어 할인은 더 조심스러워지고 저장공간 번들은 작아지며, 긴 콘솔 세대와 클라우드 또는 카탈로그 가치 메시지가 다시 강조될 수 있다.",
    trendAnalysis: "기업 AI가 공급망을 조이는 동안 소비자 게임 수요는 가격에 더 민감해지는 양분된 메모리 수요 흐름이다."
  },
  "le-006": {
    sourceSlug: "nvidia-roadmap-noise-shows-how-ai-compute-now-moves-gaming-stocks",
    title: "NVIDIA 로드맵 논란은 AI 컴퓨트가 게임 주가를 움직인다는 점을 보여준다",
    tldr: "NVIDIA는 AI 아키텍처 지연 보도에 반박했고, 투자자들은 그 로드맵 논쟁을 중요한 변수로 받아들였다.",
    fullTldr: "Investor's Business Daily는 NVIDIA가 차세대 AI 컴퓨팅 아키텍처의 대규모 지연 주장을 일축했으며 분석가들은 이를 시장 잡음으로 봤다고 보도했다. 데이터센터 AI 중심 보도지만 NVIDIA의 밸류에이션, PC GPU 공급, DLSS 로드맵, 로컬 AI 도구가 같은 투자 내러티브 위에 있다는 점에서 게임에도 중요하다.",
    whyItMatters: "게임 하드웨어 기업은 점점 AI 실행력으로 가격이 매겨진다. 제품 지연, 메모리 수요, 소비자 GPU 공급을 해석하는 방식도 달라진다.",
    possibleImpact: "게임 GPU 메시지는 순수 래스터 성능보다 AI 가속, 크리에이터 워크플로, 온디바이스 추론으로 더 기울 수 있다.",
    trendAnalysis: "게임 GPU가 소비자 업그레이드 사이클보다 데이터센터 로드맵 관점에서 먼저 평가되는 AI 주도 하드웨어 밸류에이션 흐름이다."
  },
  "le-007": {
    sourceSlug: "intel-arc-memory-value-highlights-budget-ai-creator-gap",
    title: "Intel Arc의 메모리 가성비가 저가형 AI 크리에이터 격차를 보여준다",
    tldr: "RTX 5090 가격 상승은 32GB Intel Arc Pro 카드가 메모리 중심 AI 작업에서 매력적으로 보이게 만들고 있다.",
    fullTldr: "TechRadar는 128GB 총 VRAM을 갖춘 4장 구성 Intel Arc Pro B70 세트가 부풀려진 RTX 5090 한 장보다 저렴할 수 있다고 보도했다. NVIDIA가 여전히 소프트웨어와 성능에서 강하지만, 게임 개발자, 모더, 소규모 AI 콘텐츠 팀에게 저렴한 VRAM은 현실적인 제작 제약이 되고 있다.",
    whyItMatters: "게임 AI 실험은 로컬 컴퓨트 경제성에 달려 있다. 고급 소비자 GPU가 계속 희소하거나 비싸면 저가의 대용량 메모리 대안이 전략적으로 중요해진다.",
    possibleImpact: "인디 팀과 테크니컬 아티스트는 혼합 GPU 구성, 클라우드 버스트, 양자화 모델, 비 CUDA 워크플로를 테스트할 가능성이 높다.",
    trendAnalysis: "플래그십 게임 카드가 희소성 때문에 비싸질수록 크리에이터는 AI 파이프라인에 충분한 로컬 메모리를 원하게 되는 VRAM 민주화 압력이다."
  },
  "le-008": {
    sourceSlug: "amd-radeon-memory-risk-keeps-pc-gaming-prices-unstable",
    title: "AMD Radeon 메모리 리스크가 PC 게임 가격을 계속 흔든다",
    tldr: "Radeon 그래픽 메모리 비용 상승 가능성은 소비자 GPU 가격의 또 다른 압박 요인이다.",
    fullTldr: "TechRadar는 VideoCardz의 보드 채널 소문을 인용해 AMD Radeon 생태계가 7월 그래픽 메모리 가격 상승에 직면할 수 있다고 보도했다. 중요한 것은 정확한 비율이 아니라 소비자가 높은 하드웨어 가격에 저항하는 와중에도 PC 게임 부품 가격이 메모리 공급 압력에 취약하다는 점이다.",
    whyItMatters: "GPU 가격은 Steam 하드웨어 채택, PC 업그레이드 시점, 크리에이터 워크스테이션, 소프트웨어 구매 여력에 영향을 준다.",
    possibleImpact: "번들 PC, 중고 GPU, 이전 세대 카드, 클라우드 게임 체험, 업스케일링 같은 성능 확장 기능에 더 많은 관심이 갈 수 있다.",
    trendAnalysis: "메모리 가격 변동성이 스택 전반으로 퍼지면서 게이머와 크리에이터가 전체 시스템 비용을 더 적극적으로 비교하는 하드웨어 가치 탐색 흐름이다."
  },
  "le-009": {
    sourceSlug: "esports-world-cup-opens-with-creator-and-club-scale-in-focus",
    title: "Esports World Cup 개막은 크리에이터와 클럽 규모를 전면에 둔다",
    tldr: "EWC 공식 일정은 1주차 개막과 7주 일정, 클럽 예선 데이터, 크리에이터 프로그램을 함께 보여준다.",
    fullTldr: "Esports World Cup 공식 사이트는 2026년 행사가 7월 6~12일 개막 주간에 들어갔고, Road to EWC 슬롯, 클럽 예선 상위권, 크리에이터 프로그램, 8월 말까지 이어지는 다주 일정이 있음을 보여준다. e스포츠가 단순 토너먼트가 아니라 클럽, 크리에이터, 티켓, 페스티벌 상품으로 포장되고 있다는 신호다.",
    whyItMatters: "e스포츠 수익화는 경쟁, 크리에이터 유통, 현장 관람, 스폰서 친화적 클럽 서사를 얼마나 잘 결합하느냐에 달려 있다.",
    possibleImpact: "퍼블리셔는 클럽 슬롯, 공동 송출권, 크리에이터 접근, 여러 게임을 넘나드는 페스티벌형 포맷을 더 많이 협상하게 될 수 있다.",
    trendAnalysis: "토너먼트 운영사가 클럽, 팬, 크리에이터, 라이브 이벤트를 중심으로 연중 상업 시스템을 구축하는 e스포츠 번들링 흐름이다."
  },
  "le-010": {
    sourceSlug: "india-rising-pathway-makes-esports-expansion-more-regional",
    title: "India Rising 경로는 e스포츠 확장을 더 지역화한다",
    tldr: "JioBLAST, Chess.com, EWC가 인도 플레이어를 Esports World Cup 생태계로 연결하는 전용 경로를 만들고 있다.",
    fullTldr: "Times of India는 India Rising: Road to EWC 프로그램을 인도 플레이어가 Esports World Cup 생태계에 진입하는 직접 경로로 소개했다. e스포츠 성장이 글로벌 퍼블리셔 회로에만 의존하지 않고 통신사, 체스, 크리에이터, 국가 시장 파트너십을 통해 지역화되고 있다는 신호다.",
    whyItMatters: "인도의 모바일 중심 게임 기반, 체스 강점, 통신 유통망은 e스포츠 관객과 인재 확장에서 매우 중요한 조합이다.",
    possibleImpact: "지역 예선, 통신사 후원 대회, 체스-e스포츠 하이브리드, 국가 정체성을 활용한 스폰서 패키지가 늘어날 수 있다.",
    trendAnalysis: "글로벌 이벤트가 현지 규모에서 발견성, 유통, 스폰서십 문제를 해결하기 위해 시장별 사다리를 만드는 지역화된 e스포츠 인프라 흐름이다."
  },
  "le-011": {
    sourceSlug: "kai-cenat-dual-platform-return-tests-streaming-exclusivity",
    title: "Kai Cenat의 동시 플랫폼 복귀가 스트리밍 독점성을 시험한다",
    tldr: "Kai Cenat의 7월 6일 복귀 방송은 Twitch와 YouTube 양쪽에서 진행될 것으로 예상되며 멀티 플랫폼 크리에이터 전략을 강화한다.",
    fullTldr: "Times of India는 Kai Cenat가 휴식 후 복귀 방송을 Twitch와 YouTube에서 동시에 진행할 것이라고 보도했다. 게임과 e스포츠 관점에서 중요한 것은 한 크리에이터의 일정이 아니라, 최상위 크리에이터들이 도달 범위, 회복력, 협상력을 위해 단일 플랫폼 독점에서 점점 멀어진다는 점이다.",
    whyItMatters: "크리에이터 유통은 게임 출시, e스포츠 시청률, 스폰서 도달 범위를 좌우한다. 멀티 플랫폼 방송은 플랫폼 의존도를 낮추고 크리에이터 접근 비용을 높인다.",
    possibleImpact: "출시 캠페인은 하나의 라이브 플랫폼만으로 충분하다고 보기보다 Twitch, YouTube, TikTok, 숏폼 클립 전반의 크리에이터 도달을 구매하게 될 수 있다.",
    trendAnalysis: "상위 스트리머가 여러 플랫폼에 관객 권리를 분산한 미디어 네트워크처럼 행동하는 크리에이터 이동성 흐름이다."
  },
  "le-012": {
    sourceSlug: "fortnite-star-wars-tools-show-licensed-ugc-entering-production-mode",
    title: "Fortnite Star Wars 도구는 라이선스 UGC가 제작 모드로 들어갔음을 보여준다",
    tldr: "Epic과 Disney는 Fortnite 크리에이터가 Star Wars 경험을 만들 수 있게 하고, 라이선스 섬에 수익 배분을 붙였다.",
    fullTldr: "The Verge는 Epic과 Disney가 UEFN 크리에이터에게 Star Wars 에셋을 열고 퍼블리싱 지원과 Disney 수익 배분을 제공한다고 보도했다. 이전 신호이지만 이번 주에도 중요한 이유는 크리에이터 주도 게임이 브랜드, 플랫폼, 독립 제작자가 경제성을 나누는 라이선스 채널이 되고 있기 때문이다.",
    whyItMatters: "라이선스 UGC는 게임 플랫폼을 준공식 프랜차이즈 공장으로 만들 수 있지만, 권리, 수익 배분, 검수, 발견성이 명확해야 한다.",
    possibleImpact: "IP 보유자는 통제된 크리에이터 에셋 라이브러리, 플랫폼별 수익 배분, 이벤트 연동 퍼블리싱 윈도우를 더 많이 테스트할 가능성이 있다.",
    trendAnalysis: "브랜드가 일회성 협업에서 재사용 가능한 크리에이터 제작 키트로 이동하는 프랜차이즈 도구의 플랫폼 전략화 흐름이다."
  },
  "le-013": {
    sourceSlug: "roblox-cube-3d-keeps-ai-creation-pressure-on-platforms",
    title: "Roblox Cube 3D는 플랫폼의 AI 제작 경쟁 압박을 유지한다",
    tldr: "Roblox의 Cube 3D 모델과 4D 제작 도구는 UGC 플랫폼을 AI 에셋 생성 경쟁 안에 계속 묶어 둔다.",
    fullTldr: "Roblox의 Cube 3D 자료는 Roblox Studio와 크리에이터 API에 통합되는 메시 생성 모델을 설명하며, GitHub와 Hugging Face에 공개 모델 리소스도 제공한다. 전략적 신호는 AI 에셋 생성이 신기한 데모에서 플랫폼 네이티브 제작 워크플로로 이동하고 있다는 점이다.",
    whyItMatters: "UGC 플랫폼은 더 많은 크리에이터가 더 빠르게 쓸 만한 오브젝트를 만들 수 있을 때 강해진다. AI 메시 생성은 제작 마찰을 낮추는 동시에 검수, 품질, IP 출처 문제를 키운다.",
    possibleImpact: "메시, 애니메이션, 스크립팅, 썸네일, 현지화를 위한 플랫폼 내 AI 도구가 더 늘고, 안전 필터와 감사 추적도 함께 강화될 수 있다.",
    trendAnalysis: "플랫폼이 생성형 도구를 외부 앱으로 두지 않고 크리에이터 워크플로 안에 직접 넣는 내장형 AI 제작 흐름이다."
  },
  "le-014": {
    sourceSlug: "pc-long-tail-still-defends-catalog-first-publishing",
    title: "PC 롱테일은 여전히 카탈로그 우선 퍼블리싱을 방어한다",
    tldr: "Newzoo의 PC 및 콘솔 분석은 대형 타이틀 바깥의 카탈로그 매출 내구성을 계속 강조한다.",
    fullTldr: "PC Gamer가 다룬 Newzoo의 2026년 PC 및 콘솔 보고서에 따르면 서구권 PC 매출의 절반 이상이 상위 20개 게임 밖에서 발생했다. 스튜디오 감원과 하드웨어 가격 압박이 지배한 주간에, 카탈로그 복리는 지속 가능한 퍼블리싱의 강한 반대 신호로 남아 있다.",
    whyItMatters: "PC 매출은 많은 콘솔 전략보다 소수의 연간 블록버스터에 덜 의존한다. 모드 지원, 할인, 업데이트, 커뮤니티 지속성이 보상받는다.",
    possibleImpact: "퍼블리셔는 오래된 PC 타이틀을 보호하고, 작은 업데이트를 지원하며, Steam 이벤트를 단순 출시 도구가 아닌 포트폴리오 관리 도구로 활용할 수 있다.",
    trendAnalysis: "출시 후 업데이트, 할인, 모드, 커뮤니티 콘텐츠를 통해 계속 관심을 얻는 게임이 PC 스토어에서 보상받는 롱테일 회복력 흐름이다."
  },
  "le-015": {
    sourceSlug: "global-games-market-growth-still-masks-studio-stress",
    title: "글로벌 게임 시장 성장은 여전히 스튜디오 스트레스를 가린다",
    tldr: "Newzoo가 게임 매출 2,000억 달러 돌파를 추정한 가운데, 감원과 스튜디오 통합은 계속 충돌하는 신호로 남아 있다.",
    fullTldr: "GamesRadar는 Newzoo의 추정을 인용해 2025년 글로벌 게임 매출이 2,000억 달러를 넘었고 모바일, PC, 콘솔이 모두 큰 지출 풀을 만들었다고 보도했다. 이번 주 Xbox 감원이 보여주듯 시장 성장이 스튜디오 안정으로 고르게 이어지지는 않는다는 점에서 여전히 유용한 주간 앵커다.",
    whyItMatters: "상위 시장이 성장해도 매출이 대형 플랫폼, 라이브 서비스, 장수 IP에 집중되면 운영 환경은 여전히 어려울 수 있다.",
    possibleImpact: "자본은 모바일 규모, UGC 플랫폼, 검증된 프랜차이즈, 라이브 운영 팀으로 계속 흐르고 새 프리미엄 베팅의 승인 기준은 더 높아질 수 있다.",
    trendAnalysis: "총시장 성장은 감원, 프로젝트 취소, 중간 예산 스튜디오의 자금 조달 압박과 공존하는 불균등 확장 흐름이다."
  }
};

const legacyCurrentArticleTranslations: Record<string, ArticleTranslation> = {
  ...previousArticleTranslations,
  "le-002": {
    sourceSlug: "xbox-strategy-hire-reopens-the-metaverse-question",
    title: "Xbox 전략 인사가 메타버스 논의를 다시 꺼냈다",
    tldr: "Xbox가 구조조정 이후 새로운 플랫폼 방향을 찾는 과정에서 메타버스 전략가 매튜 볼을 영입했다.",
    fullTldr: "PC Gamer는 Xbox가 전략 자문사 Prosimetrum을 통해 매튜 볼을 영입했다고 보도했다. 지속형 가상 세계, Roblox, 크리에이터 경제, 크로스플랫폼 생태계에 대한 그의 배경은 Microsoft가 콘솔 독점작보다 넓은 전략 틀을 검토하고 있음을 보여준다.",
    whyItMatters: "Xbox는 큰 폭의 스튜디오 재편 이후 게임 포트폴리오, Game Pass, 클라우드 유통, Minecraft, 크리에이터 생태계를 연결할 설득력 있는 전략이 필요하다.",
    possibleImpact: "지속형 세계, 기기 간 정체성, 크리에이터 경제, 플랫폼 상호운용성이 다시 강조될 수 있다. 동시에 메타버스 구상이 플레이어 가치를 높이는지에 대한 검증도 커질 것이다.",
    trendAnalysis: "콘솔 기업이 UGC, 소셜 그래프, 클라우드 유통, 가상 경제를 하나의 전략 체계로 보는 플랫폼 융합 흐름이다."
  },
  "le-006": {
    sourceSlug: "ai-upscaling-becomes-a-platform-control-layer",
    title: "AI 업스케일링이 플랫폼 통제 계층으로 바뀐다",
    tldr: "차세대 DLSS, FSR, XeSS가 AI 재구성을 PC 게임 화면 전략의 핵심 계층으로 만들고 있다.",
    fullTldr: "TechRadar는 NVIDIA DLSS, AMD FSR, Intel XeSS가 단순 해상도 복원을 넘어 프레임 생성과 적극적인 이미지 재구성으로 이동하는 방향을 비교했다. 핵심 전략 이슈는 엔진과 출시 게임의 기본 시각 파이프라인을 누가 통제하느냐다.",
    whyItMatters: "업스케일링은 하드웨어 수명을 늘리고 렌더링 비용을 낮출 수 있지만, 창작 통제권과 호환성을 GPU 업체 모델에 더 의존하게 만들 수도 있다.",
    possibleImpact: "스튜디오는 더 강한 화질 QA, 확장 가능한 대체 경로, 투명한 프리셋, 파편화된 PC 환경을 위한 업체 중립 성능 목표가 필요하다.",
    trendAnalysis: "이미지 재구성이 선택형 성능 기능에서 표준 제작 의존성으로 이동하는 AI 네이티브 렌더링 흐름이다."
  },
  "le-008": {
    sourceSlug: "amd-midrange-gpu-price-cut-tests-pc-demand",
    title: "AMD 중급 GPU 가격 인하가 PC 수요를 시험한다",
    tldr: "Radeon RX 9070 GRE가 499달러로 내려가며 NVIDIA 중급 제품에 가격 압박을 주고 업그레이드 수요를 시험한다.",
    fullTldr: "Tom's Hardware는 AMD RX 9070 GRE 가격이 약 9% 하락해 499달러가 됐으며, 1440p 성능도 검토했다고 보도했다. 메모리 비용 상승에도 유통 경쟁과 수요가 요구하면 그래픽카드 가격은 내려갈 수 있다는 구체적 반대 신호다.",
    whyItMatters: "500달러 가격대는 마니아 판매량, Steam 하드웨어 교체, 프리미엄 GPU에만 기대지 않는 게임 성능 기준에 중요하다.",
    possibleImpact: "NVIDIA와 Intel은 번들 또는 실판매가 압박을 받을 수 있고, 가격 인하가 유지되면 개발자는 1440p 기능을 제공할 더 큰 이용자층을 확보할 수 있다.",
    trendAnalysis: "플래그십은 여전히 비싸지만 경쟁적인 중급 재고 가격은 구매자 쪽으로 움직이기 시작하는 선택적 가격 정상화 흐름이다."
  }
};

const currentArticleTranslations: Record<string, ArticleTranslation> = {
  ...legacyCurrentArticleTranslations,
  "le-001": {
    sourceSlug: "roblox-build-moves-ai-game-creation-onto-phones",
    title: "Roblox Build가 AI 게임 제작을 스마트폰으로 옮긴다",
    tldr: "Roblox가 프롬프트를 플레이하고 출시할 수 있는 경험으로 바꾸는 모바일 우선 Build 탭을 공개했다.",
    fullTldr: "Roblox는 메인 모바일 앱 안에 제작 화면 Build를 도입하고, 텍스트 프롬프트를 플레이 가능한 경험으로 바꾸는 AI 도구를 함께 발표했다. 뉴질랜드 공개 알파는 7월 28일 시작될 예정이다.",
    whyItMatters: "제작이 더 이상 데스크톱 편집기에서만 시작되지 않는다. 소비자 앱 안으로 저작 도구가 들어가면 신규 크리에이터 유입 경로가 크게 넓어진다.",
    possibleImpact: "첫 제작자와 콘텐츠 생산량이 늘 수 있지만, 검수·독창성·발견성·수익 배분 문제도 더 어려워질 수 있다.",
    trendAnalysis: "UGC 플랫폼은 플레이, 프롬프트, 편집, 출시 사이의 거리를 줄이며 게임 제작을 앱 내부 활동으로 바꾸고 있다."
  },
  "le-002": {
    sourceSlug: "xbox-cuts-reach-doom-veterans",
    title: "Xbox 감원이 현대 Doom을 만든 팀까지 닿았다",
    tldr: "Game Developer는 Xbox의 최근 구조조정으로 남아 있던 Doom(2016) 개발자의 3분의 2가 감원됐다고 보도했다.",
    fullTldr: "이번 보도는 Microsoft의 7월 조직 재편이 제작 현장에 미친 결과를 보여준다. id Software는 게임과 기술을 계속 만들 인력은 유지했다고 밝혔지만, 핵심 조직 지식은 줄었다.",
    whyItMatters: "기술 영향력이 큰 스튜디오의 감원은 엔진 관리, 멘토링, 일정 위험, 대표 프랜차이즈의 연속성에 영향을 줄 수 있다.",
    possibleImpact: "id Tech 투자, 외주, 인력 유지, 출시 범위와 수익성 목표의 양립 가능성에 대한 검증이 커질 수 있다.",
    trendAnalysis: "대형 퍼블리셔는 창작 역량을 사들이던 단계에서 내부에 반드시 남겨야 할 역량의 규모를 시험하는 단계로 이동하고 있다."
  },
  "le-003": {
    sourceSlug: "japan-gpu-distributor-warns-of-new-price-hikes",
    title: "일본 GPU 유통사가 20~40% 가격 인상을 경고하다",
    tldr: "일본 유통사 CFD Sales가 8월부터 Gigabyte 그래픽카드 주문 가격이 약 20~40% 오를 수 있다고 알렸다.",
    fullTldr: "Tom's Hardware에 따르면 CFD Sales는 일본 소매업체에 제조사발 가격 조정을 통보했다. 한국에서 시작된 최근 GPU 가격 충격이 일본 유통망으로 확산하는 신호다.",
    whyItMatters: "두 번째 주요 PC 시장에서 유통 단계의 명시적 가격 재조정이 나타나며 AI 관련 부품 압박이 전망을 넘어 실제 공급 계약에 반영되고 있다.",
    possibleImpact: "소매업체는 재고를 제한하고 이용자는 업그레이드를 미루거나 낮은 등급을 선택할 수 있다. 개발사는 구형 GPU 지원과 재구성 기술을 더 중시할 수 있다.",
    trendAnalysis: "AI 인프라 수요가 메모리와 제조 제약을 아시아 게임 하드웨어의 가격 부담 주기로 바꾸고 있다."
  },
  "le-004": {
    sourceSlug: "atari-universal-expand-classic-games-to-film",
    title: "Atari와 Universal이 고전 게임을 영화로 확장한다",
    tldr: "Atari와 Universal이 Asteroids와 Missile Command를 포함한 고전 게임 IP의 영화를 개발한다.",
    fullTldr: "두 회사는 서사가 풍부한 원작보다 익숙한 이름과 이미지를 활용해 아케이드 시대 IP를 영화로 확장한다.",
    whyItMatters: "원작의 서사 기반이 얇은 상황에서 향수와 브랜드 인지도만으로 게임 각색을 얼마나 견인할 수 있는지 시험하는 계약이다.",
    possibleImpact: "영화가 성공하면 휴면 카탈로그가 라이선스, 리마스터, 상품, 신작 게임 전반에서 다시 활성화될 수 있다.",
    trendAnalysis: "게임사는 과거 카탈로그를 트랜스미디어 포트폴리오로 다루며 각색 가치를 현재 게임 매출과 분리하고 있다."
  },
  "le-005": {
    sourceSlug: "scopely-reorganizes-stumble-guys",
    title: "Scopely가 Stumble Guys 팀을 재편한다",
    tldr: "Scopely가 Pokémon Go 등 대형 라이브 서비스 중심으로 포트폴리오를 키우는 가운데 Stumble Guys 팀을 재편한다.",
    fullTldr: "Game Developer는 Scopely에서 또 다른 모바일 팀 재편이 진행된다고 보도했다. Pokémon Go 인수 이후 대형 라이브 서비스 사업자 안에서도 포트폴리오 선별이 계속되고 있다.",
    whyItMatters: "모바일 규모가 콘텐츠 위험을 없애지는 않는다. 성숙한 라이브 게임은 유지율, 유입 비용, 다른 투자 기회와 비교해 인력을 정당화해야 한다.",
    possibleImpact: "자원이 소수 글로벌 프랜차이즈로 이동하고, 작은 라이브 팀에는 더 엄격한 수익성과 마일스톤 기준이 적용될 수 있다.",
    trendAnalysis: "모바일 통합은 더 큰 포트폴리오와 함께 라이브 제품 사이의 더 잦은 내부 자본 이동을 만들고 있다."
  },
  "le-006": {
    sourceSlug: "epic-store-leader-moves-to-saber",
    title: "Epic Games Store 책임자가 Saber Interactive로 이동한다",
    tldr: "Steve Allison이 8년간 이끈 Epic PC 스토어를 떠나 Saber의 최고사업책임자가 됐다.",
    fullTldr: "Allison은 무료 게임 확보 전략과 월간 활성 사용자 7,800만 명 규모로의 성장을 이끌었다. Embracer에서 분리된 Saber는 스토어와 퍼블리싱 경험을 갖춘 리더를 확보했다.",
    whyItMatters: "경영진 이동은 플랫폼 경제, 계약, 개발사 관계에 관한 지식을 새 독립 퍼블리셔 그룹으로 옮길 수 있다.",
    possibleImpact: "Saber는 더 큰 퍼블리싱·유통 파트너십을 추진할 수 있고 Epic은 Steam 경쟁 전략의 새 리더십을 세워야 한다.",
    trendAnalysis: "대형 그룹 해체 이후 중앙 플랫폼의 숙련된 운영자가 독립 퍼블리싱 네트워크로 재배치되고 있다."
  },
  "le-007": {
    sourceSlug: "gameenginebench-tests-agents-in-real-unreal-projects",
    title: "GameEngineBench가 실제 Unreal 프로젝트에서 코딩 에이전트를 시험한다",
    tldr: "새 벤치마크가 실제 Unreal Engine 5 저장소 9개에서 110개 C++ 작업으로 코딩 에이전트를 평가한다.",
    fullTldr: "GameEngineBench는 실행 가능한 환경에서 게임플레이, 멀티플레이, 애니메이션, UI, 저장, XR, 온라인 서비스, 렌더링 플러그인을 다룬다. 장난감 코드가 아닌 제작 제약으로 평가를 옮긴다.",
    whyItMatters: "스튜디오에는 에이전트가 런타임 동작을 깨뜨리지 않고 엔진 코드를 바꿀 수 있다는 증거가 필요하다.",
    possibleImpact: "도구 업체는 저장소 단위 게임 테스트를 도입하고, 스튜디오는 제작 브랜치 투입 전에 자체 평가 체계를 만들 수 있다.",
    trendAnalysis: "게임 AI 도구가 인상적인 데모에서 분야별 평가, 재현성, 런타임 검증으로 이동하고 있다."
  },
  "le-008": {
    sourceSlug: "steam-survey-shifts-toward-16gb-gpus",
    title: "Steam GPU 기반이 16GB 카드 중심으로 이동하다",
    tldr: "Steam 7월 하드웨어 조사에서 16GB 구성이 조사 대상 PC 가운데 가장 큰 VRAM 등급으로 올라섰다.",
    fullTldr: "TechRadar가 분석한 Valve의 7월 조사에서는 신형 그래픽카드 가격이 오르는 가운데 16GB 카드 비중이 빠르게 늘었다. 최신 장비 이용자와 예산형 이용자의 성능 격차도 커지고 있다.",
    whyItMatters: "설치 기반의 메모리 용량은 텍스처 예산, 레이 트레이싱 목표, 최소 사양, 최신 렌더링 기능의 적용 범위를 결정한다.",
    possibleImpact: "스튜디오는 16GB 환경을 위한 고품질 설정을 강화하면서 구형 카드용 확장 설정을 유지할 수 있다. GPU 업체는 이 변화를 높은 평균 판매가의 근거로 활용할 수 있다.",
    trendAnalysis: "PC 게임 시장은 성능이 향상된 핵심 이용자층과 가격 부담이 큰 장기 이용자층으로 양분되고 있다."
  },
  "le-009": {
    sourceSlug: "xbox-raises-console-prices-as-memory-costs-surge",
    title: "메모리 비용 급등으로 Xbox가 콘솔 가격을 올린다",
    tldr: "Microsoft가 8월 1일부터 전 세계 Xbox 가격을 인상해 512GB 모델은 100달러, 1TB 모델은 150달러 더 비싸졌다.",
    fullTldr: "Xbox는 콘솔 저장장치와 메모리 비용이 2.5배 넘게 올랐고 2027년 가을까지 다시 두 배가 될 수 있다고 밝혔다. 2TB 모델은 단종하고 접근성 지원 프로그램을 도입한다.",
    whyItMatters: "플랫폼 사업자가 부품 위기를 하드웨어 가격에 직접 반영하면서 보조금을 전제로 한 전통적 콘솔 사업 모델과 이용자 확대 전략이 흔들리고 있다.",
    possibleImpact: "콘솔 보급이 느려지고 저비용 구매 지원과 클라우드 플레이의 중요성이 커지며, 퍼블리셔는 더 분산된 활성 기기 기반을 상대할 수 있다.",
    trendAnalysis: "메모리 부족이 PC 부품 문제를 넘어 플랫폼 전략으로 번지며 콘솔 업체에 마진, 가격, 설치 기반 확대 사이의 선택을 요구하고 있다."
  },
  "le-010": {
    sourceSlug: "unions-challenge-xbox-layoff-process",
    title: "노조가 Microsoft의 Xbox 감원 절차에 이의를 제기한다",
    tldr: "유럽 노동단체가 Xbox 구조조정 일부의 처리 방식에 대해 법적 대응에 나섰다.",
    fullTldr: "분쟁은 Xbox 재편을 포트폴리오 전략에서 협의, 노동권, 규정 준수 문제로 확장한다. 국가별 노동 규정이 달라 국제 감원은 서로 다른 속도로 진행될 수 있다.",
    whyItMatters: "글로벌 퍼블리셔는 모든 지역에 하나의 구조조정 방식을 적용할 수 없으며 절차 위험은 일정, 비용, 사기, 스튜디오 연속성에 영향을 준다.",
    possibleImpact: "퍼블리셔는 더 긴 협의 기간과 현지 법률 검토를 반영하고, 노조는 스튜디오 네트워크 전체에서 더 적극적으로 협력할 수 있다.",
    trendAnalysis: "노동 조직화가 다국적 게임 산업 구조조정의 지속적인 전략 제약으로 자리 잡고 있다."
  },
  "le-011": {
    sourceSlug: "ewc-packages-esports-as-a-season",
    title: "Esports World Cup이 대회를 하나의 시즌으로 묶는다",
    tldr: "EWC의 7주 일정은 클럽 순위, 다수 종목, 크리에이터, 티켓, 페스티벌 프로그램을 결합한다.",
    fullTldr: "공식 허브는 24개 e스포츠 25개 이벤트가 8월 23일까지 이어짐을 보여준다. 상품은 경기뿐 아니라 클럽 정체성, 크리에이터 유통, 관광, 현장 관람까지 확장된다.",
    whyItMatters: "대형 운영사는 개별 대회만으로 만들기 어려운 반복 시청 습관과 스폰서 상품을 여러 종목에 걸쳐 만들려 한다.",
    possibleImpact: "퍼블리셔와 팀은 여러 게임을 아우르는 클럽 프로그램, 공동 중계, 시즌 서사, 중앙 이벤트 제휴를 더 중시할 수 있다.",
    trendAnalysis: "e스포츠는 분산된 게임 커뮤니티를 하나의 상업 구조 아래 모으는 페스티벌 규모 시즌으로 묶이고 있다."
  },
  "le-012": {
    sourceSlug: "streaming-growth-centers-creators-not-games",
    title: "스트리밍 성장은 게임만큼 크리에이터를 중심에 둔다",
    tldr: "스트리밍 데이터에서 크리에이터 주도 엔터테인먼트와 Just Chatting이 게임과 시청 시간을 경쟁한다.",
    fullTldr: "Digiday가 검토한 데이터에서 Fortnite는 게임 방송 시간을 이끌었지만 Just Chatting은 수억 시간의 시청을 기록했다. 플랫폼은 게임 목록보다 인물 중심 상품으로 변하고 있다.",
    whyItMatters: "퍼블리셔는 게임 플랫폼 안에서도 크리에이터 형식과 관심을 경쟁하므로 캠페인과 후원 가치가 달라진다.",
    possibleImpact: "예산이 단기 광고에서 인물 중심 출시, 공동 중계, 장기 크리에이터 관계로 이동할 수 있다.",
    trendAnalysis: "라이브 스트리밍은 게임 발견 인프라에서 더 넓은 크리에이터 엔터테인먼트 시장으로 진화하고 있다."
  },
  "le-013": {
    sourceSlug: "unreal-6-converges-engine-and-creator-platform",
    title: "Unreal Engine 6가 엔진과 크리에이터 플랫폼을 통합한다",
    tldr: "Epic의 UE6 로드맵은 UEFN과 Unreal 작업 흐름을 합치고 엔진 기능을 AI 통합에 개방한다.",
    fullTldr: "Epic은 2027년 말 UE6 얼리 액세스를 계획하며 Scene Graph와 Verse를 새 게임플레이 프레임워크의 중심에 둔다. 로드맵은 모델 선택과 MCP 기반 AI 작업 흐름도 설명한다.",
    whyItMatters: "주요 고급 엔진이 패키지 게임 제작뿐 아니라 지속형 크리에이터 생태계와 에이전트 접근 도구 중심으로 재설계되고 있다.",
    possibleImpact: "스튜디오는 Verse, Scene Graph, AI 정책, 호환성에 관한 이전 결정을 내려야 하고 Epic은 통합 제작 스택을 확보한다.",
    trendAnalysis: "전문 엔진과 UGC 플랫폼이 수렴하고 AI가 공유 제작 시스템 위의 인터페이스 계층이 되고 있다."
  },
  "le-014": {
    sourceSlug: "nintendo-eu-battery-rules-shape-hardware-lifecycles",
    title: "EU 배터리 규정이 Nintendo 하드웨어 수명주기를 바꾼다",
    tldr: "사용자 교체형 배터리 규정 시행을 앞두고 Nintendo가 유럽에서 기존 Switch 판매를 단계적으로 끝낸다.",
    fullTldr: "Nintendo는 배터리 규정에 맞춘 유럽용 하드웨어를 준비한다. 수리 가능성이 성숙한 콘솔 제품군의 수명주기 요건이 되며 규정 대응은 출시 이후 지역별 단종까지 이어진다.",
    whyItMatters: "규제는 출시 후 오랜 시간이 지나도 플랫폼 사업자의 하드웨어, 수리, 액세서리, 재고 전략을 바꿀 수 있다.",
    possibleImpact: "하드웨어 업체는 수리가 쉬운 설계, 지역별 SKU, 휴대형 기기의 장기 규정 계획을 확대할 수 있다.",
    trendAnalysis: "수리 가능성과 지속가능성 규정이 사후 의무가 아니라 플랫폼 로드맵 입력값이 되고 있다."
  },
  "le-015": {
    sourceSlug: "market-growth-still-masks-studio-stress",
    title: "게임 시장 성장이 여전히 스튜디오의 압박을 가린다",
    tldr: "성장하는 글로벌 게임 시장이 감원, 프로젝트 축소, 취약한 중간 예산 경제성과 동시에 존재한다.",
    fullTldr: "Newzoo의 전망은 모바일, PC, 콘솔 규모를 보여주는 기준이지만 이번 주 감원은 전체 소비 지출이 모든 퍼블리셔, 팀, 프로젝트에 고르게 배분되지 않음을 보여준다.",
    whyItMatters: "전체 시장 성장만 보면 집중도, 유입 비용, 제작비 상승, 카탈로그 경쟁을 놓쳐 전략 판단을 그르칠 수 있다.",
    possibleImpact: "투자자와 스튜디오는 전체 성장보다 부문별 수익성, 유지율, 포트폴리오 품질을 더 강조할 수 있다.",
    trendAnalysis: "산업은 불균등하게 성장하며 규모 있는 플랫폼과 장수 프랜차이즈가 더 많은 가치를 가져가는 동안 제작팀의 자본은 빡빡해지고 있다."
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
  if (language === "en") {
    return article;
  }

  const currentTranslation = currentArticleTranslations[article.id];

  if (currentTranslation?.sourceSlug === article.slug) {
    return currentTranslation;
  }

  return article;
}

export function getArticleLocalizationStatus(source: Article[]) {
  const missingKoreanArticleIds = source
    .filter((article) => !currentArticleTranslations[article.id])
    .map((article) => article.id);
  const staleKoreanArticleIds = source
    .filter((article) => {
      const translation = currentArticleTranslations[article.id];

      return translation && translation.sourceSlug !== article.slug;
    })
    .map((article) => article.id);

  return {
    englishCount: source.length,
    koreanCount: source.length - missingKoreanArticleIds.length - staleKoreanArticleIds.length,
    complete: missingKoreanArticleIds.length === 0 && staleKoreanArticleIds.length === 0,
    missingKoreanArticleIds,
    staleKoreanArticleIds
  };
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
