import type { Post } from "../types";
import styles from "./PostCard.module.css";

interface PostCardProps {
  title: Post["title"];
  body: Post["body"];
  footer: React.ReactNode;
}

export const PostCard = ({ title, body, footer }: PostCardProps) => {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      {footer}
    </article>
  );
};
