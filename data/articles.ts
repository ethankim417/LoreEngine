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

export const briefSnapshotDate = "2026-07-01";

export const articles: Article[] = [
  {
    id: "le-001",
    slug: "ai-game-release-boom-still-favors-the-largest-publishers",
    title: "AI game-release boom still favors the largest publishers",
    source: "Financial Times",
    sourceCredibility: "Trade press",
    category: "AI",
    tldr: "Generative AI is accelerating game output, but revenue and download concentration still sits with the biggest publishers.",
    fullTldr: "The Financial Times reported that 181,000 games launched in the first half of 2026 as AI tools shortened production cycles and lowered the cost of experimentation. The strategic signal is not pure disruption: large publishers still benefit from distribution, data, franchise reach, and marketing scale.",
    whyItMatters: "AI is expanding supply faster than demand. Discovery, trust, and incumbent platform advantages become more important when the number of releases keeps rising.",
    possibleImpact: "Expect more small teams to ship quickly, while storefronts and publishers invest harder in ranking, curation, provenance, and recognizable IP.",
    trendAnalysis: "The trend is AI-driven content inflation meeting platform scarcity: production gets cheaper, but attention remains expensive.",
    impactScore: 94,
    trendScore: 47,
    confidence: 86,
    sectors: ["Game AI", "Publishing", "Discovery", "Indie Devs"],
    companies: ["Major Publishers", "Steam", "Epic Games", "AI Tool Vendors"],
    publishedAt: "2026-07-01",
    sourceUrl: "https://www.ft.com/content/4a4b3f61-e646-421f-bbf5-f5626994e9b7",
    visual: { image: "/images/intelligence/ai-npcs.webp", alt: "Holographic AI NPC intelligence system inside a dark gaming command center" }
  },
  {
    id: "le-002",
    slug: "playstation-next-gen-strategy-moves-beyond-the-living-room",
    title: "PlayStation next-gen strategy moves beyond the living room",
    source: "The Verge",
    sourceCredibility: "Trade press",
    category: "Platform",
    tldr: "Sony told investors the next PlayStation platform needs to broaden usage scenarios beyond TV-only console habits.",
    fullTldr: "Sony's Game & Network Services Q&A, covered by The Verge, framed the next generation around experiences that extend beyond the living room. Remote Play, PlayStation Portal, monitors, and peripherals all point to a platform that has to answer PC and handheld usage patterns.",
    whyItMatters: "Console strategy is shifting from one fixed box under the TV to a set of connected play contexts. That changes how Sony defends engagement against PC, mobile, and handheld ecosystems.",
    possibleImpact: "Expect more PlayStation roadmap scrutiny around handheld access, cloud saves, monitor-first use, and pricing that protects hardware margins.",
    trendAnalysis: "The trend is console unbundling: platform holders are defending identity while play moves across rooms, screens, and devices.",
    impactScore: 91,
    trendScore: 44,
    confidence: 88,
    sectors: ["Console", "Platform Strategy", "Handhelds", "Cloud"],
    companies: ["Sony", "PlayStation", "Microsoft", "Nintendo", "Valve"],
    publishedAt: "2026-06-29",
    sourceUrl: "https://www.theverge.com/games/959191/sony-next-generation-playstation-ps6-beyond-the-living-room",
    visual: { image: "/images/intelligence/platform-strategy.webp", alt: "Abstract cross-platform gaming network with cloud and device nodes" }
  },
  {
    id: "le-003",
    slug: "xbox-price-hike-turns-memory-shortage-into-platform-risk",
    title: "Xbox price hike turns memory shortage into platform risk",
    source: "Business Insider",
    sourceCredibility: "Trade press",
    category: "Hardware",
    tldr: "Microsoft is raising Xbox console prices by $100-$150 from August 1, citing memory and storage cost pressure.",
    fullTldr: "Business Insider reported that Xbox prices will rise again globally, with 512GB models increasing by $100, 1TB models by $150, and the 2TB configuration being discontinued. Microsoft tied the move to memory and storage prices that have already increased sharply.",
    whyItMatters: "Console affordability is becoming a supply-chain problem. When subsidized hardware economics break down, platform growth and software attach rates become harder to protect.",
    possibleImpact: "Expect more financing offers, used-console programs, smaller storage SKUs, and pressure on subscription value messaging before the holiday season.",
    trendAnalysis: "The trend is AI infrastructure demand spilling into consumer hardware costs, forcing gaming platforms to expose price inflation directly.",
    impactScore: 92,
    trendScore: 46,
    confidence: 86,
    sectors: ["Console", "Hardware", "Supply Chain", "Subscriptions"],
    companies: ["Microsoft", "Xbox", "Sony", "Nintendo", "Memory Suppliers"],
    publishedAt: "2026-06-25",
    sourceUrl: "https://www.businessinsider.com/microsoft-xbox-price-increase-series-x-2026-6",
    visual: { image: "/images/intelligence/hardware-ai.webp", alt: "Close-up of a futuristic GPU board with glowing compute traces" }
  },
  {
    id: "le-004",
    slug: "switch-2-sales-surge-while-ps5-and-xbox-units-slide",
    title: "Switch 2 sales surge while PS5 and Xbox units slide",
    source: "TechRadar",
    sourceCredibility: "Trade press",
    category: "Hardware",
    tldr: "Circana data showed Switch 2 as the second fastest-selling game hardware in U.S. history while PS5 and Xbox unit sales weakened.",
    fullTldr: "TechRadar reported that Switch 2 reached 5.9 million U.S. units in its first year and led May 2026 hardware sales by units and dollars. The same readout showed steep PS5 unit declines and weaker Xbox unit demand, underscoring an uneven console cycle.",
    whyItMatters: "Nintendo is proving that differentiated hardware and first-party momentum can still drive unit growth even as the broader console market fights price resistance.",
    possibleImpact: "Expect publishers to prioritize Switch 2 optimization and late ports while Sony and Microsoft lean harder on services, PC releases, and margin protection.",
    trendAnalysis: "The trend is bifurcation: a fresh hybrid console can grow while older premium boxes face affordability and replacement-cycle pressure.",
    impactScore: 90,
    trendScore: 43,
    confidence: 84,
    sectors: ["Console", "Hardware", "Retail", "Publishing"],
    companies: ["Nintendo", "Sony", "Microsoft", "Circana"],
    publishedAt: "2026-06-27",
    sourceUrl: "https://www.techradar.com/gaming/new-report-reveals-the-nintendo-switch-2-is-the-second-fastest-selling-video-game-hardware-in-us-history-as-xbox-and-ps5-unit-sales-struggle",
    visual: { image: "/images/intelligence/hardware-ai.webp", alt: "Close-up of a futuristic GPU board with glowing compute traces" }
  },
  {
    id: "le-005",
    slug: "epic-pitches-unreal-engine-6-as-open-economy-infrastructure",
    title: "Epic pitches Unreal Engine 6 as open-economy infrastructure",
    source: "PC Gamer",
    sourceCredibility: "Trade press",
    category: "Platform",
    tldr: "Tim Sweeney framed Unreal Engine 6 around interoperable content, code, economies, and AI-assisted production.",
    fullTldr: "PC Gamer's Unreal Fest interview with Epic CEO Tim Sweeney positioned UE6 as more than a rendering upgrade. Epic wants social systems, content, code, and economies to become more portable across games and platforms, with AI tools reducing development friction.",
    whyItMatters: "Epic is trying to turn engine adoption into ecosystem leverage. If successful, engine choice could increasingly shape commerce, identity, and creator economics.",
    possibleImpact: "Expect studios to evaluate UE6 not only for visuals, but for tooling, interoperability promises, AI governance, and platform partnership upside.",
    trendAnalysis: "The trend is engine-platform convergence: tools vendors are trying to own more of the economic layer around games.",
    impactScore: 89,
    trendScore: 45,
    confidence: 88,
    sectors: ["Game Engines", "Creator Economy", "Platform Strategy", "Game AI"],
    companies: ["Epic Games", "Unreal Engine", "Valve", "Roblox"],
    publishedAt: "2026-06-24",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/tim-sweeney-on-the-future-of-games-ai-and-whether-valve-will-ever-join-forces-with-epic-its-now-clear-that-nobodys-going-to-end-up-with-an-absolute-monopoly/",
    visual: { image: "/images/intelligence/studio-engine.webp", alt: "Holographic game engine viewport with asset pipeline geometry" }
  },
  {
    id: "le-006",
    slug: "steam-ai-disclosure-fight-becomes-storefront-policy-battle",
    title: "Steam AI disclosure fight becomes storefront policy battle",
    source: "Tom's Hardware",
    sourceCredibility: "Trade press",
    category: "AI",
    tldr: "Epic criticized Steam's AI disclosure labels, arguing they stigmatize games and create commercial risk for developers.",
    fullTldr: "Tom's Hardware covered Tim Sweeney's criticism of Valve's AI disclosure policy after reports that AI-labeled Steam games receive fewer reviews and weaker sentiment. The argument is now about storefront governance as much as production tooling.",
    whyItMatters: "AI transparency rules can shape sales, review behavior, and developer tool adoption. Store policy is becoming a competitive differentiator.",
    possibleImpact: "Expect publishers to standardize AI-use reviews before launch and push platforms for more nuanced disclosure categories.",
    trendAnalysis: "The trend is AI governance moving from legal teams into store pages, marketing copy, and player trust mechanics.",
    impactScore: 88,
    trendScore: 44,
    confidence: 86,
    sectors: ["Game AI", "Steam", "Storefronts", "Publishing"],
    companies: ["Epic Games", "Valve", "Steam", "Unreal Engine"],
    publishedAt: "2026-06-25",
    sourceUrl: "https://www.tomshardware.com/tech-industry/artificial-intelligence/epic-boss-tim-sweeney-blasts-steam-for-putting-ai-tags-on-games-says-move-is-irresponsible-of-valve",
    visual: { image: "/images/intelligence/ai-npcs.webp", alt: "Holographic AI NPC intelligence system inside a dark gaming command center" }
  },
  {
    id: "le-007",
    slug: "unreal-ai-push-sparks-blueprints-accessibility-concern",
    title: "Unreal AI push sparks Blueprints accessibility concern",
    source: "Creative Bloq",
    sourceCredibility: "Trade press",
    category: "AI",
    tldr: "Developer reaction to Epic's UE6 direction shows anxiety over AI tooling, Verse, and the long-term future of Blueprints.",
    fullTldr: "Creative Bloq reported backlash around Unreal Engine 6's AI-heavy direction and concerns that Blueprints could eventually be deprecated in favor of Verse. The signal is that productivity tooling can also create accessibility and retraining risk for developers.",
    whyItMatters: "Blueprints helped make Unreal approachable for designers, students, and small teams. Any perceived shift away from that path changes engine adoption economics.",
    possibleImpact: "Expect Epic to keep reassuring developers while rivals position visual scripting, compatibility, and predictable workflows as trust advantages.",
    trendAnalysis: "The trend is toolchain transition risk: AI and new languages promise speed but can threaten established creator workflows.",
    impactScore: 84,
    trendScore: 42,
    confidence: 78,
    sectors: ["Game Engines", "Developer Tools", "Game AI", "Indie Devs"],
    companies: ["Epic Games", "Unreal Engine", "Unity", "Godot"],
    publishedAt: "2026-06-24",
    sourceUrl: "https://www.creativebloq.com/3d/video-game-design/unreal-engines-ai-push-sparks-backlash-as-developers-fear-the-end-of-blueprints",
    visual: { image: "/images/intelligence/studio-engine.webp", alt: "Holographic game engine viewport with asset pipeline geometry" }
  },
  {
    id: "le-008",
    slug: "gaming-inflation-turns-premium-play-into-luxury-positioning",
    title: "Gaming inflation turns premium play into luxury positioning",
    source: "Business Insider",
    sourceCredibility: "Trade press",
    category: "Business",
    tldr: "Rising console, software, and subscription prices are making the high-end gaming stack feel less mass-market.",
    fullTldr: "Business Insider framed recent Xbox, PlayStation, Nintendo, and Steam Machine pricing as part of a broader affordability squeeze. Component costs, tariffs, subscription increases, and AAA production budgets are all pushing premium gaming higher.",
    whyItMatters: "If gaming feels like a luxury hobby, platform holders risk slower hardware adoption and greater dependence on whales, subscriptions, and catalog monetization.",
    possibleImpact: "Expect stronger value bundles, longer cross-gen support, used hardware programs, and more pressure on $80 game launches to prove premium value.",
    trendAnalysis: "The trend is value segmentation: enthusiast hardware and blockbuster software are moving upmarket while free-to-play and catalog play absorb budget-conscious demand.",
    impactScore: 87,
    trendScore: 43,
    confidence: 84,
    sectors: ["Console", "Retail", "Subscriptions", "AAA Publishing"],
    companies: ["Microsoft", "Sony", "Nintendo", "Valve", "Publishers"],
    publishedAt: "2026-06-27",
    sourceUrl: "https://www.businessinsider.com/price-gaming-inflation-xbox-playstation-nintendo-switch-2026-5",
    visual: { image: "/images/intelligence/business-market.webp", alt: "Dark gaming market intelligence terminal with holographic charts" }
  },
  {
    id: "le-009",
    slug: "newzoo-puts-games-market-above-200-billion-despite-layoffs",
    title: "Newzoo puts games market above $200B despite layoffs",
    source: "GamesRadar+",
    sourceCredibility: "Market analysis",
    category: "Business",
    tldr: "Newzoo's reported $201.6B 2025 games-market estimate highlights growth that is not evenly reaching studios and workers.",
    fullTldr: "GamesRadar covered Newzoo's estimate that global games revenue passed $200 billion for the first time in 2025, with mobile at $113.3B, PC at $43.6B, and console at $44.7B. The contrast with layoffs remains the real signal.",
    whyItMatters: "Market growth alone does not guarantee studio stability. Operators need to know which platforms, genres, and business models are capturing the upside.",
    possibleImpact: "Expect investment to keep concentrating around mobile scale, PC long-tail monetization, evergreen IP, and live operations.",
    trendAnalysis: "The trend is unequal expansion: category revenue rises while labor, mid-budget production, and smaller studios remain under pressure.",
    impactScore: 89,
    trendScore: 41,
    confidence: 82,
    sectors: ["Market Data", "Mobile Gaming", "PC Gaming", "Publishing"],
    companies: ["Newzoo", "Mobile Publishers", "PC Publishers", "Console Publishers"],
    publishedAt: "2026-06-18",
    sourceUrl: "https://www.gamesradar.com/games/amid-all-the-closures-and-layoffs-the-global-games-market-has-apparently-passed-usd200-billion-in-yearly-revenue-for-the-first-time-ever-says-analytics-firm/",
    visual: { image: "/images/intelligence/business-market.webp", alt: "Dark gaming market intelligence terminal with holographic charts" }
  },
  {
    id: "le-010",
    slug: "pc-long-tail-revenue-strengthens-the-case-for-catalog-strategy",
    title: "PC long-tail revenue strengthens the case for catalog strategy",
    source: "PC Gamer",
    sourceCredibility: "Market analysis",
    category: "Business",
    tldr: "Newzoo data says more than half of Western PC revenue now comes from games outside the top 20.",
    fullTldr: "PC Gamer's read on Newzoo's 2026 PC & Console Gaming Report showed PC's long tail getting stronger, with titles ranked 21+ rising to 56% of Western PC revenue in 2025. Catalog games and serviceable genres are benefiting from ongoing play.",
    whyItMatters: "PC strategy is not only about launch-week hits. Durable catalog, updates, mod-friendly ecosystems, and discount timing can compound over years.",
    possibleImpact: "Expect more publishers to fund PC-specific post-launch work, survival/action RPG updates, Steam festival beats, and long-tail pricing discipline.",
    trendAnalysis: "The trend is catalog compounding: PC keeps rewarding games that remain useful, moddable, discoverable, and replayable beyond the launch window.",
    impactScore: 83,
    trendScore: 41,
    confidence: 84,
    sectors: ["PC Gaming", "Catalog", "Steam", "Publishing"],
    companies: ["Newzoo", "Steam", "PC Publishers", "Independent Studios"],
    publishedAt: "2026-04-16",
    sourceUrl: "https://www.pcgamer.com/gaming-industry/analysts-say-pc-gaming-is-now-the-one-platform-where-more-than-50-percent-of-revenue-comes-from-games-outside-the-top-20/",
    visual: { image: "/images/intelligence/business-market.webp", alt: "Dark gaming market intelligence terminal with holographic charts" }
  },
  {
    id: "le-011",
    slug: "eofy-sales-show-hardware-discounts-lagging-software-deals",
    title: "EOFY sales show hardware discounts lagging software deals",
    source: "GamesRadar+",
    sourceCredibility: "Trade press",
    category: "Business",
    tldr: "Australian EOFY sales are offering game and accessory discounts while new console hardware remains hard to discount.",
    fullTldr: "GamesRadar's June 30 deal tracker shows a retail pattern that matches the broader hardware squeeze: software and accessories can be promoted aggressively, but PS5, Switch 2, and Xbox console deals are thinner after price increases and component pressure.",
    whyItMatters: "Retail promotions reveal where margin exists. If hardware discounting weakens, publishers and platform holders must use software bundles and peripherals to preserve perceived value.",
    possibleImpact: "Expect more regional bundles, accessory promotions, subscription trials, and catalog discounts instead of deep current-gen console cuts.",
    trendAnalysis: "The trend is margin-aware retail: discounts shift toward content and accessories when silicon-heavy hardware cannot absorb cuts.",
    impactScore: 76,
    trendScore: 35,
    confidence: 78,
    sectors: ["Retail", "Console", "Accessories", "Software"],
    companies: ["Sony", "Nintendo", "Microsoft", "Amazon", "JB Hi-Fi"],
    publishedAt: "2026-06-30",
    sourceUrl: "https://www.gamesradar.com/games/eofy-gaming-deals-2026-ps5-nintendo-switch-xbox-and-pc-gaming-deals-are-coming-soon-heres-what-you-need-to-know/",
    visual: { image: "/images/intelligence/business-market.webp", alt: "Dark gaming market intelligence terminal with holographic charts" }
  },
  {
    id: "le-012",
    slug: "weekly-release-calendar-puts-switch-2-content-depth-on-display",
    title: "Weekly release calendar puts Switch 2 content depth on display",
    source: "Meristation",
    sourceCredibility: "Trade press",
    category: "Gaming",
    tldr: "The June 29-July 5 release slate mixes Nintendo titles, mobile expansions, anime IP, indies, and Switch 2 ports.",
    fullTldr: "Meristation's weekly release list highlights Rhythm Heaven Groove, Pokemon TCG Pocket content, High on Life 2 for Switch 2, Super Meat Boy 3D physical editions, and a range of PC indies. It is a useful demand-side complement to hardware-sales data.",
    whyItMatters: "A healthy platform needs recurring content density, not just launch-window blockbusters. Switch 2's release cadence is becoming part of its hardware momentum story.",
    possibleImpact: "Expect publishers to keep testing Switch 2 with delayed ports, physical editions, and mid-tier launches while the install base grows.",
    trendAnalysis: "The trend is hybrid-platform breadth: portable console libraries are being filled by first-party, mobile-adjacent, anime, and indie content at once.",
    impactScore: 74,
    trendScore: 34,
    confidence: 76,
    sectors: ["Console", "Mobile", "Indie Devs", "Publishing"],
    companies: ["Nintendo", "The Pokemon Company", "Squanch Games", "Konami"],
    publishedAt: "2026-06-30",
    sourceUrl: "https://as.com/meristation/noticias/los-lanzamientos-de-videojuegos-mas-destacados-de-la-semana-desde-el-29-de-junio-al-5-de-julio-de-2026-para-pc-steam-switch-playstation-y-xbox-f202606-n/",
    visual: { image: "/images/intelligence/platform-strategy.webp", alt: "Abstract cross-platform gaming network with cloud and device nodes" }
  },
  {
    id: "le-013",
    slug: "avatar-fighting-game-leans-on-crossplay-and-rollback-at-launch",
    title: "Avatar fighting game leans on crossplay and rollback at launch",
    source: "Times of India",
    sourceCredibility: "Trade press",
    category: "Gaming",
    tldr: "Avatar Legends: The Fighting Game is set for a July 2 multiplatform launch with rollback netcode and crossplay.",
    fullTldr: "Times of India reported the licensed 2D fighter will launch across Switch, Switch 2, PS5, Xbox, and PC at a mid-tier price with rollback netcode and crossplay. That feature set is now expected even outside the biggest fighting-game franchises.",
    whyItMatters: "Licensed games increasingly need competitive online infrastructure on day one. Fighting-game audiences treat rollback and crossplay as baseline trust signals.",
    possibleImpact: "Expect more mid-priced IP games to launch across old and new Nintendo hardware while using online feature parity to reduce platform fragmentation.",
    trendAnalysis: "The trend is online-readiness as table stakes: genre communities punish missing network features faster than they used to.",
    impactScore: 73,
    trendScore: 34,
    confidence: 74,
    sectors: ["Fighting Games", "Licensed IP", "Crossplay", "Console"],
    companies: ["Paramount", "Nintendo", "Sony", "Microsoft", "Steam"],
    publishedAt: "2026-06-30",
    sourceUrl: "https://timesofindia.indiatimes.com/technology/gaming/avatar-legends-the-fighting-game-launches-july-2-on-switch-switch-2-ps5-xbox-and-pc/articleshow/129896889.cms",
    visual: { image: "/images/intelligence/esports-arena.webp", alt: "Futuristic esports arena with viewership heatmap and stage lighting" }
  },
  {
    id: "le-014",
    slug: "fifa-creator-streaming-deals-preview-esports-distribution-pressure",
    title: "FIFA creator streaming deals preview esports distribution pressure",
    source: "Associated Press",
    sourceCredibility: "Trade press",
    category: "Esports",
    tldr: "FIFA's 2026 World Cup streaming strategy leans into creator-led platforms, YouTube, TikTok, and regional digital rights.",
    fullTldr: "AP reported that Brazil's CazeTV will stream all 104 World Cup matches and that FIFA is expanding digital distribution through social platforms. This is mainstream sports, but it matters to esports because it validates creator-first live distribution at global scale.",
    whyItMatters: "Game publishers compete for the same live viewing habits. If sports normalize creator-led broadcasts, esports and showcase events will be judged against that reach and format flexibility.",
    possibleImpact: "Expect more co-streaming rights, regional creator hosts, short-form highlight deals, and platform-native sponsorship packages.",
    trendAnalysis: "The trend is live-media fragmentation: official broadcasts increasingly need creator ecosystems to reach younger audiences.",
    impactScore: 78,
    trendScore: 37,
    confidence: 84,
    sectors: ["Streaming", "Esports", "Creator Economy", "Sports Media"],
    companies: ["FIFA", "CazeTV", "LiveMode", "YouTube", "TikTok"],
    publishedAt: "2026-06-16",
    sourceUrl: "https://apnews.com/article/08feed47be7b423bafcfe9ae941bed1b",
    visual: { image: "/images/intelligence/esports-arena.webp", alt: "Futuristic esports arena with viewership heatmap and stage lighting" }
  },
  {
    id: "le-015",
    slug: "roblox-growth-push-ties-discovery-ai-and-international-expansion",
    title: "Roblox growth push ties discovery, AI, and international expansion",
    source: "Business Insider",
    sourceCredibility: "Trade press",
    category: "Business",
    tldr: "Roblox hired its first chief growth officer to sharpen discovery, international expansion, and older-player growth.",
    fullTldr: "Business Insider reported that Roblox appointed former Amazon executive John Ciancutti as chief growth officer. The role covers recommendation-driven discovery and international growth as Roblox works toward older audiences, AI-assisted creation, and a larger share of global gaming time.",
    whyItMatters: "UGC platforms increasingly compete through recommendation quality and market expansion, not just creation tools. Growth leadership is becoming a platform product role.",
    possibleImpact: "Expect more investment in age-up genres, region-specific growth, safety systems, and AI creation tools that make discovery easier to monetize.",
    trendAnalysis: "The trend is UGC platform maturation: safety, recommendations, creator tooling, and international operations are being managed like growth infrastructure.",
    impactScore: 82,
    trendScore: 39,
    confidence: 80,
    sectors: ["UGC", "Creator Economy", "Mobile", "Discovery"],
    companies: ["Roblox", "Amazon", "Google", "Meta", "Netflix"],
    publishedAt: "2026-05-13",
    sourceUrl: "https://www.businessinsider.com/roblox-hires-first-chief-growth-officer-from-amazon-2026-5",
    visual: { image: "/images/intelligence/business-market.webp", alt: "Dark gaming market intelligence terminal with holographic charts" }
  }
];
export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
