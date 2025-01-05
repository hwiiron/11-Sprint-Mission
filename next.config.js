/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sprint-fe-project.s3.ap-northeast-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "another-example.com",
      },
      {
        protocol: "http",
        hostname: "via.placeholder.com",
      },
    ],
  },

  compiler: {
    styledComponents: true,
  },

  // output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
