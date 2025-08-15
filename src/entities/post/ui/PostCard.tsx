import { CommentsList } from "@/widgets/CommentsList/ui/CommentsList";
import type { Post } from "../types";
import styles from "./PostCard.module.css";
import { GlassBlock } from "@/shared/ui/GlassBlock/GlassBlock";

export const PostCard = ({ title, body, comments }: Post) => {
  return (
    <GlassBlock>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.body}>{body}</p>
      {comments && comments.length > 0 && <CommentsList comments={comments} />}
    </GlassBlock>
  );
};
