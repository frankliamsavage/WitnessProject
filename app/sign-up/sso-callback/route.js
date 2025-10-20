
import { NextResponse } from 'next/server';

export async function GET(req) {
  // Clerk automatically handles SSO callbacks
  // Just redirect to home - Clerk middleware will handle auth
  return NextResponse.redirect(new URL('/', req.url));
}
