import React from "react";
import { useUserSelection } from "../../../context/UserSelectionContext";
import styles from "./summaryItem.module.css";

const SummaryItem: React.FC = () => {
  const { base, baseValue, flavors, extra } = useUserSelection();

  const safeBaseValue = baseValue ?? 0;

  const totalExtras = extra.reduce((acc, item) => acc + item.price, 0);

  const totalValue = safeBaseValue + totalExtras;

  const extraItems = extra.map((item, index) => (
    <li key={index}>
      <h4 className={styles.text}>
        <span>{item.name}</span> adicional
      </h4>
      <h5 className={styles.price}>R$ {item.price}</h5>
    </li>
  ));

  let userBase;

  switch (base) {
    case "Casquinha":
      userBase = (
        <h4 className={styles.text}>
          <span>{base}</span> sabor {flavors[0]}
        </h4>
      );
      break;
    case "Cascão":
      userBase = (
        <h4 className={styles.text}>
          <span>{base}</span> sabor {flavors[0]} e {flavors[1]}
        </h4>
      );
      break;
    case "Copinho":
      userBase = (
        <h4 className={styles.text}>
          <span>{base}</span> sabor {flavors[0]}, {flavors[1]} e {flavors[2]}
        </h4>
      );
      break;
    default:
      userBase = <h4 className={styles.text}>Erro: Base não selecionada</h4>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <figure className={styles.imgItem} />
        <ul>
          <li>
            {userBase}
            <h5 className={styles.price}>R$ {safeBaseValue}</h5>
          </li>
          {extraItems}
        </ul>
        <div className={styles.total}>
          <h4 className={styles.quantity}>TOTAL</h4>
          <h4 className={styles.quantity}>R$ {totalValue}</h4>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
