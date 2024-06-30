import React from "react";
import Button from "../../components/Buttons/Button";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
// import iconLogo from "../assets/icon-logo.png";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleBase = () => {
    navigate("/base");
  };

  return (
    <div className={styles.container}>
      {/* <img src={iconLogo} alt="icone-logo" className={styles.icon}/> */}
      <h1 className={styles.highlight}>Chega bolona derrete.</h1>
      <Button label={"Começar"} className='primary'onClick={handleBase}/>

    </div>
  );
};

export default Home;
