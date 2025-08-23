import React, {
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
  type MouseEventHandler,
} from "react";
import styles from "./Button.module.css";

type ButtonVariant =
  | "blue"
  | "gray"
  | "black"
  | "link"
  | "glassLight"
  | "glassBlue";
type ButtonShape = "pill" | "circle" | "softRounded";
type ButtonSize = "extraSmall" | "small" | "medium" | "large";
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  shape?: ButtonShape;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconOnly?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type?: ButtonType;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  shape = "pill",
  variant = "blue",
  iconOnly = false,
  size = "medium",
  className,
  disabled = false,
  onClick,
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
