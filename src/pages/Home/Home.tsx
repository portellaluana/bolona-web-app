import React from "react";
import Button from "../../components/Button/Button";
import styles from "./home.module.css";
// import iconLogo from "../assets/icon-logo.png";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* <img src={iconLogo} alt="icone-logo" className={styles.icon}/> */}
      <h1>Chega bolona derrete.</h1>
      <Button label={"Começar"} className={styles.primary}/>

    </div>
  );
};

export default Home;
