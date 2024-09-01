import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUserSelection } from "../../context/UserSelectionContext";
import Button from "../../components/Buttons/Button";
import styles from "./flavor.module.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";
import Tags from "../../components/Tags/Tags";
import Card from "../../components/Card/Card";
import SliderFlavor from "../../components/Slider/SliderFlavor";
import morangoImg from "../../assets/sabores/morango.png";
import chocolateImg from "../../assets/sabores/chocolate.png";
import cremeImg from "../../assets/sabores/creme.png";
import casquinhaIcon from "../../assets/icons/casquinha.png";
import cascaoIcon from "../../assets/icons/cascao.png";
import copinhoIcon from "../../assets/icons/copinho.png";
import canudinhoIcon from "../../assets/icons/canudinho.png";
import coberturaIcon from "../../assets/icons/cobertura.png";
import emptyFlavor from "../../assets/icons/empty.png";
import morangoIcon from "../../assets/icons/morango.png";
import chocolateIcon from "../../assets/icons/chocolate.png";
import cremeIcon from "../../assets/icons/creme.png";

const Flavor: React.FC = () => {
  const {
    base,
    setBase,
    tagBase,
    setTagBase,
    flavors,
    setFlavors,
    currentFlavor,
    setCurrentFlavor,
  } = useUserSelection();

  const currentFlavorIcon = {
    morango: morangoIcon,
    chocolate: chocolateIcon,
    creme: cremeIcon,
  };

  const selectedFlavorIcon = currentFlavor
    ? currentFlavorIcon[currentFlavor.toLowerCase()]
    : emptyFlavor;

  const flavorOptions = [
    {
      flavor: "Sorvete sabor",
      name: "Morango",
      image: morangoImg,
      extra1: "",
      extra2: "",
      firstFlavor: "",
      secondFlavor: "",
      thirdFlavor: "",
      base: "",
    },
    {
      flavor: "Sorvete sabor",
      name: "Chocolate",
      image: chocolateImg,
      extra1: "",
      extra2: "",
      firstFlavor: "",
      secondFlavor: "",
      thirdFlavor: "",
      base: "",
    },
    {
      flavor: "Sorvete sabor",
      name: "Creme",
      image: cremeImg,
      extra1: "",
      extra2: "",
      firstFlavor: "",
      secondFlavor: "",
      thirdFlavor: "",
      base: "",
    },
  ];

  const tags = flavorOptions.map((item) => item.name);
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
    setCurrentFlavor(name.toLowerCase());
  };

  const handleNextPage = () => {
    if (tagBase) {
      const newFlavor = [...flavors, tagBase];
      setFlavors(newFlavor);
      if (
        (base === "Casquinha" && newFlavor.length === 1) ||
        (base === "Cascão" && newFlavor.length === 2) ||
        (base === "Copinho" && newFlavor.length === 3)
      ) {
        navigate("/extra");
      } else {
        setTagBase(null);
      }
    }
  };

  const previousPage = () => {
    navigate("/");
    setBase(null);
    setFlavors([]);
  };

  let titleChildren = "Sabor da";
  let titleSpan = "";

  flavorOptions.forEach((option) => {
    if (base === "Casquinha") {
      titleSpan = "sua bolona";
      option.extra2 = canudinhoIcon;
      option.firstFlavor = selectedFlavorIcon;
      option.base = casquinhaIcon;
    } else if (base === "Cascão") {
      if (flavors.length === 0) {
        titleSpan = "primeira bolona";
        option.extra1 = coberturaIcon;
        option.firstFlavor = selectedFlavorIcon;
        option.secondFlavor = emptyFlavor;
        option.base = cascaoIcon;
      } else {
        titleSpan = "segunda bolona";
        option.extra1 = coberturaIcon;
        option.firstFlavor = flavors[0]
          ? currentFlavorIcon[flavors[0].toLowerCase()]
          : emptyFlavor;
        option.secondFlavor = selectedFlavorIcon;
        option.base = cascaoIcon;
      }
    } else if (base === "Copinho") {
      switch (flavors.length) {
        case 0:
          titleSpan = "primeira bolona";
          option.extra2 = coberturaIcon;
          option.extra1 = canudinhoIcon;
          option.firstFlavor = selectedFlavorIcon;
          option.secondFlavor = emptyFlavor;
          option.thirdFlavor = emptyFlavor;
          option.base = copinhoIcon;
          break;
        case 1:
          titleSpan = "segunda bolona";
          option.extra2 = coberturaIcon;
          option.extra1 = canudinhoIcon;
          option.firstFlavor = flavors[0]
            ? currentFlavorIcon[flavors[0].toLowerCase()]
            : emptyFlavor;
          option.secondFlavor = selectedFlavorIcon;
          option.thirdFlavor = emptyFlavor;
          option.base = copinhoIcon;
          break;
        case 2:
          titleSpan = "terceira bolona";
          option.extra2 = coberturaIcon;
          option.extra1 = canudinhoIcon;
          option.firstFlavor = flavors[0]
            ? currentFlavorIcon[flavors[0].toLowerCase()]
            : emptyFlavor;
          option.secondFlavor = flavors[1]
            ? currentFlavorIcon[flavors[1].toLowerCase()]
            : emptyFlavor;
          option.thirdFlavor = selectedFlavorIcon;
          option.base = copinhoIcon;
          break;
        default:
          titleSpan = "sua bolona";
          break;
      }
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
