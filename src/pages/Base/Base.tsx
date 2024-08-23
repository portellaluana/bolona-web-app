import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserSelection } from "../../context/UserSelectionContext";
import Button from "../../components/Buttons/Button";
import styles from "./base.module.css";
import Slider from "../../components/Slider/Slider";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";
import Tags from "../../components/Tags/Tags";
import Card from "../../components/Card/Card";

import casquinhaImg from "../../assets/base/casquinha.png";
import cascaoImg from "../../assets/base/cascao.png";
import copinhoImg from "../../assets/base/copinho.png";

import casquinhaIcon from "../../assets/icons/casquinha.png";
import cascaoIcon from "../../assets/icons/cascao.png";
import copinhoIcon from "../../assets/icons/copinho.png";
import canudinhoIcon from "../../assets/icons/canudinho.png";
import coberturaIcon from "../../assets/icons/cobertura.png";
import emptyFlavor from "../../assets/icons/empty.png";

const Base: React.FC = () => {
  const baseOptions = [
    {
      name: "Casquinha",
      description: "Uma bolona",
      currency: "R$ ",
      price: 5,
      image: `${casquinhaImg}`,
      extra1: `${canudinhoIcon}`,
      firstFlavor: `${emptyFlavor}`,
      base: `${casquinhaIcon}`,
    },
    {
      name: "Cascão",
      description: "Duas bolonas",
      currency: "R$ ",
      price: 10,
      image: `${cascaoImg}`,
      extra1: `${coberturaIcon}`,
      firstFlavor: `${emptyFlavor}`,
      secondFlavor: `${emptyFlavor}`,
      base: `${cascaoIcon}`,
    },
    {
      name: "Copinho",
      description: "Três bolonas",
      currency: "R$ ",
      price: 15,
      image: `${copinhoImg}`,
      extra1: `${canudinhoIcon}`,
      extra2: `${coberturaIcon}`,
      firstFlavor: `${emptyFlavor}`,
      secondFlavor: `${emptyFlavor}`,
      thirdFlavor: `${emptyFlavor}`,
      base: `${copinhoIcon}`,
    },
  ];

  const tags = baseOptions.map((item) => item.name);
  const values = baseOptions.map((item) => item.price);

  const { setBase, tagBase, setTagBase, setBaseValue } = useUserSelection();
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const handleTagClick = (index: number) => {
    setTagBase(tags[index]);
    handlePrice(index);
    if (sliderRef.current) {
      sliderRef.current.slideTo(index);
    }
  };

  const handleActiveNameChange = (name: string) => {
    const index = tags.findIndex(tag => tag === name);
    setTagBase(name);
    handlePrice(index);
  };

  const handlePrice = (index: number) => {
    setBaseValue(values[index]);
  };

  const handleNextPage = () => {
    if (tagBase) {
      const index = tags.findIndex(tag => tag === tagBase);
      setBase(tagBase);
      handlePrice(index);
    }
    navigate('/flavor');
  };

  const previousPage = () => {
    navigate('/');
    setBase(null)
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs currentStep="Base" />
      <Title children={"Escolha"} span={"a base"} className="title" />
      <Tags tags={tags} onTagClick={handleTagClick} activeName={tagBase} />
      <Slider ref={sliderRef} onActiveNameChange={handleActiveNameChange}>
        {baseOptions.map((item, index) => (
          <Card
            key={index}
            title={item.name}
            description={item.description}
            currency={item.currency}
            price={item.price}
            image={item.image}
            onAddClick={handleNextPage}
            extra1={item.extra1}
            extra2={item.extra2}
            firstFlavor={item.firstFlavor}
            secondFlavor={item.secondFlavor}
            thirdFlavor={item.thirdFlavor}
            base={item.base}
          />
        ))}
      </Slider>
      <Button label={"Voltar"} className="secondary" onClick={previousPage} />
    </div>
  );
};

export default Base;
