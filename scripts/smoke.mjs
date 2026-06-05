const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";

const checks = [
  { path: "/", expect: "LoreEngine" },
  { path: "/market", expect: "Market Pulse" },
  { path: "/archive", expect: "Weekly Archive" },
  {
    path: "/articles/nvidia-gaming-ai-stack-targets-on-device-agents",
    expect: "NVIDIA"
  },
  { path: "/api/market", expect: "snapshotDate" },
  { path: "/api/health", expect: "\"status\":\"ok\"" },
  { path: "/robots.txt", expect: "sitemap" },
  { path: "/sitemap.xml", expect: "lore-engine.ethankim.cc" }
];

async function checkRoute({ path, expect }) {
  const url = new URL(path, baseUrl);
  const response = await fetch(url);
  const body = await response.text();

  if (!response.ok) {
    throw new Error(`${path} returned ${response.status}`);
  }

  if (!body.includes(expect)) {
    throw new Error(`${path} did not include expected text: ${expect}`);
  }

  console.log(`ok ${path}`);
}

try {
  for (const check of checks) {
    await checkRoute(check);
  }

  console.log(`Smoke checks passed for ${baseUrl}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
