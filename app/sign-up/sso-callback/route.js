import { auth, redirectToSignIn } from "@clerk/nextjs/server";

export async function GET(req) {
  try {
    // Verify auth or redirect
    const { userId } = auth();

    if (!userId) {
      return redirectToSignIn();
    }

    // If sign-up SSO callback succeeds, redirect to your dashboard or homepage
    return Response.redirect(new URL("/", req.url)); // change "/" to /dashboard if you want
  } catch (error) {
    console.error("SSO Callback Error:", error);
    return redirectToSignIn();
  }
}
