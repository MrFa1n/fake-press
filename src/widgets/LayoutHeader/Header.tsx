import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import styles from "./Header.module.css";
import { useCallback, useState } from "react";
import { Button } from "@/shared/ui/Button/Button";
import { NavLink } from "react-router-dom";
import { UserTabs } from "../UserTabs/UserTabs";

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
        <NavLink to={"/"} className={styles.link}>
          <div className={styles.logo}>FakePress</div>
        </NavLink>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div className={styles.navigation}>
            <UserTabs />
            <Button
              onClick={() => {
                setIsOpen(true);
              }}
              variant="glassBlue"
              shape="pill"
              size="small"
            >
              О проекте
            </Button>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      <HeaderModal isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};
