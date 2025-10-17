'use client';
import Link from "next/link";

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-fuchsia-200 via-pink-200 via-amber-100 to-emerald-200 flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Marketplace</h1>
      <p className="text-lg text-slate-700 max-w-2xl leading-relaxed mb-10">
        The Witness Marketplace is where craft, trade, and creation meet.
        Rainy Daize Crochet, Witness apparel, and handcrafted goods will be
        available here soon — merging art, purpose, and divine commerce.
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
