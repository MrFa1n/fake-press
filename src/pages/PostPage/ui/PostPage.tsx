import { useParams } from "react-router-dom";
import { usePosts } from "@/features/PostList/model/hooks/usePosts";
import { PostCard } from "@/entities/post/ui/PostCard";

export const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, loading } = usePosts();

  if (loading) {
    return <p>Загрузка...</p>;
  }

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return <p>Пост не найден</p>;
  }

  return (
    <div>
      <PostCard
        id={post.id}
        key={post.id}
        title={post.title}
        body={post.body}
        comments={post.comments}
      />
    </div>
  );
};
