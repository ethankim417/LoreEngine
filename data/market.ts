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
export const marketSnapshotDate = "2026-06-04";

export const marketPlayers: MarketPlayer[] = [
  {
    ticker: "NVDA",
    company: "NVIDIA",
    segment: "Gaming AI / GPUs",
    exchange: "NASDAQ",
    price: 218.66,
    dayChange: 1.8,
    thirtyDayChange: 11.3,
    ytdChange: 38.2,
    marketCap: "$3.1T",
    sentiment: "Bullish",
    summary:
      "GPU demand, local AI inference, and RTX creator tooling keep NVIDIA positioned as the strongest gaming AI infrastructure signal.",
    watchSignal: "On-device agents, DLSS adoption, and AI PC attach rates",
    trend: [20, 37, 43, 49, 55, 57, 65, 80, 64, 59, 57, 61, 55, 49, 48, 45, 47, 42, 63, 60, 48, 54]
  },
  {
    ticker: "AMD",
    company: "AMD",
    segment: "Gaming CPUs / GPUs",
    exchange: "NASDAQ",
    price: 523.2,
    dayChange: -3.6,
    thirtyDayChange: 47.3,
    ytdChange: 24.9,
    marketCap: "$272B",
    sentiment: "Bullish",
    summary:
      "AMD remains a key gaming hardware read through console silicon, PC CPUs, Radeon GPUs, and AI accelerator adjacency.",
    watchSignal: "Console refresh silicon, AI PC demand, and GPU attach rate",
    trend: [20, 41, 37, 52, 53, 50, 49, 50, 42, 41, 39, 50, 50, 56, 68, 65, 72, 72, 70, 73, 80, 74]
  },
  {
    ticker: "INTC",
    company: "Intel",
    segment: "PC Gaming / Chips",
    exchange: "NASDAQ",
    price: 111.78,
    dayChange: -0.8,
    thirtyDayChange: 3.4,
    ytdChange: -8.1,
    marketCap: "$134B",
    sentiment: "Watch",
    summary:
      "Intel is still relevant to PC gaming and handheld hardware, but execution and foundry transition risk keep the stock signal mixed.",
    watchSignal: "GPU driver maturity, handheld wins, and AI PC share",
    trend: [21, 34, 25, 67, 80, 55, 54, 42, 22, 21, 28, 51, 49, 53, 63, 59, 56, 39, 24, 20, 33, 31]
  },
  {
    ticker: "MSFT",
    company: "Microsoft",
    segment: "Xbox / Cloud / AI",
    exchange: "NASDAQ",
    price: 428.05,
    dayChange: 0.2,
    thirtyDayChange: 4.1,
    ytdChange: 16.4,
    marketCap: "$3.2T",
    sentiment: "Watch",
    summary:
      "Xbox's cross-platform posture is increasingly tied to Microsoft cloud, subscriptions, and AI tooling rather than console unit economics alone.",
    watchSignal: "Game Pass mix, first-party release cadence, and Azure AI bundling",
    trend: [27, 29, 37, 31, 28, 23, 20, 25, 38, 40, 33, 37, 35, 34, 32, 28, 44, 69, 80, 59, 44, 45]
  },
  {
    ticker: "SONY",
    company: "Sony Group",
    segment: "PlayStation / Hardware",
    exchange: "NYSE ADR",
    price: 22.23,
    dayChange: 0.1,
    thirtyDayChange: 10.5,
    ytdChange: 9.8,
    marketCap: "$115B",
    sentiment: "Bullish",
    summary:
      "Sony remains a premium console and IP compounder, with PlayStation hardware, services, and first-party releases driving the read.",
    watchSignal: "First-party slate visibility, console margins, and PC expansion",
    trend: [25, 37, 20, 25, 49, 66, 79, 66, 70, 78, 79, 80, 75, 66, 66, 60, 57, 54, 75, 79, 67, 68]
  },
  {
    ticker: "NTDOY",
    company: "Nintendo",
    segment: "Console / IP",
    exchange: "OTC ADR",
    price: 11.43,
    dayChange: 0,
    thirtyDayChange: -5.5,
    ytdChange: 21.7,
    marketCap: "$76B",
    sentiment: "Pressure",
    summary:
      "Nintendo's hardware cycle and evergreen IP library give it a distinct counter-position to subscription-heavy platform strategies.",
    watchSignal: "Next-gen hardware ramp, attach rate, and software launch density",
    trend: [75, 80, 64, 20, 41, 50, 44, 32, 44, 53, 63, 69, 56, 51, 40, 42, 36, 43, 47, 55, 52, 52]
  },
  {
    ticker: "U",
    company: "Unity",
    segment: "Game Engine / Ads",
    exchange: "NYSE",
    price: 30.03,
    dayChange: 2.8,
    thirtyDayChange: 9.8,
    ytdChange: -12.6,
    marketCap: "$10B",
    sentiment: "Bullish",
    summary:
      "Unity is still strategically important to mobile and indie developers, but the market wants clearer evidence of trust repair and durable growth.",
    watchSignal: "Runtime adoption, mobile ad demand, and developer retention",
    trend: [36, 36, 31, 44, 32, 32, 32, 36, 35, 31, 26, 26, 20, 20, 31, 40, 60, 65, 80, 67, 53, 61]
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
    price: 58.19,
    dayChange: 0.1,
    thirtyDayChange: -3.6,
    ytdChange: 13.9,
    marketCap: "$480B",
    sentiment: "Watch",
    summary:
      "Tencent provides broad exposure to mobile, Asian publishing, esports ecosystems, and global studio investments.",
    watchSignal: "China approvals, mobile monetization, and overseas studio performance",
    trend: [73, 77, 76, 68, 65, 54, 80, 60, 58, 46, 57, 57, 40, 34, 34, 29, 20, 20, 26, 73, 53, 53]
  },
  {
    ticker: "NTES",
    company: "NetEase",
    segment: "Online Games / Mobile",
    exchange: "NASDAQ ADR",
    price: 122.73,
    dayChange: 0.1,
    thirtyDayChange: 6.6,
    ytdChange: 15.8,
    marketCap: "$63B",
    sentiment: "Bullish",
    summary:
      "NetEase is a strong China and global online-games signal, with mobile publishing, PC titles, and overseas expansion in focus.",
    watchSignal: "New game approvals, international launches, and live-ops durability",
    trend: [29, 46, 40, 33, 35, 39, 54, 35, 20, 21, 26, 38, 25, 37, 73, 76, 76, 70, 72, 80, 69, 69]
  },
  {
    ticker: "EA",
    company: "Electronic Arts",
    segment: "Sports / Live Services",
    exchange: "NASDAQ",
    price: 203.4,
    dayChange: 0.4,
    thirtyDayChange: 0.9,
    ytdChange: 7.4,
    marketCap: "$37B",
    sentiment: "Watch",
    summary:
      "EA remains a core public read on sports games, live services, annualized franchises, and catalog monetization.",
    watchSignal: "Sports retention, Ultimate Team bookings, and catalog performance",
    trend: [46, 31, 32, 25, 21, 20, 20, 31, 29, 36, 48, 46, 51, 35, 38, 29, 38, 49, 54, 54, 66, 80]
  },
  {
    ticker: "TTWO",
    company: "Take-Two",
    segment: "AAA Publishing",
    exchange: "NASDAQ",
    price: 216.65,
    dayChange: 0.4,
    thirtyDayChange: -2.9,
    ytdChange: 18.3,
    marketCap: "$28B",
    sentiment: "Watch",
    summary:
      "Take-Two is a high-beta publishing signal because major franchise timing can reshape expectations for premium game demand.",
    watchSignal: "AAA release timing, marketing spend, and preorder momentum",
    trend: [36, 34, 37, 30, 33, 43, 45, 80, 80, 79, 70, 67, 70, 46, 31, 26, 25, 39, 45, 35, 20, 22]
  },
  {
    ticker: "RBLX",
    company: "Roblox",
    segment: "UGC / Creator Economy",
    exchange: "NYSE",
    price: 43.35,
    dayChange: -0.8,
    thirtyDayChange: -1.6,
    ytdChange: 7.5,
    marketCap: "$25B",
    sentiment: "Watch",
    summary:
      "Roblox remains one of the clearest public UGC indicators, with monetization quality and safety investment driving the debate.",
    watchSignal: "Bookings growth, creator payouts, and age-up engagement",
    trend: [44, 41, 50, 25, 20, 22, 26, 41, 33, 70, 48, 59, 62, 80, 61, 58, 68, 71, 70, 52, 41, 38]
  },
  {
    ticker: "CCOEY",
    company: "Capcom",
    segment: "Premium IP / Catalog",
    exchange: "OTC ADR",
    price: 8.77,
    dayChange: -3.9,
    thirtyDayChange: -17.4,
    ytdChange: 14.1,
    marketCap: "$11B",
    sentiment: "Pressure",
    summary:
      "Capcom is a durable pure-play read on premium game IP, catalog compounding, and disciplined franchise extension.",
    watchSignal: "Monster Hunter cadence, Resident Evil catalog, and digital sales mix",
    trend: [68, 72, 67, 76, 80, 73, 70, 41, 42, 39, 52, 55, 53, 50, 47, 52, 43, 38, 39, 36, 29, 20]
  },
  {
    ticker: "KONMY",
    company: "Konami Group",
    segment: "Games / IP / Amusement",
    exchange: "OTC ADR",
    price: 60.46,
    dayChange: 0,
    thirtyDayChange: -0.1,
    ytdChange: 12.4,
    marketCap: "$13B",
    sentiment: "Watch",
    summary:
      "Konami offers exposure to long-lived Japanese IP, sports franchises, and a mixed entertainment portfolio beyond games.",
    watchSignal: "Silent Hill execution, eFootball retention, and digital entertainment margin",
    trend: [33, 33, 33, 80, 80, 80, 80, 80, 80, 80, 65, 65, 20, 20, 20, 20, 20, 32, 32, 32, 32]
  },
  {
    ticker: "NCBDY",
    company: "Bandai Namco",
    segment: "Games / Toys / Anime IP",
    exchange: "OTC ADR",
    price: 11.57,
    dayChange: 0.1,
    thirtyDayChange: 1.2,
    ytdChange: 18.6,
    marketCap: "$20B",
    sentiment: "Watch",
    summary:
      "Bandai Namco is a major anime, toy, and game IP operator with strong cross-media revenue optionality.",
    watchSignal: "Elden Ring tail, anime licensing, and transmedia release timing",
    trend: [23, 32, 22, 30, 30, 26, 58, 30, 36, 21, 72, 71, 45, 33, 22, 39, 32, 20, 34, 43, 31, 31]
  },
  {
    ticker: "SQNXF",
    company: "Square Enix",
    segment: "RPGs / Publishing",
    exchange: "OTC",
    price: 16.02,
    dayChange: 0,
    thirtyDayChange: 0.1,
    ytdChange: 5.3,
    marketCap: "$5B",
    sentiment: "Watch",
    summary:
      "Square Enix remains a meaningful RPG and publishing signal, though investors are watching slate focus and margin quality.",
    watchSignal: "Final Fantasy pipeline, HD-2D output, and catalog monetization",
    trend: [79, 79, 79, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 79, 79, 80, 80, 80, 80]
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
  dataSourceLabel: "Cached fallback snapshot",
  mode: "cached-fallback",
  refreshedAt: `${marketSnapshotDate}T00:00:00.000Z`,
  updatedTickers: [],
  failedTickers: [],
  failedTickerReasons: {}
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
