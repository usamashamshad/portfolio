import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY_NAME || "portfolio";

// For usamashamshad.github.io repo → set GITHUB_REPOSITORY_NAME="" in workflow
// For usamashamshad.github.io/portfolio → keep GITHUB_REPOSITORY_NAME=portfolio
const basePath = isGithubPages && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
