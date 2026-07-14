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

export const briefSnapshotDate = "2026-07-14";

export const articles: Article[] = [
  {
    id: "le-001",
    slug: "xbox-restructure-turns-studio-ownership-into-margin-discipline",
    title: "Xbox restructure turns studio ownership into margin discipline",
    source: "The Verge",
    sourceCredibility: "Trade press",
    category: "Business",
    tldr: "Microsoft is cutting deeply across Xbox and moving several studios out of full internal ownership.",
    fullTldr: "The Verge reported that Microsoft is undertaking a major Xbox overhaul, with thousands of gaming-role cuts and plans to sell or spin out studios including Double Fine, Compulsion, Ninja Theory, and Undead Labs. The strategic read is that first-party breadth is being measured against margin, management complexity, and franchise scale.",
    whyItMatters: "The post-acquisition Xbox thesis depends on whether Microsoft can make a huge content portfolio operate like a focused platform business rather than a loose studio roll-up.",
    possibleImpact: "Expect more scrutiny on first-party budgets, support-studio models, Game Pass economics, and which projects deserve full internal funding.",
    trendAnalysis: "The trend is portfolio compression: large publishers are keeping the biggest franchises close while pushing smaller or riskier creative bets toward independent structures.",
    impactScore: 96,
    trendScore: 49,
    confidence: 84,
    sectors: ["Publishing", "Studio Strategy", "Subscriptions", "Console"],
    companies: ["Microsoft", "Xbox", "Double Fine", "Ninja Theory", "Undead Labs"],
    publishedAt: "2026-07-07",
    sourceUrl: "https://www.theverge.com/news/961546/xbox-layoffs-studio-sales-2026",
    visual: { image: "/images/intelligence/business-market.webp", alt: "Dark gaming market intelligence terminal with holographic charts" }
  },
  {
    id: "le-002",
    slug: "xbox-strategy-hire-reopens-the-metaverse-question",
    title: "Xbox strategy hire reopens the metaverse question",
    source: "PC Gamer",
    sourceCredibility: "Trade press",
    category: "Business",
    tldr: "Xbox hired metaverse strategist Matthew Ball as it searches for a clearer platform thesis after restructuring.",
    fullTldr: "PC Gamer reported that Xbox brought in Matthew Ball through strategy firm Prosimetrum. His background in persistent virtual worlds, Roblox, creator economies, and cross-platform ecosystems suggests Microsoft is testing a broader strategic frame than console exclusives alone.",
    whyItMatters: "Xbox needs a credible bridge between its games portfolio, Game Pass, cloud distribution, Minecraft, and creator-led ecosystems after a disruptive studio reset.",
    possibleImpact: "Expect renewed emphasis on persistent worlds, cross-device identity, creator economics, and platform interoperability—alongside scrutiny over whether the metaverse framing helps players or merely repackages old ambitions.",
    trendAnalysis: "The trend is platform convergence: console companies increasingly evaluate UGC, social graphs, cloud delivery, and virtual economies as one strategic system.",
    impactScore: 92,
    trendScore: 46,
    confidence: 82,
    sectors: ["AAA Publishing", "Console", "Subscriptions", "Labor"],
    companies: ["Microsoft", "Activision Blizzard", "Bethesda", "King", "Mojang"],
    publishedAt: "2026-07-11",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/matthew-ball-was-hired-to-help-fix-xbox-will-gamers-like-what-he-prescribes/",
    visual: { image: "/images/intelligence/business-market.webp", alt: "Dark gaming market intelligence terminal with holographic charts" }
  },
  {
    id: "le-003",
    slug: "playstation-disc-backlash-keeps-digital-ownership-risk-visible",
    title: "PlayStation disc backlash keeps digital ownership risk visible",
    source: "Business Insider",
    sourceCredibility: "Trade press",
    category: "Platform",
    tldr: "Sony's reported move away from physical PlayStation discs is drawing a sustained consumer backlash around ownership and pricing power.",
    fullTldr: "Business Insider reported continuing criticism of Sony's plan to stop producing physical PlayStation game discs from 2028. The reaction shows that digital distribution is not just a logistics story; it changes resale markets, preservation, license risk, and consumer trust.",
    whyItMatters: "Digital-only platforms can lift margins and simplify retail, but they also make storefront governance and account trust central to the player relationship.",
    possibleImpact: "Expect more pressure for refund clarity, library guarantees, disc-drive accessories, collector editions, and competitive pricing on digital storefronts.",
    trendAnalysis: "The trend is ownership anxiety: as platforms push users toward licenses instead of discs, players are demanding stronger rights and more transparent store policies.",
    impactScore: 88,
    trendScore: 44,
    confidence: 78,
    sectors: ["Console", "Digital Stores", "Consumer Trust", "Retail"],
    companies: ["Sony", "PlayStation", "Rockstar Games", "Nintendo", "Microsoft"],
    publishedAt: "2026-07-07",
    sourceUrl: "https://www.businessinsider.com/sony-playstation-disc-backlash-digital-only-2026-7",
    visual: { image: "/images/intelligence/platform-strategy.webp", alt: "Abstract cross-platform gaming network with cloud and device nodes" }
  },
  {
    id: "le-004",
    slug: "nintendo-eu-battery-rule-turns-hardware-compliance-into-platform-planning",
    title: "Nintendo EU battery rule turns compliance into platform planning",
    source: "The Verge",
    sourceCredibility: "Trade press",
    category: "Hardware",
    tldr: "Nintendo will phase out original Switch sales in Europe as EU user-replaceable battery rules reshape device roadmaps.",
    fullTldr: "The Verge reported that Nintendo will stop selling original Switch models in Europe in 2027 and roll out updated hardware versions to comply with EU battery regulations. The immediate story is regional compliance; the larger signal is that hardware platforms now need right-to-repair planning baked into lifecycle management.",
    whyItMatters: "Regulation can force console makers to revise mature hardware, accessory supply, repair flows, and regional inventory strategy even after a successor launches.",
    possibleImpact: "Expect more region-specific SKUs, clearer repair documentation, accessory redesigns, and a longer compliance tail for handheld console ecosystems.",
    trendAnalysis: "The trend is regulatory hardware design: sustainability and repairability rules are becoming launch and sunset constraints, not back-office issues.",
    impactScore: 85,
    trendScore: 42,
    confidence: 86,
    sectors: ["Hardware", "Console", "Regulation", "Retail"],
    companies: ["Nintendo", "European Union", "Switch", "Switch 2"],
    publishedAt: "2026-07-07",
    sourceUrl: "https://www.theverge.com/games/961632/nintendo-switch-europe-discontinued",
    visual: { image: "/images/intelligence/hardware-ai.webp", alt: "Close-up of a futuristic GPU board with glowing compute traces" }
  },
  {
    id: "le-005",
    slug: "memory-price-cooling-still-leaves-gaming-hardware-under-pressure",
    title: "Memory price cooling still leaves gaming hardware under pressure",
    source: "Tom's Hardware",
    sourceCredibility: "Vendor report",
    category: "Hardware",
    tldr: "TrendForce expects DRAM and NAND prices to keep rising in Q3, even as consumer resistance slows the pace.",
    fullTldr: "Tom's Hardware covered TrendForce's view that DRAM contract prices could rise 13-18% and NAND 10-15% in Q3 2026. AI infrastructure demand remains strong while consumer electronics companies are pushing back on affordability, leaving consoles, PCs, and handhelds exposed to component-cost tension.",
    whyItMatters: "Memory pricing links AI capex directly to gaming hardware affordability. That affects console pricing, SSD bundles, GPU board costs, and retail promotion flexibility.",
    possibleImpact: "Expect more cautious hardware discounts, smaller storage bundles, longer console-generation tails, and renewed attention to cloud and catalog value messaging.",
    trendAnalysis: "The trend is bifurcated memory demand: enterprise AI keeps the supply chain tight while consumer gaming demand becomes more price-sensitive.",
    impactScore: 90,
    trendScore: 47,
    confidence: 88,
    sectors: ["Hardware", "Supply Chain", "AI Infrastructure", "PC Gaming"],
    companies: ["TrendForce", "Microsoft", "Sony", "Nintendo", "Memory Suppliers"],
    publishedAt: "2026-07-05",
    sourceUrl: "https://www.tomshardware.com/pc-components/ram/memory-price-surge-begins-to-cool-as-consumers-hit-affordability-limit-ai-demand-still-keeps-dram-and-nand-prices-climbing-through-q3-2026",
    visual: { image: "/images/intelligence/hardware-ai.webp", alt: "Close-up of a futuristic GPU board with glowing compute traces" }
  },
  {
    id: "le-006",
    slug: "ai-upscaling-becomes-a-platform-control-layer",
    title: "AI upscaling becomes a platform control layer",
    source: "TechRadar",
    sourceCredibility: "Trade press",
    category: "AI",
    tldr: "The next wave of DLSS, FSR, and XeSS is turning AI reconstruction into a strategic layer of PC game presentation.",
    fullTldr: "TechRadar compared the direction of NVIDIA DLSS, AMD FSR, and Intel XeSS as vendors push beyond simple resolution recovery toward generated frames and increasingly opinionated image reconstruction. The strategic issue is who controls the default visual pipeline inside engines and shipping games.",
    whyItMatters: "Upscaling can extend hardware life and lower rendering cost, but it can also shift creative control and compatibility toward GPU-vendor models.",
    possibleImpact: "Studios will need stronger image-quality QA, scalable fallbacks, transparent presets, and vendor-neutral performance targets across a fragmented PC install base.",
    trendAnalysis: "The trend is AI-native rendering: reconstruction is moving from an optional performance switch toward a standard production dependency.",
    impactScore: 82,
    trendScore: 40,
    confidence: 78,
    sectors: ["GPUs", "AI Infrastructure", "PC Gaming", "Investor Sentiment"],
    companies: ["NVIDIA", "AMD", "Intel", "Alphabet", "Amazon"],
    publishedAt: "2026-07-13",
    sourceUrl: "https://www.techradar.com/computing/gpu/what-ai-upscaling-means-for-pc-gaming",
    visual: { image: "/images/intelligence/hardware-ai.webp", alt: "Close-up of a futuristic GPU board with glowing compute traces" }
  },
  {
    id: "le-007",
    slug: "intel-arc-memory-value-highlights-budget-ai-creator-gap",
    title: "Intel Arc memory value highlights budget AI creator gap",
    source: "TechRadar",
    sourceCredibility: "Trade press",
    category: "AI",
    tldr: "High RTX 5090 pricing is making Intel's 32GB Arc Pro cards look attractive for memory-heavy AI workloads.",
    fullTldr: "TechRadar reported that a four-card Intel Arc Pro B70 setup with 128GB total VRAM can cost less than one inflated RTX 5090, even though NVIDIA still has major software and performance advantages. For game developers, modders, and small AI-content teams, affordable VRAM is becoming a practical production constraint.",
    whyItMatters: "Game AI experimentation depends on local compute economics. If high-end consumer GPUs stay scarce or overpriced, lower-cost memory-heavy alternatives gain strategic relevance.",
    possibleImpact: "Expect indie teams and technical artists to test mixed GPU stacks, cloud bursts, quantized models, and non-CUDA workflows for asset and prototype generation.",
    trendAnalysis: "The trend is VRAM democratization pressure: creators want enough local memory for AI pipelines even when flagship gaming cards are priced for scarcity.",
    impactScore: 79,
    trendScore: 39,
    confidence: 76,
    sectors: ["Game AI", "Creator Tools", "PC Hardware", "Indie Devs"],
    companies: ["Intel", "NVIDIA", "AMD", "AI Tool Vendors"],
    publishedAt: "2026-07-02",
    sourceUrl: "https://www.techradar.com/pro/nvidia-rtx-5090-gpus-are-so-expensive-that-intels-arc-pro-b70-is-now-a-genuine-bargain-for-ai-128gb-4-card-configuration-costs-less-than-usd3800",
    visual: { image: "/images/intelligence/ai-npcs.webp", alt: "Holographic AI NPC intelligence system inside a dark gaming command center" }
  },
  {
    id: "le-008",
    slug: "amd-midrange-gpu-price-cut-tests-pc-demand",
    title: "AMD midrange GPU price cut tests PC demand",
    source: "Tom's Hardware",
    sourceCredibility: "Trade press",
    category: "Hardware",
    tldr: "AMD's Radeon RX 9070 GRE fell to $499, putting direct price pressure on NVIDIA's midrange and testing whether value can restart upgrades.",
    fullTldr: "Tom's Hardware reported a roughly 9% price decline for AMD's RX 9070 GRE, bringing the RDNA 4 card to $499 after reviewing its 1440p performance. The move is a concrete counter-signal to broader memory-cost inflation: board pricing can still move down when channel competition and demand require it.",
    whyItMatters: "The $500 tier is important for enthusiast volume, Steam hardware renewal, and the performance baseline publishers can target without relying entirely on premium GPUs.",
    possibleImpact: "NVIDIA and Intel may face more bundle or street-price pressure, while developers gain a larger audience for 1440p features if the cut persists.",
    trendAnalysis: "The trend is selective price normalization: flagship hardware remains expensive, but competitive midrange inventory is beginning to bend toward buyers.",
    impactScore: 78,
    trendScore: 37,
    confidence: 72,
    sectors: ["PC Gaming", "GPUs", "Retail", "Supply Chain"],
    companies: ["AMD", "NVIDIA", "Intel", "Sapphire", "Asus"],
    publishedAt: "2026-07-11",
    sourceUrl: "https://www.tomshardware.com/pc-components/gpus/amd-rx-9070-gre-collapses-to-usd499-to-save-1440p-gaming-rdna-4-price-slips-9-percent-to-steal-a-piece-of-nvidias-mid-range-pie",
    visual: { image: "/images/intelligence/hardware-ai.webp", alt: "Close-up of a futuristic GPU board with glowing compute traces" }
  },
  {
    id: "le-009",
    slug: "esports-world-cup-opens-with-creator-and-club-scale-in-focus",
    title: "Esports World Cup opens with creator and club scale in focus",
    source: "Esports World Cup",
    sourceCredibility: "Official source",
    category: "Esports",
    tldr: "EWC's official schedule puts Week 1 live, with a seven-week calendar, club qualification data, and creator programming around the event.",
    fullTldr: "The official Esports World Cup site shows the 2026 event entering its July 6-12 opening week, with road-to-EWC slots, club qualification leaders, a creator program, and a multi-week schedule through late August. The brief signal is the continuing packaging of esports as a club, creator, ticketing, and festival product rather than only a tournament product.",
    whyItMatters: "Esports monetization increasingly depends on how well organizers combine competition, creator distribution, live attendance, and sponsor-friendly club narratives.",
    possibleImpact: "Expect more publishers to negotiate around club slots, co-streaming rights, creator access, and festival-style formats that can travel across games.",
    trendAnalysis: "The trend is esports bundling: tournament operators are building year-round commercial systems around clubs, fans, creators, and live events.",
    impactScore: 86,
    trendScore: 43,
    confidence: 90,
    sectors: ["Esports", "Streaming", "Creator Economy", "Live Events"],
    companies: ["Esports World Cup", "Team Falcons", "Team Vitality", "FUT Esports", "Alpha7 Esports"],
    publishedAt: "2026-07-06",
    sourceUrl: "https://esportsworldcup.com/en",
    visual: { image: "/images/intelligence/esports-arena.webp", alt: "Futuristic esports arena with viewership heatmap and stage lighting" }
  },
  {
    id: "le-010",
    slug: "india-rising-pathway-makes-esports-expansion-more-regional",
    title: "India Rising pathway makes esports expansion more regional",
    source: "Times of India",
    sourceCredibility: "Trade press",
    category: "Esports",
    tldr: "JioBLAST, Chess.com, and EWC are building a dedicated Indian pathway into the Esports World Cup.",
    fullTldr: "Times of India covered the India Rising: Road to EWC initiative, positioning it as a direct pathway for Indian players into the Esports World Cup ecosystem. The signal is that esports growth is being localized through telecom, chess, creator, and national-market partnerships instead of relying only on global publisher circuits.",
    whyItMatters: "India's mobile-first gaming base, chess strength, and telecom distribution make it one of the most important markets for esports audience and talent expansion.",
    possibleImpact: "Expect more regional qualifiers, telco-backed tournaments, chess-esports hybrids, and sponsor packages built around national-market identity.",
    trendAnalysis: "The trend is regionalized esports infrastructure: global events are creating market-specific ladders to solve discovery, distribution, and sponsorship at local scale.",
    impactScore: 80,
    trendScore: 40,
    confidence: 76,
    sectors: ["Esports", "Mobile", "Streaming", "Emerging Markets"],
    companies: ["JioBLAST", "Chess.com", "Esports World Cup", "Indian Esports Clubs"],
    publishedAt: "2026-07-04",
    sourceUrl: "https://timesofindia.indiatimes.com/sports/chess/this-is-indias-moment-why-the-nation-of-1-4-billion-now-has-a-dedicated-pathway-to-esports-world-cup/articleshow/132173577.cms",
    visual: { image: "/images/intelligence/esports-arena.webp", alt: "Futuristic esports arena with viewership heatmap and stage lighting" }
  },
  {
    id: "le-011",
    slug: "kai-cenat-dual-platform-return-tests-streaming-exclusivity",
    title: "Kai Cenat dual-platform return tests streaming exclusivity",
    source: "Times of India",
    sourceCredibility: "Trade press",
    category: "Esports",
    tldr: "Kai Cenat's July 6 return is expected to stream on both Twitch and YouTube, reinforcing a multi-platform creator strategy.",
    fullTldr: "Times of India reported that Kai Cenat's return stream after a hiatus would broadcast across Twitch and YouTube. For gaming and esports, the important signal is not one creator's schedule; it is the continued weakening of single-platform exclusivity as top creators optimize reach, resilience, and deal leverage.",
    whyItMatters: "Creator distribution shapes game launches, esports viewership, and sponsor reach. Multi-platform broadcasts reduce platform dependency and raise the price of creator access.",
    possibleImpact: "Expect more launch campaigns to buy creator reach across Twitch, YouTube, TikTok, and short-form clips instead of treating one live platform as enough.",
    trendAnalysis: "The trend is creator portability: top streamers are acting more like media networks with audience rights spread across platforms.",
    impactScore: 74,
    trendScore: 36,
    confidence: 72,
    sectors: ["Streaming", "Creator Economy", "Esports", "Game Marketing"],
    companies: ["Twitch", "YouTube", "Kai Cenat", "Game Publishers"],
    publishedAt: "2026-07-05",
    sourceUrl: "https://timesofindia.indiatimes.com/world/us-streamers/why-did-kai-cenat-disappear-from-streaming-everything-ahead-of-his-july-6-return-stream/articleshow/132187401.cms",
    visual: { image: "/images/intelligence/esports-arena.webp", alt: "Futuristic esports arena with viewership heatmap and stage lighting" }
  },
  {
    id: "le-012",
    slug: "fortnite-star-wars-tools-show-licensed-ugc-entering-production-mode",
    title: "Fortnite Star Wars tools show licensed UGC entering production mode",
    source: "The Verge",
    sourceCredibility: "Trade press",
    category: "Platform",
    tldr: "Epic and Disney are letting Fortnite creators build Star Wars experiences, with a revenue share attached to licensed islands.",
    fullTldr: "The Verge reported that Epic and Disney opened Star Wars assets to UEFN creators, with publishing support and a Disney revenue share. It is an older signal still relevant this week because creator-led games are becoming a licensing channel where brands, platforms, and independent builders all share the economics.",
    whyItMatters: "Licensed UGC can turn a game platform into a semi-official franchise factory, but only if rights, revenue share, moderation, and discovery are clear.",
    possibleImpact: "Expect more IP owners to test controlled creator asset libraries, platform-specific revenue shares, and event-linked publishing windows.",
    trendAnalysis: "The trend is franchise tools as platform strategy: brands are moving from one-off collaborations toward reusable creator production kits.",
    impactScore: 83,
    trendScore: 41,
    confidence: 84,
    sectors: ["Creator Economy", "UGC", "Game Engines", "Licensed IP"],
    companies: ["Epic Games", "Disney", "Fortnite", "Unreal Editor for Fortnite"],
    publishedAt: "2026-03-19",
    sourceUrl: "https://www.theverge.com/games/897163/fortnite-star-wars-creators-uefn-epic-games-disney",
    visual: { image: "/images/intelligence/studio-engine.webp", alt: "Holographic game engine viewport with asset pipeline geometry" }
  },
  {
    id: "le-013",
    slug: "roblox-cube-3d-keeps-ai-creation-pressure-on-platforms",
    title: "Roblox Cube 3D keeps AI creation pressure on platforms",
    source: "Roblox Cube 3D reference",
    sourceCredibility: "Official source",
    category: "AI",
    tldr: "Roblox's Cube 3D model and 4D creation tools keep UGC platforms in the AI asset-generation race.",
    fullTldr: "Roblox's Cube 3D materials describe a mesh-generation model integrated with Roblox Studio and creator APIs, with public model resources on GitHub and Hugging Face. The strategic signal is that AI asset generation is moving from novelty demos into platform-native creation workflows.",
    whyItMatters: "UGC platforms win when more creators can make usable objects faster. AI mesh generation could lower creation friction while raising moderation, quality, and IP provenance demands.",
    possibleImpact: "Expect more platform-native AI tools for meshes, animation, scripting, thumbnails, and localization, paired with stronger safety filters and audit trails.",
    trendAnalysis: "The trend is embedded AI creation: platforms are putting generative tools directly into creator workflows instead of leaving them as external apps.",
    impactScore: 82,
    trendScore: 42,
    confidence: 78,
    sectors: ["Game AI", "UGC", "Creator Tools", "Mobile"],
    companies: ["Roblox", "Hugging Face", "GitHub", "Creator Studios"],
    publishedAt: "2026-02-05",
    sourceUrl: "https://github.com/Roblox/cube",
    visual: { image: "/images/intelligence/ai-npcs.webp", alt: "Holographic AI NPC intelligence system inside a dark gaming command center" }
  },
  {
    id: "le-014",
    slug: "pc-long-tail-still-defends-catalog-first-publishing",
    title: "PC long tail still defends catalog-first publishing",
    source: "PC Gamer",
    sourceCredibility: "Market analysis",
    category: "Business",
    tldr: "Newzoo's PC and console read keeps highlighting the durability of catalog revenue outside the biggest titles.",
    fullTldr: "PC Gamer's coverage of Newzoo's 2026 PC and console report found more than half of Western PC revenue coming from games outside the top 20. In a week dominated by studio cuts and hardware-price pressure, catalog compounding remains one of the strongest counter-signals for sustainable publishing.",
    whyItMatters: "PC revenue is less dependent on a handful of annualized blockbusters than many console strategies. That rewards mod support, discounts, updates, and community durability.",
    possibleImpact: "Expect publishers to protect older PC titles, fund smaller updates, and use Steam events as a portfolio-management tool rather than only a launch tool.",
    trendAnalysis: "The trend is long-tail resilience: PC storefronts reward games that keep earning attention after launch through updates, discounts, mods, and community content.",
    impactScore: 81,
    trendScore: 39,
    confidence: 84,
    sectors: ["PC Gaming", "Catalog", "Steam", "Publishing"],
    companies: ["Newzoo", "Steam", "PC Publishers", "Independent Studios"],
    publishedAt: "2026-04-16",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/analysts-say-pc-gaming-is-now-the-one-platform-where-more-than-50-percent-of-revenue-comes-from-games-outside-the-top-20/",
    visual: { image: "/images/intelligence/business-market.webp", alt: "Dark gaming market intelligence terminal with holographic charts" }
  },
  {
    id: "le-015",
    slug: "global-games-market-growth-still-masks-studio-stress",
    title: "Global games market growth still masks studio stress",
    source: "GamesRadar+",
    sourceCredibility: "Market analysis",
    category: "Business",
    tldr: "Newzoo's estimate that games revenue passed $200B keeps clashing with layoffs and studio consolidation.",
    fullTldr: "GamesRadar covered Newzoo's estimate that global games revenue passed $200 billion in 2025, with mobile, PC, and console all contributing large pools of spend. This remains a useful weekly anchor because this week's Xbox cuts show that market growth is not translating evenly into studio security.",
    whyItMatters: "A growing top-line market can still be a difficult operating environment if revenue concentrates around the largest platforms, live services, and evergreen IP.",
    possibleImpact: "Expect capital to keep flowing toward mobile scale, UGC platforms, proven franchises, and live-ops teams while new premium bets face higher approval bars.",
    trendAnalysis: "The trend is unequal expansion: aggregate market growth coexists with layoffs, project cancellations, and tighter funding for mid-budget studios.",
    impactScore: 84,
    trendScore: 40,
    confidence: 80,
    sectors: ["Market Data", "Mobile Gaming", "PC Gaming", "Publishing"],
    companies: ["Newzoo", "Mobile Publishers", "Console Publishers", "PC Publishers"],
    publishedAt: "2026-06-18",
    sourceUrl: "https://www.gamesradar.com/games/amid-all-the-closures-and-layoffs-the-global-games-market-has-apparently-passed-usd200-billion-in-yearly-revenue-for-the-first-time-ever-says-analytics-firm/",
    visual: { image: "/images/intelligence/business-market.webp", alt: "Dark gaming market intelligence terminal with holographic charts" }
  }
];
export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
