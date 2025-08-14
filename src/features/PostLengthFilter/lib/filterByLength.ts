import type { Post } from "@/entities/post/types";

export const filterByLength = (posts: Post[], maxLength: number) =>
  posts.filter((p) => p.title.length <= maxLength);
