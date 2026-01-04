import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
//   site: "https://YOUR_DOMAIN",
  trailingSlash: "always",
  integrations: [sitemap()],
  base: "/insurance-site/"
});
