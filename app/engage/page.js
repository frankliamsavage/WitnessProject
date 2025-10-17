'use client';
import Link from "next/link";

export default function EngagePage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-sky-200 via-indigo-200 via-pink-200 to-amber-100 flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Engage With the Mission</h1>
      <p className="text-lg text-slate-700 max-w-2xl leading-relaxed mb-10">
        Connect, converse, and share ideas for how The Witness Project can evolve
        into something meaningful for everyone. Join the growing network of those
        ready to build truth and compassion in action.
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
