import type { Comment } from "@/entities/comment/model/types";

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
  comments: Comment[];
}
