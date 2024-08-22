import { useEffect, useState } from "react";
import Button from "../../Buttons/Button";
import Price from "../../Card/Price/Price";
import Title from "../../Title/Title";
import styles from "./extraItem.module.css";
import deleteIcon from "../../../assets/delete.png";
import { useUserSelection } from "../../../context/UserSelectionContext";


interface ItemProps {
  image: string;
  name: string;
  currency: string;
  price: number;
}

const Item = ({ image, name, currency, price }: ItemProps) => {
  const { extra, setExtra  } = useUserSelection();
  const [activeButton, setActiveButton] = useState(false);

  const handleItemClick = () => {
    if (activeButton) {
      const newItens = extra.filter(item => item.name !== name || item.price !== price);
      setExtra(newItens);
      setActiveButton(false);
    } else {
      setExtra([...extra, { name, price }]);
      setActiveButton(true);
    }
  };

  const handleRemoveItem = () => {
    const newItens = extra.filter(item => item.name !== name || item.price !== price);
    setExtra(newItens);
    setActiveButton(false);
    console.log("itens", extra);
  };

  useEffect(() => {
    
  }, [extra]);

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
