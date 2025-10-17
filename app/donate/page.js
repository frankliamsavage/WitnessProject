'use client';
import Link from "next/link";

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-amber-100 via-pink-200 via-emerald-100 to-sky-200 flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Donate to the Mission</h1>
      <p className="text-lg text-slate-700 max-w-2xl leading-relaxed mb-10">
        Your contributions sustain The Witness Project and its outreach.
        Each donation supports creative development, community servers, and
        the expansion of mercy-centered initiatives.
      </p>
      <Link
        href="/"
        className="mt-4 inline-block rounded-lg bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-800 transition"
      >
        ← Back Home
      </Link>
    </main>
  );
}
