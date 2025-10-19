// app/sign-up/sso-callback/route.js
import { handleOAuthCallback } from "@clerk/nextjs/server";

export async function GET(req) {
  return handleOAuthCallback(req);
}
