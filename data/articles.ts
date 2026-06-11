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

export const briefSnapshotDate = "2026-06-09";

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
    publishedAt: "2026-06-03",
    sourceUrl:
      "https://www.pcgamer.com/software/ai/summer-game-fest-is-here-so-get-ready-for-a-lot-of-ugh-that-game-with-the-cool-trailer-used-ai/",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-002",
    slug: "rtx-spark-pushes-ai-native-pc-gaming-back-into-hardware-strategy",
    title: "RTX Spark pushes AI-native PCs back into gaming hardware strategy",
    source: "NVIDIA Newsroom",
    sourceCredibility: "Official source",
    category: "Hardware",
    tldr:
      "NVIDIA and Microsoft are reframing premium Windows gaming PCs as local AI, creator, and gaming devices at the same time.",
    fullTldr:
      "NVIDIA's RTX Spark announcement extends the gaming AI story beyond DLSS and companions into full-stack personal computing. By tying Windows agents, creator apps, and game performance into one hardware narrative, NVIDIA is trying to make the next PC upgrade cycle feel strategic for both players and developers.",
    whyItMatters:
      "When hardware vendors position gaming PCs as local AI endpoints, they influence tool choices, performance targets, and which features studios prototype first.",
    possibleImpact:
      "Studios may keep building PC-first AI-assisted features, then decide which ones can scale down to console, cloud, or handheld targets later.",
    trendAnalysis:
      "The strongest pattern is convergence: graphics, local inference, creator tooling, and agent workflows are being sold as one premium stack instead of separate upgrades.",
    impactScore: 89,
    trendScore: 34,
    confidence: 86,
    sectors: ["Hardware", "Game AI", "PC Gaming", "Creator Tools"],
    companies: ["NVIDIA", "Microsoft", "Xbox", "Adobe"],
    publishedAt: "2026-05-31",
    sourceUrl:
      "https://nvidianews.nvidia.com/news/nvidia-microsoft-windows-pcs-agents-rtx-spark",
    visual: {
      image: "/images/intelligence/hardware-ai.webp",
      alt: "Glowing GPU-like silicon die and dark circuit intelligence visual"
    }
  },
  {
    id: "le-003",
    slug: "xbox-showcase-puts-exclusives-and-multiplatform-publishing-on-the-same-board",
    title: "Xbox showcase puts exclusives and multiplatform publishing on the same board",
    source: "Xbox Wire",
    sourceCredibility: "Official source",
    category: "Platform",
    tldr:
      "Microsoft used its June showcase to signal that Xbox can still push exclusives while continuing broader publishing across platforms.",
    fullTldr:
      "The Xbox Games Showcase recap leaned into two ideas at once: celebratory hardware and a broader software footprint. Microsoft confirmed that some titles stay exclusive while games already announced as multiplatform remain on that path, reinforcing Xbox's identity as both a platform and a scaled publisher.",
    whyItMatters:
      "Xbox strategy now depends on a mixed model. Hardware prestige, subscription retention, and software reach all matter more than a simple exclusive versus non-exclusive split.",
    possibleImpact:
      "Studios under Microsoft may segment franchises more deliberately, keeping some titles platform-defining while using others to maximize reach and monetization.",
    trendAnalysis:
      "The durable trend is portfolio management over platform purity. Xbox looks increasingly willing to use each franchise differently depending on audience and economics.",
    impactScore: 88,
    trendScore: 33,
    confidence: 88,
    sectors: ["Console", "Subscription Gaming", "AAA Studios", "Cloud Gaming"],
    companies: ["Microsoft", "Xbox", "Bethesda", "Activision"],
    publishedAt: "2026-06-07",
    sourceUrl:
      "https://news.xbox.com/en-us/2026/06/07/xbox-games-showcase-2026-recap-everything-announced/",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-004",
    slug: "playstation-state-of-play-keeps-premium-pipeline-visibility-high",
    title: "PlayStation State of Play keeps premium pipeline visibility high",
    source: "PlayStation.Blog",
    sourceCredibility: "Official source",
    category: "Platform",
    tldr:
      "Sony used a 60-minute State of Play to bunch together first-party confidence, partner reveals, and 2026 to 2027 pipeline management.",
    fullTldr:
      "The June 2026 State of Play bundled major franchise beats, release-date certainty, and sequel reveals into one dense media event. For Sony, the important signal is less any single title and more the continued use of showcase packaging to keep premium pipeline confidence high ahead of release season.",
    whyItMatters:
      "Premium console momentum is increasingly narrative-driven between launches. A strong showcase shapes creator coverage, partner confidence, and consumer attention before games actually ship.",
    possibleImpact:
      "Studios may keep treating showcase readiness as a milestone equal to internal alpha or beta beats, with trailers, demos, and store messaging aligned earlier.",
    trendAnalysis:
      "The strongest pattern remains event-driven publishing, where a few tentpole showcases now carry more attention than months of fragmented updates.",
    impactScore: 84,
    trendScore: 31,
    confidence: 89,
    sectors: ["Console", "PC Gaming", "AAA Studios", "Publishing"],
    companies: ["Sony", "PlayStation Studios", "Insomniac Games", "Santa Monica Studio"],
    publishedAt: "2026-06-02",
    sourceUrl:
      "https://blog.playstation.com/2026/06/02/state-of-play-june-2026-all-announcements-trailers/",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-005",
    slug: "nintendo-direct-keeps-switch-2-momentum-in-the-middle-of-showcase-week",
    title: "Nintendo Direct keeps Switch 2 momentum alive in the middle of showcase week",
    source: "Nintendo",
    sourceCredibility: "Official source",
    category: "Hardware",
    tldr:
      "Nintendo inserted a June Direct and Treehouse follow-up into showcase week to keep Switch 2 attention from drifting to rivals.",
    fullTldr:
      "With a Nintendo Direct scheduled for June 9 alongside Treehouse coverage, Nintendo is using a familiar digital-event playbook to sustain the Switch 2 conversation while Sony, Xbox, and Summer Game Fest dominate the same week. The strategic point is cadence control as much as software news.",
    whyItMatters:
      "Nintendo's release calendar and hardware cycle work best when the company owns its own attention windows instead of reacting to third-party events.",
    possibleImpact:
      "Expect more stacked Nintendo-led messaging around hardware bundles, exclusive software, and creator-friendly follow-up content through Treehouse.",
    trendAnalysis:
      "The broader trend is that every platform holder now treats livestream cadence as part of hardware and software lifecycle management.",
    impactScore: 80,
    trendScore: 29,
    confidence: 87,
    sectors: ["Hardware", "Console", "First-Party IP", "Publishing"],
    companies: ["Nintendo", "Nintendo Switch 2", "Treehouse", "First-Party Studios"],
    publishedAt: "2026-06-09",
    sourceUrl: "https://www.nintendo.com/en-ca/nintendo-direct/6-9-2026/",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-006",
    slug: "summer-game-fest-record-viewership-confirms-showcase-week-as-a-media-event",
    title: "Summer Game Fest record viewership confirms showcase week as a media event",
    source: "Streams Charts",
    sourceCredibility: "Market analysis",
    category: "Esports",
    tldr:
      "Summer Game Fest drew a record 3.8 million peak viewers, reinforcing showcase week as one of gaming's biggest live audience moments.",
    fullTldr:
      "Streams Charts reported that Summer Game Fest 2026 reached a record 3.8 million peak viewers with more than 6,200 channels covering the event. That scale matters because it shows reveal season now behaves like a creator-amplified media property, not just a press-calendar convention.",
    whyItMatters:
      "Live audience concentration changes launch economics. A reveal that lands during these windows can compress awareness building, creator pickup, and store intent into a single weekend.",
    possibleImpact:
      "Publishers may keep funneling bigger announcements into a few large livestream windows while smaller teams optimize for co-stream and creator handoff.",
    trendAnalysis:
      "The strongest trend is attention centralization around multiplatform live events that combine publisher reveals with creator redistribution.",
    impactScore: 86,
    trendScore: 39,
    confidence: 84,
    sectors: ["Streaming", "Marketing", "Creator Economy", "Publishing"],
    companies: ["Summer Game Fest", "The Game Awards", "YouTube", "Twitch"],
    publishedAt: "2026-06-08",
    sourceUrl:
      "https://streamscharts.com/news/summer-game-fest-2026-draws-record-breaking-38m-peak-viewers",
    visual: {
      image: "/images/intelligence/esports-arena.webp",
      alt: "Futuristic esports arena with viewership heatmap and stage lighting"
    }
  },
  {
    id: "le-007",
    slug: "steam-next-fest-keeps-demo-first-discovery-central-to-indie-go-to-market",
    title: "Steam Next Fest keeps demo-first discovery central to indie go-to-market",
    source: "Steam",
    sourceCredibility: "Official source",
    category: "Business",
    tldr:
      "Valve's June Next Fest window remains one of the clearest signals that demos are now core launch infrastructure for indies.",
    fullTldr:
      "Steam Next Fest's June 15 to June 22 event page reinforces how much PC discovery now depends on a public playable beat, not only trailers and wishlists. Demos have become a storefront test, a creator asset, and an early conversion funnel all at once.",
    whyItMatters:
      "For smaller teams, a successful demo week can do the work that paid media used to do, especially when streamers and short-form creators can show the game directly.",
    possibleImpact:
      "Expect more studios to build schedules around public demo readiness, post-festival retention plans, and creator-safe previews before launch dates lock.",
    trendAnalysis:
      "Momentum favors concise hooks, strong opening loops, and demos that produce repeatable streaming moments without heavy onboarding friction.",
    impactScore: 83,
    trendScore: 36,
    confidence: 85,
    sectors: ["Steam", "Indie Devs", "Publishing", "Marketing"],
    companies: ["Valve", "Steam", "Independent Studios", "PC Publishers"],
    publishedAt: "2026-06-15",
    sourceUrl: "https://store.steampowered.com/sale/nextfest",
    visual: {
      image: "/images/intelligence/business-market.webp",
      alt: "Dark gaming market intelligence terminal with holographic charts"
    }
  },
  {
    id: "le-008",
    slug: "apple-puts-agentic-porting-tools-into-its-2026-games-pitch",
    title: "Apple puts agentic porting tools into its 2026 games pitch",
    source: "Apple Developer",
    sourceCredibility: "Official source",
    category: "Studio",
    tldr:
      "Apple's WWDC26 games guide pairs Game Porting Toolkit 4 with agentic coding workflows to make Apple platform support cheaper to attempt.",
    fullTldr:
      "The WWDC26 games guide frames Apple gaming support around practical workflow reduction. Game Porting Toolkit 4 and companion agentic resources are being positioned as tools that cut porting cost and iteration time, which matters more to studios than broad platform rhetoric alone.",
    whyItMatters:
      "Mac, iPhone, and iPad become more relevant to games only if porting cost keeps dropping. Apple's latest message is explicitly about reducing that friction.",
    possibleImpact:
      "Mid-size studios may test Apple platform ports earlier, especially for catalog titles and cross-platform releases where incremental revenue can justify the effort.",
    trendAnalysis:
      "The trend favors tooling-led platform expansion: fewer bespoke ports, more reusable workflows supported by translation layers and AI-assisted engineering.",
    impactScore: 78,
    trendScore: 33,
    confidence: 86,
    sectors: ["Game Engines", "Platform Tools", "PC Ports", "Mobile Gaming"],
    companies: ["Apple", "Metal", "Xcode", "Third-Party Studios"],
    publishedAt: "2026-06-09",
    sourceUrl: "https://developer.apple.com/wwdc26/guides/games/",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-009",
    slug: "unity-june-release-keeps-engine-signal-focused-on-stability-and-iteration",
    title: "Unity's June release keeps the engine signal focused on stability and iteration",
    source: "Unity",
    sourceCredibility: "Official source",
    category: "Studio",
    tldr:
      "Unity's June 3 editor release is a practical reminder that engine trust is still being rebuilt through predictable fixes, not splashy promises.",
    fullTldr:
      "Unity 6000.4.10f1 is a classic maintenance-heavy release, but that is precisely the point. After a long period where developer trust mattered as much as feature breadth, each stable release functions as evidence that Unity understands the market's demand for dependable iteration speed and fewer production surprises.",
    whyItMatters:
      "Engine decisions for mobile, indie, and mid-market teams are often about risk control. Stability improvements can be strategically important even when they are not flashy.",
    possibleImpact:
      "Studios already on Unity may delay switching costs and instead watch whether regular update quality continues to improve through the rest of 2026.",
    trendAnalysis:
      "The strongest pattern is a return to operational credibility: fix velocity, platform support, and production safety are carrying more weight than headline demos.",
    impactScore: 74,
    trendScore: 26,
    confidence: 88,
    sectors: ["Game Engines", "Indie Devs", "Mobile Gaming", "Production"],
    companies: ["Unity", "Mobile Studios", "Indie Studios", "Live Ops Teams"],
    publishedAt: "2026-06-03",
    sourceUrl: "https://unity.com/releases/editor/whats-new/6000.4.10f1",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-010",
    slug: "roblox-keeps-pushing-older-audience-and-novel-game-strategy",
    title: "Roblox keeps pushing an older-audience and novel-games strategy",
    source: "Roblox IR",
    sourceCredibility: "Official source",
    category: "Studio",
    tldr:
      "Roblox is explicitly funding more ambitious games as it tries to age up its audience and increase creator-side commercial quality.",
    fullTldr:
      "Roblox's Incubator and Jumpstart programs show the platform is no longer satisfied with lightweight engagement loops alone. The company wants more polished role-playing, strategy, and shooter experiences that can attract older users and raise monetization quality across the ecosystem.",
    whyItMatters:
      "Creator-led games are maturing from youth-heavy UGC into a broader commercial category. Roblox is one of the clearest public indicators of that shift.",
    possibleImpact:
      "Expect more venture, publisher, and branded-world attention on teams that can build higher-fidelity experiences inside creator-led ecosystems.",
    trendAnalysis:
      "The broader trend is platform maturation: creator ecosystems increasingly want breakout games that look closer to standalone products than quick social prototypes.",
    impactScore: 81,
    trendScore: 30,
    confidence: 84,
    sectors: ["UGC", "Creator Economy", "Live Ops", "Youth-to-Adult Platforms"],
    companies: ["Roblox", "Roblox Developers", "UGC Studios", "Brand Partners"],
    publishedAt: "2026-03-09",
    sourceUrl:
      "https://ir.roblox.com/news/news-details/2026/Roblox-Unveils-New-Programs-to-Power-the-Next-Generation-of-Games/default.aspx",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-011",
    slug: "uefn-bootcamp-shows-epic-is-building-a-more-formal-creator-talent-pipeline",
    title: "UEFN bootcamp shows Epic is building a more formal creator talent pipeline",
    source: "Unreal Engine",
    sourceCredibility: "Official source",
    category: "Studio",
    tldr:
      "Epic is treating UEFN skills as a formal pipeline problem, not just a community hobby, by opening a structured student bootcamp.",
    fullTldr:
      "The UEFN Student Bootcamp announcement frames creator education around shipping a live Fortnite island with mentorship and practical iteration time. That matters because Epic is trying to turn creator-led development into a repeatable skills pipeline with clearer on-ramps to commercial work.",
    whyItMatters:
      "Tool adoption scales faster when the learning path is explicit. Epic is investing in workforce formation, not only product features.",
    possibleImpact:
      "Expect more creator programs, curriculum tie-ins, and talent scouting around UEFN as Fortnite creation becomes a more legible career path.",
    trendAnalysis:
      "The key trend is professionalization: creator ecosystems are moving from informal experimentation toward training, measurement, and portfolio-based hiring signals.",
    impactScore: 76,
    trendScore: 35,
    confidence: 83,
    sectors: ["UGC", "Education", "Creator Economy", "Game Engines"],
    companies: ["Epic Games", "Unreal Engine", "Fortnite", "UEFN Creators"],
    publishedAt: "2026-06-08",
    sourceUrl:
      "https://www.unrealengine.com/learning/uefn-student-bootcamp-application-is-open-now",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-012",
    slug: "mobile-publishers-keep-pushing-d2c-as-a-margin-and-control-play",
    title: "Mobile publishers keep pushing D2C as a margin and control play",
    source: "PocketGamer.biz",
    sourceCredibility: "Trade press",
    category: "Gaming",
    tldr:
      "New Q1 figures show direct-to-consumer revenue is becoming a strategic layer for large mobile publishers, not a side experiment.",
    fullTldr:
      "PocketGamer.biz's latest D2C roundup shows several major mobile companies continuing to move meaningful revenue off third-party stores and into owned payment flows. That is both a margin decision and a relationship decision, since D2C gives publishers more direct customer contact and operational control.",
    whyItMatters:
      "Mobile remains one of the industry's largest revenue pools. When major publishers push D2C harder, it affects monetization design, live-ops cadence, and regional publishing strategy.",
    possibleImpact:
      "Studios may invest more in web shops, CRM tooling, first-party community layers, and event design that nudges users into owned purchase funnels.",
    trendAnalysis:
      "The strongest trend is monetization diversification: store dependence is being reduced where scale, brand familiarity, and retention are strong enough to support it.",
    impactScore: 82,
    trendScore: 37,
    confidence: 84,
    sectors: ["Mobile Gaming", "D2C", "Live Ops", "Publishing"],
    companies: ["Playtika", "Stillfront Group", "MTG", "Huuuge Games"],
    publishedAt: "2026-06-08",
    sourceUrl:
      "https://www.pocketgamer.biz/revealed-mobile-publishers-share-their-record-d2c-sales/",
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
    slug: "ea-results-show-live-services-and-franchise-scale-still-anchor-public-game-publisher-reads",
    title: "EA results show live services and franchise scale still anchor public publisher reads",
    source: "EA IR",
    sourceCredibility: "Official source",
    category: "Business",
    tldr:
      "EA's FY26 results reinforce that blockbuster launches and durable live services still define how public markets read major publishers.",
    fullTldr:
      "Electronic Arts reported record net bookings for FY26, led by Battlefield 6 and a still-important live services mix. The bigger signal is not just EA's performance, but how heavily public market narratives still depend on a few large franchises landing cleanly while recurring service revenue keeps margins resilient.",
    whyItMatters:
      "Large public publishers remain one of the clearest windows into how AAA risk is being priced: launch execution matters, but portfolio durability still comes from recurring engagement.",
    possibleImpact:
      "Expect continued emphasis on annualized or deeply retained franchises, with premium launches still used to reset investor confidence when they hit at scale.",
    trendAnalysis:
      "The trend remains concentration around fewer giant franchises and stronger service backbones, even as showcase season creates the illusion of endless slate breadth.",
    impactScore: 84,
    trendScore: 28,
    confidence: 89,
    sectors: ["AAA Studios", "Live Services", "Sports Games", "Publishing"],
    companies: ["Electronic Arts", "Battlefield", "EA SPORTS FC", "Apex Legends"],
    publishedAt: "2026-05-05",
    sourceUrl:
      "https://ir.ea.com/press-releases/press-release-details/2026/Electronic-Arts-Reports-Q4-and-FY26-Results/default.aspx",
    visual: {
      image: "/images/intelligence/business-market.webp",
      alt: "Dark gaming market intelligence terminal with holographic charts"
    }
  },
  {
    id: "le-015",
    slug: "state-of-play-viewership-proves-platform-showcases-now-run-on-creator-scale-attention",
    title: "State of Play viewership proves platform showcases now run on creator-scale attention",
    source: "Streams Charts",
    sourceCredibility: "Market analysis",
    category: "Esports",
    tldr:
      "Sony's June showcase passed 3 million peak viewers, highlighting how platform messaging now depends on creator-amplified live distribution.",
    fullTldr:
      "Streams Charts reported that the June 2026 State of Play became the most-watched showcase in State of Play history, with YouTube leading watch time and creator co-streaming reaching a new high. Even platform-holder communication now behaves like a competitive live media event.",
    whyItMatters:
      "Platform events are no longer just press briefings. They are audience products whose reach can directly influence game awareness and the market narrative around a platform.",
    possibleImpact:
      "Expect more publishers to optimize around co-streamability, immediate trailer recaps, and post-show follow-through rather than just the livestream itself.",
    trendAnalysis:
      "The durable trend is showcase economics: live event performance is becoming a measurable proxy for cultural momentum during reveal season.",
    impactScore: 79,
    trendScore: 34,
    confidence: 86,
    sectors: ["Streaming", "Platform", "Creator Economy", "Marketing"],
    companies: ["Sony", "PlayStation", "YouTube", "Twitch"],
    publishedAt: "2026-06-03",
    sourceUrl: "https://streamscharts.com/news/state-play-hits-record-breaking-3-million-live-viewers",
    visual: {
      image: "/images/intelligence/esports-arena.webp",
      alt: "Futuristic esports arena with viewership heatmap and stage lighting"
    }
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
