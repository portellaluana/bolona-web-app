import { useState } from "react";
import Button from "../Buttons/Button";
import Price from "../Card/Price/Price";
import Title from "../Title/Title";
import styles from "./item.module.css";

interface ItemProps {
  image: string;
  name: string;
  currency: string;
  price: number;
  initialQuantity: number;
}

const Item = ({ image, name, currency, price, initialQuantity }: ItemProps) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const itens = []

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleItem = () => {
    itens.push(quantity)
    console.log('itens',itens);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={image} alt={name} />
        <Title children={name} className="item-name" />
        <Price currency={currency} price={price} />
        
        <div className={styles.quantityContent}>
          <Button label={"-"} className="minus" onClick={decrementQuantity} />
          <h4 className={styles.quantity}>{quantity}</h4>
          <Button label={"+"} className="plus" onClick={incrementQuantity} />
        </div>
        <Button label={"Adicionar"} className="tagButton" onClick={handleItem}/>
      </div>
    </div>
  );
};

export default Item;
