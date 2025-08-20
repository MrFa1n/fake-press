import { PhotoCard } from "../PhotoCard/PhotoCard";
import styles from "./PhotosList.module.css";
import type { Photo } from "../../types";

interface PhotosListProps {
  photos: Photo[];
}

export const PhotosList = ({ photos }: PhotosListProps) => {
  return (
    <div className={styles.wrapper}>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};
