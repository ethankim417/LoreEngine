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
export const briefSnapshotDate = "2026-07-28";

const visuals = {
  business: { image: "/images/intelligence/business-market.webp", alt: "Dark gaming market intelligence terminal with holographic charts" },
  hardware: { image: "/images/intelligence/hardware-ai.webp", alt: "Close-up of a futuristic GPU board with glowing compute traces" },
  ai: { image: "/images/intelligence/ai-npcs.webp", alt: "Holographic AI system inside a gaming command center" },
  platform: { image: "/images/intelligence/platform-strategy.webp", alt: "Abstract cross-platform gaming network with cloud and device nodes" },
  esports: { image: "/images/intelligence/esports-arena.webp", alt: "Futuristic esports arena with viewership heatmap and stage lighting" }
};

export const articles: Article[] = [
  {
    id: "le-001", slug: "roblox-build-moves-ai-game-creation-onto-phones", title: "Roblox Build moves AI game creation onto phones",
    source: "Roblox", sourceCredibility: "Official source", category: "AI",
    tldr: "Roblox unveiled a mobile-first Build tab that can turn prompts into playable, publishable experiences.",
    fullTldr: "Roblox introduced Build, a creation surface inside its main mobile app, alongside AI tools intended to help users turn text prompts into playable experiences. A public alpha is scheduled to begin in New Zealand on July 28.",
    whyItMatters: "Creation no longer starts only in a desktop editor. Moving authoring into the consumer app sharply widens the top of Roblox's creator funnel.",
    possibleImpact: "Roblox could gain more first-time creators and content velocity, while moderation, originality, discovery, and creator earnings become harder platform problems.",
    trendAnalysis: "Game creation is becoming an in-product activity: UGC platforms are collapsing the distance between playing, prompting, editing, and publishing.",
    impactScore: 96, trendScore: 50, confidence: 94, sectors: ["Game AI", "UGC", "Mobile", "Creator Tools"], companies: ["Roblox", "Unity", "Epic Games"], publishedAt: "2026-07-16",
    sourceUrl: "https://www.nasdaq.com/press-release/roblox-introduces-build-new-way-create-platform-2026-07-16", visual: visuals.ai
  },
  {
    id: "le-002", slug: "xbox-cuts-reach-doom-veterans", title: "Xbox cuts reach the teams that built modern Doom",
    source: "Game Developer", sourceCredibility: "Trade press", category: "Studio",
    tldr: "Game Developer reports that two thirds of the remaining Doom (2016) developers were cut in Xbox's latest restructuring.",
    fullTldr: "The report adds a sharper production consequence to Microsoft's July reset: institutional knowledge at id Software has been reduced even as the studio says it retains the team needed to keep building its games and technology.",
    whyItMatters: "Headcount reductions at a technically influential studio can affect engine stewardship, mentoring, delivery risk, and the continuity behind a flagship franchise.",
    possibleImpact: "Expect closer scrutiny of id Tech investment, release scope, outsourcing, retention, and whether portfolio margin targets are compatible with specialist teams.",
    trendAnalysis: "Publisher consolidation is shifting from acquiring creative capacity to aggressively testing how much of that capacity must remain internal.",
    impactScore: 94, trendScore: 48, confidence: 88, sectors: ["Studios", "Labor", "AAA Publishing", "Game Engines"], companies: ["Microsoft", "Xbox", "id Software", "Bethesda"], publishedAt: "2026-07-20",
    sourceUrl: "https://www.gamedeveloper.com/business/two-thirds-of-remaining-doom-2016-devs-laid-off-during-latest-round-of-xbox-cuts", visual: visuals.business
  },
  {
    id: "le-003", slug: "rtx-50-prices-jump-across-china", title: "RTX 50 prices jump across China as memory pressure spreads",
    source: "Tom's Hardware", sourceCredibility: "Trade press", category: "Hardware",
    tldr: "MSI and Colorful raised Chinese RTX 50-series prices by as much as 59%, signaling broader board-level cost pressure.",
    fullTldr: "Distributor pricing shows increases across the RTX 50 lineup in China, with AMD and Intel products also exposed to the memory and component squeeze. Earlier supply warnings are becoming visible retail pressure.",
    whyItMatters: "A broad price reset can slow PC upgrades, compress board-partner margins, and make installed-base optimization more important for studios.",
    possibleImpact: "Players may delay upgrades or trade down, while developers extend older-GPU support and platform holders lean harder on upscaling.",
    trendAnalysis: "AI-led memory demand is no longer only delaying future products; it is increasingly altering current gaming-hardware prices and upgrade cycles.",
    impactScore: 94, trendScore: 48, confidence: 86, sectors: ["GPUs", "Memory", "PC Gaming", "Supply Chain"], companies: ["NVIDIA", "AMD", "Intel", "MSI", "Colorful"], publishedAt: "2026-07-27",
    sourceUrl: "https://www.tomshardware.com/pc-components/gpus/msi-and-colorful-raise-nvidia-rtx-50-series-prices-in-china-by-up-to-59-percent-across-the-entire-lineup-change-in-distributer-pricing-suggests-gpu-price-hikes-are-on-the-way", visual: visuals.hardware
  },
  {
    id: "le-004", slug: "atari-universal-expand-classic-games-to-film", title: "Atari and Universal expand classic games into film",
    source: "Game Developer", sourceCredibility: "Trade press", category: "Business",
    tldr: "Atari and Universal will develop films around classic properties including Asteroids and Missile Command.",
    fullTldr: "The companies are extending recognizable arcade-era intellectual property into film, using familiar names and iconography rather than story-heavy source material.",
    whyItMatters: "The deal tests how far nostalgia and brand recognition can carry adaptations when the original games provide only a thin narrative foundation.",
    possibleImpact: "Successful films could reactivate dormant catalogs across licensing, remasters, merchandise, and new games.",
    trendAnalysis: "Game companies continue treating back catalogs as transmedia portfolios, separating adaptation value from current game sales.",
    impactScore: 87, trendScore: 45, confidence: 90, sectors: ["Film", "Licensing", "IP", "Publishing"], companies: ["Atari", "Universal Pictures"], publishedAt: "2026-07-27",
    sourceUrl: "https://www.gamedeveloper.com/business/atari-and-universal-to-create-movies-based-on-classic-properties-including-asteroids-and-missile-command", visual: visuals.business
  },
  {
    id: "le-005", slug: "scopely-reorganizes-stumble-guys", title: "Scopely reorganizes Stumble Guys after its Pokémon Go expansion",
    source: "Game Developer", sourceCredibility: "Trade press", category: "Gaming",
    tldr: "Scopely is reorganizing the Stumble Guys team as its portfolio grows around Pokémon Go and other scaled live services.",
    fullTldr: "Game Developer reported another mobile-team reorganization at Scopely. The move lands after the company's expansion through Pokémon Go and highlights continuing portfolio triage inside large live-service operators.",
    whyItMatters: "Mobile scale does not remove content risk. Mature live games must continually justify staffing against retention, acquisition cost, and portfolio opportunity.",
    possibleImpact: "Resources may shift toward fewer global franchises, while smaller live teams face tighter milestone and profitability requirements.",
    trendAnalysis: "Mobile consolidation is producing bigger portfolios but also more frequent internal capital reallocation between live products.",
    impactScore: 85, trendScore: 42, confidence: 83, sectors: ["Mobile", "Live Services", "M&A", "Labor"], companies: ["Scopely", "Stumble Guys", "Pokémon Go", "Savvy Games Group"], publishedAt: "2026-07-16",
    sourceUrl: "https://www.gamedeveloper.com/business/pokemon-go-owner-scopely-reorganizes-stumble-guys-team", visual: visuals.business
  },
  {
    id: "le-006", slug: "epic-store-leader-moves-to-saber", title: "Epic Games Store leader moves to Saber Interactive",
    source: "PC Gamer", sourceCredibility: "Trade press", category: "Business",
    tldr: "Steve Allison left Epic's PC storefront after eight years to become Saber's chief business officer.",
    fullTldr: "Allison helped steer Epic Games Store through its free-game acquisition strategy and growth to a reported 78 million monthly active users. His move gives Saber experienced storefront and publishing leadership after its separation from Embracer.",
    whyItMatters: "Executive movement can transfer platform economics, dealmaking knowledge, and developer relationships into a newly independent publisher group.",
    possibleImpact: "Saber may pursue more ambitious publishing, distribution, or partnership models while Epic refreshes leadership for its challenge to Steam.",
    trendAnalysis: "The post-conglomerate market is redistributing experienced operators from centralized platforms into independent publishing networks.",
    impactScore: 84, trendScore: 41, confidence: 88, sectors: ["PC Stores", "Publishing", "Leadership", "Distribution"], companies: ["Epic Games", "Saber Interactive", "Embracer", "Valve"], publishedAt: "2026-07-14",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/epic-games-store-boss-quits-after-8-years-to-take-up-new-role-at-saber-interactive/", visual: visuals.platform
  },
  {
    id: "le-007", slug: "gameenginebench-tests-agents-in-real-unreal-projects", title: "GameEngineBench tests coding agents inside real Unreal projects",
    source: "arXiv", sourceCredibility: "Market analysis", category: "AI",
    tldr: "A new benchmark evaluates coding agents on 110 scoped C++ tasks across nine real Unreal Engine 5 repositories.",
    fullTldr: "GameEngineBench covers gameplay, multiplayer, animation, UI, persistence, XR, online services, and rendering plugins in executable runtime environments. It shifts evaluation from toy code generation toward game-production constraints.",
    whyItMatters: "Studios need evidence that agents can modify engine code without breaking runtime behavior; generic coding benchmarks do not measure that risk.",
    possibleImpact: "Tool vendors may adopt repository-level game tests, while studios build private evals before allowing agents into production branches.",
    trendAnalysis: "Game AI tooling is moving from impressive demos toward domain-specific evaluation, reproducibility, and runtime verification.",
    impactScore: 83, trendScore: 45, confidence: 86, sectors: ["Game AI", "Unreal Engine", "Developer Tools", "Evaluation"], companies: ["Epic Games", "AI Coding Vendors"], publishedAt: "2026-07-03",
    sourceUrl: "https://arxiv.org/abs/2607.03525", visual: visuals.ai
  },
  {
    id: "le-008", slug: "nvidia-sega-rtx-spark-partnership", title: "NVIDIA and Sega make AI reconstruction part of the game roadmap",
    source: "Tom's Hardware", sourceCredibility: "Trade press", category: "AI",
    tldr: "Sega will support NVIDIA RTX Spark in future games, beginning with Virtua Fighter Crossroads.",
    fullTldr: "The partnership centers NVIDIA's compact GB10 system and DLSS-related technology in a publisher roadmap. Limited memory bandwidth makes reconstruction important to achieving usable game performance.",
    whyItMatters: "Vendor-specific AI rendering is moving upstream from a settings-menu option into co-development, marketing, and production planning.",
    possibleImpact: "More publishers may sign hardware partnerships, while QA teams face a larger matrix of generated-frame and reconstruction behavior.",
    trendAnalysis: "AI rendering is becoming a platform relationship as much as a graphics feature, increasing GPU vendors' influence over presentation pipelines.",
    impactScore: 81, trendScore: 43, confidence: 84, sectors: ["AI Rendering", "GPUs", "Publishing", "PC Gaming"], companies: ["NVIDIA", "Sega"], publishedAt: "2026-07-15",
    sourceUrl: "https://www.tomshardware.com/video-games/pc-gaming/nvidia-and-sega-team-up-to-deliver-rtx-spark-support-for-future-games-partnership-kicks-off-next-year-with-upcoming-virtua-fighter-crossroads", visual: visuals.hardware
  },
  {
    id: "le-009", slug: "playstation-plus-leans-on-catalog-scale", title: "PlayStation Plus leans on recognizable catalog scale",
    source: "PlayStation Blog", sourceCredibility: "Official source", category: "Platform",
    tldr: "Sony's July catalog adds Avatar, Rise of the Ronin, and PS2 classics as subscriptions compete on recognizable depth.",
    fullTldr: "The July PlayStation Plus catalog combines recent premium releases with legacy titles such as Psi-Ops and Indigo Prophecy. The mix shows how subscription value is built from both current third-party licensing and preservation-era catalog.",
    whyItMatters: "Catalog composition affects engagement, licensing costs, premium-tier differentiation, and how long publishers can monetize older releases.",
    possibleImpact: "Sony may keep using selective recent releases and classics to defend retention without committing every new first-party game on day one.",
    trendAnalysis: "Console subscriptions are converging on portfolio curation rather than pure release volume, with catalog identity becoming a competitive lever.",
    impactScore: 80, trendScore: 38, confidence: 96, sectors: ["Subscriptions", "Console", "Catalog", "Digital Distribution"], companies: ["Sony", "PlayStation", "Ubisoft", "Koei Tecmo"], publishedAt: "2026-07-15",
    sourceUrl: "https://blog.playstation.com/2026/07/15/playstation-plus-game-catalog-for-july-avatar-frontiers-of-pandora-rise-of-the-ronin-firefighting-simulator-ignite-and-more/", visual: visuals.platform
  },
  {
    id: "le-010", slug: "unions-challenge-xbox-layoff-process", title: "Unions challenge Microsoft's Xbox layoff process",
    source: "Game Developer", sourceCredibility: "Trade press", category: "Business",
    tldr: "European labor groups are taking legal action over how Microsoft handled parts of the Xbox restructuring.",
    fullTldr: "The dispute moves the Xbox reset beyond portfolio strategy into consultation, worker rights, and compliance. Cross-border cuts can proceed at different speeds because local labor frameworks impose different obligations.",
    whyItMatters: "Global publishers cannot execute a single restructuring playbook everywhere; process risk can affect timing, cost, morale, and studio continuity.",
    possibleImpact: "Publishers may budget longer consultation windows and stronger local legal review, while unions coordinate more actively across studio networks.",
    trendAnalysis: "Labor organization is becoming a durable strategic constraint on multinational game-industry restructuring.",
    impactScore: 82, trendScore: 41, confidence: 86, sectors: ["Labor", "Regulation", "Studios", "Publishing"], companies: ["Microsoft", "Xbox", "European Game Workers"], publishedAt: "2026-07-16",
    sourceUrl: "https://www.gamedeveloper.com/business/unions-take-legal-action-against-microsoft-for-allegedly-mishandling-xbox-layoffs", visual: visuals.business
  },
  {
    id: "le-011", slug: "ewc-packages-esports-as-a-season", title: "Esports World Cup packages competition as a full season",
    source: "Esports World Cup", sourceCredibility: "Official source", category: "Esports",
    tldr: "EWC's seven-week calendar combines club standings, many game championships, creators, tickets, and festival programming.",
    fullTldr: "The official event hub shows the 2026 competition continuing through August 23 across 25 events in 24 esports. The commercial product extends beyond matches into club identity, creator distribution, tourism, and live attendance.",
    whyItMatters: "Large esports operators are trying to create recurring, cross-title audience habits and sponsor inventory that individual tournaments cannot provide alone.",
    possibleImpact: "Publishers and teams may place more value on cross-game club programs, co-streaming, seasonal narratives, and centralized event partnerships.",
    trendAnalysis: "Esports is being bundled into festival-scale seasons designed to aggregate fragmented game communities under one commercial umbrella.",
    impactScore: 86, trendScore: 44, confidence: 94, sectors: ["Esports", "Streaming", "Live Events", "Creator Economy"], companies: ["Esports World Cup", "Team Falcons", "Team Vitality"], publishedAt: "2026-07-20",
    sourceUrl: "https://esportsworldcup.com/en", visual: visuals.esports
  },
  {
    id: "le-012", slug: "streaming-growth-centers-creators-not-games", title: "Streaming growth centers creators as much as games",
    source: "Digiday", sourceCredibility: "Trade press", category: "Esports",
    tldr: "Streaming data shows creator-led entertainment and Just Chatting competing with games for audience time.",
    fullTldr: "Digiday's review of streaming data notes Fortnite led game hours streamed while Just Chatting drew hundreds of millions of viewing hours. The platform product is increasingly personality-led rather than organized only around game directories.",
    whyItMatters: "Publishers compete with creator formats for attention even inside gaming-native platforms, changing campaign design and sponsorship value.",
    possibleImpact: "Budgets may shift toward personality-led launches, co-streams, and durable creator relationships instead of short paid-media bursts.",
    trendAnalysis: "Livestreaming is evolving from game discovery infrastructure into a broader creator entertainment market.",
    impactScore: 79, trendScore: 42, confidence: 83, sectors: ["Streaming", "Creators", "Advertising", "Game Discovery"], companies: ["Twitch", "YouTube", "Fortnite", "Streamlabs"], publishedAt: "2026-07-06",
    sourceUrl: "https://digiday.com/media/in-graphic-detail-the-state-of-streaming-highlights-the-power-of-creators/", visual: visuals.esports
  },
  {
    id: "le-013", slug: "unreal-6-converges-engine-and-creator-platform", title: "Unreal Engine 6 converges the engine with a creator platform",
    source: "Unreal Engine", sourceCredibility: "Official source", category: "AI",
    tldr: "Epic's UE6 roadmap brings UEFN and Unreal workflows together while opening engine capabilities to AI integrations.",
    fullTldr: "Epic plans an Unreal Engine 6 early-access release for late 2027, with Scene Graph and Verse central to the new gameplay framework. The roadmap also describes model choice and MCP-based integration for AI-assisted workflows.",
    whyItMatters: "The dominant high-end engine is being redesigned around persistent creator ecosystems and agent-accessible tools, not only packaged-game production.",
    possibleImpact: "Studios face migration and skills decisions around Verse, Scene Graph, AI policy, and compatibility while Epic gains a unified creation stack.",
    trendAnalysis: "Professional engines and UGC platforms are converging, with AI acting as an interface layer over increasingly shared production systems.",
    impactScore: 89, trendScore: 46, confidence: 93, sectors: ["Game Engines", "Game AI", "UGC", "Developer Tools"], companies: ["Epic Games", "Unreal Engine", "Fortnite"], publishedAt: "2026-06-17",
    sourceUrl: "https://www.unrealengine.com/en-US/news/the-road-to-unreal-engine-6", visual: visuals.ai
  },
  {
    id: "le-014", slug: "nintendo-eu-battery-rules-shape-hardware-lifecycles", title: "EU battery rules reshape Nintendo hardware lifecycles",
    source: "The Verge", sourceCredibility: "Trade press", category: "Hardware",
    tldr: "Nintendo will phase out original Switch sales in Europe as user-replaceable battery rules approach.",
    fullTldr: "Nintendo plans updated European hardware to comply with battery regulation, turning repairability into a lifecycle requirement for a mature console family. Compliance planning now extends beyond launch into regional product sunsets.",
    whyItMatters: "Regulation can force platform holders to redesign hardware, repair flows, accessories, and inventory long after the original launch.",
    possibleImpact: "Hardware makers may adopt more serviceable designs, region-specific SKUs, and longer compliance planning for handheld devices.",
    trendAnalysis: "Repairability and sustainability rules are becoming platform-roadmap inputs rather than after-sale obligations.",
    impactScore: 78, trendScore: 37, confidence: 87, sectors: ["Hardware", "Regulation", "Console", "Repair"], companies: ["Nintendo", "European Union"], publishedAt: "2026-07-07",
    sourceUrl: "https://www.theverge.com/games/961632/nintendo-switch-europe-discontinued", visual: visuals.hardware
  },
  {
    id: "le-015", slug: "market-growth-still-masks-studio-stress", title: "Games market growth still masks studio stress",
    source: "Newzoo", sourceCredibility: "Market analysis", category: "Business",
    tldr: "A growing global games market continues to coexist with layoffs, project cuts, and weak mid-budget economics.",
    fullTldr: "Newzoo's market outlook remains a useful scale anchor across mobile, PC, and console, but this week's studio cuts show that aggregate consumer spending does not distribute evenly across publishers, teams, or projects.",
    whyItMatters: "Top-line market growth can mislead strategy if companies ignore concentration, acquisition costs, production inflation, and catalog competition.",
    possibleImpact: "Investors and studios may emphasize profitability by segment, retention, and portfolio quality rather than treating total market growth as a universal tailwind.",
    trendAnalysis: "The industry is expanding unevenly: scaled platforms and durable franchises capture more value while many production teams face tighter capital.",
    impactScore: 84, trendScore: 40, confidence: 89, sectors: ["Market Data", "Publishing", "Mobile", "PC", "Console"], companies: ["Newzoo", "Global Publishers"], publishedAt: "2026-07-20",
    sourceUrl: "https://newzoo.com/resources/blog/global-games-market-update", visual: visuals.business
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
