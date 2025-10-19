// app/sign-in/sso-callback/route.js
import { handleSignInCallback } from "@clerk/nextjs/server";

export async function GET(req) {
  return handleSignInCallback(req);
}
