/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const shouldAnalyze = process.env.ANALYZE === "true";

const nextConfig = {
  reactStrictMode: true,
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? "/LoreEngine" : undefined,
  assetPrefix: isGitHubPages ? "/LoreEngine/" : undefined,
  trailingSlash: isGitHubPages,
  env: {
    NEXT_PUBLIC_GITHUB_PAGES: isGitHubPages ? "true" : "false"
  },
  images: {
    unoptimized: isGitHubPages
  }
};

let withBundleAnalyzer = (config) => config;

if (shouldAnalyze) {
  try {
    const bundleAnalyzer = (await import("@next/bundle-analyzer")).default;
    withBundleAnalyzer = bundleAnalyzer({ enabled: true });
  } catch {
    console.warn("Bundle analyzer requested. Install @next/bundle-analyzer to generate reports.");
  }
}

export default withBundleAnalyzer(nextConfig);
