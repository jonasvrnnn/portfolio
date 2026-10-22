import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const demoUrl = process.env.NEXT_PUBLIC_WEBONTWIKKELING_DEMO_URL;
    if (!demoUrl) return [];

    const demo = new URL(demoUrl);
    // Keep this app's session cookie first-party, including its root-relative
    // form actions, redirects and stylesheet. Never proxy arbitrary paths.
    const routes = [
      "/login",
      "/register",
      "/logout",
      "/home/:path*",
      "/book-detail/:path*",
      "/category/:path*",
      "/category-detail/:path*",
      "/style.css",
    ];

    return [
      { source: "/demo/boeken", destination: demo.href },
      ...routes.map((source) => ({
        source,
        destination: `${demo.origin}${source}`,
      })),
    ];
  },
};

export default nextConfig;
