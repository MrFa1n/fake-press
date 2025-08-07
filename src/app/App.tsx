import { MainLayout } from "@/shared/layouts/MainLayout";
import { PostList } from "@/widgets/PostList/PostList";

export function App() {
  return (
    <MainLayout>
      <PostList />
    </MainLayout>
  );
}
