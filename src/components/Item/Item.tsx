import Button from "../Buttons/Button";
import styles from "./item.module.css";

interface ItemProps {
  image: string;
  name: string;
  currency: string;
  price: number;
  quantity: number;
}

const Item = ({ image, name, currency, price, quantity }: ItemProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={image} alt={name} />

          <h4 className={styles.name}>{name}</h4>
          <h4 className={styles.price}>
            {currency}
            {price}
          </h4>
        <div className={styles.quantityContent}>
          <Button label={"-"} className="minus" />
          <h4 className={styles.quantity}>{quantity}</h4>
          <Button label={"+"} className="plus" />
        </div>
        <Button label={"Adicionar"} className="tagButton" />
      </div>
    </div>
  );
};

export default Item;
