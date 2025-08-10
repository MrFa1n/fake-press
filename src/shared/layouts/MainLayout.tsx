import { Header } from "@/widgets/LayoutHeader/Header";
import { Footer } from "@/widgets/LayoutFooter/Footer";
import type { ReactNode } from "react";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
