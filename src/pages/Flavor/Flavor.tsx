import React, { useState, useEffect } from "react";
import Button from "../../components/Buttons/Button";
import styles from "./flavor.module.css";
import Slider from "../../components/Slider/Slider";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";
import Tags from "../../components/Tags/Tags";
import Card from "../../components/Card/Card";

import morango from "../../assets/sabores/morango.png";
import chocolate from "../../assets/sabores/chocolate.png";
import creme from "../../assets/sabores/creme.png";

import iconMorango from "../../assets/sabores/icon-morango.png";
import iconChocolate from "../../assets/sabores/icon-chocolate.png";
import iconCreme from "../../assets/sabores/icon-creme.png";


import { useNavigate } from "react-router-dom";

const Flavor: React.FC = () => {
  const base = [
    {
      flavor: "Sorvete sabor",
      name: "Morango",
      image: `${morango}`,
      icon:`${iconMorango}`
    },
    {
      flavor: "Sorvete sabor",
      name: "Chocolate",
      image: `${chocolate}`,
      icon:`${iconChocolate}`

    },
    {
      flavor: "Sorvete sabor",
      name: "Creme",
      image: `${creme}`,
      icon:`${iconCreme}`

    },
  ];

  const tags = base.map((item) => item.name);

  const [activeTag, setActiveTag] = useState<string | null>("Morango");

  useEffect(() => {
  }, [activeTag]);

  const handleTagClick = (index: number) => {
    setActiveTag(tags[index]);
  };

  const handleActiveNameChange = (name: string) => {
    setActiveTag(name);
  };

  const navigate = useNavigate();

  const handleExtra = () => {
    navigate("/extra");
  };

  useEffect(() => {
    setTimeout(() => {
      setActiveTag("Morango");
    }, 0);
  }, []);

  return (
    <div className={styles.container}>
      <Breadcrumbs />
      <Title children={"Escolha"} span={"o sabor"} className="title"/>
      <Tags tags={tags} onTagClick={handleTagClick} activeName={activeTag} />
      <Slider onActiveNameChange={handleActiveNameChange}>
        {base.map((item, index) => (
          <Card
            key={index}
            icon={item.icon}
            flavor={item.flavor}
            title={item.name}
            image={item.image}
          />
        ))}
      </Slider>
      <Button className="secondary" label={"Voltar"} onClick={handleExtra}/>
    </div>
  );
};

export default Flavor;
