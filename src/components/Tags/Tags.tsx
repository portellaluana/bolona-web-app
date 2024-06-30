import React, { useState, useEffect } from "react";
import Button from "../Buttons/Button";
import styles from "./tags.module.css";

interface TagsProps {
  tags: string[];
  onTagClick: (index: number) => void;
  activeName: string | null;
}

const Tags: React.FC<TagsProps> = ({ tags, onTagClick, activeName }) => {
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  useEffect(() => {
    const index = tags.findIndex(tag => tag === activeName);
    setActiveTagIndex(index !== -1 ? index : null);
  }, [activeName, tags]);

  const handleTagClick = (index: number) => {
    onTagClick(index);
    setActiveTagIndex(index);
  };

  return (
    <div className={styles.container}>
      {tags.map((tag, index) => (
        <Button
          key={index}
          label={tag}
          className={activeTagIndex === index ? 'primary' : 'tagButton'}
          onClick={() => handleTagClick(index)}
        />
      ))}
    </div>
  );
};

export default Tags;
