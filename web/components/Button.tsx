import React from "react";
import { FC } from "react";
import styles from "~/styles/Button.module.css";

interface Props {
  color: "accent" | "muted";
  text: string;
  onClick?: () => any;
}

const Button: FC<Props> = ({ color, text, onClick }) => {
  return (
    <button
      className={`${styles.button} ${
        color === "accent" && styles.button__accent
      } ${color === "muted" && styles.button__muted}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
