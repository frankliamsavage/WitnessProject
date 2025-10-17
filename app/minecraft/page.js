'use client';
import Link from "next/link";

export default function MinecraftPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-green-200 via-sky-200 via-indigo-200 to-fuchsia-200 flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Minecraft Integration</h1>
      <p className="text-lg text-slate-700 max-w-2xl leading-relaxed mb-10">
        Explore the Witness Minecraft server — connect to the economy, island ranks,
        Moo-Lah, and OneBlock worlds. Player stats, WBF Credits, and live dashboards
        will appear here soon.
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
