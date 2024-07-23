import { useUserSelection } from "../../../context/UserSelectionContext";
import styles from "./summaryItem.module.css";

// interface SummaryItemProps {
//   image: string;
//   name: string;
//   currency: string;
//   price: number;
//   initialQuantity: number;
// }

const SummaryItem = () => {
  const { base, baseValue, flavors} = useUserSelection();

  const userBase = base;
  const userFlavors = flavors

  console.log(userBase);
  userFlavors.map((item)=> {
item
console.log(item);
})

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <figure className={styles.imgItem}/>
        
        <ul>
      <li>
        <h4 className={styles.text}>
          <span>{userBase}</span> sabor {userFlavors[0]} e {userFlavors[1]} e {userFlavors[2]}
        </h4>
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
          <h4 className={styles.quantity}>{'TOTAL'}</h4>
          <h4 className={styles.quantity}>R$ {baseValue}</h4>
        </div>

      </div>
    </div>
  );
};

export default SummaryItem;
