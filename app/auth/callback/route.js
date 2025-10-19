import { auth } from "@clerk/nextjs/server";

export async function GET() {
  // After Clerk finishes OAuth, redirect to dashboard
  return Response.redirect(new URL("/dashboard", process.env.NEXT_PUBLIC_APP_URL));
}
