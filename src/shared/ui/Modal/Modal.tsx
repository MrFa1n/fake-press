import { useEffect, type ReactNode } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Button } from "../Button/Button";
import { CloseIcon } from "./icons/closeIcon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const icon = <CloseIcon className={styles.icon} />;

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null; // на всякий случай safeguard

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
        <Button
          shape="circle"
          variant="glassLight"
          iconOnly
          onClick={onClose}
          className={styles.closeButton}
        >
          <span className={styles.inner}>{icon}</span>
        </Button>
      </div>
    </div>,
    modalRoot
  );
};

Modal.Header = ({ children }: { children: ReactNode }) => (
  <div className={styles.header}>{children}</div>
);

Modal.Body = ({ children }: { children: ReactNode }) => (
  <div className={styles.body}>{children}</div>
);

Modal.Footer = ({ children }: { children: ReactNode }) => (
  <div className={styles.footer}>{children}</div>
);
