import { useTheme } from "@/shared/lib/theme/useTheme";
import styles from "./ThemeSwitcher.module.css";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const icon = theme === "light" ? "🌞" : "🌙";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={styles.switcher}
      aria-label={`Переключить тему (${theme})`}
      title={`Сменить на ${theme === "light" ? "тёмную" : "светлую"} тему`}
    >
      {icon}
    </button>
  );
};
