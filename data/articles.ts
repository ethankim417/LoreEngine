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

export const briefSnapshotDate = "2026-06-16";

export const articles: Article[] = [
  {
    id: "le-001",
    slug: "roblox-discovery-update-reframes-how-creator-games-reach-scale",
    title: "Roblox discovery update reframes how creator games reach scale",
    source: "Roblox",
    sourceCredibility: "Official source",
    category: "Studio",
    tldr:
      "Roblox is spelling out how recommendation, search, and quality signals help strong creator games find large audiences.",
    fullTldr:
      "Roblox's June discovery post makes platform distribution mechanics more explicit for creators. The signal is that breakout success on UGC platforms increasingly depends on measurable retention, quality, and discovery fit, not only community hustle or paid promotion.",
    whyItMatters:
      "Creator-led games are becoming a professional market. Clearer discovery rules change how teams prototype, soft launch, and optimize Roblox experiences before trying to scale them.",
    possibleImpact:
      "Expect more Roblox studios to treat discovery readiness as a production milestone, with analytics, onboarding, and session design tuned before public pushes.",
    trendAnalysis:
      "The broader trend is platform maturation: UGC ecosystems are exposing more of their growth logic so creators can build like live-service operators.",
    impactScore: 88,
    trendScore: 42,
    confidence: 90,
    sectors: ["UGC", "Creator Economy", "Discovery", "Live Ops"],
    companies: ["Roblox", "Roblox Creators", "UGC Studios"],
    publishedAt: "2026-06-15",
    sourceUrl:
      "https://about.roblox.com/newsroom/2026/06/optimizing-discovery-great-games-reach-millions-players-roblox",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-002",
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
    impactScore: 84,
    trendScore: 40,
    confidence: 88,
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
    id: "le-003",
    slug: "nvidia-blackwell-agent-benchmark-pushes-local-ai-performance-into-the-games-stack",
    title: "NVIDIA Blackwell benchmark pushes agentic AI performance into the games stack",
    source: "NVIDIA Blog",
    sourceCredibility: "Official source",
    category: "AI",
    tldr:
      "NVIDIA is using agentic AI benchmarks to keep GPU performance framed around local and workstation AI workloads.",
    fullTldr:
      "NVIDIA's June benchmark post is not game-specific, but it matters for game production because agent workflows are moving into art, QA, tools, and creator pipelines. The stronger the local benchmark story gets, the easier it is for studios to justify GPU-heavy AI-assisted production setups.",
    whyItMatters:
      "Game AI investment depends on hardware economics. If agentic workloads become a mainstream GPU buying argument, studios can assume more local AI capability in developer and creator environments.",
    possibleImpact:
      "Expect more tool vendors to market local inference, automated testing, and asset iteration features around workstation GPU capability.",
    trendAnalysis:
      "The trend is a shift from cloud-only AI assumptions toward hybrid pipelines where local accelerators handle private, iterative, latency-sensitive game work.",
    impactScore: 86,
    trendScore: 39,
    confidence: 86,
    sectors: ["Game AI", "Hardware", "Developer Tools", "Creator Tools"],
    companies: ["NVIDIA", "GPU Vendors", "Tool Vendors", "Game Studios"],
    publishedAt: "2026-06-12",
    sourceUrl:
      "https://blogs.nvidia.com/blog/nvidia-blackwell-agentperf-artificial-analysis/",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-004",
    slug: "geforce-now-summer-sale-keeps-cloud-gaming-competing-on-access-and-price",
    title: "GeForce NOW summer sale keeps cloud gaming competing on access and price",
    source: "NVIDIA Blog",
    sourceCredibility: "Official source",
    category: "Platform",
    tldr:
      "NVIDIA is using membership discounts to keep GeForce NOW visible as cloud gaming shifts from novelty to retention economics.",
    fullTldr:
      "The GeForce NOW summer sale is a pricing signal more than a content reveal. It shows cloud gaming platforms still need aggressive access moments to bring users into paid tiers and remind players that high-end PC gaming can be rented as a service.",
    whyItMatters:
      "Cloud gaming strategy is increasingly about attach, retention, and catalog utility. Discounts are one way to keep the value proposition alive between major technical upgrades.",
    possibleImpact:
      "Publishers may watch cloud promotions as a supplemental discovery channel, especially for PC-heavy games with hardware barriers.",
    trendAnalysis:
      "The strongest pattern is cloud gaming settling into a services playbook: price events, catalog cadence, and device reach matter as much as raw streaming technology.",
    impactScore: 76,
    trendScore: 32,
    confidence: 84,
    sectors: ["Cloud Gaming", "PC Gaming", "Subscription Gaming", "Platform"],
    companies: ["NVIDIA", "GeForce NOW", "PC Publishers"],
    publishedAt: "2026-06-11",
    sourceUrl: "https://blogs.nvidia.com/blog/geforce-now-thursday-summer-sale-2026/",
    visual: {
      image: "/images/intelligence/platform-strategy.webp",
      alt: "Abstract cross-platform gaming network with cloud and device nodes"
    }
  },
  {
    id: "le-005",
    slug: "roblox-games-for-change-pushes-social-impact-into-creator-led-games",
    title: "Roblox Games for Change pushes social impact into creator-led games",
    source: "Roblox",
    sourceCredibility: "Official source",
    category: "Gaming",
    tldr:
      "Roblox and Games for Change are using creator competitions to position UGC games as more than engagement loops.",
    fullTldr:
      "Roblox's Games for Change challenge spotlights student and creator projects built around positive connection through play. The business signal is that creator-led platforms want higher-quality, brand-safe, culturally legible experiences that can appeal to schools, families, and partners.",
    whyItMatters:
      "UGC platforms need credibility with parents, educators, and brands. Social-impact programs help broaden the category beyond youth entertainment and monetized hangouts.",
    possibleImpact:
      "Expect more platform-sponsored challenges that double as talent scouting, safety messaging, and public proof that creator ecosystems can support diverse genres.",
    trendAnalysis:
      "The trend is professionalization of creator-led games through contests, curriculum, and partner-backed themes that create clearer pathways from hobby work to portfolio work.",
    impactScore: 74,
    trendScore: 35,
    confidence: 86,
    sectors: ["UGC", "Creator Economy", "Education", "Social Impact"],
    companies: ["Roblox", "Games for Change", "Student Creators"],
    publishedAt: "2026-06-10",
    sourceUrl:
      "https://about.roblox.com/newsroom/2026/06/roblox-games-for-change-challenge-winners-positive-connection-through-play",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-006",
    slug: "diffusiongemma-on-rtx-keeps-local-generative-ai-in-the-creator-tool-conversation",
    title: "DiffusionGemma on RTX keeps local generative AI in the creator-tool conversation",
    source: "NVIDIA Blog",
    sourceCredibility: "Official source",
    category: "AI",
    tldr:
      "NVIDIA's local DiffusionGemma acceleration keeps the AI creator-tools story tied to consumer and workstation GPUs.",
    fullTldr:
      "NVIDIA's post on accelerating Google's DiffusionGemma for local AI matters for games because image and asset ideation tools are increasingly part of preproduction. The signal is that vendors want creators to run more generative workflows locally, where latency, privacy, and iteration speed are easier to control.",
    whyItMatters:
      "Small teams and creators are sensitive to cloud cost and asset privacy. Better local models could shift more concepting, marketing mockups, and prototype art back onto the developer machine.",
    possibleImpact:
      "Expect AI art and tooling vendors to keep packaging local model support as a production advantage for teams that do not want every iteration routed through a hosted service.",
    trendAnalysis:
      "The trend is practical AI deployment: models are being judged less by demos alone and more by whether they can fit into fast, private, repeatable creative workflows.",
    impactScore: 82,
    trendScore: 38,
    confidence: 86,
    sectors: ["Game AI", "Creator Tools", "Hardware", "Art Pipelines"],
    companies: ["NVIDIA", "Google DeepMind", "RTX Developers", "Indie Studios"],
    publishedAt: "2026-06-10",
    sourceUrl: "https://blogs.nvidia.com/blog/rtx-ai-garage-local-gemma-diffusion/",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-007",
    slug: "nintendo-direct-turns-switch-2-cadence-into-showcase-week-counterprogramming",
    title: "Nintendo Direct turns Switch 2 cadence into showcase-week counterprogramming",
    source: "Nintendo",
    sourceCredibility: "Official source",
    category: "Hardware",
    tldr:
      "Nintendo used its June Direct and Treehouse follow-through to keep Switch 2 software momentum inside the industry's noisiest reveal window.",
    fullTldr:
      "Nintendo's June 9 Direct and Treehouse programming extended the Switch 2 conversation beyond launch hardware and into software cadence management. By filling the week with first-party reveals, upgraded catalog messaging, and live follow-up coverage, Nintendo kept attention on its own ecosystem while rival showcases competed for the same audience.",
    whyItMatters:
      "Nintendo still wins when it controls its own attention windows. In a crowded showcase week, disciplined event cadence can protect hardware momentum just as much as any single exclusive announcement.",
    possibleImpact:
      "Expect Nintendo to keep bundling Direct reveals with creator-friendly follow-up beats, software refreshes, and Switch 2 upgrade messaging whenever competitor event calendars get crowded.",
    trendAnalysis:
      "The broader trend is that platform holders now manage livestream cadence as part of lifecycle strategy, using reveals, demos, and post-show coverage to extend hardware relevance across multiple days.",
    impactScore: 82,
    trendScore: 31,
    confidence: 88,
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
    id: "le-008",
    slug: "apple-agentic-porting-session-makes-games-strategy-about-workflow-cost",
    title: "Apple's agentic porting session makes games strategy about workflow cost",
    source: "Apple Developer",
    sourceCredibility: "Official source",
    category: "Studio",
    tldr:
      "Apple's WWDC26 game-porting session puts agentic coding directly into the platform expansion pitch.",
    fullTldr:
      "Apple's 'Speedrun your game port with agentic coding' session frames Apple platform support around reducing engineering friction. For studios, the point is not abstract AI enthusiasm; it is whether porting to Mac, iPad, and iPhone becomes cheap enough to test earlier.",
    whyItMatters:
      "Platform strategy increasingly depends on tooling cost. If AI-assisted porting lowers the first-pass burden, Apple can get more studios to evaluate support before the business case is fully proven.",
    possibleImpact:
      "Mid-size teams may use agentic porting workflows for feasibility tests, then decide later whether full optimization and certification are worth funding.",
    trendAnalysis:
      "The trend favors tooling-led platform expansion: fewer bespoke ports, more reusable workflows, and more automation around repetitive engineering tasks.",
    impactScore: 80,
    trendScore: 37,
    confidence: 88,
    sectors: ["Platform Tools", "Game Engines", "PC Ports", "Mobile Gaming"],
    companies: ["Apple", "Xcode", "Mac Developers", "Third-Party Studios"],
    publishedAt: "2026-06-08",
    sourceUrl: "https://developer.apple.com/videos/play/wwdc2026/357/",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-009",
    slug: "apple-metal-performance-session-puts-port-quality-next-to-port-quantity",
    title: "Apple Metal performance session puts port quality next to port quantity",
    source: "Apple Developer",
    sourceCredibility: "Official source",
    category: "Studio",
    tldr:
      "Apple is pairing easier game porting with performance diagnostics so Mac and iPad versions do not feel like afterthoughts.",
    fullTldr:
      "The WWDC26 Metal games session focuses on finding and fixing performance issues. That matters because Apple gaming has often struggled less with headline capability than with whether ports run well enough to satisfy premium players.",
    whyItMatters:
      "Porting volume is only useful if quality follows. Better profiling and Metal guidance make Apple support more credible for studios that care about reviews, retention, and parity.",
    possibleImpact:
      "Expect Apple to keep emphasizing diagnostics, shader work, and frame pacing alongside porting automation when speaking to game teams.",
    trendAnalysis:
      "The trend is practical platform courtship: developer tools now need to show that they can lower both porting effort and quality risk.",
    impactScore: 77,
    trendScore: 32,
    confidence: 88,
    sectors: ["Game Engines", "Platform Tools", "Performance", "PC Ports"],
    companies: ["Apple", "Metal", "Game Studios", "Engine Teams"],
    publishedAt: "2026-06-08",
    sourceUrl: "https://developer.apple.com/videos/play/wwdc2026/388/",
    visual: {
      image: "/images/intelligence/studio-engine.webp",
      alt: "Holographic game engine viewport with asset pipeline geometry"
    }
  },
  {
    id: "le-010",
    slug: "apple-storekit-and-background-assets-session-targets-live-content-operations",
    title: "Apple StoreKit and Background Assets session targets live content operations",
    source: "Apple Developer",
    sourceCredibility: "Official source",
    category: "Platform",
    tldr:
      "Apple's WWDC26 games guidance extends into commerce and content delivery, not just graphics or porting.",
    fullTldr:
      "The StoreKit and Background Assets session is a reminder that modern game platform support includes storefront mechanics, downloadable content, and background delivery. Apple's games pitch is increasingly about operational completeness across devices.",
    whyItMatters:
      "Live content and monetization plumbing often decide whether a port is viable. Better native tooling can reduce the gap between a technically running build and a commercially operated game.",
    possibleImpact:
      "Studios evaluating Apple support may pay more attention to asset delivery, IAP flows, and update cadence instead of treating the port as a one-time executable.",
    trendAnalysis:
      "The trend is operational platform tooling: game distribution is being optimized around payments, updates, and asset pipelines as much as rendering.",
    impactScore: 75,
    trendScore: 31,
    confidence: 87,
    sectors: ["Mobile Gaming", "Monetization", "Live Ops", "Platform Tools"],
    companies: ["Apple", "StoreKit", "Mobile Studios", "Cross-Platform Teams"],
    publishedAt: "2026-06-08",
    sourceUrl: "https://developer.apple.com/videos/play/wwdc2026/378/",
    visual: {
      image: "/images/intelligence/mobile-gaming.webp",
      alt: "Mobile gaming live operations network with floating phones and data arcs"
    }
  },
  {
    id: "le-011",
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
    id: "le-012",
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
    id: "le-013",
    slug: "mobile-publishers-keep-pushing-d2c-as-a-margin-and-control-play",
    title: "Mobile publishers keep pushing D2C as a margin and control play",
    source: "PocketGamer.biz",
    sourceCredibility: "Trade press",
    category: "Business",
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
    id: "le-014",
    slug: "roblox-ai-founders-join-to-accelerate-reality-vision",
    title: "Roblox AI founders join to accelerate its reality vision",
    source: "Roblox",
    sourceCredibility: "Official source",
    category: "AI",
    tldr:
      "Roblox is adding AI founder talent as it tries to make creation, discovery, and 3D generation more native to the platform.",
    fullTldr:
      "Roblox's June AI founder announcement shows how central machine learning has become to the company's platform roadmap. The strategic signal is that UGC growth now depends on making creation easier, safer, and more scalable through AI-assisted tooling.",
    whyItMatters:
      "Creator platforms compete on how quickly users can turn ideas into playable worlds. AI talent can become a product moat if it lowers creation friction without weakening trust and safety.",
    possibleImpact:
      "Expect Roblox to keep integrating AI into creation tools, moderation, translation, and discovery as it tries to raise output quality across a massive creator base.",
    trendAnalysis:
      "The trend is AI moving from experimental feature to platform infrastructure, especially inside ecosystems where creation volume is the core supply constraint.",
    impactScore: 83,
    trendScore: 40,
    confidence: 86,
    sectors: ["Game AI", "UGC", "Creator Tools", "Platform Safety"],
    companies: ["Roblox", "AI Startups", "UGC Studios"],
    publishedAt: "2026-06-03",
    sourceUrl:
      "https://about.roblox.com/newsroom/2026/06/pioneering-ai-founders-join-to-accelerate-roblox-reality-vision",
    visual: {
      image: "/images/intelligence/ai-npcs.webp",
      alt: "Holographic AI NPC intelligence system inside a dark gaming command center"
    }
  },
  {
    id: "le-015",
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
  }
];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}
