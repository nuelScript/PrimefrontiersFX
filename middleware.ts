import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    "/",
    "/contact",
    "/about-us",
    "/about-mining",
    "/about-mining",
    "/bitcoin-mining",
    "/cookie-policy",
    "/crypto-trading",
    "/forex-trading",
    "/options-trading",
    "/privacy-policy",
    "/stocks-trading",
    "/terms",
    "/risk",
    "/copy-trading",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
