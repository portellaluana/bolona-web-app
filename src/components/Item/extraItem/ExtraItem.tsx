import { useState } from "react";
import Button from "../../Buttons/Button";
import Price from "../../Card/Price/Price";
import Title from "../../Title/Title";
import styles from "./extraItem.module.css";
import deleteIcon from "../../../assets/delete.png";


interface ItemProps {
  image: string;
  name: string;
  currency: string;
  price: number;
}

const Item = ({ image, name, currency, price }: ItemProps) => {
  const [activeButton, setActiveButton] = useState(false);
  const [itens, setItens] = useState([]);

  const handleItemClick = () => {
    if (activeButton) {
      const newItens = itens.filter(item => item.name !== name || item.price !== price);
      setItens(newItens);
      setActiveButton(false);
    } else {
      setItens([...itens, { name, price }]);
      setActiveButton(true);
    }
    console.log("itens", itens);
  };

  const handleRemoveItem = () => {
    const newItens = itens.filter(item => item.name !== name || item.price !== price);
    setItens(newItens);
    setActiveButton(false);
    console.log("itens", itens);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {activeButton && (
          <a onClick={handleRemoveItem} className={styles.deleteButton}>
            <img src={deleteIcon} alt="Delete" />
          </a>
        )}
        <img src={image} alt={name} />
        <Title children={name} className="item-name" />
        <Price currency={currency} price={price} className="priceExtra" />
        <Button
          label={activeButton ? "Adicionado" : "Adicionar"}
          className={activeButton ? "tagButton tagButtonActive" : "tagButton"}
          onClick={handleItemClick}
        />
      </div>
    </div>
  );
};

export default Item;
