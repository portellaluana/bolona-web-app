import { ReactNode } from "react";
import styles from "./price.module.css";

interface PriceProps {
  price?: ReactNode;
  currency?: string;
  className?: string;
}

const Price = ({ price, currency }: PriceProps) => {
  return (
    <h3 className={styles.price}>
    <span>
      {currency}
      {price}
    </span>
  </h3>
  );
};

export default Price;
