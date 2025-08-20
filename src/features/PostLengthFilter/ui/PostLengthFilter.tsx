import { useCallback, useState } from "react";
import styles from "./PostLengthFilter.module.css";

interface Props {
  onFilter: (length: number) => void;
}

export const PostLengthFilter = ({ onFilter }: Props) => {
  const [length, setLength] = useState(50);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = Number(e.target.value);
      setLength(val);
      onFilter(val);
    },
    [onFilter]
  );

  return (
    <div className={styles.filterWrapper}>
      <label className={styles.filterLabel}>Длина заголовка (макс.):</label>
      <input
        className={styles.filterInput}
        type="number"
        value={length}
        onChange={handleChange}
      />
    </div>
  );
};
