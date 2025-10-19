import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/help", "/about"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
};
