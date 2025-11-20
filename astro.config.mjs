import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://lusteniny.eu",
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap(), robotsTxt(), react()],
});
