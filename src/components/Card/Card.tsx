import Button from "../Buttons/Button";
import Description from "./Description/Description";
import Title from "../Title/Title";
import styles from "./card.module.css";
import Price from "./Price/Price";
import Text from "./Text/Text";

interface CardProps {
  text?: string;
  title?: string;
  price?: number;
  currency?: string;
  image: string;
  icon?: string;
  onAddClick?: () => void;
  description?: string;
}

const Card = ({
  title,
  price,
  currency,
  image,
  icon,
  onAddClick,
  description,
  text,
}: CardProps) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <img src={icon} alt="icon" />
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
