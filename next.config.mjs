/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "svgl.app",
        port: "",
        pathname: ""
      }
    ]
  }
}

export default nextConfig
