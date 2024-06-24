import { ReactNode } from "react";
import styles from "./title.module.css";

interface TitleProps {
  children: ReactNode;
  span: string;
}

const Title = ({ children, span }: TitleProps) => {
  return (
    <h1 className={styles.title}>
      {children}
      <br />
      <span className={styles.span}>{span}</span>
    </h1>
  );
};

export default Title;
