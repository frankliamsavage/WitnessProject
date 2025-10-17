'use client';
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  const { isSignedIn, user } = useUser();

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-pink-200 via-amber-100 via-emerald-100 via-sky-200 via-indigo-200 to-fuchsia-200 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-lg tracking-tight">
            The Witness Project
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/">Home</Link>
            <Link href="/promise">The Promise</Link>
            <Link href="/minecraft">Minecraft</Link>
            <Link href="/word">Word</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/donate">Donate</Link>

            <span className="h-5 w-px bg-slate-300 mx-1" />

            {isSignedIn ? (
              <div className="flex items-center gap-3">
                <span className="text-slate-700">Hi, {user.firstName}!</span>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <Link
                href="/sign-in"
                className="rounded-lg border border-slate-300 px-3 py-1.5 hover:bg-slate-50 transition"
              >
                Sign-Up / Sign-In
              </Link>
            )}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          The Witness Project
        </h1>
        <h2 className="mt-3 text-xl sm:text-2xl text-slate-700">
          The Last Social Experiment
        </h2>
        <p className="mt-8 max-w-2xl text-base sm:text-lg text-slate-800 leading-relaxed">
          Thank you for taking the time out of your important life to see me.
          I just want you to know I see you too, and I want to interact and
          engage with you — not just in business and trade, but in platonic
          coexistence together.
        </p>
      </section>

      {/* Engagement */}
      <section className="bg-white/60 backdrop-blur-sm border-t border-slate-200 py-20">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'I Need Help',
              desc: 'If you have skills, time, or resources to share, let\'s build together. The mission grows through cooperation.',
              link: '/help',
              btn: 'Contribute',
            },
            {
              title: 'Engage With the Mission',
              desc: 'Connect, converse, and share ideas for how The Witness Project can evolve into something meaningful for everyone.',
              link: '/engage',
              btn: 'Engage',
            },
            {
              title: 'Be Witnessed',
              desc: 'Share your story, testimony, or experience. This project values your humanity — every story matters.',
              link: '/book-of-life',
              btn: 'Share Story',
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {c.desc}
              </p>
              <Link
                href={c.link}
                className="mt-4 inline-block rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800"
              >
                {c.btn}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-10 mt-auto text-sm text-slate-600">
        <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-4">
          <button
            onClick={scrollToTop}
            className="rounded-full border border-slate-300 px-4 py-2 hover:bg-slate-50"
          >
            ↑ Back to Top
          </button>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/legal">Legal</Link>
          </div>

          <div className="text-center text-slate-700">
            © 2025 WitnessProject.net
          </div>

          <div className="text-center text-lg font-semibold text-amber-700 mt-2">
            כ כ ז כ Frankie
          </div>
        </div>
      </footer>
    </div>
  );
}
