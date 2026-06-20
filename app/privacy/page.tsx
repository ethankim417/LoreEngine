"use client";

import Link from "next/link";
import { ArrowLeft, FileText, ShieldCheck, Trash2 } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const privacyCopy = {
  en: {
    back: "Dashboard",
    eyebrow: "Privacy And Legal Notes",
    title: "How LoreEngine handles accounts and saved briefs",
    intro:
      "LoreEngine is a portfolio project and informational dashboard. This page explains the current Google login, bookmark sync, account deletion path, and practical Korea/US privacy notes in plain language.",
    blocks: [
      {
        title: "What The Login Is For",
        body: "Google login is used only to identify a user so saved article bookmarks can sync across devices. LoreEngine does not sell account data, does not use the Google account for advertising, and does not request access to Gmail, Drive, Calendar, or other Google services."
      },
      {
        title: "What Data May Be Stored",
        body: "With Firebase sync enabled, LoreEngine stores a Firebase user document containing saved article IDs, language preference, and update timestamps. Firebase Auth may provide the display name and email shown in the account menu."
      },
      {
        title: "Account Deletion",
        body: "The account menu includes a Delete account data action. It deletes the synced Firebase user document, clears local saved briefs in the current browser, and signs the user out."
      },
      {
        title: "Korea And US Privacy Context",
        body: "For Korea, this design follows practical PIPA principles: collect only what is needed, state the purpose, support deletion, and avoid unnecessary third-party sharing. For the US, it follows a minimal-data approach appropriate for a small portfolio app."
      },
      {
        title: "Financial And News Disclaimer",
        body: "LoreEngine is informational and educational only. Market data may be delayed, incomplete, or inaccurate and should not be used for trading or investment decisions. Article intelligence uses mock/cached data unless stated otherwise."
      },
      {
        title: "Contact",
        body: "Questions or deletion requests can be sent to lore-engine@ethankim.cc. The in-app deletion button is the preferred path for signed-in users."
      }
    ],
    currentStatus: "Current Status",
    legalNote: "Legal note",
    legalBody:
      "This page is not legal advice. A commercial launch should be reviewed against the final data flows, hosting region, analytics, and retention policy.",
    status: [
      ["Google login", "Optional"],
      ["Bookmark sync", "Firebase-ready"],
      ["Account deletion", "Included"],
      ["AI browser calls", "None"]
    ]
  },
  ko: {
    back: "대시보드",
    eyebrow: "개인정보 및 법적 고지",
    title: "LoreEngine의 계정과 저장 브리프 처리 방식",
    intro:
      "LoreEngine은 포트폴리오 프로젝트이자 정보 제공용 대시보드입니다. 이 페이지는 Google 로그인, 북마크 동기화, 계정 데이터 삭제, 한국/미국 개인정보 관련 참고 사항을 쉬운 말로 설명합니다.",
    blocks: [
      {
        title: "로그인의 목적",
        body: "Google 로그인은 저장한 기사 북마크를 기기 간 동기화하기 위해 사용자를 식별하는 용도로만 사용됩니다. LoreEngine은 계정 데이터를 판매하지 않고, 광고 목적으로 사용하지 않으며, Gmail, Drive, Calendar 등 다른 Google 서비스 접근 권한을 요청하지 않습니다."
      },
      {
        title: "저장될 수 있는 데이터",
        body: "Firebase 동기화가 활성화되면 LoreEngine은 저장한 기사 ID, 언어 설정, 업데이트 시각을 담은 Firebase 사용자 문서를 저장합니다. Firebase Auth는 계정 메뉴에 표시되는 이름과 이메일을 제공할 수 있습니다."
      },
      {
        title: "계정 데이터 삭제",
        body: "계정 메뉴에는 계정 데이터 삭제 기능이 있습니다. 이 기능은 동기화된 Firebase 사용자 문서를 삭제하고, 현재 브라우저의 저장 브리프를 지운 뒤 로그아웃합니다."
      },
      {
        title: "한국 및 미국 개인정보 참고 사항",
        body: "한국 기준으로는 필요한 정보만 수집하고, 목적을 밝히며, 삭제 기능을 제공하고, 불필요한 제3자 공유를 피하는 PIPA 원칙에 맞춘 구조입니다. 미국 기준으로도 작은 포트폴리오 앱에 적합한 최소 데이터 접근을 따릅니다."
      },
      {
        title: "금융 및 뉴스 고지",
        body: "LoreEngine은 정보 제공과 학습 목적입니다. 시장 데이터는 지연되거나 불완전하거나 부정확할 수 있으며, 거래나 투자 판단에 사용해서는 안 됩니다. 기사 인텔리전스는 별도 표시가 없는 한 목업/캐시 데이터를 사용합니다."
      },
      {
        title: "문의",
        body: "질문이나 삭제 요청은 lore-engine@ethankim.cc 로 보낼 수 있습니다. 로그인한 사용자는 앱 안의 삭제 버튼을 사용하는 것이 가장 확실한 방법입니다."
      }
    ],
    currentStatus: "현재 상태",
    legalNote: "법적 참고",
    legalBody:
      "이 페이지는 법률 자문이 아닙니다. 상업 서비스로 출시할 경우 최종 데이터 흐름, 호스팅 지역, 분석 도구, 보관 정책을 기준으로 별도 검토가 필요합니다.",
    status: [
      ["Google 로그인", "선택 사항"],
      ["북마크 동기화", "Firebase 준비됨"],
      ["계정 삭제", "포함됨"],
      ["브라우저 AI 호출", "없음"]
    ]
  }
};

export default function PrivacyPage() {
  const { language } = useLanguage();
  const copy = privacyCopy[language];

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="mesh-grid absolute inset-0 opacity-70" />
      <div aria-hidden="true" className="absolute right-[-12rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-5">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {copy.back}
        </Link>

        <section className="glass-panel overflow-hidden rounded-lg">
          <div className="relative border-b border-white/10 p-5 sm:p-7">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(50,217,255,0.16),transparent_28%),radial-gradient(circle_at_18%_0%,rgba(138,92,255,0.14),transparent_26%)]" />
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                <ShieldCheck className="h-4 w-4" />
                {copy.eyebrow}
              </div>
              <h1 className="mt-3 font-display text-4xl font-black text-white sm:text-5xl">
                {copy.title}
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                {copy.intro}
              </p>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1fr_18rem]">
            <div className="space-y-7 p-5 sm:p-7">
              {copy.blocks.map((block) => (
                <LegalBlock key={block.title} title={block.title} body={block.body} />
              ))}
            </div>

            <aside className="border-t border-white/10 bg-black/20 p-5 sm:p-7 lg:border-l lg:border-t-0">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-violet-200">
                <FileText className="h-4 w-4" />
                {copy.currentStatus}
              </div>
              <div className="mt-5 space-y-3">
                {copy.status.map(([label, value]) => (
                  <StatusPill key={label} label={label} value={value} />
                ))}
              </div>
              <div className="mt-5 rounded-lg border border-amber-300/15 bg-amber-300/[0.055] p-3 text-xs leading-5 text-amber-100/90">
                <div className="flex items-center gap-2 font-bold">
                  <Trash2 className="h-3.5 w-3.5" />
                  {copy.legalNote}
                </div>
                <p className="mt-2">
                  {copy.legalBody}
                </p>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </main>
  );
}

function LegalBlock({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold text-white">{title}</h2>
      <p className="mt-2 text-sm leading-7 text-slate-300">{body}</p>
    </section>
  );
}

function StatusPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-1 font-display text-lg font-black text-white">{value}</p>
    </div>
  );
}
