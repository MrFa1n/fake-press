import type { Post } from "@/entities/post/model/types";

export const filterByLength = (posts: Post[], maxLength: number) =>
  posts.filter((p) => p.title.length <= maxLength);
