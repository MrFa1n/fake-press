import { PostCard, type Post } from "@/entities/post";
import { filterByLength } from "@/features/PostLengthFilter/";
import { PostLengthFilter } from "@/features/PostLengthFilter";
import { ItemList } from "@/shared/ui/ItemList";
import { useCallback, useMemo, useState } from "react";

interface PostListProps {
  posts: Post[];
}

export const PostList = ({ posts }: PostListProps) => {
  const [maxLength, setMaxLength] = useState(100);

  const filteredPosts = useMemo(
    () => filterByLength(posts, maxLength),
    [posts, maxLength]
  );

  const handleFilter = useCallback(
    (length: number) => setMaxLength(length),
    []
  );

  return (
    <section>
      <PostLengthFilter onFilter={handleFilter} />
      <ItemList<Post>
        items={filteredPosts}
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
    </section>
  );
};
