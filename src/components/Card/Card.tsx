import Button from "../Buttons/Button";
import Title from "../Title/Title";
import styles from "./card.module.css";

interface CardProps {
  flavor?: string,
  title?: string;
  description?: string;
  price?: number;
  currency?: string;
  image: string;
  icon?: string;
  onAddClick?: () => void;
}

const Card = ({ title, description, price, currency, flavor, image, icon, onAddClick }: CardProps) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
     <img src={icon} alt="icon" />
      <div className={styles.content}>
        <h4 className={styles.flavor}>{flavor}</h4>
      <Title children={title} className='name'/>

        <h4 className={styles.description}>{description}</h4>
        <h3 className={styles.price}>
          <span>{currency}{price}</span>
        </h3>
      <Button label={"Adicionar"} className="primary" onClick={onAddClick} />
      </div>
    </div>
  );
};

export default Card;
