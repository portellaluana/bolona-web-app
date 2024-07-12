// Base.tsx
import React, { useState } from "react";
import Button from "../../components/Buttons/Button";
import styles from "./base.module.css";
import Slider from "../../components/Slider/Slider";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";
import Tags from "../../components/Tags/Tags";
import Card from "../../components/Card/Card";

import casquinha from "../../assets/casquinha.png";
import cascao from "../../assets/cascao.png";
import copinho from "../../assets/copinho.png";

import iconCasquinha from "../../assets/base/icon-casquinha.png";
import iconCascao from "../../assets/base/icon-cascao.png";
import iconCopinho from "../../assets//base/icon-copinho.png";

import { useNavigate } from "react-router-dom";

const Base: React.FC = () => {
  const base = [
    {
      name: "Casquinha",
      description: "Uma bolona",
      currency: 'R$ ',
      price: 5,
      image: `${casquinha}`,
      icon:`${iconCasquinha}`,
    },
    {
      name: "Cascão",
      description: "Duas bolonas",
      currency: 'R$ ',
      price: 10,
      image: `${cascao}`,
      icon:`${iconCascao}`,
    },
    {
      name: "Copinho",
      description: "Três bolonas",
      currency: 'R$ ',
      price: 15,
      image: `${copinho}`,
      icon:`${iconCopinho}`,
    },
  ];

  const tags = base.map((item) => item.name);

  const [activeTag, setActiveTag] = useState<string | null>("Casquinha");

  const handleTagClick = (index: number) => {
    setActiveTag(tags[index]);
  };

  const handleActiveNameChange = (name: string) => {
    setActiveTag(name);
  };

  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/flavor");
    handleBase()
  };

  const previousPage = () => {
    navigate(-1);
  };

  const handleBase = () => {
    localStorage.setItem('base', activeTag )
    console.log(activeTag);
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs currentStep="Base" />
      <Title children={"Escolha"} span={"a base"} className="title" />
      <Tags tags={tags} onTagClick={handleTagClick} activeName={activeTag} />
      <Slider onActiveNameChange={handleActiveNameChange}>
        {base.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            title={item.name}
            description={item.description}
            currency={item.currency}
            price={item.price}
            image={item.image}
            onAddClick={nextPage}
          />
        ))}
      </Slider>
      <Button label={"Voltar"} className="secondary" onClick={previousPage}/>
    </div>
  );
};

export default Base;
