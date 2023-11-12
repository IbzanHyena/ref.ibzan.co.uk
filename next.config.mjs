import nextMdx from '@next/mdx'

// default options
const withMdx = nextMdx({})

/** @type {import('next').NextConfig} */
const nextConfig = withMdx({
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  pageExtensions: ["md", "mdx", "ts", "tsx", "js", "jsx"],
})

export default nextConfig
