import { ThemeSwitcher } from "@/features/ThemeSwitcher/ui/ThemeSwitcher";
import styles from "./Header.module.css";
import { useState } from "react";
import { Modal } from "@/shared/ui/Modal/Modal";
import { Button } from "@/shared/ui/Button/Button";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>FakePress</h1>
      <div className={styles.navigation}>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          О проекте
        </Button>
        <ThemeSwitcher />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <h2>О проекте</h2>
        <p>
          Voluptatem ipsum praesentium repellendus sed quia. Beatae nulla modi
          ex reiciendis illo at. Commodi consequuntur dignissimos. In
          exercitationem tempore modi consequuntur reiciendis. Iste occaecati
          omnis temporibus cum dolorem nihil. Qui neque iure rem aut soluta
          dolorum.
        </p>
      </Modal>
    </header>
  );
};
