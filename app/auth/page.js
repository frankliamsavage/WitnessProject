"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function AuthPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if already logged in
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user ?? null);
    });

    // Listen for auth changes
    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription?.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-pink-100 to-amber-100 text-slate-800">
      <div className="bg-white p-10 rounded-2xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>

        {!user ? (
          <>
            <p className="mb-6">Sign in with your Google account to continue.</p>
            <button
              onClick={signInWithGoogle}
              className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition"
            >
              Sign in with Google
            </button>
          </>
        ) : (
          <>
            <p className="mb-4">Welcome, {user.email}</p>
            <button
              onClick={signOut}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </main>
  );
}
