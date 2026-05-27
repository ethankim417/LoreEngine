/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  reactStrictMode: true,
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/LoreEngine" : undefined,
  assetPrefix: isGitHubPages ? "/LoreEngine/" : undefined,
  trailingSlash: isGitHubPages,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
