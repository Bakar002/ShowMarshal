/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",  // Change this to https to match the URL protocol
        hostname: "utfs.io",
      },
    ],
  },
};

export default nextConfig;
