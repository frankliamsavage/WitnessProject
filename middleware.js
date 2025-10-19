import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/", "/help", "/about"],
  afterSignInUrl: "/dashboard",
  afterSignUpUrl: "/dashboard",
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
  ],
};
