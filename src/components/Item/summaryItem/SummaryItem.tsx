import { useUserSelection } from "../../../context/UserSelectionContext";
import styles from "./summaryItem.module.css";

const SummaryItem = () => {
  const { base, baseValue, flavors } = useUserSelection();

  let userBase;

  switch (base) {
    case 'Casquinha':
      userBase = (
        <h4 className={styles.text}>
          <span>{base}</span> sabor {flavors[0]}
        </h4>
      );
      break;
    case 'Cascão':
      userBase = (
        <h4 className={styles.text}>
          <span>{base}</span> sabor {flavors[0]} e {flavors[1]}
        </h4>
      );
      break;
    case 'Copinho':
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
            <h5 className={styles.price}>R$ {baseValue}</h5>
          </li>
          {/* <li>
            <h4 className={styles.text}>
              <span>Cobertura</span> sabor morango
            </h4>
            <h5 className={styles.price}>R$ 1,00</h5>
          </li> */}
        </ul>
        <div className={styles.total}>
          <h4 className={styles.quantity}>TOTAL</h4>
          <h4 className={styles.quantity}>R$ {baseValue}</h4>
        </div>
      </div>
    </div>
  );
};

export default SummaryItem;
