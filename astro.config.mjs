import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
  ],
});
