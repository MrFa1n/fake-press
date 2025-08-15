import type { ReactNode } from "react";
import styles from "./MainLayout.module.css";
import { Outlet } from "react-router-dom";

interface MainLayoutProps {
  header: ReactNode;
  footer: ReactNode;
}

export const MainLayout = ({ header, footer }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      {header}
      <div className={styles.container}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
      {footer}
    </div>
  );
};
