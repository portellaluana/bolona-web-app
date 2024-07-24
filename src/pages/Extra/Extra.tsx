import React from "react";
import Button from "../../components/Buttons/Button";
import styles from "./extra.module.css";
import Slider from "../../components/Slider/Slider";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";

import casquinha from "../../assets/extra/extra-casquinha.png";
import cascao from "../../assets/extra/extra-cascao.png";
import copinho from "../../assets/extra/extra-copinho.png";
import coberturaChocolate from "../../assets/extra/extra-cobertura-chocolate.png";
import coberturaMorango from "../../assets/extra/extra-cobertura-morango.png";
import canudinho from "../../assets/extra/extra-canudinho.png";
import ExtraItem from "../../components/Item/extraItem/ExtraItem";

import { useNavigate } from "react-router-dom";

const Extra: React.FC = () => {
  const items = [
    {
      image: `${casquinha}`,
      name: "Casquinha",
      currency: "R$ ",
      price: 5.0,
    },
    {
      image: `${cascao}`,
      name: "Cascão",
      currency: "R$ ",
      price: 5.0,
    },
    {
      image: `${copinho}`,
      name: "Copinho",
      currency: "R$ ",
      price: 5.0,
    },
    {
      image: `${coberturaChocolate}`,
      name: "Cobertura de Chocolate",
      currency: "R$ ",
      price: 5.0,
    },
    {
      image: `${coberturaMorango}`,
      name: "Cobertura de Morango",
      currency: "R$ ",
      price: 5.0,
    },
    {
      image: `${canudinho}`,
      name: "Canudinho de Wafer",
      currency: "R$ ",
      price: 5.0,
    },
  ];

  const navigate = useNavigate();
  // const { setBase, setFlavors } = useUserSelection();

  const handleSummary = () => {
    navigate("/summary");
  };

  const previousPage = () => {
    navigate('/flavor');
    // setFlavors(null)
    // setBase(null)
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs currentStep="Extra" />
      <Title children={"Itens"} span={"adicionais"} className="title" />
      <Title children={"(Opcional)"} className="subtitle" />
      <div className={styles.content}>
        <Slider onActiveNameChange={() => {}}>
          {items.map((item, index) => (
            <ExtraItem
              key={index}
              image={item.image}
              name={item.name}
              currency={item.currency}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
      <Button
        label={"Revisar pedido"}
        className="primaryExtra"
        onClick={handleSummary}
      />
      <Button label={"Voltar"} className="secondary" onClick={previousPage} />
    </div>
  );
};

export default Extra;
