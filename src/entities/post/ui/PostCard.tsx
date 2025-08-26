import { CommentsList } from "@/widgets/CommentsList";
import type { Post } from "../model/types";
import styles from "./PostCard.module.css";
import { GlassBlock } from "@/shared/ui/GlassBlock";
import { NavLink } from "react-router-dom";
import { useGetCommentsByPostQuery } from "@/entities/comment";

export const PostCard = ({ id, title, body }: Post) => {
  const { data: comments = [], isLoading } = useGetCommentsByPostQuery(id);

  return (
    <GlassBlock>
      <NavLink to={`/posts/${id}`}>
        <h2 className={styles.title}>{title}</h2>
      </NavLink>
      <p className={styles.body}>{body}</p>
      {isLoading ? (
        <p className={styles.loading}>Loading comments...</p>
      ) : (
        <CommentsList comments={comments} />
      )}
    </GlassBlock>
  );
};
