import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserSelection } from "../../context/UserSelectionContext";
import Button from "../../components/Buttons/Button";
import styles from "./flavor.module.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";
import Tags from "../../components/Tags/Tags";
import Card from "../../components/Card/Card";
import morangoImg from "../../assets/sabores/morango.png";
import chocolateImg from "../../assets/sabores/chocolate.png";
import cremeImg from "../../assets/sabores/creme.png";
import casquinhaIcon from "../../assets/icons/casquinha.png";
import cascaoIcon from "../../assets/icons/cascao.png";
import copinhoIcon from "../../assets/icons/copinho.png";
import canudinhoIcon from "../../assets/icons/canudinho.png";
import coberturaIcon from "../../assets/icons/cobertura.png";
import flavorEmpty from "../../assets/icons/empty.png";
import flavorMorango from "../../assets/icons/morango.png";
import flavorChocolate from "../../assets/icons/chocolate.png";
import flavorCreme from "../../assets/icons/creme.png";
import SliderFlavor from "../../components/Slider/SliderFlavor";

const Flavor: React.FC = () => {
  const flavorOptions = [
    {
      flavor: "Sorvete sabor",
      name: "Morango",
      image: `${morangoImg}`,
      extra1: `${canudinhoIcon}`,
      firstFlavor: `${flavorMorango}`,
      secondFlavor: `${flavorEmpty}`,
      thirdFlavor: `${flavorEmpty}`,
      base: `${casquinhaIcon}`,
    },
    {
      flavor: "Sorvete sabor",
      name: "Chocolate",
      image: `${chocolateImg}`,
      extra1: `${coberturaIcon}`,
      firstFlavor: `${flavorChocolate}`,
      secondFlavor: `${flavorEmpty}`,
      thirdFlavor: `${flavorEmpty}`,
      base: `${cascaoIcon}`,
    },
    {
      flavor: "Sorvete sabor",
      name: "Creme",
      image: `${cremeImg}`,
      extra2: `${coberturaIcon}`,
      extra1: `${canudinhoIcon}`,
      firstFlavor: `${flavorCreme}`,
      secondFlavor: `${flavorEmpty}`,
      thirdFlavor: `${flavorEmpty}`,
      base: `${copinhoIcon}`,
    },
  ];

  const tags = flavorOptions.map((item) => item.name);
  const { base, setBase, tagBase, setTagBase, flavors, setFlavors } = useUserSelection();
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [isTagClicked, setIsTagClicked] = useState(false);

  const handleTagClick = (index: number) => {
    setTagBase(tags[index]);
    setIsTagClicked(true);
    if (sliderRef.current) {
      sliderRef.current.slideTo(index);
    }
  };

  const handleActiveNameChange = (name: string) => {
    if (!isTagClicked) {
      setTagBase(name);
    } else {
      setIsTagClicked(false);
    }
  };

  const handleNextPage = () => {
    if (tagBase) {
      const newFlavor = [...flavors, tagBase];
      setFlavors(newFlavor);
      if ((base === "Casquinha" && newFlavor.length === 1) ||
          (base === "Cascão" && newFlavor.length === 2) ||
          (base === "Copinho" && newFlavor.length === 3)) {
        navigate("/extra");
      } else {
        setTagBase(null);
      }
    }
  };
  const previousPage = () => {
    setBase('');
    navigate("/base");
  };
  


  let titleChildren = "Escolha o sabor da";
  let titleSpan = "";

  if (base === "Casquinha") {
    titleSpan = "sua bolona";
  } else if (base === "Cascão") {
    titleSpan = flavors.length === 0 ? "primeira bolona" : "segunda bolona";
  } else if (base === "Copinho") {
    switch (flavors.length) {
      case 0:
        titleSpan = "primeira bolona";
        break;
      case 1:
        titleSpan = "segunda bolona";
        break;
      case 2:
        titleSpan = "terceira bolona";
        break;
      default:
        titleSpan = "sua bolona";
        break;
    }
  }

  flavorOptions.forEach((option) => {
    if (base === "Casquinha") {
      option.extra1 = canudinhoIcon;
      option.base = casquinhaIcon;
      if(option.name === 'Morango'){
        option.firstFlavor = flavorMorango
      } else if(option.name === 'Chocolate'){
        option.firstFlavor = flavorChocolate
      } else option.firstFlavor = flavorCreme
    } else if (base === "Cascão") {
      option.extra2 = coberturaIcon;
      option.base = cascaoIcon;
    } else if (base === "Copinho") {
      option.extra1 = canudinhoIcon;
      option.extra2 = coberturaIcon;
      option.base = copinhoIcon;
    }
  });

  return (
    <div className={styles.container}>
      <Breadcrumbs currentStep="Sabor" />
      <Title children={titleChildren} span={titleSpan} className="title" />
      <Tags tags={tags} onTagClick={handleTagClick} activeName={tagBase} />
      <SliderFlavor ref={sliderRef} onActiveNameChange={handleActiveNameChange}>
        {flavorOptions.map((item, index) => (
          <Card
            key={index}
            text={item.flavor}
            title={item.name}
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
      </SliderFlavor>
      <Button className="secondary" label={"Voltar"} onClick={previousPage} />
    </div>
  );
};

export default Flavor;
