// Base.tsx
import React, { useRef, useState } from "react";
import Button from "../../components/Button/Button";
import styles from "./base.module.css";
import Slider from "../../components/Slider/Slider";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";
import Tags from "../../components/Tags/Tags";

const Base: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>("Casquinha");

  const handleTagClick = (index: number) => {
    const tags = ["Casquinha", "Cascão", "Copinho"];
    setActiveTag(tags[index]);
  };

  const handleActiveNameChange = (name: string) => {
    setActiveTag(name);
  };

  return (
    <div className={styles.container}>
      <Breadcrumbs />
      <Title children={"Escolha"} span={"a base"} />
      <Tags onTagClick={handleTagClick} activeName={activeTag} />
      <Slider onActiveNameChange={handleActiveNameChange} />
      <Button className={styles.secondary} label={"Voltar"} />
    </div>
  );
};

export default Base;
