import { useTheme } from "@/shared/lib/theme/useTheme";
import styles from "./ThemeSwitcher.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const icon =
    theme === "light" ? (
      <SunIcon className={styles.icon} />
    ) : (
      <MoonIcon className={styles.icon} />
    );

  return (
    <Button onClick={toggleTheme} shape="circle" variant="glassLight" iconOnly>
      <span className={styles.inner}>{icon}</span>
    </Button>
  );
};
