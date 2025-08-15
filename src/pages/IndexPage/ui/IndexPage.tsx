import { GlassBlock } from "@/shared/ui/GlassBlock/GlassBlock";
import styles from "./IndexPage.module.css";
import { useMemo } from "react";
import type { Post } from "@/entities/post/types";
import { Button } from "@/shared/ui/Button/Button";
import { NavLink } from "react-router-dom";

interface IndexPageProps {
  posts: Post[];
}

export const IndexPage = ({ posts }: IndexPageProps) => {
  const recentPosts = useMemo(() => posts.slice(-3), [posts]);

  return (
    <div className={styles.indexPage}>
      <div className={styles.container}>
        <GlassBlock className={styles.content}>
          <h1>Добро пожаловать!</h1>
          <p>
            Здесь вы найдете посты, комментарии и альбомы пользователей. <br />
            Пожалуйста, используйте навигацию вверху для доступа к другим
            разделам.
          </p>
          <NavLink to={"/posts"}>
            <Button variant="glassLight" shape="softRounded" size="large">
              Начать просмотр
            </Button>
          </NavLink>
        </GlassBlock>
        <h1>Последние посты</h1>
        {recentPosts.map((post) => (
          <GlassBlock key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </GlassBlock>
        ))}
      </div>
    </div>
  );
};
