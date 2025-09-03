import { memo, useEffect, useRef } from "react";
import styles from "./PostLengthFilter.module.css";

interface Props {
  onFilter: (length: number) => void;
}

export const PostLengthFilterComponent = ({ onFilter }: Props) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onFilter(val);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  });

  return (
    <div className={styles.filterWrapper}>
      <label className={styles.filterLabel}>Длина заголовка (макс.):</label>
      <input
        className={styles.filterInput}
        type="number"
        defaultValue={50}
        onChange={handleChange}
      />
    </div>
  );
};

export const PostLengthFilter = memo(PostLengthFilterComponent);
