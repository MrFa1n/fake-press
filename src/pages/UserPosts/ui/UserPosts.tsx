import { PostCard, useGetPostByUserIdQuery } from "@/entities/post";
import type { Post } from "@/entities/post";
import { useGetUsersByIdQuery } from "@/entities/user";
import { ItemList } from "@/shared/ui/ItemList";
import { useParams } from "react-router-dom";

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useGetPostByUserIdQuery(userId);

  const { data: user, isLoading: userLoading } = useGetUsersByIdQuery(userId);

  if (userLoading) return <div>Загрузка пользователя...</div>;
  if (isLoading) return <div>Загрузка постов...</div>;
  if (isError) return <div>Ошибка загрузки</div>;

  return (
    <div>
      <h1>Посты пользователя {user?.name}</h1>
      <ol type="1">
        <ItemList<Post>
          items={posts}
          keyExtractor={(post) => post.id}
          renderItem={(post) => (
            <PostCard
              key={post.id}
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
              comments={post.comments}
            />
          )}
        />
      </ol>
    </div>
  );
};
