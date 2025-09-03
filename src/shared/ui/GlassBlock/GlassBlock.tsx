import React, { type ReactNode } from "react";
import styles from "./GlassBlock.module.css";

interface GlassBlockProps {
  children: ReactNode;
  className?: string;
}

export const GlassBlock: React.FC<GlassBlockProps> = ({
  children,
  className = "",
}) => {
  return <div className={`${styles.glassBlock} ${className}`}>{children}</div>;
};
