import type { ReactNode } from "react";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
  header: ReactNode;
  footer: ReactNode;
}

export const MainLayout = ({ children, header, footer }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      {header}
      <main className={styles.main}>{children}</main>
      {footer}
    </div>
  );
};
