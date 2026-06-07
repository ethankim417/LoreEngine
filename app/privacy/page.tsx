import Link from "next/link";
import { ArrowLeft, FileText, ShieldCheck, Trash2 } from "lucide-react";

export const metadata = {
  title: "Privacy And Legal Notes | LoreEngine",
  description:
    "Privacy, account deletion, and legal context for LoreEngine's Google login and saved bookmark feature."
};

export default function PrivacyPage() {
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
          Dashboard
        </Link>

        <section className="glass-panel overflow-hidden rounded-lg">
          <div className="relative border-b border-white/10 p-5 sm:p-7">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_82%_10%,rgba(50,217,255,0.16),transparent_28%),radial-gradient(circle_at_18%_0%,rgba(138,92,255,0.14),transparent_26%)]" />
            <div className="relative z-10 max-w-3xl">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
                <ShieldCheck className="h-4 w-4" />
                Privacy And Legal Notes
              </div>
              <h1 className="mt-3 font-display text-4xl font-black text-white sm:text-5xl">
                How LoreEngine handles accounts and saved briefs
              </h1>
              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
                LoreEngine is a portfolio project and informational dashboard. This page explains the
                current Google login, bookmark sync, account deletion path, and practical Korea/US
                privacy notes in plain language.
              </p>
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[1fr_18rem]">
            <div className="space-y-7 p-5 sm:p-7">
              <LegalBlock
                title="What The Login Is For"
                body="Google login is used only to identify a user so saved article bookmarks can sync across devices. LoreEngine does not sell account data, does not use the Google account for advertising, and does not request access to Gmail, Drive, Calendar, or other Google services."
              />
              <LegalBlock
                title="What Data May Be Stored"
                body="If cloud sync is configured, LoreEngine stores a hashed Google account identifier, saved article IDs, and update timestamps in Firebase Firestore. The app may display your Google name and email in the account menu, but the bookmark database does not need to store them."
              />
              <LegalBlock
                title="Account Deletion"
                body="The account menu includes a Delete account data action. It deletes the synced bookmark document when Firebase storage is configured, clears the session cookie, clears local saved briefs in the current browser, and signs the user out."
              />
              <LegalBlock
                title="Korea And US Privacy Context"
                body="For Korea, this design follows practical PIPA principles: collect only what is needed, state the purpose, support deletion, and avoid unnecessary third-party sharing. For the US, it follows a minimal-data approach appropriate for a small portfolio app, including account deletion and clear disclosure of informational limitations."
              />
              <LegalBlock
                title="Financial And News Disclaimer"
                body="LoreEngine is informational and educational only. Market data may be delayed, incomplete, or inaccurate and should not be used for trading or investment decisions. Article intelligence uses mock/cached data unless stated otherwise."
              />
              <LegalBlock
                title="Contact"
                body="Questions or deletion requests can be sent to lore-engine@ethankim.cc. The in-app deletion button is the preferred path for signed-in users."
              />
            </div>

            <aside className="border-t border-white/10 bg-black/20 p-5 sm:p-7 lg:border-l lg:border-t-0">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-violet-200">
                <FileText className="h-4 w-4" />
                Current Status
              </div>
              <div className="mt-5 space-y-3">
                <StatusPill label="Google login" value="Optional" />
                <StatusPill label="Bookmark sync" value="Firebase-ready" />
                <StatusPill label="Account deletion" value="Included" />
                <StatusPill label="AI browser calls" value="None" />
              </div>
              <div className="mt-5 rounded-lg border border-amber-300/15 bg-amber-300/[0.055] p-3 text-xs leading-5 text-amber-100/90">
                <div className="flex items-center gap-2 font-bold">
                  <Trash2 className="h-3.5 w-3.5" />
                  Legal note
                </div>
                <p className="mt-2">
                  This page is not legal advice. A commercial launch should be reviewed against the
                  final data flows, hosting region, analytics, and retention policy.
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
