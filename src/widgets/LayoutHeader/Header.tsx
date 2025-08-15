import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import styles from "./Header.module.css";
import { useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Button } from "@/shared/ui/Button/Button";
import { NavLink } from "react-router-dom";
import { UserTabs } from "../UserTabs/UserTabs";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <Modal.Header>О проекте</Modal.Header>
        <Modal.Body>
          Voluptatem ipsum praesentium repellendus sed quia. Beatae nulla modi
          ex reiciendis illo at. Commodi consequuntur dignissimos. In
          exercitationem tempore modi consequuntur reiciendis. Iste occaecati
          omnis temporibus cum dolorem nihil. Qui neque iure rem aut soluta
          dolorum.
        </Modal.Body>
      </Modal>
    </div>
  );
};
