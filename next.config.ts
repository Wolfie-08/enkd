import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  output: "standalone", // self-contained server for the Contabo Docker image (Vercel ignores it)
  devIndicators: false, // the dev badge sits over bottom-left copy and skews contrast checks
  // FAQ moved under the business page.
  async redirects() {
    return [
      { source: "/faq", destination: "/services/faq", permanent: true },
      { source: "/uz/faq", destination: "/uz/services/faq", permanent: true },
    ];
  },
};

export default config;
