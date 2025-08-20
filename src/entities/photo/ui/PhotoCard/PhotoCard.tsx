import { useState } from "react";
import type { Photo } from "../../types";
import styles from "./PhotoCard.module.css";
import { GlassBlock } from "@/shared/ui/GlassBlock/GlassBlock";

interface Props {
  photo: Photo;
}

export const PhotoCard = ({ photo }: Props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <GlassBlock className={styles.container}>
      {loading && !error && <div className={styles.skeleton} />}

      {!error ? (
        <img
          src={photo.thumbnailUrl}
          alt={photo.title}
          className={`${styles.image} ${loading ? "hidden" : ""}`}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
        />
      ) : (
        <div className={styles.fallback}>
          <span>📷</span>
          <p>Фото недоступно</p>
        </div>
      )}

      <p className={styles.title}>{photo.title}</p>
    </GlassBlock>
  );
};
