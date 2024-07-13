import { ReactNode } from "react";
import styles from "./title.module.css";

interface TitleProps {
  children?: ReactNode;
  span?: string;
  className?: string;
}

const Title = ({ children, span, className }: TitleProps) => {
  return (
    <h1 className={className ? styles[className] : "title"}>
      {children}<br></br>{span ? <span>{span}</span> : ""}
    </h1>
  );
};

export default Title;
