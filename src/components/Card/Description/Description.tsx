import { ReactNode } from "react";
import styles from "./description.module.css";

interface DescriptionProps {
  description?: ReactNode;
  className?: string;
}

const Description = ({ description }: DescriptionProps) => {
  return (
    <h5 className={styles.description}>
      {description}
    </h5>
  );
};

export default Description;
