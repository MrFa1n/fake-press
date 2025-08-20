import { useGetPostByIdQuery } from "@/entities/post/api/postsApi";
import { PostCard } from "@/entities/post/ui/PostCard";
import { useParams } from "react-router-dom";

export const PostDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const postId = Number(id);

  const {
    data: post,
    isLoading,
    isError,
  } = useGetPostByIdQuery(postId, {
    skip: !postId,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading post details.</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return <PostCard id={post.id} title={post.title} body={post.body} />;
};
