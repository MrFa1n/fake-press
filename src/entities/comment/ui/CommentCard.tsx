import { useTheme } from "@/shared/lib/theme/useTheme";
import type { Comment } from "../model/types";
import styles from "./CommentCard.module.css";
import { LightIcon } from "@/entities/comment/icons/LightIcon";
import { DarkIcon } from "@/entities/comment/icons/DarkIcon";

export const CommentCard = ({ name, text }: Comment) => {
  const { theme } = useTheme();
  const icon =
    theme === "light" ? (
      <LightIcon className={styles.icon} />
    ) : (
      <DarkIcon className={styles.icon} />
    );

  return (
    <div className={styles.comment}>
      <div className={styles.commentIcon}>{icon}</div>
      <div className={styles.commentText}>
        <p className={styles.commentName}>{name}</p>
        <p className={styles.commentBody}>{text}</p>
      </div>
    </div>
  );
};
