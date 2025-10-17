'use client';
import Link from "next/link";

export default function BookOfLifePage() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-indigo-200 via-amber-100 via-pink-200 to-fuchsia-200 flex flex-col items-center justify-center text-center p-10">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Be Witnessed</h1>
      <p className="text-lg text-slate-700 max-w-2xl leading-relaxed mb-10">
        Share your story, testimony, or experience. The Book of Life records every
        soul that chooses truth and mercy. This section will soon allow verified
        Witnesses to submit their own living pages and declarations.
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
