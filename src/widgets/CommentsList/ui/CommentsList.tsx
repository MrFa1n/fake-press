import { Button } from "@/shared/ui/Button/Button";
import { useCallback, useState } from "react";
import styles from "./CommentsList.module.css";
import { CommentCard } from "@/entities/comment/ui/CommentCard";

interface Comment {
  id: number;
  name: string;
  text: string;
}

interface CommentsListProps {
  comments: Comment[];
}

export const CommentsList = ({ comments }: CommentsListProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = useCallback(() => setCollapsed((prev) => !prev), []);

  const displayed = collapsed ? comments.slice(0, 3) : comments;

  return (
    <div className={styles.commentsList}>
      <div className={styles.container}>
        <div className={styles.comments}>
          {displayed.map((c) => (
            <CommentCard key={c.id} {...c} />
          ))}
        </div>
        {comments.length > 3 && (
          <Button variant="glassBlue" onClick={toggle}>
            {collapsed ? "Подробнее" : "Скрыть"}
          </Button>
        )}
      </div>
    </div>
  );
};
