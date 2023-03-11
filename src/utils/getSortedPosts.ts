import type { CollectionEntry } from "astro:content";

export const getSortedPosts = (posts: CollectionEntry<"blog">[]) =>
  posts.sort(
    (a, b) =>
      new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );
