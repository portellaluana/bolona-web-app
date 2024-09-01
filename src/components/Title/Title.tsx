import { ReactNode } from "react";
import styles from "./title.module.css";

interface TitleProps {
  children?: ReactNode;
  span?: string;
  className?: string;
  label?: string;
  labelClassName?: string;
}

const Title = ({
  children,
  span,
  className,
  label,
  labelClassName,
}: TitleProps) => {
  return (
    <h1 className={className ? styles[className] : styles.title}>
      {children} {span ? <span>{span}</span> : ""}
      {label && (
        <label
          className={labelClassName ? styles[labelClassName] : styles.label}
        >
          {label}
        </label>
      )}
    </h1>
  );
};

export default Title;
