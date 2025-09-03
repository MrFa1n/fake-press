import { usePosts } from "@/features/PostList/model/hooks/usePosts";
import { AlbumPhotosPage } from "@/pages/AlbumPhotosPage";
import { UserAlbumsPage } from "@/pages/UserAlbumsPage";
import { UserPostsPage } from "@/pages/UserPostsPage";
import { UserTodosPage } from "@/pages/UserTodosPage";
import { PostPage } from "@/pages/PostPage";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { Footer } from "@/widgets/LayoutFooter/Footer";
import { Header } from "@/widgets/LayoutHeader/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from "@/pages/IndexPage";
import { PostList } from "@/widgets/PostList/PostList";

export const AppRouter = () => {
  const { posts, loading } = usePosts();

  const PostListWithLoading = withLoading(PostList);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainLayout header={<Header />} footer={<Footer />} />}
        >
          <Route index element={<IndexPage posts={posts} />} />
          <Route
            path="posts"
            element={<PostListWithLoading posts={posts} isLoading={loading} />}
          />
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="albums/:id/photos" element={<AlbumPhotosPage />} />
          <Route path="users/:id/albums" element={<UserAlbumsPage />} />
          <Route path="users/:id/todos" element={<UserTodosPage />} />
          <Route path="users/:id/posts" element={<UserPostsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
