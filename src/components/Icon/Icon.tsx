import styles from "./icon.module.css";

interface IconProps {
    extra1?: string;
    extra2?: string | null | undefined;
    firstFlavor?: string;
    secondFlavor?: string;
    thirdFlavor?: string;
    base?: string;
  }
  
  const Icon = ({ extra1, extra2, firstFlavor, secondFlavor, thirdFlavor, base}: IconProps) => {
    return (
      <div className={styles.container}>
        {extra1 && <img src={extra1} alt="extra1-icon" />}
        {extra2 && <img src={extra2} alt="extra2-icon" />}
        {thirdFlavor && <img src={thirdFlavor} alt="thirdFlavor-icon" />}
        {secondFlavor && <img src={secondFlavor} alt="secondFlavor-icon" />}
        {firstFlavor && <img src={firstFlavor} alt="firstFlavor-icon" />}
        <img src={base} alt="base-icon" />
      </div>
    );
  };
  
  export default Icon;
  