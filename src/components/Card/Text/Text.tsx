import { ReactNode } from "react";
import styles from "./text.module.css";

interface TextProps {
  text?: ReactNode;
  className?: string;
}

const Text = ({ text }: TextProps) => {
  return (
    <h4 className={styles.text}>{text}</h4>
  );
};

export default Text;
