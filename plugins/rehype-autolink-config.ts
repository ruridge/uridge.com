import type { Options } from "rehype-autolink-headings";
import { h } from "hastscript";

export const autolinkConfig: Options = {
  properties: {
    "aria-hidden": "true",
    tabindex: "-1",
    class: "anchor",
  },
  behavior: "append",
  content: h("span", null, "#"),
};
