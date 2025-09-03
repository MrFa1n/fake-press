import type { Post } from "@/entities/post/types";
import { PostCard } from "@/entities/post/ui/PostCard";
import { filterByLength } from "@/features/PostLengthFilter/lib/filterByLength";
import { PostLengthFilter } from "@/features/PostLengthFilter/ui/PostLengthFilter";
import { useCallback, useMemo, useState } from "react";
import { CommentsList } from "../CommentsList/ui/CommentsList";

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
      {filteredPosts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
          footer={
            post.comments.length > 0 && (
              <CommentsList comments={post.comments} />
            )
          }
        />
      ))}
    </section>
  );
};
