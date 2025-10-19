"use client";

import { useEffect } from "react";
import { useUser, useClerk } from "@clerk/nextjs";

export default function AuthPage() {
  const { user } = useUser();
  const { signOut, openSignIn } = useClerk();

  // If already signed in, redirect to dashboard
  useEffect(() => {
    if (user) {
      window.location.href = "/dashboard";
    }
  }, [user]);

  const signInWithGoogle = () => {
    openSignIn({
      strategy: "oauth_google",
      redirectUrl: "/auth/callback",
    });
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
            <p className="mb-4">Welcome, {user.emailAddresses[0].emailAddress}</p>
            <button
              onClick={() => signOut(() => (window.location.href = "/auth"))}
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
