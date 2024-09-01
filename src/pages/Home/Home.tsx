import React, { useState } from "react";
import Button from "../../components/Buttons/Button";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import iconLogo from "../../assets/icon-logo.png";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleBase = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/base");
    }, 2000);
  };

  return (
    <>
      {isLoading ? (
        <div className={styles.loadingScreen}>
          <figure className={styles.loading} />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.bgImg}></div>
          <div className={styles.content}>
            <div className={styles.icon}>
              <img src={iconLogo} alt="icone-logo" className={styles.icon} />
            </div>
            <h1 className={styles.highlight}>
              Chega<br></br>bolona<br></br>derrete.
            </h1>
            <Button
              label={"Começar"}
              className="primaryHome"
              onClick={handleBase}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
