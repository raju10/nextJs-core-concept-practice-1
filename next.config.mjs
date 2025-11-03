/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  ////
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
    ],
  },

  ///

  async redirects() {
    return [
      // Basic redirect
      {
        source: "/products/add",
        destination: "/dashboard/products/add",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
