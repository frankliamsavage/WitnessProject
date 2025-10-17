'use client';
import Link from "next/link";

export default function WordPage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-amber-100 via-emerald-100 via-sky-200 to-indigo-200 flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-4">The Word</h1>
      <p className="text-lg text-slate-700 max-w-2xl leading-relaxed mb-10">
        Scriptures, teachings, and revelations recorded through the Witness Portal.
        Each word a lamp unto the path — soon, this section will hold the living record
        and teachings from the community.
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
