import { Button } from "@/shared/ui/Button/Button";
import { useCallback, useState } from "react";
import styles from "./CommentsList.module.css";
import { useTheme } from "@/shared/lib/theme/useTheme";
import type { Comment } from "@/entities/comment/model/types";
import { ItemList } from "@/shared/ui/ItemList/ItemList";

interface CommentsListProps {
  comments: Comment[];
}

export const CommentsList = ({ comments }: CommentsListProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggle = useCallback(() => setCollapsed((prev) => !prev), []);

  const displayed = collapsed ? comments.slice(0, 3) : comments;

  const { theme } = useTheme();

  const icon =
    theme === "light" ? (
      <svg
        className={styles.icon}
        fill="#ffffff"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-3.17 -3.17 37.99 37.99"
      >
        <g id="SVGRepo_bgCarrier" transform="translate(0,0), scale(1)">
          <rect
            x="-3.17"
            y="-3.17"
            width="37.99"
            height="37.99"
            rx="18.995"
            fill="#000000"
          ></rect>
        </g>
        <g id="SVGRepo_tracerCarrier" stroke="#CCCCCC"></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M26.734,26.547l-1.395-8.357c-0.366-2.189-2.261-3.794-4.479-3.794h-2.273c2.754-1.098,4.703-3.784,4.703-6.931 C23.29,3.341,19.948,0,15.826,0S8.362,3.342,8.362,7.464c0,3.147,1.95,5.833,4.705,6.931h-2.276c-2.22,0-4.114,1.604-4.479,3.794 l-1.395,8.357c-0.212,1.271,0.146,2.569,0.979,3.553S7.951,31.65,9.24,31.65h13.172c1.289,0,2.512-0.567,3.345-1.551 C26.588,29.117,26.946,27.817,26.734,26.547z M10.925,7.437c0-2.706,2.194-4.9,4.9-4.9c2.707,0,4.901,2.194,4.901,4.9 c0,2.707-2.194,4.901-4.901,4.901C13.119,12.338,10.925,10.144,10.925,7.437z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    ) : (
      <svg
        className={styles.icon}
        fill="#0000000"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-3.17 -3.17 37.99 37.99"
        stroke="#0000000"
      >
        <g id="SVGRepo_bgCarrier" transform="translate(0,0), scale(1)">
          <rect
            x="-3.17"
            y="-3.17"
            width="37.99"
            height="37.99"
            rx="18.995"
            fill="#ffffff"
          ></rect>
        </g>
        <g id="SVGRepo_tracerCarrier" stroke="#CCCCCC"></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <path d="M26.734,26.547l-1.395-8.357c-0.366-2.189-2.261-3.794-4.479-3.794h-2.273c2.754-1.098,4.703-3.784,4.703-6.931 C23.29,3.341,19.948,0,15.826,0S8.362,3.342,8.362,7.464c0,3.147,1.95,5.833,4.705,6.931h-2.276c-2.22,0-4.114,1.604-4.479,3.794 l-1.395,8.357c-0.212,1.271,0.146,2.569,0.979,3.553S7.951,31.65,9.24,31.65h13.172c1.289,0,2.512-0.567,3.345-1.551 C26.588,29.117,26.946,27.817,26.734,26.547z M10.925,7.437c0-2.706,2.194-4.9,4.9-4.9c2.707,0,4.901,2.194,4.901,4.9 c0,2.707-2.194,4.901-4.901,4.901C13.119,12.338,10.925,10.144,10.925,7.437z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    );

  return (
    <div className={styles.commentsList}>
      <div className={styles.container}>
        <div className={styles.comments}>
          <ItemList<Comment>
            items={displayed}
            keyExtractor={(comment) => comment.id}
            renderItem={(comment) => (
              <div className={styles.comment} key={comment.id}>
                <div className={styles.commentIcon}>{icon}</div>
                <div className={styles.commentText}>
                  <p className={styles.commentName}>{comment.name}</p>
                  <p className={styles.commentBody}>{comment.body}</p>
                </div>
              </div>
            )}
          />
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
