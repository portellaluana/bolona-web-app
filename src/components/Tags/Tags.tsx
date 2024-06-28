import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import styles from "./tags.module.css";

interface TagsProps {
  onTagClick: (index: number) => void;
  activeName: string | null;
}

const Tags: React.FC<TagsProps> = ({ onTagClick, activeName }) => {
  const tags = ["Casquinha", "Cascão", "Copinho"];
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  const handleTagClick = (index: number) => {
    onTagClick(index);
    setActiveTagIndex(index);
  };

  useEffect(() => {
    const index = tags.findIndex(tag => tag === activeName);
    setActiveTagIndex(index !== -1 ? index : null);
  }, [activeName, tags]);

  return (
    <div className={styles.container}>
      {tags.map((tag, index) => (
        <Button
          key={index}
          label={tag}
          className={`${styles.button} ${activeTagIndex === index ? styles.primary : styles.secondary}`}
          onClick={() => handleTagClick(index)}
        />
      ))}
    </div>
  );
};

export default Tags;
