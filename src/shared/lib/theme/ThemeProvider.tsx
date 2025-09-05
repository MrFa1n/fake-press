import { useEffect, useMemo, useState, type PropsWithChildren } from "react";
import { type Theme, ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const contextValue = useMemo(() => {
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  return <ThemeContext value={contextValue}>{children}</ThemeContext>;
};
