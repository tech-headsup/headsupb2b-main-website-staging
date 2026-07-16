/** @type {import('next').NextConfig} */
import deadUrl from "./src/Contants/deadUrl.js";
const nextConfig = {
  reactStrictMode: false,
  crossOrigin: 'anonymous', 
  images: {
    unoptimized: true,
    domains: ['admin.headsupb2b.com', 'firebasestorage.googleapis.com', 'cdn.hashnode.com', 'localhost', 'blogs.headsupb2b.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 604800,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  compress: true
  ,
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT,OPTIONS" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization" },
        ]
      }
    ]
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/metals",
        destination: "/",
        // "permanent": false,
        statusCode: 301

      },
      {
        source: "/natural-stone",
        destination: "/",
        // "permanent": false,
        statusCode: 301
      },
      {
        source: "/aggregates",
        destination: "/",
        // "permanent": false,
        statusCode: 301
      },
      {
        source: "/sand",
        destination: "/",
        // "permanent": false,
        statusCode: 301
      },
      {
        source: "/electrical",
        destination: "/electricals",
        // "permanent": false,
        statusCode: 301
      },
      //dead url given by ravi
      ...deadUrl
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        // {
        //   source: "/blog",
        //   destination: "https://blog.headsupb2b.com/blog",
        // },
        // {
        //   source: "/blog/:path*",
        //   destination: "https://blog.headsupb2b.com/blog/:path*",
        // },
      ],

    }

  }

};

export default nextConfig;


