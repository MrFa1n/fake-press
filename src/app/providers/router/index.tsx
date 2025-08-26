import { useGetPostsQuery } from "@/entities/post";
import { AlbumPhotosPage } from "@/pages/AlbumPhotos";
import { IndexPage } from "@/pages/Index";
import { PostDetailsPage } from "@/pages/PostDetails";
import { UserAlbumsPage } from "@/pages/UserAlbums";
import { UsersPage } from "@/pages/Users";
import { UserPostsPage } from "@/pages/UserPosts";
import { UserTodosPage } from "@/pages/UserTodos";
import { MainLayout } from "@/shared/layouts";
import { withLoading } from "@/shared/lib/hoc";
import { Footer } from "@/widgets/LayoutFooter";
import { Header } from "@/widgets/LayoutHeader";
import { PostList } from "@/widgets/PostList";
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
