export type ArticleCategory = "Gaming" | "AI" | "Business" | "Hardware" | "Esports" | "Platform" | "Studio";

export type SourceCredibility = "Official source" | "Trade press" | "Market analysis" | "Vendor report";

export const sourceCredibilityTypes: SourceCredibility[] = ["Official source", "Trade press", "Market analysis", "Vendor report"];

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
  visual: { image: string; alt: string };
};

export const categories: ArticleCategory[] = ["Gaming", "AI", "Business", "Hardware", "Esports", "Platform", "Studio"];
export const briefSnapshotDate = "2026-08-17";

const visuals = {
  business: { image: "/images/intelligence/business-market.webp", alt: "Dark gaming market intelligence terminal with holographic charts" },
  hardware: { image: "/images/intelligence/hardware-ai.webp", alt: "Close-up of a futuristic GPU board with glowing compute traces" },
  ai: { image: "/images/intelligence/ai-npcs.webp", alt: "Holographic AI system inside a gaming command center" },
  platform: { image: "/images/intelligence/platform-strategy.webp", alt: "Abstract cross-platform gaming network with cloud and device nodes" },
  esports: { image: "/images/intelligence/esports-arena.webp", alt: "Futuristic esports arena with viewership heatmap and stage lighting" }
};

export const articles: Article[] = [
  {
    id: "le-001", slug: "us-gpu-prices-jump-as-memory-pressure-spreads", title: "GPU price shock reaches the US retail shelf",
    source: "Tom's Hardware", sourceCredibility: "Trade press", category: "Hardware",
    tldr: "Median US listings show RTX 50-series prices rising as much as 39%, extending Asia's GPU inflation into another major market.",
    fullTldr: "Tom's Hardware tracked median Newegg listings and found sharp August increases across current GeForce cards, including a 36% move for the RTX 5070 and 27% for the RTX 5060.",
    whyItMatters: "The price cycle is no longer a regional warning. It is reaching retail inventories that define PC upgrade budgets and developers' addressable hardware base.",
    possibleImpact: "Players may keep older cards longer, while studios prioritize scalable settings, reconstruction, and lower-memory configurations.",
    trendAnalysis: "AI infrastructure demand and constrained memory supply are turning gaming GPU affordability into a global platform constraint.",
    impactScore: 98, trendScore: 50, confidence: 91, sectors: ["GPUs", "Memory", "PC Gaming", "Supply Chain"], companies: ["NVIDIA", "AMD", "Newegg"], publishedAt: "2026-08-11",
    sourceUrl: "https://www.tomshardware.com/pc-components/gpus/geforce-rtx-50-series-gpu-prices-spike-as-much-as-39-percent-as-blackwell-price-hikes-hit-the-us-rtx-5070-gets-a-36-percent-hike-rtx-5060-up-27-percent-at-the-median-of-newegg-listings", visual: visuals.hardware
  },
  {
    id: "le-002", slug: "ea-private-ownership-turns-to-cost-discipline", title: "EA's private ownership puts cost discipline first",
    source: "GamesRadar", sourceCredibility: "Trade press", category: "Business",
    tldr: "After EA's $55 billion take-private closed, reporting points to a $700 million annual cost-reduction target.",
    fullTldr: "The ownership change combines a large debt load with an explicit efficiency program, putting portfolio scope, staffing, and investment choices under immediate scrutiny.",
    whyItMatters: "One of gaming's broadest publisher catalogs is now governed by private-capital return requirements rather than public-market pacing.",
    possibleImpact: "EA may concentrate spending on proven franchises, centralize functions, and apply harder return thresholds to smaller or experimental projects.",
    trendAnalysis: "Large gaming acquisitions are moving quickly from deal completion to operating-model compression.",
    impactScore: 97, trendScore: 49, confidence: 87, sectors: ["M&A", "AAA Publishing", "Labor", "Private Equity"], companies: ["Electronic Arts", "PIF", "Silver Lake", "Affinity Partners"], publishedAt: "2026-08-05",
    sourceUrl: "https://www.gamesradar.com/games/mass-layoffs-expected-at-ea-as-the-now-private-publisher-reportedly-tells-its-new-debt-masters-that-its-going-to-cut-usd700-million-in-annual-costs/", visual: visuals.business
  },
  {
    id: "le-003", slug: "take-two-sees-streaming-as-hardware-pressure-valve", title: "Take-Two sees streaming as gaming's hardware pressure valve",
    source: "PC Gamer", sourceCredibility: "Trade press", category: "Platform",
    tldr: "Take-Two's CEO expects commercial game streaming to become meaningful within three years as console and PC hardware costs rise.",
    fullTldr: "Strauss Zelnick framed streaming as a practical response to increasingly expensive local hardware, connecting component inflation to distribution strategy.",
    whyItMatters: "Cloud gaming becomes more strategically credible when ownership hardware is the affordability bottleneck rather than network reach alone.",
    possibleImpact: "Publishers may revisit cloud rights, latency-sensitive design, subscription packaging, and direct-to-player streaming partnerships.",
    trendAnalysis: "Hardware inflation is accelerating the shift from device-led access toward service-led access.",
    impactScore: 94, trendScore: 47, confidence: 86, sectors: ["Cloud Gaming", "Platform Strategy", "Distribution", "Hardware"], companies: ["Take-Two", "Microsoft", "NVIDIA", "Sony"], publishedAt: "2026-08-07",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/take-two-ceo-says-he-expects-the-games-industry-to-be-in-commercial-streaming-mode-within-3-years-which-is-great-news-if-you-hate-owning-things/", visual: visuals.platform
  },
  {
    id: "le-004", slug: "japan-mobile-game-bankruptcies-hit-record-pace", title: "Japan's mobile game bankruptcies hit a record pace",
    source: "Teikoku Databank", sourceCredibility: "Market analysis", category: "Gaming",
    tldr: "Ten Japanese smartphone-game operators failed in the first seven months of 2026, already far above 2025's total.",
    fullTldr: "Teikoku Databank says the sector is on course to exceed its previous annual record as service closures, rising operating costs, and fierce competition hit small developers.",
    whyItMatters: "The data turns persistent mobile-market concentration into a measurable survival problem for smaller operators.",
    possibleImpact: "Publishers may demand shorter payback windows, reuse more technology, and favor licensed or globally scalable titles.",
    trendAnalysis: "Mobile's mature live-service economy increasingly rewards capital depth, durable acquisition channels, and large content pipelines.",
    impactScore: 93, trendScore: 48, confidence: 94, sectors: ["Mobile", "Studios", "Live Services", "Market Data"], companies: ["Japanese Mobile Studios", "Teikoku Databank"], publishedAt: "2026-08-08",
    sourceUrl: "https://prtimes.jp/main/html/rd/p/000001404.000043465.html", visual: visuals.business
  },
  {
    id: "le-005", slug: "gamescom-developers-rank-ai-as-biggest-change", title: "Gamescom developers rank AI as gaming's biggest change",
    source: "Creative Bloq", sourceCredibility: "Trade press", category: "AI",
    tldr: "A Gamescom speaker survey places AI first among forces expected to reshape game development.",
    fullTldr: "The 2026 survey shows broad agreement that AI will change production, even as developers remain divided on where gains and risks will land.",
    whyItMatters: "AI adoption is becoming an operating-model question across disciplines rather than a specialist tooling experiment.",
    possibleImpact: "Studios may formalize acceptable-use policy, training, provenance controls, and task-level return measurement.",
    trendAnalysis: "The debate is shifting from whether game teams use AI to how they govern and measure it.",
    impactScore: 90, trendScore: 47, confidence: 82, sectors: ["Game AI", "Developer Tools", "Labor", "Production"], companies: ["Gamescom", "Game Studios"], publishedAt: "2026-08-12",
    sourceUrl: "https://www.creativebloq.com/3d/video-game-design/ai-will-have-the-biggest-impact-on-the-future-of-gaming-developers-say", visual: visuals.ai
  },
  {
    id: "le-006", slug: "fortnite-lowers-friction-for-paid-creators", title: "Fortnite lowers the gate for paid creators",
    source: "Epic Developer Community", sourceCredibility: "Official source", category: "Platform",
    tldr: "Epic simplified enrollment in the Fortnite Developer Program so more creators can publish and qualify for payouts.",
    fullTldr: "The August update shortens the route from experimentation to commercial participation inside Fortnite's creator ecosystem.",
    whyItMatters: "Lower onboarding friction expands supply and makes creator acquisition a platform-growth lever.",
    possibleImpact: "Fortnite may gain more islands and first-time developers while discovery, quality control, and payout concentration become more important.",
    trendAnalysis: "UGC platforms are competing on how quickly a player can become an economically active creator.",
    impactScore: 88, trendScore: 45, confidence: 92, sectors: ["UGC", "Creator Economy", "Platform Strategy", "Developer Tools"], companies: ["Epic Games", "Fortnite"], publishedAt: "2026-08-05",
    sourceUrl: "https://forums.unrealengine.com/c/general/announcements/49", visual: visuals.platform
  },
  {
    id: "le-007", slug: "creator-platforms-balance-stars-and-newcomers", title: "Creator platforms quantify the cost of backing newcomers",
    source: "arXiv", sourceCredibility: "Market analysis", category: "AI",
    tldr: "New research models how creator platforms trade immediate revenue from stars against long-term growth from emerging creators.",
    fullTldr: "The paper develops dynamic traffic allocation methods for platforms whose recommendations determine both current monetization and future creator supply.",
    whyItMatters: "Game-creation platforms face the same discovery dilemma: efficient ranking can entrench incumbents and weaken the next generation of hits.",
    possibleImpact: "UGC operators may reserve exposure for new creators and evaluate discovery systems over longer revenue windows.",
    trendAnalysis: "Recommendation is becoming capital allocation for creator ecosystems, not merely content sorting.",
    impactScore: 85, trendScore: 44, confidence: 85, sectors: ["Creator Economy", "Recommendations", "UGC", "Game AI"], companies: ["Roblox", "Epic Games", "Creator Platforms"], publishedAt: "2026-08-03",
    sourceUrl: "https://arxiv.org/abs/2608.02293", visual: visuals.ai
  },
  {
    id: "le-008", slug: "gpu-deals-disappear-into-a-higher-price-baseline", title: "GPU deals disappear into a higher price baseline",
    source: "PC Gamer", sourceCredibility: "Trade press", category: "Hardware",
    tldr: "PC Gamer's price tracker shows high-end cards far above launch pricing and few meaningful discounts across current ranges.",
    fullTldr: "The August comparison gives a market-wide view of NVIDIA, AMD, and Intel listings rather than a single-board anecdote.",
    whyItMatters: "Persistent street pricing, not MSRP, determines the hardware assumptions studios and players can actually afford.",
    possibleImpact: "Upgrade cycles may lengthen and value tiers may gain share, increasing pressure on developers to support older configurations.",
    trendAnalysis: "A temporary component spike is hardening into a higher gaming-compute price floor.",
    impactScore: 91, trendScore: 46, confidence: 88, sectors: ["GPUs", "PC Gaming", "Retail", "Market Data"], companies: ["NVIDIA", "AMD", "Intel"], publishedAt: "2026-08-14",
    sourceUrl: "https://www.pcgamer.com/hardware/graphics-cards/graphics-card-price-watch-deals/", visual: visuals.hardware
  },
  {
    id: "le-009", slug: "high-memory-geforce-cards-take-the-largest-hit", title: "High-memory GeForce cards take the largest price hit",
    source: "PC Gamer", sourceCredibility: "Trade press", category: "Hardware",
    tldr: "Current pricing makes NVIDIA cards above 8 GB especially expensive as memory costs feed through to retail.",
    fullTldr: "The analysis links the sharpest consumer pain to boards with larger memory configurations, reinforcing the direct connection between AI-era memory demand and gaming hardware.",
    whyItMatters: "VRAM is simultaneously becoming more important to new games and more expensive for players to buy.",
    possibleImpact: "Studios may face stronger backlash over memory-heavy releases and vendors may segment premium features more aggressively.",
    trendAnalysis: "The industry's desired performance baseline is moving upward while the affordable hardware baseline moves the other way.",
    impactScore: 92, trendScore: 48, confidence: 86, sectors: ["GPUs", "Memory", "PC Gaming", "Affordability"], companies: ["NVIDIA", "AMD"], publishedAt: "2026-08-14",
    sourceUrl: "https://www.pcgamer.com/hardware/graphics-cards/the-gpu-price-hike-is-here-and-you-should-avoid-any-nvidia-card-with-more-than-8-gb-vram-if-you-value-your-bank-balance/", visual: visuals.hardware
  },
  {
    id: "le-010", slug: "amd-price-rise-erodes-the-value-alternative", title: "AMD's price rise erodes the value alternative",
    source: "TweakTown", sourceCredibility: "Trade press", category: "Hardware",
    tldr: "AMD reportedly raised Radeon board-and-memory kit pricing by at least 10% for August.",
    fullTldr: "The channel report says AMD and NVIDIA are both passing higher memory costs toward partners, narrowing the price refuge for PC builders.",
    whyItMatters: "Competitive pressure cannot protect buyers when the two main vendors share the same supply constraint.",
    possibleImpact: "Intel may gain a value opening, but limited supply and software maturity could constrain how much demand it absorbs.",
    trendAnalysis: "Component inflation is becoming market-wide rather than a premium-vendor problem.",
    impactScore: 89, trendScore: 45, confidence: 82, sectors: ["GPUs", "Memory", "PC Gaming", "Supply Chain"], companies: ["AMD", "NVIDIA", "Intel"], publishedAt: "2026-07-31",
    sourceUrl: "https://www.tweaktown.com/news/112952/amd-radeon-gpu-prices-set-to-increase-by-10-percent-in-august/index.html", visual: visuals.hardware
  },
  {
    id: "le-011", slug: "ewc-packages-esports-as-a-season", title: "Esports World Cup packages competition as a full season",
    source: "Esports World Cup", sourceCredibility: "Official source", category: "Esports",
    tldr: "EWC's closing week combines club standings, major game championships, creators, tickets, and festival programming.",
    fullTldr: "The official event hub shows the 2026 competition continuing through August 23 across 25 events in 24 esports. The commercial product extends beyond matches into club identity, creator distribution, tourism, and live attendance.",
    whyItMatters: "Large esports operators are trying to create recurring, cross-title audience habits and sponsor inventory that individual tournaments cannot provide alone.",
    possibleImpact: "Publishers and teams may place more value on cross-game club programs, co-streaming, seasonal narratives, and centralized event partnerships.",
    trendAnalysis: "Esports is being bundled into festival-scale seasons designed to aggregate fragmented game communities under one commercial umbrella.",
    impactScore: 86, trendScore: 44, confidence: 94, sectors: ["Esports", "Streaming", "Live Events", "Creator Economy"], companies: ["Esports World Cup", "Team Falcons", "Team Vitality"], publishedAt: "2026-08-17",
    sourceUrl: "https://esportsworldcup.com/en", visual: visuals.esports
  },
  {
    id: "le-012", slug: "august-esports-calendar-concentrates-global-attention", title: "August concentrates esports' global attention",
    source: "PandaScore", sourceCredibility: "Market analysis", category: "Esports",
    tldr: "August stacks the Esports World Cup closing events, The International, and major regional leagues into one crowded window.",
    fullTldr: "PandaScore's calendar shows how many top-tier circuits now compete simultaneously for viewers, sponsors, co-streamers, and production attention.",
    whyItMatters: "Calendar density tests whether multi-title esports can grow total audience or simply redistribute the same attention.",
    possibleImpact: "Organizers may invest more in creator distribution, scheduling coordination, and differentiated event formats.",
    trendAnalysis: "Esports is gaining event scale faster than it is solving attention fragmentation.",
    impactScore: 82, trendScore: 43, confidence: 86, sectors: ["Esports", "Streaming", "Sponsorship", "Live Events"], companies: ["Esports World Cup", "Valve", "Riot Games"], publishedAt: "2026-08-03",
    sourceUrl: "https://www.pandascore.co/blog/esports-tournaments-august-2026-calendar", visual: visuals.esports
  },
  {
    id: "le-013", slug: "g5-results-test-mobile-portfolio-resilience", title: "G5 results test mobile portfolio resilience",
    source: "G5 Games", sourceCredibility: "Official source", category: "Business",
    tldr: "G5 scheduled its first-half results call as investors assess whether owned mobile titles can offset a difficult acquisition market.",
    fullTldr: "The August 12 reporting event provides a direct read on a mid-sized mobile publisher operating between small-studio distress and global-platform scale.",
    whyItMatters: "Mid-cap publishers reveal whether mobile economics remain viable outside the largest IP and advertising ecosystems.",
    possibleImpact: "Results may push peers toward fewer launches, stronger owned-IP mixes, and more conservative user-acquisition spending.",
    trendAnalysis: "Mobile strategy is polarizing between scaled portfolios and disciplined niche operators.",
    impactScore: 78, trendScore: 39, confidence: 90, sectors: ["Mobile", "Earnings", "Publishing", "User Acquisition"], companies: ["G5 Games"], publishedAt: "2026-08-12",
    sourceUrl: "https://corporate.g5.com/calendar/earnings-call-interim-report-q2-2026", visual: visuals.business
  },
  {
    id: "le-014", slug: "ea-take-private-closes-at-55-billion", title: "EA's $55 billion take-private officially closes",
    source: "GamesRadar", sourceCredibility: "Trade press", category: "Business",
    tldr: "EA is now privately owned by an investor group led by Saudi Arabia's PIF after the $55 billion transaction closed.",
    fullTldr: "The deal transfers a major publisher and its catalog to a consortium while adding a substantial debt burden to the new ownership structure.",
    whyItMatters: "The transaction changes governance for franchises spanning sports, shooters, simulation, and role-playing games.",
    possibleImpact: "Capital allocation, franchise cadence, labor, and experimental investment may all be reshaped by the new return profile.",
    trendAnalysis: "Sovereign and private capital are taking direct control of strategic gaming catalogs at unprecedented scale.",
    impactScore: 96, trendScore: 49, confidence: 90, sectors: ["M&A", "Publishing", "Private Equity", "IP"], companies: ["Electronic Arts", "PIF", "Silver Lake", "Affinity Partners"], publishedAt: "2026-08-04",
    sourceUrl: "https://www.gamesradar.com/games/ea-and-games-like-the-sims-dragon-age-and-battlefield-are-now-officially-owned-by-saudi-arabia-and-private-equity-as-usd55-billion-deal-closes/", visual: visuals.business
  },
  {
    id: "le-015", slug: "physical-media-debate-moves-to-storefront-economics", title: "Physical-media debate moves to storefront economics",
    source: "GamesRadar", sourceCredibility: "Trade press", category: "Platform",
    tldr: "A former Square Enix finance executive argues a digital-only PlayStation could intensify price competition, citing Steam's discount floor.",
    fullTldr: "The argument reframes the disc debate around storefront rivalry, fees, discounting, and consumer leverage rather than manufacturing alone.",
    whyItMatters: "Removing physical distribution can reduce costs but also concentrates pricing power inside platform-controlled stores.",
    possibleImpact: "Sony may face pressure to demonstrate stronger digital discounts, portability, and ownership protections if discs recede.",
    trendAnalysis: "Platform strategy is shifting from hardware format choice to governance of digital access and price competition.",
    impactScore: 84, trendScore: 42, confidence: 79, sectors: ["Digital Stores", "Physical Media", "Platform Strategy", "Consumer Rights"], companies: ["Sony", "PlayStation", "Valve", "Square Enix"], publishedAt: "2026-08-13",
    sourceUrl: "https://www.gamesradar.com/games/sony-killing-playstation-discs-will-make-ps-store-prices-cheaper-former-square-enix-financial-exec-says-and-you-only-need-to-look-at-steam-to-understand-why/", visual: visuals.platform
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
