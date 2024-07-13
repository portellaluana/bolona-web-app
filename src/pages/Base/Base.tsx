import React, { useState, useEffect } from "react";
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
import flavorEmpty from "../../assets/icons/empty.png";

const Base: React.FC = () => {
  const baseOptions = [
    {
      name: "Casquinha",
      description: "Uma bolona",
      currency: "R$ ",
      price: 5,
      image: `${casquinhaImg}`,
      extra1: `${canudinhoIcon}`,
      firstFlavor: `${flavorEmpty}`,
      base: `${casquinhaIcon}`,
    },
    {
      name: "Cascão",
      description: "Duas bolonas",
      currency: "R$ ",
      price: 10,
      image: `${cascaoImg}`,
      extra1: `${coberturaIcon}`,
      firstFlavor: `${flavorEmpty}`,
      secondFlavor: `${flavorEmpty}`,
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
      firstFlavor: `${flavorEmpty}`,
      secondFlavor: `${flavorEmpty}`,
      thirdFlavor: `${flavorEmpty}`,
      base: `${copinhoIcon}`,
    },
  ];

  const tags = baseOptions.map((item) => item.name);

  const [activeTag, setActiveTag] = useState<string | null>("Casquinha");
  const { base, setBase } = useUserSelection();
  const navigate = useNavigate();

  useEffect(() => {
    if (base) {
      navigate("/flavor");
    }
  }, [base, navigate]);

  const handleTagClick = (index: number) => {
    setActiveTag(tags[index]);
  };

  const handleActiveNameChange = (name: string) => {
    setActiveTag(name);
  };

  const handleNextPage = () => {
    if (activeTag) {
      setBase(activeTag);
    }
  };

  const previousPage = () => {
    navigate(-1);
    setBase(null);
  };

  const activeBase = baseOptions.find((item) => item.name === activeTag);

  return (
    <div className={styles.container}>
      <Breadcrumbs currentStep="Base" />
      <Title children={"Escolha"} span={"a base"} className="title" />
      <Tags tags={tags} onTagClick={handleTagClick} activeName={activeTag} />
      <Slider onActiveNameChange={handleActiveNameChange}>
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
