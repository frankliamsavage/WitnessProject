import { authMiddleware } from "@clerk/nextjs/dist/middleware";

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
