export type ArticleCategory =
  | "Gaming"
  | "AI"
  | "Business"
  | "Hardware"
  | "Esports"
  | "Platform"
  | "Studio";

export type SourceCredibility =
  | "Official source"
  | "Trade press"
  | "Market analysis"
  | "Vendor report";

export const sourceCredibilityTypes: SourceCredibility[] = [
  "Official source",
  "Trade press",
  "Market analysis",
  "Vendor report"
];

export type Article = {
  id: string;
  slug: string;
  title: string;
  source: string;
  sourceCredibility: SourceCredibility;
  category: ArticleCategory;
  tldr: string;
  fullTldr: string;
  whyItMatters: string;
  possibleImpact: string;
  trendAnalysis: string;
  impactScore: number;
  trendScore: number;
  confidence: number;
  sectors: string[];
  companies: string[];
  publishedAt: string;
  sourceUrl: string;
  visual: {
    image: string;
    alt: string;
  };
};

export const categories: ArticleCategory[] = [
  "Gaming",
  "AI",
  "Business",
  "Hardware",
  "Esports",
  "Platform",
  "Studio"
];

export const briefSnapshotDate = "2026-06-01";

export const articles: Article[] = [
  {
    id: "le-001",
    slug: "adaptive-ai-npcs-enter-live-service-roadmaps",
    title: "Adaptive AI NPCs move from tech demos into live-service roadmaps",
    source: "NVIDIA GeForce News",
    sourceCredibility: "Official source",
    category: "AI",
    tldr:
      "Major studios are piloting AI-driven NPC behavior layers for retention, quest variation, and lower content ops cost.",
    fullTldr:
      "Several large studios are reportedly testing adaptive NPC systems that can remix dialogue, quest beats, and encounter logic within strict narrative guardrails. The immediate value is not infinite characters, but cheaper content variation for live-service teams that need weekly reasons for players to return.",
    whyItMatters:
      "NPC intelligence is becoming a product operations lever. Teams that can safely generate fresh character interactions may reduce event fatigue while keeping narrative quality under editorial control.",
    possibleImpact:
      "Expect more investment in simulation design, narrative tooling, safety review, and telemetry-driven content pipelines. Outsourced writing and routine live-ops content may be repriced before core narrative roles are replaced.",
    trendAnalysis:
      "Momentum is strongest among multiplayer RPGs, extraction games, and social sandbox titles where systemic variety has measurable retention upside.",
    impactScore: 91,
    trendScore: 42,
    confidence: 86,
    sectors: ["AAA Studios", "Game AI", "Live Ops", "Narrative Design"],
    companies: ["Ubisoft", "NetEase", "Roblox", "Inworld"],
    publishedAt: "2026-05-26",
    sourceUrl: "https://www.nvidia.com/en-eu/geforce/news/nvidia-ace-autonomous-ai-companions-pubg-naraka-bladepoint/",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-002",
    slug: "generative-asset-pipelines-reach-indie-production",
    title: "Generative asset pipelines reach practical indie production workflows",
    source: "Tom's Hardware",
    sourceCredibility: "Trade press",
    category: "Gaming",
    tldr:
      "Small teams are using generative concept, texture, and prop workflows to increase iteration speed without expanding art headcount.",
    fullTldr:
      "Indie studios are standardizing AI-assisted preproduction for moodboards, prop ideation, tiling texture drafts, and market capsule variations. The winning pattern is human art direction plus fast generation, followed by manual cleanup for consistency and rights safety.",
    whyItMatters:
      "The biggest productivity gain is earlier in the funnel, where teams can explore more visual directions before committing scarce art resources.",
    possibleImpact:
      "More polished small-budget games may reach Steam, but discoverability pressure will intensify as asset quality rises across the market.",
    trendAnalysis:
      "Adoption is rising in cozy games, roguelites, horror prototypes, and mobile puzzle production where asset volume is high and art direction can be tightly templated.",
    impactScore: 84,
    trendScore: 36,
    confidence: 82,
    sectors: ["Indie Devs", "Game Art", "Steam", "Mobile Gaming"],
    companies: ["Scenario", "Unity Asset Store", "itch.io", "Steam"],
    publishedAt: "2026-05-25",
    sourceUrl: "https://www.tomshardware.com/video-games/pc-gaming/1-in-5-steam-games-released-in-2025-use-generative-ai-up-nearly-700-percent-year-on-year-7-818-titles-disclose-genai-asset-usage-7-percent-of-entire-steam-library",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-003",
    slug: "nvidia-gaming-ai-stack-targets-on-device-agents",
    title: "Nvidia gaming AI stack targets on-device agents and creator tools",
    source: "NVIDIA Blog",
    sourceCredibility: "Official source",
    category: "Hardware",
    tldr:
      "Nvidia is positioning consumer GPUs as local AI infrastructure for NPCs, modding tools, upscaling, and creator-side automation.",
    fullTldr:
      "Nvidia's gaming AI push is increasingly framed around local inference: speech, animation, player assistance, mod tooling, and RTX-enhanced performance features. The strategy could turn high-end GPUs into developer-facing AI deployment targets rather than only rendering hardware.",
    whyItMatters:
      "If local AI features become marketable requirements, hardware vendors can influence game design priorities and middleware selection.",
    possibleImpact:
      "Studios may build optional premium AI experiences for PC first, then compress them for console or cloud deployment once costs improve.",
    trendAnalysis:
      "The strongest signal is in hybrid graphics plus AI roadmaps, where performance, content generation, and assistant features are sold as one upgrade cycle.",
    impactScore: 88,
    trendScore: 29,
    confidence: 80,
    sectors: ["Hardware", "Game AI", "PC Gaming", "Creator Tools"],
    companies: ["Nvidia", "Microsoft", "Epic Games", "Lenovo"],
    publishedAt: "2026-05-24",
    sourceUrl: "https://blogs.nvidia.com/blog/ai-decoded-ace-microservices-digital-humans/",
    visual: {
      image: "/images/intelligence/hardware-ai.webp",
      alt: "Glowing GPU-like silicon die and dark circuit intelligence visual"
    }
  },
  {
    id: "le-004",
    slug: "xbox-strategy-leans-further-into-cross-platform-releases",
    title: "Xbox strategy leans further into cross-platform releases",
    source: "Xbox Wire",
    sourceCredibility: "Official source",
    category: "Platform",
    tldr:
      "Microsoft's publishing posture continues to prioritize reach, subscriptions, and franchise value over traditional hardware exclusivity.",
    fullTldr:
      "Xbox is increasingly acting like a platform-agnostic publisher with hardware, cloud, PC, and console storefront assets. The near-term signal for studios is that franchise monetization may matter more than exclusivity as a strategic default.",
    whyItMatters:
      "The console war framing is giving way to portfolio economics, where IP can move across devices while services keep the customer relationship.",
    possibleImpact:
      "Third-party partners may negotiate broader release windows, while first-party teams face pressure to make launches work across more ecosystems.",
    trendAnalysis:
      "The market is rewarding flexible distribution, especially for franchises with older audiences and strong live-service monetization.",
    impactScore: 86,
    trendScore: 24,
    confidence: 84,
    sectors: ["Console", "Subscription Gaming", "AAA Studios", "Cloud Gaming"],
    companies: ["Microsoft", "Xbox", "Activision Blizzard", "Bethesda"],
    publishedAt: "2026-05-23",
    sourceUrl: "https://news.xbox.com/en-us/2024/02/21/new-platforms-new-players-xbox-games-switch-playstation/",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-005",
    slug: "playstation-doubles-down-on-premium-single-player-and-pc",
    title: "PlayStation balances premium single-player identity with PC expansion",
    source: "PlayStation",
    sourceCredibility: "Official source",
    category: "Platform",
    tldr:
      "Sony is protecting blockbuster console launches while using PC ports to extend franchise tails and audience reach.",
    fullTldr:
      "PlayStation's strategy remains anchored in prestige first-party releases, but the PC window has become a durable second revenue beat. The model gives Sony stronger lifecycle economics without fully diluting console launch demand.",
    whyItMatters:
      "Premium single-player remains investable when publishers can monetize multiple release windows and use PC to revive social conversation.",
    possibleImpact:
      "Studios may design with PC scalability, ultrawide support, and mod-aware communities earlier in production.",
    trendAnalysis:
      "The trend is not day-one parity, but increasingly professionalized multi-window publishing for expensive narrative games.",
    impactScore: 78,
    trendScore: 18,
    confidence: 83,
    sectors: ["Console", "PC Gaming", "AAA Studios", "Publishing"],
    companies: ["Sony", "PlayStation Studios", "Nixxes", "Steam"],
    publishedAt: "2026-05-22",
    sourceUrl: "https://www.playstation.com/en-us/games/pc-games/",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-006",
    slug: "steam-wishlist-conversion-gap-widens-for-mid-tier-games",
    title: "Steam wishlist conversion gap widens for mid-tier launches",
    source: "GAMES.GG",
    sourceCredibility: "Market analysis",
    category: "Business",
    tldr:
      "Wishlist counts remain useful, but genre crowding and discount timing are making launch conversion less predictable.",
    fullTldr:
      "Steam's mid-market is seeing a sharper divide between high-velocity hits and games with respectable wishlists but soft launch conversion. Influencer timing, demo quality, price anchoring, and festival placement are becoming decisive.",
    whyItMatters:
      "Portfolio teams can no longer treat wishlist volume as a simple revenue proxy. Quality of demand matters more than top-line audience size.",
    possibleImpact:
      "Expect heavier investment in playable demos, creator outreach, regional pricing strategy, and launch-week analytics.",
    trendAnalysis:
      "The strongest performers are games with clear hooks, streamable moments, and communities activated before Steam festivals.",
    impactScore: 82,
    trendScore: 31,
    confidence: 88,
    sectors: ["Steam", "Indie Devs", "Publishing", "Marketing"],
    companies: ["Valve", "Devolver Digital", "Hooded Horse", "tinyBuild"],
    publishedAt: "2026-05-21",
    sourceUrl: "https://games.gg/news/what-the-data-says-about-wishlist-conversion/",
    visual: {
      image: "/images/intelligence/business-market.webp",
      alt: "Dark gaming market intelligence terminal with holographic charts"
    }
  },
  {
    id: "le-007",
    slug: "unreal-engine-tooling-pushes-virtual-production-and-ugc",
    title: "Unreal Engine tooling pushes deeper into virtual production and UGC",
    source: "Unreal Engine",
    sourceCredibility: "Official source",
    category: "Studio",
    tldr:
      "Epic's engine updates keep converging game development, creator economies, and real-time cinematic workflows.",
    fullTldr:
      "Unreal's roadmap is increasingly valuable outside traditional game teams, with creator commerce, UGC publishing, cinematic pipelines, and real-time production features reinforcing one ecosystem.",
    whyItMatters:
      "Engine choice is becoming a platform decision. Teams are evaluating not only rendering, but monetization, distribution, and creator extension paths.",
    possibleImpact:
      "Studios with UGC ambitions may prioritize Unreal talent and pipeline compatibility earlier, even for projects that are not graphically maximalist.",
    trendAnalysis:
      "The signal is strongest where branded worlds, Fortnite-adjacent creation, and transmedia production overlap.",
    impactScore: 80,
    trendScore: 27,
    confidence: 81,
    sectors: ["Game Engines", "UGC", "Virtual Production", "Creator Economy"],
    companies: ["Epic Games", "Fortnite", "LEGO", "Disney"],
    publishedAt: "2026-05-20",
    sourceUrl: "https://www.unrealengine.com/en-US/blog/unreal-editor-for-fortnite-is-now-available-in-beta",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-008",
    slug: "unity-focuses-on-runtime-performance-and-mobile-monetization",
    title: "Unity focuses on runtime performance and mobile monetization trust",
    source: "Unity",
    sourceCredibility: "Official source",
    category: "Studio",
    tldr:
      "Unity is emphasizing engine reliability, mobile performance, and monetization clarity to rebuild confidence among developers.",
    fullTldr:
      "Unity's current posture is less about flashy engine narratives and more about trust repair: predictable economics, stronger mobile runtime performance, and practical tooling for teams shipping across devices.",
    whyItMatters:
      "Unity remains central to mobile and indie production. Confidence in pricing and platform stability directly affects engine lock-in decisions.",
    possibleImpact:
      "Mobile studios may continue to stay with Unity when roadmap clarity improves, while new indie teams compare long-term business risk more carefully.",
    trendAnalysis:
      "The trend favors pragmatic engine updates over headline features, especially for teams with existing Unity pipelines.",
    impactScore: 74,
    trendScore: 16,
    confidence: 79,
    sectors: ["Mobile Gaming", "Game Engines", "Indie Devs", "Ad Monetization"],
    companies: ["Unity", "AppLovin", "ironSource", "Niantic"],
    publishedAt: "2026-05-19",
    sourceUrl: "https://unity.com/resources/gaming-report-2025",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-009",
    slug: "ai-voice-generation-for-games-faces-union-and-localization-pressure",
    title: "AI voice generation for games faces union and localization pressure",
    source: "SAG-AFTRA",
    sourceCredibility: "Official source",
    category: "AI",
    tldr:
      "AI voice tools are gaining traction for scratch tracks and localization, but consent, contracts, and performance quality remain gating issues.",
    fullTldr:
      "Studios are exploring AI voice for prototyping, localization expansion, NPC barks, and accessibility modes. The commercial path depends on performer consent, transparent compensation, and production workflows that preserve high-value human performances.",
    whyItMatters:
      "Voice is a reputational risk area. Missteps can create backlash from talent, players, and regulators faster than purely internal tooling.",
    possibleImpact:
      "Expect contract language, talent licensing systems, and audit trails to become core procurement requirements for voice vendors.",
    trendAnalysis:
      "Adoption is likely to grow first in placeholder production and narrow live-service content, then expand as rights systems mature.",
    impactScore: 89,
    trendScore: 34,
    confidence: 85,
    sectors: ["Game AI", "Localization", "Voice Acting", "Legal"],
    companies: ["SAG-AFTRA", "Replica Studios", "ElevenLabs", "Keywords Studios"],
    publishedAt: "2026-05-18",
    sourceUrl: "https://www.sagaftra.org/replica-studios-agreement-digital-voice-replicas",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-010",
    slug: "game-industry-layoffs-shift-toward-specialized-hiring",
    title: "Game industry layoffs shift hiring toward AI, backend, and monetization roles",
    source: "S&P Global",
    sourceCredibility: "Market analysis",
    category: "Business",
    tldr:
      "Broad layoffs continue to reshape studio org charts while demand persists for technical roles tied to efficiency and revenue systems.",
    fullTldr:
      "The labor market remains uneven: studios are reducing layers and canceling speculative projects, yet still hiring for backend infrastructure, technical art, economy design, AI tooling, and data science.",
    whyItMatters:
      "The hiring mix reveals where executives expect leverage: production efficiency, durable live services, and monetization systems.",
    possibleImpact:
      "Mid-career developers may need to position around pipeline impact, shipped systems, and cross-functional production value.",
    trendAnalysis:
      "Hiring recovery is likely to be role-specific before it becomes broad-based, with platform and tooling experience outperforming generalist demand.",
    impactScore: 87,
    trendScore: 22,
    confidence: 87,
    sectors: ["Studios", "Hiring", "Live Ops", "Game AI"],
    companies: ["Electronic Arts", "Riot Games", "Embracer Group", "Take-Two"],
    publishedAt: "2026-05-17",
    sourceUrl: "https://www.spglobal.com/market-intelligence/en/news-insights/research/video-game-industry-sheds-jobs-to-protect-margins",
    visual: {
      image: "/images/intelligence/business-market.webp",
      alt: "Dark gaming market intelligence terminal with holographic charts"
    }
  },
  {
    id: "le-011",
    slug: "esports-viewership-consolidates-around-fewer-premium-events",
    title: "Esports viewership consolidates around fewer premium global events",
    source: "Esports Insider",
    sourceCredibility: "Trade press",
    category: "Esports",
    tldr:
      "Top-tier tournaments are holding attention, while smaller leagues face sponsorship pressure and fragmented audiences.",
    fullTldr:
      "Esports engagement is increasingly concentrated around tentpole championships, creator-led co-streams, and games with resilient ranked ecosystems. Smaller circuits are struggling to justify production budgets without stronger sponsor conversion.",
    whyItMatters:
      "The business is maturing away from growth-at-all-costs toward event scarcity, creator distribution, and measurable sponsor outcomes.",
    possibleImpact:
      "Publishers may reduce league sprawl, invest in fewer flagship events, and bring creator co-streaming deeper into rights strategy.",
    trendAnalysis:
      "The healthiest ecosystems combine global events, accessible ranked play, and personalities who can carry audiences between tournaments.",
    impactScore: 76,
    trendScore: 19,
    confidence: 84,
    sectors: ["Esports", "Streaming", "Sponsorship", "Creator Economy"],
    companies: ["Riot Games", "Valve", "Twitch", "YouTube"],
    publishedAt: "2026-05-16",
    sourceUrl: "https://esportsinsider.com/esports-viewership-analysis-2025/",
    visual: {
      image: "/images/intelligence/esports-arena.webp",
      alt: "Futuristic esports arena with viewership heatmap and stage lighting"
    }
  },
  {
    id: "le-012",
    slug: "mobile-gaming-growth-returns-through-hybrid-casual-and-asia",
    title: "Mobile gaming growth returns through hybrid-casual systems and Asia expansion",
    source: "Mistplay",
    sourceCredibility: "Vendor report",
    category: "Gaming",
    tldr:
      "Mobile studios are finding growth in hybrid-casual loops, deeper progression, and region-specific live operations.",
    fullTldr:
      "The mobile market is recovering unevenly, with winners blending approachable onboarding, mid-core retention mechanics, and regionally tuned events. User acquisition remains expensive, so product-led retention is doing more of the work.",
    whyItMatters:
      "Mobile is no longer a simple scale game. The operational winners combine data, creative testing, economy design, and local content cadence.",
    possibleImpact:
      "Studios may merge casual and mid-core teams, prioritize first-party analytics, and invest in regional publishing expertise.",
    trendAnalysis:
      "Asia-led launches and hybrid monetization models show the clearest momentum, particularly in puzzle, simulation, and strategy categories.",
    impactScore: 79,
    trendScore: 28,
    confidence: 81,
    sectors: ["Mobile Gaming", "Live Ops", "Ad Monetization", "Publishing"],
    companies: ["Tencent", "NetEase", "Scopely", "AppLovin"],
    publishedAt: "2026-05-15",
    sourceUrl: "https://business.mistplay.com/resources/mobile-gaming-trends-2025",
    visual: {
      image: "/images/intelligence/mobile-gaming.webp",
      alt: "Mobile gaming live operations network with floating phones and data arcs"
    }
  },
  {
    id: "le-013",
    slug: "cloud-gaming-finds-new-role-as-instant-demo-layer",
    title: "Cloud gaming finds new role as an instant demo and trial layer",
    source: "Xbox Wire",
    sourceCredibility: "Official source",
    category: "Platform",
    tldr:
      "Cloud gaming is gaining practical value as a frictionless trial, marketing, and subscription discovery mechanism.",
    fullTldr:
      "Instead of replacing local hardware, cloud gaming is increasingly useful for instant demos, embedded store trials, and short-session discovery. The model fits publishers that want lower install friction and platforms that need subscription engagement.",
    whyItMatters:
      "Cloud's near-term commercial win may be conversion, not full-time play. That makes it a marketing and platform retention tool.",
    possibleImpact:
      "Expect more one-click trials, creator-linked demos, and store integrations where cloud sessions feed wishlist or subscription funnels.",
    trendAnalysis:
      "Momentum is strongest around sports, racing, family games, and back catalog discovery where latency tolerance is higher.",
    impactScore: 72,
    trendScore: 25,
    confidence: 76,
    sectors: ["Cloud Gaming", "Subscriptions", "Storefronts", "Marketing"],
    companies: ["Nvidia GeForce Now", "Xbox Cloud Gaming", "Amazon Luna", "Samsung"],
    publishedAt: "2026-05-14",
    sourceUrl: "https://news.xbox.com/en-us/2024/11/20/stream-your-own-game-xbox-cloud-gaming-beta/",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-014",
    slug: "ai-qa-agents-cut-regression-testing-time-for-large-games",
    title: "AI QA agents cut regression testing time for large open-world games",
    source: "modl.ai",
    sourceCredibility: "Vendor report",
    category: "AI",
    tldr:
      "Studios are using AI-driven test agents to navigate builds, detect regressions, and prioritize bug triage before human QA passes.",
    fullTldr:
      "AI QA systems are becoming practical for repetitive traversal, crash reproduction, UI flow checks, and anomaly detection. Human QA remains essential for feel, exploit discovery, and subjective quality, but agents can widen baseline coverage.",
    whyItMatters:
      "Testing cost is a major constraint for large games. Better automated coverage can shorten release risk cycles without reducing quality ambition.",
    possibleImpact:
      "Technical QA, telemetry design, and build pipeline integration become more strategic as AI agents move into nightly testing.",
    trendAnalysis:
      "Adoption is rising fastest for open-world traversal, multiplayer smoke tests, and platform certification preparation.",
    impactScore: 90,
    trendScore: 39,
    confidence: 83,
    sectors: ["QA", "AAA Studios", "Game AI", "DevOps"],
    companies: ["Keywords Studios", "Modl.ai", "Sony", "Electronic Arts"],
    publishedAt: "2026-05-13",
    sourceUrl: "https://modl.ai/state-of-games-qa-report",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-015",
    slug: "creator-led-games-turn-youtube-audiences-into-launch-engines",
    title: "Creator-led games turn YouTube audiences into launch engines",
    source: "Shacknews",
    sourceCredibility: "Trade press",
    category: "Business",
    tldr:
      "Games built around creator communities are outperforming traditional marketing benchmarks when the product loop matches the audience.",
    fullTldr:
      "Creator-led launches are proving that built-in attention can reduce paid marketing dependence, but only when the game design supports repeatable social content. Audience size alone is not enough; the game needs moments fans want to share.",
    whyItMatters:
      "Creators are becoming distribution partners, publishers, and IP engines. Studios that understand community-native design can access lower-cost demand.",
    possibleImpact:
      "More publishers will structure deals with creators earlier, while developers build around streamability, memes, and viewer participation.",
    trendAnalysis:
      "The best-performing projects turn creator identity into mechanics or community rituals rather than simple branding.",
    impactScore: 77,
    trendScore: 33,
    confidence: 78,
    sectors: ["Creator Economy", "Publishing", "YouTube", "Indie Devs"],
    companies: ["YouTube", "Roblox", "Mythical", "Offbrand Games"],
    publishedAt: "2026-05-12",
    sourceUrl: "https://www.shacknews.com/article/140160/ludwig-offbrand-games-rivals-2",
    visual: {
      image: "/images/intelligence/business-market.webp",
      alt: "Dark gaming market intelligence terminal with holographic charts"
    }
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
