import React from "react";
import Button from "../../components/Button/Button";
import styles from "./base.module.css";
import Slider from "../../components/Slider/Slider";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Breadcrumbs/>
      <Title children={"Escolha"} span={"a base"} />
      <Slider/>
      <Button className={styles.secondary} label={"Voltar"} />
    </div>
  );
};

export default Home;
