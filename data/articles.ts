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

export const briefSnapshotDate = "2026-06-05";

export const articles: Article[] = [
  {
    id: "le-001",
    slug: "summer-game-fest-ai-disclosures-put-genai-under-spotlight",
    title: "Summer Game Fest AI disclosures put generative tools under the spotlight",
    source: "PC Gamer",
    sourceCredibility: "Trade press",
    category: "AI",
    tldr:
      "Showcase season is making AI disclosure a visible player-facing issue instead of a quiet production note.",
    fullTldr:
      "Summer Game Fest coverage is already framing generative AI disclosures as part of how players judge new games. The issue is less whether AI appears in a pipeline and more whether studios can explain where it was used, why it was used, and how much human art direction remains.",
    whyItMatters:
      "AI transparency is becoming part of marketing trust. Studios that cannot explain their AI usage may face backlash even when the underlying work is legally or technically acceptable.",
    possibleImpact:
      "Expect more AI disclosure language in trailers, Steam pages, press kits, and publisher QA before major showcases.",
    trendAnalysis:
      "Momentum is strongest around trailers, store-page art, localization, and small-team production workflows where audiences are actively looking for disclosure gaps.",
    impactScore: 90,
    trendScore: 41,
    confidence: 84,
    sectors: ["Game AI", "Marketing", "Steam", "Indie Devs"],
    companies: ["Summer Game Fest", "Steam", "Valve", "Independent Studios"],
    publishedAt: "2026-06-04",
    sourceUrl:
      "https://www.pcgamer.com/software/ai/summer-game-fest-is-here-so-get-ready-for-a-lot-of-ugh-that-game-with-the-cool-trailer-used-ai/",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-002",
    slug: "nvidia-ace-keeps-ai-companions-in-pc-gaming-conversation",
    title: "NVIDIA ACE keeps AI companions in the PC gaming conversation",
    source: "NVIDIA Newsroom",
    sourceCredibility: "Official source",
    category: "Hardware",
    tldr:
      "NVIDIA continues to position RTX PCs as local AI infrastructure for companions, NPC behavior, and creator-side tooling.",
    fullTldr:
      "NVIDIA's gaming AI message is increasingly about local inference, not only graphics. AI companions, speech, animation, and creator automation are being bundled into the broader RTX upgrade story as the company tries to make gaming PCs feel like AI deployment targets.",
    whyItMatters:
      "If AI features become part of the premium PC gaming pitch, hardware vendors can influence middleware decisions and game design priorities.",
    possibleImpact:
      "Studios may prototype PC-first AI features, then decide whether to compress, stream, or cut them for console and handheld builds.",
    trendAnalysis:
      "The highest-signal area is hybrid graphics plus AI, where DLSS-style performance, assistants, and content tools reinforce the same hardware cycle.",
    impactScore: 88,
    trendScore: 31,
    confidence: 82,
    sectors: ["Hardware", "Game AI", "PC Gaming", "Creator Tools"],
    companies: ["NVIDIA", "Microsoft", "Lenovo", "Inworld"],
    publishedAt: "2026-06-03",
    sourceUrl: "https://nvidianews.nvidia.com/_gallery/download_pdf/64741877ed6ae51e55fe851a/",
    visual: {
      image: "/images/intelligence/hardware-ai.webp",
      alt: "Glowing GPU-like silicon die and dark circuit intelligence visual"
    }
  },
  {
    id: "le-003",
    slug: "xbox-showcase-cross-platform-language-becomes-default",
    title: "Xbox showcase language makes cross-platform releases feel like the default",
    source: "Windows Central",
    sourceCredibility: "Trade press",
    category: "Platform",
    tldr:
      "Microsoft is expected to keep labeling where first-party games are headed, including PlayStation and other platforms.",
    fullTldr:
      "Xbox's showcase strategy is shifting from exclusivity ambiguity toward clearer multi-platform messaging. The practical read is that Microsoft is operating more like a scaled publisher with hardware, PC, cloud, and subscription assets rather than a console-only platform holder.",
    whyItMatters:
      "The distribution question is now central to Xbox economics. Franchise reach, recurring revenue, and release cadence are becoming more important than traditional exclusivity optics.",
    possibleImpact:
      "Studios under Microsoft may plan launches around more platforms earlier, while competitors use Xbox's openness to pressure their own release strategies.",
    trendAnalysis:
      "Momentum favors high-reach IP, especially franchises that can benefit from PC, PlayStation, cloud, and Game Pass discovery at different points in the lifecycle.",
    impactScore: 87,
    trendScore: 28,
    confidence: 85,
    sectors: ["Console", "Subscription Gaming", "AAA Studios", "Cloud Gaming"],
    companies: ["Microsoft", "Xbox", "Activision Blizzard", "Bethesda"],
    publishedAt: "2026-05-29",
    sourceUrl:
      "https://www.windowscentral.com/gaming/xbox/xbox-games-chief-confirms-microsoft-will-show-when-its-titles-are-coming-to-ps5-and-other-platforms-at-the-xbox-games-showcase",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-004",
    slug: "playstation-state-of-play-keeps-premium-pipeline-visible",
    title: "PlayStation State of Play keeps premium pipeline visibility in focus",
    source: "GamesRadar+",
    sourceCredibility: "Trade press",
    category: "Platform",
    tldr:
      "Sony's June showcase cadence keeps first-party, partner, and PC-adjacent expectations concentrated in short event windows.",
    fullTldr:
      "PlayStation's June State of Play coverage reinforces how much platform perception now depends on tightly packaged showcase moments. For Sony, the signal is not only what ships soon, but how convincingly the company can communicate premium releases, partner titles, and lifecycle plans.",
    whyItMatters:
      "Showcase confidence affects platform narrative, creator coverage, and investor expectations before the actual release calendar lands.",
    possibleImpact:
      "Studios may treat showcase readiness as a production milestone, with trailers, demos, PC messaging, and wishlist paths coordinated earlier.",
    trendAnalysis:
      "The strongest signal is in event-driven publishing, where platform holders concentrate attention into fewer, higher-pressure media beats.",
    impactScore: 79,
    trendScore: 23,
    confidence: 82,
    sectors: ["Console", "PC Gaming", "AAA Studios", "Publishing"],
    companies: ["Sony", "PlayStation Studios", "Bungie", "Nixxes"],
    publishedAt: "2026-06-02",
    sourceUrl:
      "https://www.gamesradar.com/games/events-conferences/playstation-state-of-play-stream-june-2026-how-to-watch/",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-005",
    slug: "steam-next-fest-turns-demos-into-indie-discovery-battleground",
    title: "Steam Next Fest turns demos into the indie discovery battleground",
    source: "Steam",
    sourceCredibility: "Official source",
    category: "Business",
    tldr:
      "The June demo cycle gives indie teams another high-leverage window for wishlist quality, creator coverage, and launch conversion.",
    fullTldr:
      "Steam Next Fest remains one of the few discovery windows where small teams can generate measurable demand without a full paid marketing push. The key signal is shifting from raw wishlist volume to demo quality, creator pickup, and whether attention survives after the event.",
    whyItMatters:
      "For indie publishers, demos are no longer optional polish. They are the storefront's strongest live test of product-market fit.",
    possibleImpact:
      "Expect more teams to budget for public demo milestones, festival analytics, and post-demo community follow-up before launch dates are locked.",
    trendAnalysis:
      "Momentum favors games with quick hooks, replayable demos, and streamable moments that can travel beyond Steam's event surface.",
    impactScore: 83,
    trendScore: 35,
    confidence: 88,
    sectors: ["Steam", "Indie Devs", "Publishing", "Marketing"],
    companies: ["Valve", "Independent Studios", "Hooded Horse", "Devolver Digital"],
    publishedAt: "2026-06-05",
    sourceUrl: "https://store.steampowered.com/sale/nextfest",
    visual: {
      image: "/images/intelligence/business-market.webp",
      alt: "Dark gaming market intelligence terminal with holographic charts"
    }
  },
  {
    id: "le-006",
    slug: "unity-2026-report-points-to-ai-and-mobile-monetization-pressure",
    title: "Unity 2026 report points to AI workflows and mobile monetization pressure",
    source: "Unity",
    sourceCredibility: "Official source",
    category: "Studio",
    tldr:
      "Unity's latest gaming report frames AI, mobile production, and monetization efficiency as core developer concerns.",
    fullTldr:
      "Unity's 2026 gaming report positions practical AI usage, mobile performance, and production efficiency as central industry themes. The report matters because Unity is still heavily exposed to mobile, indie, and cross-platform teams that need predictable tooling more than hype.",
    whyItMatters:
      "Unity's developer trust and mobile relevance remain important market reads, especially for studios balancing engine choice with ad-tech and live-ops requirements.",
    possibleImpact:
      "Mobile and indie teams may continue demanding clearer pricing, stronger runtime performance, and AI tools that fit existing pipelines.",
    trendAnalysis:
      "The trend favors pragmatic production support: fewer flashy demos, more workflow, monetization, and retention tooling.",
    impactScore: 76,
    trendScore: 22,
    confidence: 80,
    sectors: ["Mobile Gaming", "Game Engines", "Indie Devs", "Ad Monetization"],
    companies: ["Unity", "AppLovin", "ironSource", "Niantic"],
    publishedAt: "2026-06-03",
    sourceUrl: "https://unity.com/resources/gaming-report",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-007",
    slug: "unreal-and-uefn-convergence-strengthens-engine-platform-thesis",
    title: "Unreal and UEFN convergence strengthens the engine-as-platform thesis",
    source: "GameBusiness.jp",
    sourceCredibility: "Trade press",
    category: "Studio",
    tldr:
      "Epic's engine direction keeps blending game development, creator economies, and Fortnite-adjacent publishing.",
    fullTldr:
      "Coverage around Epic's long-term Unreal and UEFN direction keeps reinforcing a larger shift: engine choice is also becoming a distribution, creator, and monetization decision. Unreal is not just rendering tech; it is increasingly tied to how content can become playable, social, and commercial.",
    whyItMatters:
      "Studios with UGC or transmedia ambitions may choose engines based on ecosystem leverage, not just graphics capability.",
    possibleImpact:
      "Expect Unreal talent, UEFN familiarity, creator payouts, and branded-world production to become more strategically linked.",
    trendAnalysis:
      "The strongest signal is where Fortnite creation, enterprise real-time workflows, and game studio pipelines overlap.",
    impactScore: 81,
    trendScore: 29,
    confidence: 78,
    sectors: ["Game Engines", "UGC", "Virtual Production", "Creator Economy"],
    companies: ["Epic Games", "Unreal Engine", "Fortnite", "Disney"],
    publishedAt: "2026-05-25",
    sourceUrl: "https://www.gamebusiness.jp/article/2026/05/25/27035.html",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-008",
    slug: "ai-voice-debate-centers-on-studio-responsibility",
    title: "AI voice debate centers on studio responsibility and consent",
    source: "PC Gamer",
    sourceCredibility: "Trade press",
    category: "AI",
    tldr:
      "Voice performers are pushing the industry to treat AI use as a studio governance issue, not only a vendor capability.",
    fullTldr:
      "Recent AI voice coverage highlights a sharper accountability argument: studios choose how voice data, synthetic replicas, and vendor tools are used. The production value is real for scratch tracks and localization, but the reputational risk is concentrated around consent and compensation.",
    whyItMatters:
      "Voice is one of the highest-risk AI categories because players recognize performers and talent communities can organize quickly.",
    possibleImpact:
      "Expect more contract language, consent logs, audit trails, and procurement review before AI voice vendors are approved for shipped work.",
    trendAnalysis:
      "Adoption is likely to grow first in prototyping, accessibility, and low-stakes barks while high-profile roles remain tightly controlled.",
    impactScore: 89,
    trendScore: 36,
    confidence: 86,
    sectors: ["Game AI", "Localization", "Voice Acting", "Legal"],
    companies: ["SAG-AFTRA", "Replica Studios", "ElevenLabs", "Keywords Studios"],
    publishedAt: "2026-06-01",
    sourceUrl:
      "https://www.pcgamer.com/gaming-industry/mass-effect-and-metal-gear-actor-jennifer-hale-calls-on-studios-to-take-responsibility-for-their-ai-use-aint-nobody-making-you-do-it/",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-009",
    slug: "ai-linked-layoffs-make-game-hiring-more-specialized",
    title: "AI-linked layoffs make game hiring more specialized",
    source: "TechSpot",
    sourceCredibility: "Trade press",
    category: "Business",
    tldr:
      "Broader tech layoffs are increasing pressure on studios to hire around pipeline leverage, data, backend, and AI-adjacent production roles.",
    fullTldr:
      "The 2026 layoff tracker conversation is bigger than games, but the read for game teams is direct: companies are cutting broad headcount while protecting roles tied to automation, infrastructure, analytics, and revenue systems. Hiring is not disappearing; it is becoming more targeted.",
    whyItMatters:
      "The hiring mix reveals where executives expect leverage: production efficiency, durable live services, and monetization systems.",
    possibleImpact:
      "Developers may need to frame portfolios around shipped systems, tooling impact, and cross-functional production value instead of general craft alone.",
    trendAnalysis:
      "Recovery is likely role-specific before it becomes broad-based, with technical production, backend, economy, and AI workflow experience outperforming generalist demand.",
    impactScore: 86,
    trendScore: 25,
    confidence: 83,
    sectors: ["Studios", "Hiring", "Live Ops", "Game AI"],
    companies: ["Electronic Arts", "Riot Games", "Embracer Group", "Take-Two"],
    publishedAt: "2026-06-02",
    sourceUrl:
      "https://www.techspot.com/news/112493-tech-layoffs-pass-100000-2026-tracker-points-ai.html",
    visual: {
      image: "/images/intelligence/business-market.webp",
      alt: "Dark gaming market intelligence terminal with holographic charts"
    }
  },
  {
    id: "le-010",
    slug: "cloud-gaming-on-tvs-revives-no-console-distribution-thesis",
    title: "Cloud gaming on TVs revives the no-console distribution thesis",
    source: "TechRadar",
    sourceCredibility: "Trade press",
    category: "Platform",
    tldr:
      "Cloud gaming is finding a more practical role through TVs, trials, and access layers rather than full hardware replacement.",
    fullTldr:
      "The latest cloud gaming discussion is less about replacing every console and more about reducing friction. TV apps, instant access, and game trials can make cloud useful as a discovery and subscription layer even when dedicated hardware remains the premium experience.",
    whyItMatters:
      "Cloud's near-term commercial value may be conversion and access, not full-time play. That makes it relevant to platform strategy and marketing funnels.",
    possibleImpact:
      "Expect more one-click trials, TV partnerships, cloud-first demos, and subscription discovery paths tied to major storefronts.",
    trendAnalysis:
      "Momentum is strongest for back catalog discovery, family games, sports, racing, and demo use cases where latency tolerance is higher.",
    impactScore: 73,
    trendScore: 27,
    confidence: 77,
    sectors: ["Cloud Gaming", "Subscriptions", "Storefronts", "Marketing"],
    companies: ["Xbox Cloud Gaming", "NVIDIA GeForce Now", "Amazon Luna", "Samsung"],
    publishedAt: "2026-06-04",
    sourceUrl:
      "https://www.techradar.com/televisions/cloud-gaming-on-tvs-suddenly-looks-like-the-future-2026-is-the-year-the-no-console-world-becomes-realistic-thanks-developments-and-hardware-shortages",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-011",
    slug: "playstation-state-of-play-viewership-shows-showcase-economics",
    title: "State of Play viewership shows the economics of showcase attention",
    source: "Streams Charts",
    sourceCredibility: "Market analysis",
    category: "Esports",
    tldr:
      "Record live viewership for a platform showcase shows how concentrated event attention can shape creator and publisher strategy.",
    fullTldr:
      "Streams Charts reporting on State of Play viewership shows that showcase events can now behave like competitive attention markets. Even when the event is not esports, it uses the same creator, co-stream, and live audience mechanics that shape gaming media economics.",
    whyItMatters:
      "Platform events are becoming media products. Live viewership, co-streaming, and creator reaction cycles can materially affect game awareness.",
    possibleImpact:
      "Publishers may coordinate trailers, demos, creator access, and wishlist pushes more tightly around showcase windows.",
    trendAnalysis:
      "Momentum favors fewer, higher-impact live events with creator amplification rather than a constant drip of isolated announcements.",
    impactScore: 78,
    trendScore: 32,
    confidence: 81,
    sectors: ["Streaming", "Creator Economy", "Marketing", "Platform"],
    companies: ["Sony", "YouTube", "Twitch", "Streams Charts"],
    publishedAt: "2026-06-03",
    sourceUrl: "https://streamscharts.com/news/state-play-hits-record-breaking-3-million-live-viewers",
    visual: {
      image: "/images/intelligence/esports-arena.webp",
      alt: "Futuristic esports arena with viewership heatmap and stage lighting"
    }
  },
  {
    id: "le-012",
    slug: "gdc-2026-mobile-trends-emphasize-d2c-and-co-development",
    title: "GDC mobile trends emphasize D2C, co-development, and live-ops efficiency",
    source: "PocketGamer.biz",
    sourceCredibility: "Trade press",
    category: "Gaming",
    tldr:
      "Mobile teams are balancing direct-to-consumer ambitions, co-development, and tighter live-ops economics.",
    fullTldr:
      "GDC trend coverage points to a mobile market that is still active but more operationally demanding. D2C monetization, co-development, and production discipline are becoming important as teams look for growth beyond classic user acquisition loops.",
    whyItMatters:
      "Mobile gaming is still one of the industry's biggest revenue centers, but growth now requires sharper retention, monetization, and publishing execution.",
    possibleImpact:
      "Studios may invest more in first-party communities, regional publishing, cross-platform support, and live-ops tooling that reduces UA dependence.",
    trendAnalysis:
      "The strongest signal is in teams that combine casual accessibility with deeper retention systems and better owned customer relationships.",
    impactScore: 80,
    trendScore: 30,
    confidence: 82,
    sectors: ["Mobile Gaming", "Live Ops", "Ad Monetization", "Publishing"],
    companies: ["Tencent", "NetEase", "Scopely", "AppLovin"],
    publishedAt: "2026-05-31",
    sourceUrl:
      "https://www.pocketgamer.biz/d2c-co-development-and-volume-over-viability-gdc-2026-trends-revealed/",
    visual: {
      image: "/images/intelligence/mobile-gaming.webp",
      alt: "Mobile gaming live operations network with floating phones and data arcs"
    }
  },
  {
    id: "le-013",
    slug: "youtube-creator-partnerships-deepen-launch-distribution-options",
    title: "YouTube creator partnerships deepen launch distribution options",
    source: "YouTube Blog",
    sourceCredibility: "Official source",
    category: "Business",
    tldr:
      "YouTube's creator partnership push reinforces how creator ecosystems are becoming go-to-market infrastructure for games.",
    fullTldr:
      "YouTube's NewFronts creator partnership messaging is not game-specific, but the implications for games are clear: creators are increasingly treated as distribution, brand, and community partners. For game launches, that means audience-native marketing can be built earlier into campaign planning.",
    whyItMatters:
      "Creators are becoming distribution partners, publishers, and IP amplifiers. Games with streamable systems can use that infrastructure more efficiently than traditional paid media alone.",
    possibleImpact:
      "Expect more publisher-creator deals, launch campaigns built around creator formats, and game designs that support repeatable social content.",
    trendAnalysis:
      "The best-performing projects turn creator identity into mechanics, rituals, or community participation rather than simple logo placement.",
    impactScore: 77,
    trendScore: 34,
    confidence: 78,
    sectors: ["Creator Economy", "Publishing", "YouTube", "Marketing"],
    companies: ["YouTube", "Google", "Roblox", "Offbrand Games"],
    publishedAt: "2026-05-29",
    sourceUrl: "https://blog.youtube/news-and-events/youtube-creator-partnerships-newfronts-2026/",
    visual: {
      image: "/images/intelligence/business-market.webp",
      alt: "Dark gaming market intelligence terminal with holographic charts"
    }
  },
  {
    id: "le-014",
    slug: "ai-qa-agents-remain-high-leverage-production-tooling-signal",
    title: "AI QA agents remain a high-leverage production tooling signal",
    source: "modl.ai",
    sourceCredibility: "Vendor report",
    category: "AI",
    tldr:
      "AI-driven QA remains one of the clearest practical use cases for studios because it targets repetitive regression risk.",
    fullTldr:
      "AI QA systems are becoming useful for repetitive traversal, smoke tests, crash reproduction, and anomaly detection. Human QA remains essential for feel, exploits, and subjective quality, but agents can widen baseline coverage and reduce late-cycle uncertainty.",
    whyItMatters:
      "Testing cost is a major constraint for large games. Better automated coverage can shorten release risk cycles without reducing quality ambition.",
    possibleImpact:
      "Technical QA, telemetry design, and build pipeline integration should become more strategic as AI agents move into nightly testing.",
    trendAnalysis:
      "Adoption is strongest for open-world traversal, multiplayer smoke tests, certification prep, and build verification where repeatability matters.",
    impactScore: 91,
    trendScore: 38,
    confidence: 83,
    sectors: ["QA", "AAA Studios", "Game AI", "DevOps"],
    companies: ["Keywords Studios", "modl.ai", "Sony", "Electronic Arts"],
    publishedAt: "2026-06-01",
    sourceUrl: "https://modl.ai/state-of-games-qa-report",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-015",
    slug: "future-games-show-and-showcase-week-concentrate-discovery",
    title: "Future Games Show and showcase week concentrate discovery pressure",
    source: "GamesRadar+",
    sourceCredibility: "Trade press",
    category: "Business",
    tldr:
      "June showcase week is concentrating game discovery into a few crowded attention windows across PC, console, and creator channels.",
    fullTldr:
      "Future Games Show and adjacent June events create one of the year's densest discovery weeks. For studios, the opportunity is high, but the competition for attention is brutal: trailers, demos, wishlist calls, creator coverage, and platform messaging all collide.",
    whyItMatters:
      "Discovery is increasingly event-shaped. A strong showing can compress months of awareness building into one week, while a weak one can disappear instantly.",
    possibleImpact:
      "Studios may put more production effort into trailer clarity, demo readiness, creator kits, and post-event conversion flows.",
    trendAnalysis:
      "Momentum favors teams that pair a clear hook with immediate action: demo, wishlist, playtest, creator access, or release date.",
    impactScore: 82,
    trendScore: 37,
    confidence: 80,
    sectors: ["Publishing", "Marketing", "Indie Devs", "Creator Economy"],
    companies: ["GamesRadar+", "Future Games Show", "Steam", "YouTube"],
    publishedAt: "2026-06-05",
    sourceUrl: "https://www.gamesradar.com/future-games-show/",
    visual: {
      image: "/images/intelligence/business-market.webp",
      alt: "Dark gaming market intelligence terminal with holographic charts"
    }
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
