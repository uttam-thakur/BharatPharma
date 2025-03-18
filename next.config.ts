// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Optimize on-demand entries in dev mode
  onDemandEntries: {
    maxInactiveAge: 25 * 1000, // 25 seconds cache
    pagesBufferLength: 5,
  },
  // Optional: silences mismatches on specific attributes
  compiler: {
    // Prevent hydration warnings from crashing local dev
    reactRemoveProperties: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
