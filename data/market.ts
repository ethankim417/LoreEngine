export type MarketSentiment = "Bullish" | "Watch" | "Pressure";

export type MarketPlayer = {
  ticker: string;
  company: string;
  segment: string;
  exchange: string;
  price: number | null;
  dayChange: number;
  thirtyDayChange: number;
  ytdChange: number;
  marketCap: string;
  sentiment: MarketSentiment;
  summary: string;
  watchSignal: string;
  trend: number[];
};

export type MarketGroup = {
  id: "hardware" | "engines" | "revenue";
  title: string;
  eyebrow: string;
  description: string;
  tickers: string[];
};

export type MarketDataMode = "cached-fallback" | "weekly-close-feed";

export type MarketSnapshot = {
  snapshotDate: string;
  players: MarketPlayer[];
  groups: MarketGroup[];
  dataSourceLabel: string;
  mode: MarketDataMode;
  refreshedAt: string;
  updatedTickers: string[];
  failedTickers: string[];
  failedTickerReasons?: Record<string, string>;
};

// Local fallback data. On Vercel, /api/market can refresh public close-price
// fields from a scheduled server job. The static mirror keeps reading this file.
export const marketSnapshotDate = "2026-08-10";

export const marketPlayers: MarketPlayer[] = [
  {
    ticker: "NVDA",
    company: "NVIDIA",
    segment: "Gaming AI / GPUs",
    exchange: "NASDAQ",
    price: 195.55,
    dayChange: -2.27,
    thirtyDayChange: -10.82,
    ytdChange: 5.95,
    marketCap: "$3.1T",
    sentiment: "Bullish",
    summary:
      "GPU demand, local AI inference, and RTX creator tooling keep NVIDIA positioned as the strongest gaming AI infrastructure signal; latest fallback close is from public market coverage.",
    watchSignal: "On-device agents, DLSS adoption, and AI PC attach rates",
    trend: [75, 71, 78, 68, 57, 56, 51, 55, 47, 80, 76, 56, 66, 32, 41, 39, 20, 31, 32]
  },
  {
    ticker: "AMD",
    company: "AMD",
    segment: "Gaming CPUs / GPUs",
    exchange: "NASDAQ",
    price: 580.91,
    dayChange: 7.68,
    thirtyDayChange: 13.87,
    ytdChange: 159.95,
    marketCap: "$900B",
    sentiment: "Bullish",
    summary:
      "AMD remains a key gaming hardware read through console silicon, PC CPUs, Radeon GPUs, and AI accelerator adjacency.",
    watchSignal: "Console refresh silicon, AI PC demand, and GPU attach rate",
    trend: [23, 20, 36, 37, 45, 62, 58, 69, 68, 65, 70, 80, 71, 44, 56, 49, 38, 55, 66]
  },
  {
    ticker: "INTC",
    company: "Intel",
    segment: "PC Gaming / Chips",
    exchange: "NASDAQ",
    price: 139.63,
    dayChange: 6.01,
    thirtyDayChange: 27.71,
    ytdChange: 254.57,
    marketCap: "$706B",
    sentiment: "Watch",
    summary:
      "Intel is still relevant to PC gaming and handheld hardware, but execution and foundry transition risk keep the stock signal mixed.",
    watchSignal: "GPU driver maturity, handheld wins, and AI PC share",
    trend: [41, 47, 67, 66, 69, 78, 73, 71, 57, 44, 41, 52, 50, 20, 46, 41, 39, 62, 80]
  },
  {
    ticker: "MSFT",
    company: "Microsoft",
    segment: "Xbox / Cloud / AI",
    exchange: "NASDAQ",
    price: 373.02,
    dayChange: 1.21,
    thirtyDayChange: -19,
    ytdChange: -21.13,
    marketCap: "$3.2T",
    sentiment: "Watch",
    summary:
      "Xbox's cross-platform posture is increasingly tied to Microsoft cloud, subscriptions, and AI tooling rather than console unit economics alone.",
    watchSignal: "Game Pass mix, first-party release cadence, and Azure AI bundling",
    trend: [48, 43, 46, 45, 44, 42, 39, 51, 71, 80, 64, 52, 52, 43, 38, 31, 26, 20, 20]
  },
  {
    ticker: "SONY",
    company: "Sony Group",
    segment: "PlayStation / Hardware",
    exchange: "NYSE ADR",
    price: 20.06,
    dayChange: -1.81,
    thirtyDayChange: -11.12,
    ytdChange: -22.49,
    marketCap: "$115B",
    sentiment: "Bullish",
    summary:
      "Sony remains a premium console and IP compounder, with PlayStation hardware, services, and first-party releases driving the read.",
    watchSignal: "First-party slate visibility, console margins, and PC expansion",
    trend: [77, 78, 80, 73, 62, 63, 55, 51, 47, 73, 79, 64, 65, 56, 62, 40, 26, 36, 20]
  },
  {
    ticker: "NTDOY",
    company: "Nintendo",
    segment: "Console / IP",
    exchange: "OTC ADR",
    price: 10.48,
    dayChange: -1.87,
    thirtyDayChange: -6.84,
    ytdChange: -37.8,
    marketCap: "$76B",
    sentiment: "Pressure",
    summary:
      "Nintendo's hardware cycle and evergreen IP library give it a distinct counter-position to subscription-heavy platform strategies.",
    watchSignal: "Next-gen hardware ramp, attach rate, and software launch density",
    trend: [44, 58, 67, 48, 41, 25, 28, 20, 31, 35, 47, 43, 43, 47, 80, 30, 28, 34, 32]
  },
  {
    ticker: "U",
    company: "Unity",
    segment: "Game Engine / Ads",
    exchange: "NYSE",
    price: 28.58,
    dayChange: 0.95,
    thirtyDayChange: -11.16,
    ytdChange: -35.41,
    marketCap: "$10B",
    sentiment: "Bullish",
    summary:
      "Unity is still strategically important to mobile and indie developers, but the market wants clearer evidence of trust repair and durable growth.",
    watchSignal: "Runtime adoption, mobile ad demand, and developer retention",
    trend: [31, 26, 26, 20, 20, 31, 40, 60, 65, 80, 67, 53, 61, 53, 50, 46, 30, 31, 35, 47]
  },
  {
    ticker: "EPIC",
    company: "Epic Games",
    segment: "Unreal Engine / UGC",
    exchange: "Private",
    price: null,
    dayChange: 0.3,
    thirtyDayChange: 4.8,
    ytdChange: 11.2,
    marketCap: "Private",
    sentiment: "Watch",
    summary:
      "Epic has no public ticker, but Unreal Engine and Fortnite creator economics make it unavoidable in any game-engine market read.",
    watchSignal: "Unreal adoption, Fortnite creator payouts, and enterprise licensing",
    trend: [48, 49, 51, 52, 51, 54, 56, 58, 57, 59, 61, 63]
  },
  {
    ticker: "TCEHY",
    company: "Tencent",
    segment: "Global Games / Mobile",
    exchange: "OTC ADR",
    price: 55.22,
    dayChange: 2.95,
    thirtyDayChange: -0.14,
    ytdChange: -31.45,
    marketCap: "$480B",
    sentiment: "Watch",
    summary:
      "Tencent provides broad exposure to mobile, Asian publishing, esports ecosystems, and global studio investments.",
    watchSignal: "China approvals, mobile monetization, and overseas studio performance",
    trend: [50, 62, 62, 43, 35, 36, 30, 20, 20, 27, 80, 57, 57, 45, 41, 52, 68, 68, 67]
  },
  {
    ticker: "NTES",
    company: "NetEase",
    segment: "Online Games / Mobile",
    exchange: "NASDAQ ADR",
    price: 128.14,
    dayChange: -0.79,
    thirtyDayChange: 3.95,
    ytdChange: -13.16,
    marketCap: "$63B",
    sentiment: "Bullish",
    summary:
      "NetEase is a strong China and global online-games signal, with mobile publishing, PC titles, and overseas expansion in focus.",
    watchSignal: "New game approvals, international launches, and live-ops durability",
    trend: [20, 24, 36, 24, 34, 68, 71, 71, 65, 67, 75, 64, 65, 49, 45, 55, 79, 79, 80]
  },
  {
    ticker: "EA",
    company: "Electronic Arts",
    segment: "Sports / Live Services",
    exchange: "NASDAQ",
    price: 205.04,
    dayChange: 0,
    thirtyDayChange: 1.5,
    ytdChange: 0.31,
    marketCap: "$37B",
    sentiment: "Watch",
    summary:
      "EA remains a core public read on sports games, live services, annualized franchises, and catalog monetization.",
    watchSignal: "Sports retention, Ultimate Team bookings, and catalog performance",
    trend: [28, 43, 40, 46, 26, 30, 20, 30, 43, 49, 49, 63, 80, 71, 76, 60, 76, 72, 77]
  },
  {
    ticker: "TTWO",
    company: "Take-Two",
    segment: "AAA Publishing",
    exchange: "NASDAQ",
    price: 249.98,
    dayChange: 1.15,
    thirtyDayChange: 10.13,
    ytdChange: -0.64,
    marketCap: "$28B",
    sentiment: "Watch",
    summary:
      "Take-Two is a high-beta publishing signal because major franchise timing can reshape expectations for premium game demand.",
    watchSignal: "AAA release timing, marketing spend, and preorder momentum",
    trend: [80, 72, 70, 72, 52, 39, 35, 34, 46, 51, 43, 30, 32, 27, 24, 23, 20, 23, 22]
  },
  {
    ticker: "RBLX",
    company: "Roblox",
    segment: "UGC / Creator Economy",
    exchange: "NYSE",
    price: 54.38,
    dayChange: 0.07,
    thirtyDayChange: 15.7,
    ytdChange: -32.82,
    marketCap: "$25B",
    sentiment: "Watch",
    summary:
      "Roblox remains one of the clearest public UGC indicators, with monetization quality and safety investment driving the debate.",
    watchSignal: "Bookings growth, creator payouts, and age-up engagement",
    trend: [69, 47, 59, 62, 80, 61, 57, 68, 71, 70, 52, 40, 37, 23, 27, 34, 20, 38, 36, 57]
  },
  {
    ticker: "CCOEY",
    company: "Capcom",
    segment: "Premium IP / Catalog",
    exchange: "OTC ADR",
    price: 9.2,
    dayChange: -2.23,
    thirtyDayChange: -3.36,
    ytdChange: -20.89,
    marketCap: "$11B",
    sentiment: "Pressure",
    summary:
      "Capcom is a durable pure-play read on premium game IP, catalog compounding, and disciplined franchise extension.",
    watchSignal: "Monster Hunter cadence, Resident Evil catalog, and digital sales mix",
    trend: [55, 75, 80, 78, 73, 67, 76, 62, 52, 55, 50, 39, 24, 28, 38, 28, 26, 30, 22, 20]
  },
  {
    ticker: "KONMY",
    company: "Konami Group",
    segment: "Games / IP / Amusement",
    exchange: "OTC ADR",
    price: 59.7,
    dayChange: 0,
    thirtyDayChange: -1.26,
    ytdChange: -11.3,
    marketCap: "$13B",
    sentiment: "Watch",
    summary:
      "Konami offers exposure to long-lived Japanese IP, sports franchises, and a mixed entertainment portfolio beyond games.",
    watchSignal: "Silent Hill execution, eFootball retention, and digital entertainment margin",
    trend: [80, 65, 65, 20, 20, 20, 20, 20, 32, 32, 32, 32, 32, 32, 32, 32, 32, 23, 23]
  },
  {
    ticker: "NCBDY",
    company: "Bandai Namco",
    segment: "Games / Toys / Anime IP",
    exchange: "OTC ADR",
    price: 11.57,
    dayChange: -1.95,
    thirtyDayChange: -0.34,
    ytdChange: -12.94,
    marketCap: "$20B",
    sentiment: "Watch",
    summary:
      "Bandai Namco is a major anime, toy, and game IP operator with strong cross-media revenue optionality.",
    watchSignal: "Elden Ring tail, anime licensing, and transmedia release timing",
    trend: [34, 80, 79, 55, 45, 35, 50, 44, 33, 46, 54, 43, 44, 40, 48, 34, 29, 35, 37, 20]
  },
  {
    ticker: "SQNXF",
    company: "Square Enix",
    segment: "RPGs / Publishing",
    exchange: "OTC",
    price: 16,
    dayChange: 0,
    thirtyDayChange: -0.12,
    ytdChange: -15.25,
    marketCap: "$5B",
    sentiment: "Watch",
    summary:
      "Square Enix remains a meaningful RPG and publishing signal, though investors are watching slate focus and margin quality.",
    watchSignal: "Final Fantasy pipeline, HD-2D output, and catalog monetization",
    trend: [42, 42, 42, 42, 42, 42, 74, 74, 75, 75, 75, 75, 80, 80, 73, 73, 20, 20, 20]
  }
];

export const marketGroups: MarketGroup[] = [
  {
    id: "hardware",
    title: "Top Hardware-Related Companies",
    eyebrow: "5 tracked",
    description: "Semiconductors, consoles, and gaming hardware exposure.",
    tickers: ["NVDA", "AMD", "INTC", "SONY", "NTDOY"]
  },
  {
    id: "engines",
    title: "Top Game Engines",
    eyebrow: "2 tracked",
    description: "Unity is public; Epic/Unreal is private and shown as a proxy trend.",
    tickers: ["U", "EPIC"]
  },
  {
    id: "revenue",
    title: "Top Game Revenue Companies",
    eyebrow: "10 tracked",
    description: "Gaming revenue leaders excluding console hardware creators such as Sony and Nintendo.",
    tickers: ["TCEHY", "MSFT", "NTES", "EA", "TTWO", "RBLX", "CCOEY", "KONMY", "NCBDY", "SQNXF"]
  }
];

export const staticMarketSnapshot: MarketSnapshot = {
  snapshotDate: marketSnapshotDate,
  players: marketPlayers,
  groups: marketGroups,
  dataSourceLabel: "Public close-price fallback where available; unavailable values are retained and are not real-time data or financial advice",
  mode: "cached-fallback",
  refreshedAt: `${marketSnapshotDate}T00:00:00.000Z`,
  updatedTickers: [],
  failedTickers: [
    "NVDA",
    "AMD",
    "INTC",
    "MSFT",
    "SONY",
    "NTDOY",
    "U",
    "TCEHY",
    "NTES",
    "EA",
    "TTWO",
    "RBLX",
    "CCOEY",
    "KONMY",
    "NCBDY",
    "SQNXF",
    "EPIC"
  ],
  failedTickerReasons: {
    NVDA: "No usable public close-price response was available during this refresh; retained the prior fallback value.",
    AMD: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    INTC: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    MSFT: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    SONY: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    NTDOY: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    U: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    TCEHY: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    NTES: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    EA: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    TTWO: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    RBLX: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    CCOEY: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    KONMY: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    NCBDY: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    SQNXF: "Public chart lookup returned no usable current close during this local refresh; retained the prior fallback value.",
    EPIC: "Epic Games is private and has no public close price; it remains an unpriced engine and creator-economy proxy."
  }
};

export function getMarketPlayer(ticker: string) {
  return marketPlayers.find((player) => player.ticker === ticker);
}

export function getMarketGroupPlayers(group: MarketGroup) {
  return getMarketGroupPlayersFrom(group, marketPlayers);
}

export function getMarketGroupPlayersFrom(group: MarketGroup, players: MarketPlayer[]) {
  return group.tickers
    .map((ticker) => players.find((player) => player.ticker === ticker))
    .filter((player): player is MarketPlayer => Boolean(player));
}

export function getMarketFocusPlayers() {
  return getMarketFocusPlayersFromSnapshot(staticMarketSnapshot);
}

export function getMarketFocusPlayersFromSnapshot(snapshot: MarketSnapshot) {
  const seen = new Set<string>();

  return snapshot.groups.flatMap((group) =>
    getMarketGroupPlayersFrom(group, snapshot.players).filter((player) => {
      if (seen.has(player.ticker)) {
        return false;
      }

      seen.add(player.ticker);
      return true;
    })
  );
}
