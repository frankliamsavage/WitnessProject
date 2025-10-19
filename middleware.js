import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/help", "/about"],
  afterSignInUrl: "/dashboard",
  afterSignUpUrl: "/dashboard",
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // protect routes by default
    "/",                     // but keep homepage public
  ],
};
