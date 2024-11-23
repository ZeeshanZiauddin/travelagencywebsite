/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000", // Include the port if you're running locally
      },
      {
        protocol: "https",
        hostname: "your-production-domain.com", // Replace with your production domain
      },
    ],
  },
};

export default nextConfig;
