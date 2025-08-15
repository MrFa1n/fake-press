import type { Post } from "@/entities/post/types";
import { useEffect, useState } from "react";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => setError("Ошибка загрузки постов"))
      .finally(() => setLoading(false));
  }, []);

  return { posts, loading, error };
};
