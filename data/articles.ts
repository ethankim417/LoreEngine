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

export const briefSnapshotDate = "2026-06-23";

export const articles: Article[] = [
  {
    id: "le-001",
    slug: "valve-prices-steam-machine-above-console-market",
    title: "Valve prices Steam Machine above the console market",
    source: "The Verge",
    sourceCredibility: "Trade press",
    category: "Hardware",
    tldr:
      "Valve set Steam Machine pricing at $1,049 and up, turning its living-room PC into a premium hardware test rather than a subsidized console play.",
    fullTldr:
      "Valve's June 22 pricing reveal puts the 512GB Steam Machine at $1,049 and the 2TB model at $1,349 before controller bundles. The signal is not only that Valve is returning to living-room hardware, but that open PC economics are colliding with console price expectations.",
    whyItMatters:
      "Steam Machine now tests how much value players assign to Steam library access, Linux flexibility, and PC openness when the box costs far more than a PS5 or Xbox Series X.",
    possibleImpact:
      "Expect publishers and hardware partners to watch reservation demand closely before treating SteamOS living-room PCs as a serious console-adjacent channel.",
    trendAnalysis:
      "The broader trend is hardware inflation: memory, storage, and GPU economics are making subsidized console pricing harder to compare against PC-style devices.",
    impactScore: 91,
    trendScore: 45,
    confidence: 90,
    sectors: ["PC Gaming", "Hardware", "Steam", "Console"],
    companies: ["Valve", "Steam", "AMD", "Sony", "Microsoft"],
    publishedAt: "2026-06-22",
    sourceUrl: "https://www.theverge.com/news/837022/valve-steam-machine-price-release-date",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-002",
    slug: "steamos-desktop-expansion-turns-pc-builders-into-valve-platform-partners",
    title: "SteamOS desktop expansion turns PC builders into Valve platform partners",
    source: "The Verge",
    sourceCredibility: "Trade press",
    category: "Platform",
    tldr:
      "Valve says SteamOS 3.8 lets users build their own Steam Machines, expanding the strategy beyond a single first-party device.",
    fullTldr:
      "Valve's desktop SteamOS push makes the Steam Machine launch less dependent on one hardware SKU. If users and OEMs can install SteamOS on more living-room PCs, Valve can grow its platform footprint without carrying every hardware risk directly.",
    whyItMatters:
      "A broader SteamOS install base could give developers another reason to treat Linux compatibility, controller UX, and TV-first PC play as mainstream work.",
    possibleImpact:
      "Expect more small-form-factor PC vendors, modders, and Linux gaming communities to position SteamOS-ready builds as a console alternative.",
    trendAnalysis:
      "The trend is platform unbundling: storefront, OS, controller, and hardware can be promoted together without being locked to one box.",
    impactScore: 86,
    trendScore: 41,
    confidence: 88,
    sectors: ["SteamOS", "PC Gaming", "Platform", "Hardware"],
    companies: ["Valve", "NVIDIA", "AMD", "Intel", "PC OEMs"],
    publishedAt: "2026-06-22",
    sourceUrl: "https://www.theverge.com/games/953411/valve-steamos-desktop-nvidia",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-003",
    slug: "amd-fsr-41-widens-upscaling-support-for-older-radeon-gpus",
    title: "AMD FSR 4.1 widens upscaling support for older Radeon GPUs",
    source: "The Verge",
    sourceCredibility: "Trade press",
    category: "Hardware",
    tldr:
      "AMD is bringing FSR 4.1 to RX 7000-series GPUs, making image-quality gains available beyond only the newest hardware.",
    fullTldr:
      "AMD's June 22 FSR 4.1 update matters because upscaling is now part of baseline game performance strategy. Wider support across RDNA 3 GPUs can improve the playable life of existing PCs while giving developers a larger target base for modern reconstruction features.",
    whyItMatters:
      "Upscaling quality is becoming a platform feature. The more broadly it works, the easier it is for studios to target higher visual settings without excluding older hardware.",
    possibleImpact:
      "Expect PC performance messaging to keep shifting from raw raster benchmarks toward upscaling quality, frame generation, and supported-game counts.",
    trendAnalysis:
      "The trend favors software-defined hardware value: GPU vendors are extending device life through model updates and smarter rendering pipelines.",
    impactScore: 82,
    trendScore: 39,
    confidence: 86,
    sectors: ["GPUs", "PC Gaming", "Rendering", "Developer Tools"],
    companies: ["AMD", "Valve", "NVIDIA", "PC Developers"],
    publishedAt: "2026-06-22",
    sourceUrl: "https://www.theverge.com/news/953664/amd-fsr-4-1-upscaling-rx-7000-series-gpus-rdna-3",
    visual: {
      image: "/images/intelligence/hardware-ai.webp",
      alt: "Close-up of a futuristic GPU board with glowing compute traces"
    }
  },
  {
    id: "le-004",
    slug: "valve-and-amd-aim-fsr-4-at-steam-machine-image-quality-gap",
    title: "Valve and AMD aim FSR 4 at Steam Machine's image-quality gap",
    source: "The Verge",
    sourceCredibility: "Trade press",
    category: "Hardware",
    tldr:
      "Valve is working with AMD to bring FSR 4 to Steam Machine, addressing one of the clearest technical comparisons with PS5-class consoles.",
    fullTldr:
      "The Steam Machine's premium price makes visual quality a business issue, not just an engineering issue. Valve's work with AMD on FSR 4 suggests the device's long-term competitiveness will depend on software updates as much as its fixed silicon.",
    whyItMatters:
      "If Steam Machine can improve through upscaling updates, Valve can argue that a PC-like box ages differently than a traditional console generation.",
    possibleImpact:
      "Developers may be pushed to test FSR paths more carefully on SteamOS hardware if Valve promotes the device as a serious TV gaming target.",
    trendAnalysis:
      "The trend is post-launch performance competition, where platform holders keep improving image quality through upscalers, drivers, and compatibility layers.",
    impactScore: 80,
    trendScore: 38,
    confidence: 86,
    sectors: ["Steam Machine", "Rendering", "Hardware", "PC Gaming"],
    companies: ["Valve", "AMD", "Steam", "Sony"],
    publishedAt: "2026-06-22",
    sourceUrl: "https://www.theverge.com/games/952210/valve-steam-machine-fsr4-amd-upscaler",
    visual: {
      image: "/images/intelligence/hardware-ai.webp",
      alt: "Close-up of a futuristic GPU board with glowing compute traces"
    }
  },
  {
    id: "le-005",
    slug: "steam-next-fest-closes-as-demo-first-discovery-keeps-growing",
    title: "Steam Next Fest closes as demo-first discovery keeps growing",
    source: "GamesRadar+",
    sourceCredibility: "Trade press",
    category: "Business",
    tldr:
      "The June Steam Next Fest closed on June 22, reinforcing demos as a core launch-readiness and wishlist-building channel.",
    fullTldr:
      "GamesRadar's June 22 guide confirms the second 2026 Steam Next Fest ran June 15-22, with free demos, livestreams, and the Summer Sale following on June 25. For PC teams, the event has become an operational milestone that tests hooks before paid launch windows.",
    whyItMatters:
      "Demos are now part of the publishing stack. They give players proof, creators footage, and developers early signal before full launch spend begins.",
    possibleImpact:
      "Expect more studios to build production calendars around demo polish, post-festival retargeting, and fast store-page iteration.",
    trendAnalysis:
      "The trend is storefront-led validation: public playable slices are replacing some traditional trailer-only marketing beats.",
    impactScore: 84,
    trendScore: 40,
    confidence: 88,
    sectors: ["Steam", "Indie Devs", "Publishing", "Marketing"],
    companies: ["Valve", "Steam", "Independent Studios", "PC Publishers"],
    publishedAt: "2026-06-22",
    sourceUrl: "https://www.gamesradar.com/games/steam-next-fest-guide/",
    visual: {
      image: "/images/intelligence/business-market.webp",
      alt: "Dark gaming market intelligence terminal with holographic charts"
    }
  },
  {
    id: "le-006",
    slug: "steam-next-fest-ai-disclosures-show-discovery-and-trust-problem",
    title: "Steam Next Fest AI disclosures show a discovery and trust problem",
    source: "GamesRadar+",
    sourceCredibility: "Trade press",
    category: "AI",
    tldr:
      "Nearly 1,700 June Next Fest demos reportedly disclosed AI use, raising the pressure on Steam discovery, filtering, and player trust.",
    fullTldr:
      "GamesRadar reported that almost 1,700 of more than 8,600 Next Fest demos disclosed AI-generated content. The signal is not simply that AI use is rising; it is that storefront-scale discovery now has to separate useful tooling from perceived low-effort content.",
    whyItMatters:
      "AI disclosure is becoming a player-facing quality signal. Storefronts may need better filters and developers may need clearer explanations of how AI was used.",
    possibleImpact:
      "Expect more pressure on Valve and rival stores to expose AI-related metadata in ways that help players navigate large demo pools.",
    trendAnalysis:
      "The trend is AI moving from production pipeline detail to storefront taxonomy and consumer trust issue.",
    impactScore: 90,
    trendScore: 44,
    confidence: 84,
    sectors: ["Game AI", "Steam", "Discovery", "Indie Devs"],
    companies: ["Valve", "Steam", "AI Tool Vendors", "Independent Studios"],
    publishedAt: "2026-06-17",
    sourceUrl:
      "https://www.gamesradar.com/platforms/pc-gaming/even-more-games-on-steam-are-using-ai-there-are-over-8-600-demos-in-this-weeks-next-fest-event-and-nearly-1-700-use-ai/",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-007",
    slug: "steam-ai-stigma-data-turns-disclosure-into-commercial-risk",
    title: "Steam AI stigma data turns disclosure into commercial risk",
    source: "PC Gamer",
    sourceCredibility: "Trade press",
    category: "AI",
    tldr:
      "A new Steam analysis says games disclosing AI use received far fewer reviews and slightly weaker sentiment, making AI transparency a launch-risk topic.",
    fullTldr:
      "PC Gamer covered Game Oracle analysis of nearly 9,879 Steam releases from January through October 2025. The reported finding was stark: AI-disclosing games saw around 53% fewer reviews, suggesting the disclosure label can affect visibility and reception even before deeper quality judgments.",
    whyItMatters:
      "Studios cannot treat AI use as only an internal cost-saving decision. Player perception can affect reviews, conversion, and creator coverage.",
    possibleImpact:
      "Expect publishers to audit store-page language, trailer assets, localization, and press kits for defensible AI-use explanations before launch.",
    trendAnalysis:
      "The trend is reputation-aware AI adoption: teams need governance, provenance, and messaging alongside production workflows.",
    impactScore: 88,
    trendScore: 43,
    confidence: 82,
    sectors: ["Game AI", "Steam", "Marketing", "Publishing"],
    companies: ["Valve", "Steam Developers", "Game Oracle", "PC Publishers"],
    publishedAt: "2026-06-22",
    sourceUrl:
      "https://www.pcgamer.com/software/ai/data-analyst-finds-ai-stigma-on-steam-can-reduce-the-number-of-reviews-a-game-gets-by-around-53-percent-and-the-reviews-it-does-get-are-more-negative/",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-008",
    slug: "xbox-at-25-blends-platform-strategy-with-hollywood-franchise-reach",
    title: "Xbox at 25 blends platform strategy with Hollywood franchise reach",
    source: "Entertainment Weekly",
    sourceCredibility: "Trade press",
    category: "Platform",
    tldr:
      "Xbox's 25th anniversary coverage frames Microsoft gaming as a platform, publisher, and entertainment-IP business at once.",
    fullTldr:
      "Entertainment Weekly's June 23 Xbox feature highlights a broader reset around hardware, exclusives, Game Pass, and screen adaptations. The strategic signal is that Xbox is competing for franchise reach across consoles, subscriptions, cloud, and Hollywood.",
    whyItMatters:
      "Microsoft's gaming economics increasingly depend on more than console share. Adaptations, multiplatform releases, and subscription retention all support the same IP flywheel.",
    possibleImpact:
      "Expect Xbox franchises to be managed more like transmedia assets, with release windows coordinated around games, series, films, and Game Pass beats.",
    trendAnalysis:
      "The trend is portfolio strategy over platform purity: the same company can use some IP for hardware prestige and other IP for broad reach.",
    impactScore: 86,
    trendScore: 39,
    confidence: 80,
    sectors: ["Console", "Streaming", "Subscription Gaming", "Transmedia"],
    companies: ["Microsoft", "Xbox", "Bethesda", "Activision", "Amazon"],
    publishedAt: "2026-06-23",
    sourceUrl: "https://ew.com/xbox-25th-anniversary-hollywood-adaptations-cover-story-exclusive-12003252",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-009",
    slug: "xbox-studio-reset-keeps-creative-risk-in-the-spotlight",
    title: "Xbox studio reset keeps creative risk in the spotlight",
    source: "The Guardian",
    sourceCredibility: "Trade press",
    category: "Studio",
    tldr:
      "Reports of Xbox studio closures and selloff pressure show the tension between showcase ambition and cost discipline.",
    fullTldr:
      "The Guardian's June 17 report describes renewed fears around Xbox developers as Microsoft weighs closures, sales, and leadership changes. The industry signal is that even high-profile first-party studios can face pressure when portfolios are reorganized around fewer major bets.",
    whyItMatters:
      "Studio instability affects talent retention, project continuity, and the diversity of games inside major platform portfolios.",
    possibleImpact:
      "Expect more teams to seek independence, external funding, or acquisition alternatives if platform holders narrow their internal development focus.",
    trendAnalysis:
      "The trend is consolidation after over-expansion: large publishers are trying to protect margins while still needing creative pipelines.",
    impactScore: 87,
    trendScore: 42,
    confidence: 78,
    sectors: ["AAA Studios", "Platform Strategy", "Labor", "Publishing"],
    companies: ["Microsoft", "Xbox", "Ninja Theory", "Double Fine", "Compulsion Games"],
    publishedAt: "2026-06-17",
    sourceUrl: "https://www.theguardian.com/games/2026/jun/17/xbox-games-studios-developers-firing-line",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-010",
    slug: "newzoo-puts-games-market-above-200-billion-amid-layoff-contrast",
    title: "Newzoo puts games market above $200B amid layoff contrast",
    source: "GamesRadar+",
    sourceCredibility: "Market analysis",
    category: "Business",
    tldr:
      "Newzoo's reported $201.6B 2025 games-market estimate sharpens the contrast between sector growth and ongoing studio cuts.",
    fullTldr:
      "GamesRadar covered Newzoo's estimate that global games revenue passed $200 billion for the first time in 2025, with mobile still the largest segment and PC growing fastest. The signal is that aggregate market growth is not translating evenly into studio stability.",
    whyItMatters:
      "Investors and operators need to separate category growth from company-level execution. Revenue expansion can coexist with layoffs when costs, debt, and portfolio quality are misaligned.",
    possibleImpact:
      "Expect sharper scrutiny of where growth is captured: platform fees, mobile live ops, PC hits, and evergreen franchises may benefit more than mid-budget production.",
    trendAnalysis:
      "The trend is unequal recovery: the market is expanding, but capital is flowing toward scaled platforms, proven IP, and monetization-heavy models.",
    impactScore: 89,
    trendScore: 41,
    confidence: 82,
    sectors: ["Market Data", "Mobile Gaming", "PC Gaming", "Publishing"],
    companies: ["Newzoo", "Mobile Publishers", "PC Publishers", "Console Publishers"],
    publishedAt: "2026-06-19",
    sourceUrl:
      "https://www.gamesradar.com/games/amid-all-the-closures-and-layoffs-the-global-games-market-has-apparently-passed-usd200-billion-in-yearly-revenue-for-the-first-time-ever-says-analytics-firm/",
    visual: {
      image: "/images/intelligence/business-market.webp",
      alt: "Dark gaming market intelligence terminal with holographic charts"
    }
  },
  {
    id: "le-011",
    slug: "fifa-streaming-deals-show-influencer-led-sports-distribution-at-scale",
    title: "FIFA streaming deals show influencer-led sports distribution at scale",
    source: "Associated Press",
    sourceCredibility: "Trade press",
    category: "Esports",
    tldr:
      "FIFA's 2026 World Cup streaming strategy leans into influencer-led platforms, YouTube, and TikTok to reach younger audiences.",
    fullTldr:
      "AP reported that Brazil's CazeTV will stream all 104 World Cup matches and that FIFA is expanding digital distribution through social platforms. While not a game tournament, it matters to esports because it validates creator-led live-event formats at global scale.",
    whyItMatters:
      "Gaming and esports publishers compete for the same live attention habits. If mainstream sports normalize creator-first broadcasts, game events will face higher expectations for co-streaming and interactivity.",
    possibleImpact:
      "Expect esports leagues and showcase events to keep blending official broadcasts, influencer hosts, short-form clips, and regional streaming rights.",
    trendAnalysis:
      "The trend is live media fragmentation: audience growth increasingly depends on meeting viewers inside creator ecosystems rather than only owned channels.",
    impactScore: 78,
    trendScore: 37,
    confidence: 84,
    sectors: ["Streaming", "Esports", "Creator Economy", "Sports Media"],
    companies: ["FIFA", "CazeTV", "LiveMode", "YouTube", "TikTok"],
    publishedAt: "2026-06-16",
    sourceUrl: "https://apnews.com/article/08feed47be7b423bafcfe9ae941bed1b",
    visual: {
      image: "/images/intelligence/esports-arena.webp",
      alt: "Futuristic esports arena with viewership heatmap and stage lighting"
    }
  },
  {
    id: "le-012",
    slug: "amd-mext-deal-puts-memory-optimization-next-to-ai-and-game-hardware",
    title: "AMD MEXT deal puts memory optimization next to AI and game hardware",
    source: "MarketWatch",
    sourceCredibility: "Market analysis",
    category: "Hardware",
    tldr:
      "AMD's acquisition of MEXT highlights memory efficiency as a strategic battleground across AI infrastructure and high-end gaming hardware.",
    fullTldr:
      "MarketWatch reported that AMD acquired MEXT, a memory-optimization company, as memory bottlenecks shape AI infrastructure economics. For games, the same pressure matters because component scarcity and memory pricing are affecting consoles, PCs, handhelds, and GPU roadmaps.",
    whyItMatters:
      "Memory is now a strategic constraint, not a background component. Hardware vendors that improve efficiency can protect margins and performance when DRAM supply is tight.",
    possibleImpact:
      "Expect more gaming hardware messaging around memory architecture, upscaling, compression, and workload efficiency rather than only shader counts.",
    trendAnalysis:
      "The trend is AI infrastructure pulling hardware supply chains in ways that spill into gaming device pricing and availability.",
    impactScore: 84,
    trendScore: 40,
    confidence: 84,
    sectors: ["Semiconductors", "AI Infrastructure", "Gaming Hardware", "Supply Chain"],
    companies: ["AMD", "MEXT", "NVIDIA", "Console Makers"],
    publishedAt: "2026-06-15",
    sourceUrl: "https://www.marketwatch.com/story/amd-flirts-with-a-900-billion-valuation-after-beefing-up-its-memory-technology-2a366bdc",
    visual: {
      image: "/images/intelligence/hardware-ai.webp",
      alt: "Close-up of a futuristic GPU board with glowing compute traces"
    }
  },
  {
    id: "le-013",
    slug: "rackspace-amd-partnership-links-ai-cloud-buildout-to-chip-demand",
    title: "Rackspace-AMD partnership links AI cloud buildout to chip demand",
    source: "Barron's",
    sourceCredibility: "Market analysis",
    category: "AI",
    tldr:
      "Rackspace's AMD-powered AI cloud plan shows how chip demand is spreading through managed cloud infrastructure.",
    fullTldr:
      "Barron's reported that Rackspace finalized a deal to use AMD Instinct GPUs and EPYC CPUs in a 30-megawatt AI cloud rollout. The gaming relevance is indirect but important: AI cloud demand competes for the same silicon, memory, and investor attention that shape gaming hardware economics.",
    whyItMatters:
      "Game companies using AI tools, cloud rendering, or backend services are exposed to infrastructure pricing. Chip allocation decisions can affect both cost and availability.",
    possibleImpact:
      "Expect more cloud vendors to market AMD-based AI capacity as an alternative to NVIDIA-heavy stacks, with downstream effects on tool vendors and studios.",
    trendAnalysis:
      "The trend is diversification of AI infrastructure suppliers as customers look for capacity, cost control, and reduced dependence on one GPU ecosystem.",
    impactScore: 78,
    trendScore: 36,
    confidence: 82,
    sectors: ["Game AI", "Cloud", "Semiconductors", "Developer Tools"],
    companies: ["Rackspace", "AMD", "Palantir", "Cloud Customers"],
    publishedAt: "2026-06-16",
    sourceUrl: "https://www.barrons.com/articles/rackspace-stock-price-amd-data-center-deal-aebdbae1",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-014",
    slug: "intel-market-cap-surge-shows-chip-stocks-reshaping-gaming-watchlist",
    title: "Intel market-cap surge shows chip stocks reshaping the gaming watchlist",
    source: "MarketWatch",
    sourceCredibility: "Market analysis",
    category: "Hardware",
    tldr:
      "Intel's reported move toward a $700B market value keeps PC silicon and AI optimism central to the gaming hardware read.",
    fullTldr:
      "MarketWatch reported on June 22 that Intel was on pace to close above $700 billion in market capitalization for the first time. For gaming, the important signal is that AI-linked semiconductor expectations are changing how investors value companies still central to PCs and handhelds.",
    whyItMatters:
      "Intel remains important to game PCs, laptops, handhelds, and developer machines. A stronger equity signal can affect investment capacity, partnerships, and foundry confidence.",
    possibleImpact:
      "Expect more scrutiny of Intel's GPU drivers, handheld wins, and AI PC roadmap as investors look for gaming-adjacent proof points.",
    trendAnalysis:
      "The trend is semiconductors becoming the market lens for game hardware, even when the immediate catalyst is AI infrastructure.",
    impactScore: 79,
    trendScore: 36,
    confidence: 82,
    sectors: ["Semiconductors", "PC Gaming", "AI PCs", "Handhelds"],
    companies: ["Intel", "AMD", "NVIDIA", "PC OEMs"],
    publishedAt: "2026-06-22",
    sourceUrl:
      "https://www.marketwatch.com/livecoverage/stock-market-today-dow-s-p-500-investors-us-iran-peace-talks-brent-crude-declines/card/intel-heads-for-first-close-above-700-billion-in-market-value-3fP0OEvc9Np5dYwBRgXW",
    visual: {
      image: "/images/intelligence/hardware-ai.webp",
      alt: "Close-up of a futuristic GPU board with glowing compute traces"
    }
  },
  {
    id: "le-015",
    slug: "steam-machine-ram-pressure-connects-hardware-pricing-to-supply-chain-risk",
    title: "Steam Machine RAM pressure connects hardware pricing to supply-chain risk",
    source: "The Verge",
    sourceCredibility: "Trade press",
    category: "Business",
    tldr:
      "Valve's RAM sourcing comments show why gaming hardware prices are being pulled into the same component crunch as AI systems.",
    fullTldr:
      "The Verge's June 22 coverage of Valve's RAM negotiations gives useful context for the Steam Machine's high price. Memory suppliers are setting aggressive terms, and gaming hardware teams have less room to absorb shocks when they do not subsidize boxes.",
    whyItMatters:
      "Supply-chain pressure affects launch prices, inventory, model configurations, and margins. It can also decide whether new gaming devices reach mainstream volume.",
    possibleImpact:
      "Expect more gaming hardware launches to use reservations, limited batches, flexible specs, and clearer explanations of component-driven pricing.",
    trendAnalysis:
      "The trend is the AI memory boom spilling into consumer gaming, making DRAM and storage availability a strategic constraint for device makers.",
    impactScore: 83,
    trendScore: 40,
    confidence: 84,
    sectors: ["Hardware", "Supply Chain", "PC Gaming", "Console"],
    companies: ["Valve", "Samsung", "Micron", "SK Hynix", "AMD"],
    publishedAt: "2026-06-22",
    sourceUrl: "https://www.theverge.com/games/953945/valve-steam-machine-memory-component-crisis",
    visual: {
      image: "/images/intelligence/business-market.webp",
      alt: "Dark gaming market intelligence terminal with holographic charts"
    }
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
