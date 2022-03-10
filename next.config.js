/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/journal/:path*/",
        destination: "https://next-proxy-test.ghost.io/journal/:path*/",
      },
      {
        source: "/journal/sitemap.xml",
        destination: "https://next-proxy-test.ghost.io/journal/sitemap.xml",
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
