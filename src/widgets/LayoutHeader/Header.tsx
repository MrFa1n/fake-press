import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>FakePress</h1>
    </header>
  );
};
