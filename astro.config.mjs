// @ts-check
import { defineConfig } from "astro/config";

// COSINE+ AUTONOMOUS — Astro build
export default defineConfig({
  // For GitHub Pages (project pages): https://<user>.github.io/<repo>/
  site: "https://metatronsdoob369.github.io",
  base: "/Astro_Build/",
  server: {
    host: true,
    port: 4321,
    // allow the sandbox preview proxy host (and any subdomain of e2b.app)
    allowedHosts: [".e2b.app", "localhost"],
  },
});
