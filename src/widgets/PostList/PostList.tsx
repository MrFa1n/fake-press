import { mockPosts } from "@/entities/post/mocks/mockPosts";
import { PostCard } from "@/entities/post/ui/PostCard";

export const PostList = () => {
  return (
    <section>
      {mockPosts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </section>
  );
};
