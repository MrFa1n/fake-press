import { CommentsList } from "@/widgets/CommentsList/ui/CommentsList";
import type { Post } from "../types";
import styles from "./PostCard.module.css";

export const PostCard = ({ title, body, comments }: Post) => {
  return (
    <article className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      {comments.length > 0 && <CommentsList comments={comments} />}
    </article>
  );
};
