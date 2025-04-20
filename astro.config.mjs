import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.uridge.com/",

  integrations: [
    sitemap(),
    mdx(),
    preact(),
  ],

  markdown: {
    rehypePlugins: [rehypeHeadingIds, [rehypeAutolinkHeadings, autolinkConfig]],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});