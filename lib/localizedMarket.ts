import type { Language } from "@/lib/i18n";
import type { MarketGroup, MarketPlayer, MarketSentiment, MarketSnapshot } from "@/data/market";

type PlayerCopy = Pick<MarketPlayer, "segment" | "summary" | "watchSignal">;
type GroupCopy = Pick<MarketGroup, "title" | "eyebrow" | "description">;

const sentimentLabels: Record<MarketSentiment, Record<Language, string>> = {
  Bullish: { en: "Bullish", ko: "강세" },
  Watch: { en: "Watch", ko: "주시" },
  Pressure: { en: "Pressure", ko: "압박" }
};

const groupCopy: Record<MarketGroup["id"], Record<Language, GroupCopy>> = {
  hardware: {
    en: {
      title: "Top Hardware-Related Companies",
      eyebrow: "5 tracked",
      description: "Semiconductors, consoles, and gaming hardware exposure."
    },
    ko: {
      title: "주요 하드웨어 관련 기업",
      eyebrow: "5개 추적",
      description: "반도체, 콘솔, 게이밍 하드웨어 노출도를 보는 그룹입니다."
    }
  },
  engines: {
    en: {
      title: "Top Game Engines",
      eyebrow: "2 tracked",
      description: "Unity is public; Epic/Unreal is private and shown as a proxy trend."
    },
    ko: {
      title: "주요 게임 엔진",
      eyebrow: "2개 추적",
      description: "Unity는 상장사이며, Epic/Unreal은 비상장 프록시 트렌드로 표시됩니다."
    }
  },
  revenue: {
    en: {
      title: "Top Game Revenue Companies",
      eyebrow: "10 tracked",
      description: "Gaming revenue leaders excluding console hardware creators such as Sony and Nintendo."
    },
    ko: {
      title: "게임 매출 상위 기업",
      eyebrow: "10개 추적",
      description: "Sony와 Nintendo 같은 콘솔 하드웨어 기업을 제외한 게임 매출 리더입니다."
    }
  }
};

const playerCopy: Record<string, Record<Language, PlayerCopy>> = {
  NVDA: {
    en: {
      segment: "Gaming AI / GPUs",
      summary:
        "GPU demand, local AI inference, and RTX creator tooling keep NVIDIA positioned as the strongest gaming AI infrastructure signal.",
      watchSignal: "On-device agents, DLSS adoption, and AI PC attach rates"
    },
    ko: {
      segment: "게임 AI / GPU",
      summary:
        "GPU 수요, 로컬 AI 추론, RTX 크리에이터 도구가 NVIDIA를 게임 AI 인프라의 가장 강한 신호로 만들고 있습니다.",
      watchSignal: "온디바이스 에이전트, DLSS 채택, AI PC 탑재율"
    }
  },
  AMD: {
    en: {
      segment: "Gaming CPUs / GPUs",
      summary:
        "AMD remains a key gaming hardware read through console silicon, PC CPUs, Radeon GPUs, and AI accelerator adjacency.",
      watchSignal: "Console refresh silicon, AI PC demand, and GPU attach rate"
    },
    ko: {
      segment: "게이밍 CPU / GPU",
      summary:
        "AMD는 콘솔 실리콘, PC CPU, Radeon GPU, AI 가속기 인접성 때문에 중요한 게임 하드웨어 지표입니다.",
      watchSignal: "콘솔 리프레시 칩, AI PC 수요, GPU 탑재율"
    }
  },
  INTC: {
    en: {
      segment: "PC Gaming / Chips",
      summary:
        "Intel is still relevant to PC gaming and handheld hardware, but execution and foundry transition risk keep the stock signal mixed.",
      watchSignal: "GPU driver maturity, handheld wins, and AI PC share"
    },
    ko: {
      segment: "PC 게이밍 / 칩",
      summary:
        "Intel은 PC 게이밍과 핸드헬드 하드웨어에서 여전히 중요하지만, 실행력과 파운드리 전환 리스크 때문에 신호는 혼재되어 있습니다.",
      watchSignal: "GPU 드라이버 성숙도, 핸드헬드 채택, AI PC 점유율"
    }
  },
  MSFT: {
    en: {
      segment: "Xbox / Cloud / AI",
      summary:
        "Xbox's cross-platform posture is increasingly tied to Microsoft cloud, subscriptions, and AI tooling rather than console unit economics alone.",
      watchSignal: "Game Pass mix, first-party release cadence, and Azure AI bundling"
    },
    ko: {
      segment: "Xbox / 클라우드 / AI",
      summary:
        "Xbox의 크로스플랫폼 전략은 콘솔 판매량만이 아니라 Microsoft 클라우드, 구독, AI 도구와 점점 더 강하게 연결되고 있습니다.",
      watchSignal: "Game Pass 구성, 퍼스트파티 출시 주기, Azure AI 번들링"
    }
  },
  SONY: {
    en: {
      segment: "PlayStation / Hardware",
      summary:
        "Sony remains a premium console and IP compounder, with PlayStation hardware, services, and first-party releases driving the read.",
      watchSignal: "First-party slate visibility, console margins, and PC expansion"
    },
    ko: {
      segment: "PlayStation / 하드웨어",
      summary:
        "Sony는 PlayStation 하드웨어, 서비스, 퍼스트파티 출시가 신호를 만드는 프리미엄 콘솔 및 IP 복리 기업입니다.",
      watchSignal: "퍼스트파티 라인업 가시성, 콘솔 마진, PC 확장"
    }
  },
  NTDOY: {
    en: {
      segment: "Console / IP",
      summary:
        "Nintendo's hardware cycle and evergreen IP library give it a distinct counter-position to subscription-heavy platform strategies.",
      watchSignal: "Next-gen hardware ramp, attach rate, and software launch density"
    },
    ko: {
      segment: "콘솔 / IP",
      summary:
        "Nintendo는 하드웨어 사이클과 장수 IP 라이브러리 덕분에 구독 중심 플랫폼 전략과 다른 위치를 갖습니다.",
      watchSignal: "차세대 하드웨어 램프업, 타이틀 구매율, 소프트웨어 출시 밀도"
    }
  },
  U: {
    en: {
      segment: "Game Engine / Ads",
      summary:
        "Unity is still strategically important to mobile and indie developers, but the market wants clearer evidence of trust repair and durable growth.",
      watchSignal: "Runtime adoption, mobile ad demand, and developer retention"
    },
    ko: {
      segment: "게임 엔진 / 광고",
      summary:
        "Unity는 모바일과 인디 개발자에게 여전히 전략적으로 중요하지만, 시장은 신뢰 회복과 지속 성장의 더 분명한 증거를 원합니다.",
      watchSignal: "런타임 채택, 모바일 광고 수요, 개발자 유지율"
    }
  },
  EPIC: {
    en: {
      segment: "Unreal Engine / UGC",
      summary:
        "Epic has no public ticker, but Unreal Engine and Fortnite creator economics make it unavoidable in any game-engine market read.",
      watchSignal: "Unreal adoption, Fortnite creator payouts, and enterprise licensing"
    },
    ko: {
      segment: "Unreal Engine / UGC",
      summary:
        "Epic은 상장 티커가 없지만 Unreal Engine과 Fortnite 크리에이터 경제 때문에 게임 엔진 시장 읽기에서 빠질 수 없습니다.",
      watchSignal: "Unreal 채택, Fortnite 크리에이터 지급액, 엔터프라이즈 라이선스"
    }
  },
  TCEHY: {
    en: {
      segment: "Global Games / Mobile",
      summary: "Tencent provides broad exposure to mobile, Asian publishing, esports ecosystems, and global studio investments.",
      watchSignal: "China approvals, mobile monetization, and overseas studio performance"
    },
    ko: {
      segment: "글로벌 게임 / 모바일",
      summary: "Tencent는 모바일, 아시아 퍼블리싱, e스포츠 생태계, 글로벌 스튜디오 투자에 넓게 노출되어 있습니다.",
      watchSignal: "중국 판호, 모바일 수익화, 해외 스튜디오 성과"
    }
  },
  NTES: {
    en: {
      segment: "Online Games / Mobile",
      summary: "NetEase is a strong China and global online-games signal, with mobile publishing, PC titles, and overseas expansion in focus.",
      watchSignal: "New game approvals, international launches, and live-ops durability"
    },
    ko: {
      segment: "온라인 게임 / 모바일",
      summary: "NetEase는 모바일 퍼블리싱, PC 타이틀, 해외 확장에 초점이 있는 중국 및 글로벌 온라인 게임 신호입니다.",
      watchSignal: "신작 승인, 해외 출시, 라이브옵스 지속력"
    }
  },
  EA: {
    en: {
      segment: "Sports / Live Services",
      summary: "EA remains a core public read on sports games, live services, annualized franchises, and catalog monetization.",
      watchSignal: "Sports retention, Ultimate Team bookings, and catalog performance"
    },
    ko: {
      segment: "스포츠 / 라이브 서비스",
      summary: "EA는 스포츠 게임, 라이브 서비스, 연간 프랜차이즈, 카탈로그 수익화를 읽는 핵심 상장 지표입니다.",
      watchSignal: "스포츠 유저 유지, Ultimate Team 예약매출, 카탈로그 성과"
    }
  },
  TTWO: {
    en: {
      segment: "AAA Publishing",
      summary: "Take-Two is a high-beta publishing signal because major franchise timing can reshape expectations for premium game demand.",
      watchSignal: "AAA release timing, marketing spend, and preorder momentum"
    },
    ko: {
      segment: "AAA 퍼블리싱",
      summary: "Take-Two는 대형 프랜차이즈 출시 시점이 프리미엄 게임 수요 기대치를 바꿀 수 있어 변동성이 큰 퍼블리싱 신호입니다.",
      watchSignal: "AAA 출시 시점, 마케팅 지출, 예약구매 모멘텀"
    }
  },
  RBLX: {
    en: {
      segment: "UGC / Creator Economy",
      summary: "Roblox remains one of the clearest public UGC indicators, with monetization quality and safety investment driving the debate.",
      watchSignal: "Bookings growth, creator payouts, and age-up engagement"
    },
    ko: {
      segment: "UGC / 크리에이터 경제",
      summary: "Roblox는 수익화 품질과 안전 투자 논쟁을 동반하는 가장 명확한 상장 UGC 지표 중 하나입니다.",
      watchSignal: "예약매출 성장, 크리에이터 지급액, 고연령층 참여"
    }
  },
  CCOEY: {
    en: {
      segment: "Premium IP / Catalog",
      summary: "Capcom is a durable pure-play read on premium game IP, catalog compounding, and disciplined franchise extension.",
      watchSignal: "Monster Hunter cadence, Resident Evil catalog, and digital sales mix"
    },
    ko: {
      segment: "프리미엄 IP / 카탈로그",
      summary: "Capcom은 프리미엄 게임 IP, 카탈로그 복리, 절제된 프랜차이즈 확장을 읽는 순수 게임 지표입니다.",
      watchSignal: "Monster Hunter 주기, Resident Evil 카탈로그, 디지털 판매 비중"
    }
  },
  KONMY: {
    en: {
      segment: "Games / IP / Amusement",
      summary: "Konami offers exposure to long-lived Japanese IP, sports franchises, and a mixed entertainment portfolio beyond games.",
      watchSignal: "Silent Hill execution, eFootball retention, and digital entertainment margin"
    },
    ko: {
      segment: "게임 / IP / 어뮤즈먼트",
      summary: "Konami는 장수 일본 IP, 스포츠 프랜차이즈, 게임을 넘어선 복합 엔터테인먼트 포트폴리오에 노출됩니다.",
      watchSignal: "Silent Hill 실행력, eFootball 유지율, 디지털 엔터테인먼트 마진"
    }
  },
  NCBDY: {
    en: {
      segment: "Games / Toys / Anime IP",
      summary: "Bandai Namco is a major anime, toy, and game IP operator with strong cross-media revenue optionality.",
      watchSignal: "Elden Ring tail, anime licensing, and transmedia release timing"
    },
    ko: {
      segment: "게임 / 완구 / 애니메이션 IP",
      summary: "Bandai Namco는 애니메이션, 완구, 게임 IP를 운영하며 크로스미디어 매출 선택지가 강한 기업입니다.",
      watchSignal: "Elden Ring 롱테일, 애니메이션 라이선스, 트랜스미디어 출시 시점"
    }
  },
  SQNXF: {
    en: {
      segment: "RPGs / Publishing",
      summary: "Square Enix remains a meaningful RPG and publishing signal, though investors are watching slate focus and margin quality.",
      watchSignal: "Final Fantasy pipeline, HD-2D output, and catalog monetization"
    },
    ko: {
      segment: "RPG / 퍼블리싱",
      summary: "Square Enix는 RPG와 퍼블리싱에서 의미 있는 신호지만, 투자자들은 라인업 집중도와 마진 품질을 지켜보고 있습니다.",
      watchSignal: "Final Fantasy 파이프라인, HD-2D 생산량, 카탈로그 수익화"
    }
  }
};

export function getMarketPlayerText(player: MarketPlayer, language: Language): MarketPlayer {
  return { ...player, ...(playerCopy[player.ticker]?.[language] ?? {}) };
}

export function getMarketGroupText(group: MarketGroup, language: Language): MarketGroup {
  return { ...group, ...(groupCopy[group.id]?.[language] ?? {}) };
}

export function getSentimentLabel(sentiment: MarketSentiment, language: Language) {
  return sentimentLabels[sentiment][language];
}

export function getMarketFreshnessLabel(snapshot: MarketSnapshot, language: Language) {
  const date = new Intl.DateTimeFormat(language === "ko" ? "ko-KR" : "en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${snapshot.snapshotDate}T00:00:00`));
  const prefix =
    snapshot.mode === "weekly-close-feed"
      ? language === "ko"
        ? "가격 업데이트"
        : "Prices updated"
      : language === "ko"
        ? "대체 데이터 업데이트"
        : "Fallback updated";

  return `${prefix} ${date}`;
}
