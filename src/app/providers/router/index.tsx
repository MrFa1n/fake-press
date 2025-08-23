import { useGetPostsQuery } from "@/entities/post/api/postsApi";
import { AlbumPhotosPage } from "@/pages/AlbumPhotosPage";
import { IndexPage } from "@/pages/IndexPage";
import { PostDetailsPage } from "@/pages/PostDetailsPage";
import { UserAlbumsPage } from "@/pages/UserAlbumsPage";
import { UsersPage } from "@/pages/UsersPage";
import { UserPostsPage } from "@/pages/UserPostsPage";
import { UserTodosPage } from "@/pages/UserTodosPage";
import { MainLayout } from "@/shared/layouts/MainLayout";
import { withLoading } from "@/shared/lib/hoc/withLoading";
import { Footer } from "@/widgets/LayoutFooter/Footer";
import { Header } from "@/widgets/LayoutHeader/Header";
import { PostList } from "@/widgets/PostList/PostList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  const { data: posts = [], isLoading } = useGetPostsQuery();

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
            element={
              <PostListWithLoading posts={posts} isLoading={isLoading} />
            }
          />
          <Route path="posts/:id" element={<PostDetailsPage />} />
          <Route path="albums/:id/photos" element={<AlbumPhotosPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="users/:id/albums" element={<UserAlbumsPage />} />
          <Route path="users/:id/todos" element={<UserTodosPage />} />
          <Route path="users/:id/posts" element={<UserPostsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
