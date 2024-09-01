import React from "react";
import Button from "../../components/Buttons/Button";
import styles from "./extra.module.css";
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
import { useUserSelection } from "../../context/UserSelectionContext";
import SliderExtraItem from "../../components/Slider/SliderExtraItem";

const Extra: React.FC = () => {
  const { base, setBase, setFlavors, setExtra } = useUserSelection();

  const allItems = [
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

  let items;

  if (base === "Casquinha") {
    items = allItems.filter(
      (item) =>
        item.name !== "Cobertura de Chocolate" &&
        item.name !== "Cobertura de Morango"
    );
  } else if (base === "Cascão") {
    items = allItems.filter((item) => item.name !== "Canudinho de Wafer");
  } else {
    items = allItems;
  }

  const navigate = useNavigate();

  const handleSummary = () => {
    navigate("/summary");
  };

  const previousPage = () => {
    setBase(null);
    setFlavors([]);
    setExtra([]);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs currentStep="Extra" />
      <Title
        children={"Itens"}
        span={"adicionais"}
        label=" (Opcional)"
        labelClassName="labelClass"
        className="title"
      />
      <div className={styles.content}>
        <SliderExtraItem onActiveNameChange={() => {}}>
          {items.map((item, index) => (
            <ExtraItem
              key={index}
              image={item.image}
              name={item.name}
              currency={item.currency}
              price={item.price}
            />
          ))}
        </SliderExtraItem>
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
