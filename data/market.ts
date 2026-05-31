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

// Mock cached market data for the portfolio version.
// Future production path: fetch quotes in a scheduled backend job, save the weekly
// snapshot to a database/cache, and let the frontend read that cached result only.
export const marketPlayers: MarketPlayer[] = [
  {
    ticker: "NVDA",
    company: "NVIDIA",
    segment: "Gaming AI / GPUs",
    exchange: "NASDAQ",
    price: 124.83,
    dayChange: 1.8,
    thirtyDayChange: 14.6,
    ytdChange: 38.2,
    marketCap: "$3.1T",
    sentiment: "Bullish",
    summary:
      "GPU demand, local AI inference, and RTX creator tooling keep NVIDIA positioned as the strongest gaming AI infrastructure signal.",
    watchSignal: "On-device agents, DLSS adoption, and AI PC attach rates",
    trend: [42, 45, 43, 48, 52, 56, 61, 58, 64, 69, 73, 78]
  },
  {
    ticker: "AMD",
    company: "AMD",
    segment: "Gaming CPUs / GPUs",
    exchange: "NASDAQ",
    price: 168.44,
    dayChange: 1.1,
    thirtyDayChange: 9.7,
    ytdChange: 24.9,
    marketCap: "$272B",
    sentiment: "Bullish",
    summary:
      "AMD remains a key gaming hardware read through console silicon, PC CPUs, Radeon GPUs, and AI accelerator adjacency.",
    watchSignal: "Console refresh silicon, AI PC demand, and GPU attach rate",
    trend: [46, 47, 45, 49, 52, 54, 57, 55, 59, 63, 66, 70]
  },
  {
    ticker: "INTC",
    company: "Intel",
    segment: "PC Gaming / Chips",
    exchange: "NASDAQ",
    price: 31.26,
    dayChange: -0.6,
    thirtyDayChange: -2.4,
    ytdChange: -8.1,
    marketCap: "$134B",
    sentiment: "Pressure",
    summary:
      "Intel is still relevant to PC gaming and handheld hardware, but execution and foundry transition risk keep the stock signal mixed.",
    watchSignal: "GPU driver maturity, handheld wins, and AI PC share",
    trend: [52, 51, 50, 48, 49, 47, 45, 46, 44, 43, 42, 41]
  },
  {
    ticker: "MSFT",
    company: "Microsoft",
    segment: "Xbox / Cloud / AI",
    exchange: "NASDAQ",
    price: 431.92,
    dayChange: 0.7,
    thirtyDayChange: 5.1,
    ytdChange: 16.4,
    marketCap: "$3.2T",
    sentiment: "Bullish",
    summary:
      "Xbox's cross-platform posture is increasingly tied to Microsoft cloud, subscriptions, and AI tooling rather than console unit economics alone.",
    watchSignal: "Game Pass mix, first-party release cadence, and Azure AI bundling",
    trend: [50, 51, 54, 53, 57, 60, 58, 62, 63, 65, 67, 69]
  },
  {
    ticker: "SONY",
    company: "Sony Group",
    segment: "PlayStation / Hardware",
    exchange: "NYSE ADR",
    price: 92.47,
    dayChange: -0.4,
    thirtyDayChange: 3.2,
    ytdChange: 9.8,
    marketCap: "$115B",
    sentiment: "Watch",
    summary:
      "Sony remains a premium console and IP compounder, with PlayStation hardware, services, and first-party releases driving the read.",
    watchSignal: "First-party slate visibility, console margins, and PC expansion",
    trend: [45, 47, 46, 48, 51, 50, 52, 54, 53, 55, 56, 57]
  },
  {
    ticker: "NTDOY",
    company: "Nintendo",
    segment: "Console / IP",
    exchange: "OTC ADR",
    price: 16.21,
    dayChange: 0.9,
    thirtyDayChange: 8.4,
    ytdChange: 21.7,
    marketCap: "$76B",
    sentiment: "Bullish",
    summary:
      "Nintendo's hardware cycle and evergreen IP library give it a distinct counter-position to subscription-heavy platform strategies.",
    watchSignal: "Next-gen hardware ramp, attach rate, and software launch density",
    trend: [40, 42, 44, 48, 46, 49, 53, 57, 59, 62, 61, 66]
  },
  {
    ticker: "U",
    company: "Unity",
    segment: "Game Engine / Ads",
    exchange: "NYSE",
    price: 24.12,
    dayChange: -0.8,
    thirtyDayChange: -6.3,
    ytdChange: -12.6,
    marketCap: "$10B",
    sentiment: "Pressure",
    summary:
      "Unity is still strategically important to mobile and indie developers, but the market wants clearer evidence of trust repair and durable growth.",
    watchSignal: "Runtime adoption, mobile ad demand, and developer retention",
    trend: [58, 56, 53, 51, 49, 48, 45, 43, 42, 39, 37, 35]
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
    price: 51.76,
    dayChange: 0.5,
    thirtyDayChange: 4.4,
    ytdChange: 13.9,
    marketCap: "$480B",
    sentiment: "Bullish",
    summary:
      "Tencent provides broad exposure to mobile, Asian publishing, esports ecosystems, and global studio investments.",
    watchSignal: "China approvals, mobile monetization, and overseas studio performance",
    trend: [46, 48, 49, 51, 50, 53, 55, 58, 57, 60, 62, 64]
  },
  {
    ticker: "NTES",
    company: "NetEase",
    segment: "Online Games / Mobile",
    exchange: "NASDAQ ADR",
    price: 98.64,
    dayChange: 0.4,
    thirtyDayChange: 6.1,
    ytdChange: 15.8,
    marketCap: "$63B",
    sentiment: "Bullish",
    summary:
      "NetEase is a strong China and global online-games signal, with mobile publishing, PC titles, and overseas expansion in focus.",
    watchSignal: "New game approvals, international launches, and live-ops durability",
    trend: [43, 44, 46, 45, 48, 50, 52, 54, 53, 56, 58, 60]
  },
  {
    ticker: "EA",
    company: "Electronic Arts",
    segment: "Sports / Live Services",
    exchange: "NASDAQ",
    price: 143.58,
    dayChange: 0.2,
    thirtyDayChange: 2.6,
    ytdChange: 7.4,
    marketCap: "$37B",
    sentiment: "Watch",
    summary:
      "EA remains a core public read on sports games, live services, annualized franchises, and catalog monetization.",
    watchSignal: "Sports retention, Ultimate Team bookings, and catalog performance",
    trend: [51, 52, 51, 53, 54, 55, 54, 56, 57, 58, 57, 59]
  },
  {
    ticker: "TTWO",
    company: "Take-Two",
    segment: "AAA Publishing",
    exchange: "NASDAQ",
    price: 161.34,
    dayChange: 1.2,
    thirtyDayChange: 6.9,
    ytdChange: 18.3,
    marketCap: "$28B",
    sentiment: "Bullish",
    summary:
      "Take-Two is a high-beta publishing signal because major franchise timing can reshape expectations for premium game demand.",
    watchSignal: "AAA release timing, marketing spend, and preorder momentum",
    trend: [44, 46, 45, 47, 52, 55, 57, 56, 60, 63, 66, 68]
  },
  {
    ticker: "RBLX",
    company: "Roblox",
    segment: "UGC / Creator Economy",
    exchange: "NYSE",
    price: 37.68,
    dayChange: -1.1,
    thirtyDayChange: -4.8,
    ytdChange: 7.5,
    marketCap: "$25B",
    sentiment: "Watch",
    summary:
      "Roblox remains one of the clearest public UGC indicators, with monetization quality and safety investment driving the debate.",
    watchSignal: "Bookings growth, creator payouts, and age-up engagement",
    trend: [55, 57, 54, 52, 49, 51, 48, 47, 45, 46, 44, 43]
  },
  {
    ticker: "CCOEY",
    company: "Capcom",
    segment: "Premium IP / Catalog",
    exchange: "OTC ADR",
    price: 13.84,
    dayChange: 0.6,
    thirtyDayChange: 5.8,
    ytdChange: 14.1,
    marketCap: "$11B",
    sentiment: "Bullish",
    summary:
      "Capcom is a durable pure-play read on premium game IP, catalog compounding, and disciplined franchise extension.",
    watchSignal: "Monster Hunter cadence, Resident Evil catalog, and digital sales mix",
    trend: [44, 45, 47, 48, 50, 49, 52, 54, 55, 57, 58, 61]
  },
  {
    ticker: "KNMCY",
    company: "Konami Group",
    segment: "Games / IP / Amusement",
    exchange: "OTC ADR",
    price: 48.32,
    dayChange: 0.3,
    thirtyDayChange: 4.1,
    ytdChange: 12.4,
    marketCap: "$13B",
    sentiment: "Watch",
    summary:
      "Konami offers exposure to long-lived Japanese IP, sports franchises, and a mixed entertainment portfolio beyond games.",
    watchSignal: "Silent Hill execution, eFootball retention, and digital entertainment margin",
    trend: [46, 46, 47, 49, 48, 50, 52, 51, 53, 55, 56, 58]
  },
  {
    ticker: "NCBDY",
    company: "Bandai Namco",
    segment: "Games / Toys / Anime IP",
    exchange: "OTC ADR",
    price: 18.67,
    dayChange: 0.9,
    thirtyDayChange: 7.2,
    ytdChange: 18.6,
    marketCap: "$20B",
    sentiment: "Bullish",
    summary:
      "Bandai Namco is a major anime, toy, and game IP operator with strong cross-media revenue optionality.",
    watchSignal: "Elden Ring tail, anime licensing, and transmedia release timing",
    trend: [42, 44, 45, 47, 50, 51, 54, 56, 55, 58, 61, 64]
  },
  {
    ticker: "SQNXF",
    company: "Square Enix",
    segment: "RPGs / Publishing",
    exchange: "OTC",
    price: 42.15,
    dayChange: -0.2,
    thirtyDayChange: 1.9,
    ytdChange: 5.3,
    marketCap: "$5B",
    sentiment: "Watch",
    summary:
      "Square Enix remains a meaningful RPG and publishing signal, though investors are watching slate focus and margin quality.",
    watchSignal: "Final Fantasy pipeline, HD-2D output, and catalog monetization",
    trend: [48, 49, 48, 50, 51, 50, 52, 53, 52, 54, 55, 56]
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
    tickers: ["TCEHY", "MSFT", "NTES", "EA", "TTWO", "RBLX", "CCOEY", "KNMCY", "NCBDY", "SQNXF"]
  }
];

export function getMarketPlayer(ticker: string) {
  return marketPlayers.find((player) => player.ticker === ticker);
}

export function getMarketGroupPlayers(group: MarketGroup) {
  return group.tickers
    .map((ticker) => getMarketPlayer(ticker))
    .filter((player): player is MarketPlayer => Boolean(player));
}

export function getMarketFocusPlayers() {
  const seen = new Set<string>();

  return marketGroups.flatMap((group) =>
    getMarketGroupPlayers(group).filter((player) => {
      if (seen.has(player.ticker)) {
        return false;
      }

      seen.add(player.ticker);
      return true;
    })
  );
}
