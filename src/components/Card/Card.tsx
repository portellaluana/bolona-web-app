import Button from "../Buttons/Button";
import Description from "./Description/Description";
import Title from "../Title/Title";
import styles from "./card.module.css";
import Price from "./Price/Price";
import Text from "./Text/Text";
import Icon from "../Icon/Icon";

interface CardProps {
  title?: string;
  price?: number;
  currency?: string;
  image: string;
  icon?: string;
  onAddClick?: () => void;
  description?: string;
  text?: string;

  extra1: string,
  extra2: string,
  firstFlavor: string,
  secondFlavor?: string,
  thirdFlavor?: string,
  base: string,
}

const Card = ({
  title,
  price,
  currency,
  image,
  onAddClick,
  description,
  text,
  extra1,
  extra2,
  firstFlavor,
  secondFlavor,
  thirdFlavor,
  base,
}: CardProps) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <Icon
       extra2 = {extra2}
       extra1 = {extra1}
       firstFlavor = {firstFlavor}
       secondFlavor =  {secondFlavor}
       thirdFlavor = {thirdFlavor}
       base = {base}
        />
      <div className={styles.content}>
        <Text text={text} />
        <Title children={title} className="name" />
        <Description description={description} />
        <Price currency={currency} price={price} />
        <Button label={"Adicionar"} className="primary" onClick={onAddClick} />
      </div>
    </div>
  );
};

export default Card;
