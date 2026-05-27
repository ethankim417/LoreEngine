import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-void px-4 text-center text-white">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">404</p>
        <h1 className="mt-3 font-display text-4xl font-black">Signal lost</h1>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-lg bg-cyan-300 px-4 py-3 text-sm font-bold text-slate-950"
        >
          Return to dashboard
        </Link>
      </div>
    </main>
  );
}
