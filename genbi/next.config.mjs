/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "be.genbiuinam.org",
      },
    ],
    // minimumCacheTTL: 1500000,
  },
};

export default nextConfig;
