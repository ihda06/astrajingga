/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "media2.dev.to" }],
  },
};

export default nextConfig;
