/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: null,
  async rewrites() {
    return [     
      {
        source: "/journal/:path*/",
        destination: "https://next-proxy-test.ghost.io/journal/:path*/",
      },
      {
        source: "/journal/:path*",
        destination: "https://next-proxy-test.ghost.io/journal/:path*",
      }    
    ];
  },
  async headers() {
    return [
      {
        source: "/journal/:path*",
        headers: [{ key: "x-forwarded-host", value: "next-proxy-test.vercel.app" }],
      }
    ];
  }
}

module.exports = nextConfig
