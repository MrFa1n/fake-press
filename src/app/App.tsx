import { mockPosts } from "@/entities/post/mocks/mockPosts";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { Footer } from "@/widgets/LayoutFooter/Footer";
import { Header } from "@/widgets/LayoutHeader/Header";
import { PostList } from "@/widgets/PostList/PostList";
import { useState } from "react";

export function App() {
  const [posts] = useState(mockPosts);
  const [loading] = useState(false);

  const PostListWithLoading = withLoading(PostList);

  return (
    <MainLayout header={<Header />} footer={<Footer />}>
      <PostListWithLoading posts={posts} isLoading={loading} />
    </MainLayout>
  );
}
