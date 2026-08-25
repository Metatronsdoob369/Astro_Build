// @ts-check
import { defineConfig } from "astro/config";

// COSINE+ AUTONOMOUS — Astro build
export default defineConfig({
  site: "https://cosineautonomous.com",
  server: {
    host: true,
    port: 4321,
    // allow the sandbox preview proxy host (and any subdomain of e2b.app)
    allowedHosts: [".e2b.app", "localhost"],
  },
});
