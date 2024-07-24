import { ReactNode } from "react";
import styles from "./price.module.css";

interface PriceProps {
  price?: ReactNode;
  currency?: string;
  className?: string;
}

const Price = ({ price, currency, className }: PriceProps) => {
  return (
    <h3 className={className ? styles[className] : "price"}>
    <span>
      {currency}
      {price}
    </span>
  </h3>
  );
};

export default Price;
