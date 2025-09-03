import type { Post } from "../types";
import styles from "./PostCard.module.css";
import { GlassBlock } from "@/shared/ui/GlassBlock/GlassBlock";
import { NavLink } from "react-router-dom";

interface PostCardProps {
  id: Post["id"];
  title: Post["title"];
  body: Post["body"];
  footer: React.ReactNode;
}

export const PostCard = ({ id, title, body, footer }: PostCardProps) => {
  return (
    <GlassBlock>
      <NavLink to={`/posts/${id}`}>
        <h2 className={styles.title}>{title}</h2>
      </NavLink>
      <p className={styles.body}>{body}</p>
      {footer}
    </GlassBlock>
  );
};
