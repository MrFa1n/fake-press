import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import styles from "./Header.module.css";
import { useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Button } from "@/shared/ui/Button/Button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <div className={styles.logo}>FakePress</div>
        <div className={styles.navigation}>
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
            variant="glassBlue"
            shape="pill"
          >
            О проекте
          </Button>
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
