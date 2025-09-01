import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import styles from "./Header.module.css";
import { useCallback, useState } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { HeaderModal } from "./HeaderModal";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>FakePress</div>
        <div className={styles.navigation}>
          <Button onClick={handleOpen} variant="glassBlue" shape="pill">
            О проекте
          </Button>
          <ThemeSwitcher />
        </div>
      </div>
      <HeaderModal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};
