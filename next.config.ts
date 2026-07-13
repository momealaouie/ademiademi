import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 84, 86, 88],
  },
  async redirects() {
    return [
      {
        source: "/packning-ompackning",
        destination: "/#tjanster",
        permanent: true,
      },
      {
        source: "/v%C3%A5r-historia",
        destination: "/#om-oss",
        permanent: true,
      },
      {
        source: "/kontakt",
        destination: "/#kontakt",
        permanent: true,
      },
      {
        source: "/kontakt/sitemap",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/hem",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
