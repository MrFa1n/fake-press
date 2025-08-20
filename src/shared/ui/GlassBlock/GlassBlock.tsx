import React, { type ReactNode } from "react";
import styles from "./GlassBlock.module.css";

interface GlassBlockProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const GlassBlock: React.FC<GlassBlockProps> = ({
  children,
  className = "",
  style = {},
}) => {
  return (
    <div className={`${styles.glassBlock} ${className}`} style={style}>
      {children}
    </div>
  );
};
