import Button from "../../Buttons/Button";
import Price from "../../Card/Price/Price";
import Title from "../../Title/Title";
import styles from "./extraItem.module.css";

interface ItemProps {
  image: string;
  name: string;
  currency: string;
  price: number;
}

const Item = ({ image, name, currency, price }: ItemProps) => {

  const itens = []



  const handleItem = () => {
    itens.push(name, price)
    console.log('itens',itens);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={image} alt={name} />
        <Title children={name} className="item-name" />
        <Price currency={currency} price={price} className="priceExtra" />
        <Button label={"Adicionar"} className="tagButton" onClick={handleItem}/>
      </div>
    </div>
  );
};

export default Item;
