import { CommentsList } from "@/widgets/CommentsList/ui/CommentsList";
import type { Post } from "../types";
import styles from "./PostCard.module.css";
import { GlassBlock } from "@/shared/ui/GlassBlock/GlassBlock";
import { NavLink } from "react-router-dom";

export const PostCard = ({ id, title, body, comments }: Post) => {
  return (
    <GlassBlock>
      <NavLink to={`/posts/${id}`}>
        <h2 className={styles.title}>{title}</h2>
      </NavLink>
      <p className={styles.body}>{body}</p>
      {comments && comments.length > 0 && <CommentsList comments={comments} />}
    </GlassBlock>
  );
};
