"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, Database, ExternalLink, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import { articles, sourceCredibilityTypes, type ArticleCategory, type SourceCredibility } from "@/data/articles";
import { sourcePipeline, sourcePrinciples, sourceTiers, weeklyBriefCadence } from "@/data/sourceStrategy";
import { formatDate } from "@/lib/format";
import { getCategoryLabel, getSourceCredibilityLabel } from "@/lib/localizedContent";

const sourcesCopy = {
  en: {
    back: "Dashboard",
    eyebrow: "Source Strategy",
    title: "Why these sources make the weekly brief",
    intro:
      "LoreEngine is designed to rank signals, not scrape everything. The brief starts with sources that are verifiable, timestamped, and useful for understanding how gaming, AI, platforms, hardware, esports, and public companies are moving.",
    currentBrief: "Current brief",
    sourcesCited: "Sources cited",
    cadence: "Cadence",
    candidatesReviewed: "Candidates reviewed",
    signalsSelected: "Signals selected",
    publishingWindow: "Publishing Window",
    weeklyTriage: "Weekly Triage",
    candidates: "Candidates",
    shortlist: "Shortlist",
    sourceMix: "Source Mix",
    sourceMixBody:
      "The live product should collect a wider candidate pool, dedupe it, then promote only the strongest signals into the weekly brief. The dashboard shows the final brief, while this page explains the source logic behind that selection.",
    currentBriefSources: "Current Brief Sources",
    outletsUsed: (count: number) => `${count} outlets used this week`,
    updated: "Updated",
    usedFor: (count: number, categories: string) =>
      `Used for ${count} brief${count === 1 ? "" : "s"} across ${categories}.`,
    view: "View",
    selectionRules: "Selection Rules",
    schedule: weeklyBriefCadence.schedule,
    localReadout: weeklyBriefCadence.localReadout,
    cadenceReason: weeklyBriefCadence.reason,
    pipelineDescription: sourcePipeline.description,
    tiers: sourceTiers,
    principles: sourcePrinciples
  },
  ko: {
    back: "대시보드",
    eyebrow: "출처 전략",
    title: "왜 이 출처들이 주간 브리프에 들어가는가",
    intro:
      "LoreEngine은 모든 것을 긁어모으는 도구가 아니라 중요한 신호를 선별하는 브리프입니다. 검증 가능하고, 시점이 명확하며, 게임·AI·플랫폼·하드웨어·e스포츠·상장사의 움직임을 이해하는 데 도움이 되는 출처를 우선합니다.",
    currentBrief: "현재 브리프",
    sourcesCited: "인용 출처",
    cadence: "발행 주기",
    candidatesReviewed: "검토 후보",
    signalsSelected: "선정 신호",
    publishingWindow: "발행 시간대",
    weeklyTriage: "주간 선별",
    candidates: "후보",
    shortlist: "최종 선정",
    sourceMix: "출처 구성",
    sourceMixBody:
      "실서비스에서는 더 넓은 후보 풀을 수집하고 중복 보도를 정리한 뒤, 가장 강한 신호만 주간 브리프로 올립니다. 대시보드는 최종 브리프를 보여주고, 이 페이지는 그 선별 기준을 설명합니다.",
    currentBriefSources: "현재 브리프 출처",
    outletsUsed: (count: number) => `이번 주 ${count}개 출처 사용`,
    updated: "업데이트",
    usedFor: (count: number, categories: string) => `${categories} 영역의 브리프 ${count}건에 사용되었습니다.`,
    view: "보기",
    selectionRules: "선정 기준",
    schedule: "화요일 23:00 KST",
    localReadout: "화요일 오전 9:00 ET / 오전 6:00 PT / 오후 11:00 KST",
    cadenceReason:
      "화요일은 월요일 장 마감, 주초 기업 업데이트, 주말 이벤트 이후 첫 보도 흐름이 어느 정도 정리된 시점이라 주간 브리프에 적합합니다.",
    pipelineDescription:
      "각 주간 실행은 약 40개의 후보 출처를 검토하고, 중복 보도를 정리한 뒤, 가장 강한 15개 신호를 공개 브리프로 승격하도록 설계되어 있습니다.",
    tiers: [
      {
        tier: "공식 출처",
        examples: "회사 블로그, 엔진 릴리스 노트, 스토어 페이지, 투자자 자료",
        reason: "실제로 무엇이 바뀌었는지 확인하는 데 가장 적합합니다. 해석을 붙이기 전에 브리프의 기준점을 잡아줍니다."
      },
      {
        tier: "전문 매체",
        examples: "게임 비즈니스 보도, 플랫폼 리포팅, 기술 매체",
        reason: "변화의 중요도, 업계 반응, 타이밍, 2차 영향을 교차 확인하는 데 유용합니다."
      },
      {
        tier: "시장 및 이용 데이터",
        examples: "공개 주가 차트 피드, e스포츠 시청률 추적, 스토어/이벤트 페이지",
        reason: "LoreEngine이 이야기 흐름에만 의존하지 않도록 측정 가능한 맥락을 더합니다."
      },
      {
        tier: "벤더 및 리서치 리포트",
        examples: "툴링 벤더, QA 리포트, AI 워크플로 연구",
        reason: "게임 AI와 제작 도구처럼 빠르게 변하는 영역에 도움이 되지만, 홍보성 이해관계가 있을 수 있어 더 신중하게 다룹니다."
      }
    ],
    principles: [
      {
        title: "1차 근거부터 확인",
        description: "공식 발표, 플랫폼 게시물, 실적 자료, 스토어 페이지, 엔진 릴리스 노트가 있을 때 가장 먼저 우선합니다."
      },
      {
        title: "전문 보도로 맥락 보강",
        description: "게임 및 기술 전문 매체는 무엇이 바뀌었고, 누가 주목했으며, 한 회사의 발표를 넘어선 신호인지 판단하는 데 도움을 줍니다."
      },
      {
        title: "데이터와 의견 분리",
        description: "시장, e스포츠, 스토어프론트 신호는 보조 데이터로 다룹니다. 해설은 신호를 설명할 수 있지만, 신호 자체를 만들어내서는 안 됩니다."
      },
      {
        title: "반복 가능한 출처 선호",
        description: "향후 주간 파이프라인은 아카이브, 피드, 타임스탬프, 안정적인 URL이 있어 나중에 감사할 수 있는 출처를 우선해야 합니다."
      }
    ]
  }
};

export default function SourcesPage() {
  const { language } = useLanguage();
  const copy = sourcesCopy[language];
  const sourceCount = new Set(articles.map((article) => article.source)).size;
  const activeSourceTypes = sourceCredibilityTypes.filter((type) =>
    articles.some((article) => article.sourceCredibility === type)
  );
  const briefSources = getBriefSources();

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="mesh-grid absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="absolute left-[-12rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-emerald-400/[0.11] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-16rem] right-[-10rem] h-[34rem] w-[34rem] rounded-full bg-cyan-500/[0.12] blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          {copy.back}
        </Link>

        <section className="glass-panel overflow-hidden rounded-lg">
          <div className="border-b border-white/10 p-5 sm:p-7">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">
              <ShieldCheck className="h-4 w-4" />
              {copy.eyebrow}
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-black leading-tight text-white sm:text-5xl">
              {copy.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              {copy.intro}
            </p>
          </div>

          <div className="grid gap-3 p-5 sm:grid-cols-3 sm:p-7">
            <SourceStat icon={<CalendarDays className="h-4 w-4" />} label={copy.currentBrief} value={formatDate(weeklyBriefCadence.snapshotDate, language)} />
            <SourceStat icon={<Database className="h-4 w-4" />} label={copy.sourcesCited} value={`${sourceCount}`} />
            <SourceStat icon={<Clock3 className="h-4 w-4" />} label={copy.cadence} value={copy.schedule} />
          </div>

          <div className="border-t border-white/10 px-5 py-4 sm:px-7">
            <div className="grid gap-2 rounded-lg border border-white/10 bg-white/[0.035] p-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
              <MethodStep value={sourcePipeline.candidateTarget.toString()} label={copy.candidatesReviewed} />
              <MethodArrow />
              <MethodStep value={sourcePipeline.shortlistTarget.toString()} label={copy.signalsSelected} />
              <MethodArrow />
              <MethodStep value={sourceCount.toString()} label={copy.sourcesCited} />
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <div className="glass-panel rounded-lg p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
              {copy.publishingWindow}
            </p>
            <h2 className="mt-3 font-display text-2xl font-black text-white">
              {copy.schedule}
            </h2>
            <p className="mt-2 text-sm font-semibold text-slate-400">
              {copy.localReadout}
            </p>
            <p className="mt-4 leading-7 text-slate-300">{copy.cadenceReason}</p>
          </div>

          <div className="glass-panel rounded-lg p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">
              {copy.weeklyTriage}
            </p>
            <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <TriageNumber label={copy.candidates} value={sourcePipeline.candidateTarget.toString()} />
              <span className="h-px bg-gradient-to-r from-cyan-300/40 via-white/20 to-emerald-300/40" />
              <TriageNumber label={copy.shortlist} value={sourcePipeline.shortlistTarget.toString()} />
            </div>
            <p className="mt-4 leading-7 text-slate-300">{copy.pipelineDescription}</p>
          </div>

          <div className="glass-panel rounded-lg p-5 sm:p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
              {copy.sourceMix}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {activeSourceTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-emerald-300/18 bg-emerald-300/[0.08] px-3 py-1.5 text-xs font-black text-emerald-50"
                >
                  {getSourceCredibilityLabel(type, language)}
                </span>
              ))}
            </div>
            <p className="mt-4 leading-7 text-slate-300">
              {copy.sourceMixBody}
            </p>
          </div>
        </section>

        <section className="glass-panel rounded-lg p-5 sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
                {copy.currentBriefSources}
              </p>
              <h2 className="mt-3 font-display text-2xl font-black text-white">
                {copy.outletsUsed(sourceCount)}
              </h2>
            </div>
            <p className="text-sm font-semibold text-slate-400">
              {copy.updated} {formatDate(weeklyBriefCadence.snapshotDate, language)}
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {briefSources.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="premium-hover group rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-cyan-300/28 hover:bg-white/[0.055]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-base font-black text-white">{source.name}</h3>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.12em] text-emerald-200/80">
                      {getSourceCredibilityLabel(source.credibility, language)}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-cyan-100" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {copy.usedFor(
                    source.articleCount,
                    source.categories.map((category) => getCategoryLabel(category, language)).join(", ")
                  )}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          {copy.tiers.map((tier) => (
            <details key={tier.tier} className="glass-panel group rounded-lg p-5 sm:p-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-xl font-black text-white">{tier.tier}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{tier.examples}</p>
                </div>
                <span className="mt-1 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-black text-cyan-100 transition group-open:border-emerald-300/25 group-open:bg-emerald-300/10 group-open:text-emerald-100">
                  {copy.view}
                </span>
              </summary>
              <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-slate-300">
                {tier.reason}
              </p>
            </details>
          ))}
        </section>

        <section className="glass-panel rounded-lg p-5 sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">
            {copy.selectionRules}
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {copy.principles.map((principle) => (
              <article key={principle.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-200" />
                  <div>
                    <h3 className="font-display text-base font-black text-white">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{principle.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function getBriefSources() {
  const sourceMap = new Map<
    string,
    {
      name: string;
      credibility: SourceCredibility;
      url: string;
      articleCount: number;
      categories: Set<ArticleCategory>;
    }
  >();

  articles.forEach((article) => {
    const existing = sourceMap.get(article.source);

    if (existing) {
      existing.articleCount += 1;
      existing.categories.add(article.category);
      return;
    }

    sourceMap.set(article.source, {
      name: article.source,
      credibility: article.sourceCredibility,
      url: article.sourceUrl,
      articleCount: 1,
      categories: new Set([article.category])
    });
  });

  return Array.from(sourceMap.values())
    .map((source) => ({
      ...source,
      categories: Array.from(source.categories)
    }))
    .sort((a, b) => {
      const tierDelta =
        sourceCredibilityTypes.indexOf(a.credibility) - sourceCredibilityTypes.indexOf(b.credibility);

      if (tierDelta !== 0) {
        return tierDelta;
      }

      return a.name.localeCompare(b.name);
    });
}

function SourceStat({
  icon,
  label,
  value
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <div className="flex items-center gap-2 text-cyan-100">
        {icon}
        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
      </div>
      <p className="mt-2 font-display text-2xl font-black text-white">{value}</p>
    </div>
  );
}

function TriageNumber({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-3 text-center">
      <p className="font-display text-3xl font-black text-white">{value}</p>
      <p className="mt-1 text-[0.62rem] font-black uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
    </div>
  );
}

function MethodStep({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg bg-black/15 px-3 py-2 sm:block sm:bg-transparent sm:p-0 sm:text-center">
      <p className="font-display text-xl font-black text-white sm:text-2xl">{value}</p>
      <p className="text-[0.62rem] font-black uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
    </div>
  );
}

function MethodArrow() {
  return (
    <span
      aria-hidden="true"
      className="hidden h-px w-10 bg-gradient-to-r from-cyan-300/20 via-cyan-100/45 to-emerald-300/20 sm:block"
    />
  );
}
