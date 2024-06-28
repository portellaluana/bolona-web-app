import Button from "../Button/Button";
import styles from "./card.module.css";

interface CardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  onAddClick?: () => void;
}

const Card = ({ title, description, price, image, onAddClick }: CardProps) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <h4 className={styles.description}>{description}</h4>
        <h3 className={styles.price}>
          R$ <span>{price}</span>
        </h3>
        <Button label={"Adicionar"} className={styles.primary} onClick={onAddClick}/>
      </div>
    </div>
  );
};

export default Card;
