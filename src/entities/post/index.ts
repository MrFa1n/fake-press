export { PostCard } from "./ui/PostCard";
export type { Post } from "./model/types";
export {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostByUserIdQuery,
} from "./api/postsApi";
export { postsApi } from "./api/postsApi";
export { default as postReducer } from "./model/slice/postSlice";
