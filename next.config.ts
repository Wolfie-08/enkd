import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  // FAQ moved under the business page.
  async redirects() {
    return [
      { source: "/faq", destination: "/services/faq", permanent: true },
      { source: "/uz/faq", destination: "/uz/services/faq", permanent: true },
    ];
  },
};

export default config;
