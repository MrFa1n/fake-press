import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  variant?: "blue" | "gray" | "black" | "link" | "glassLight" | "glassBlue";
  shape?: "pill" | "circle" | "softRounded";
  size?: "extraSmall" | "small" | "medium" | "large";
  iconOnly?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
};

export const Button: React.FC<ButtonProps> = ({
  variant = "blue",
  shape = "pill",
  size = "medium",
  iconOnly = false,
  disabled = false,
  onClick,
  children,
  className,
  style,
  type = "button",
}) => {
  const classNames = [
    styles.btn,
    styles[variant],
    styles[shape],
    styles[size],
    iconOnly ? styles.iconOnly : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
