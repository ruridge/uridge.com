import type { Options } from "rehype-autolink-headings";
import { h } from "hastscript";

export const autolinkConfig: Options = {
  properties: {
    class:
      "ml-2 text-zinc-300 no-underline hover:text-blue-600 dark:text-zinc-600 dark:hover:text-blue-400",
  },
  behavior: "append",
  content: h("span", null, "#"),
};
