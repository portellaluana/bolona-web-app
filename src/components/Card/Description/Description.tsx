import { ReactNode } from "react";
import styles from "./description.module.css";

interface DescriptionProps {
  description?: ReactNode;
  className?: string;
}

const Description = ({ description }: DescriptionProps) => {
  return (
    <h1 className={styles.description}>
      {description}
    </h1>
  );
};

export default Description;
