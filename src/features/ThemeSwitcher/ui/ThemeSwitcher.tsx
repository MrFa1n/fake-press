import { useTheme } from "@/shared/lib/theme/useTheme";
import styles from "./ThemeSwitcher.module.css";
import { Button } from "@/shared/ui/Button/Button";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const icon =
    theme === "light" ? (
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="5" />
        <g stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
          <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="4" y2="12" />
          <line x1="20" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
          <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
        </g>
      </svg>
    ) : (
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M21 12.79A9 9 0 0 1 11.21 3c0-.55-.45-1-1-1 0 0-.05 0-.07.01A9.002 9.002 0 1 0 21 12.79z" />
      </svg>
    );

  return (
    <Button onClick={toggleTheme} shape="circle" variant="glassLight" iconOnly>
      <span className={styles.inner}>{icon}</span>
    </Button>
  );
};
