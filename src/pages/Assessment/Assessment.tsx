import React, { useState } from "react";
import Button from "../../components/Buttons/Button";
import styles from "./assessment.module.css";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import starImg from "../../assets/star.png"; // Importar corretamente a imagem

const Assessment: React.FC = () => {
  const stars = [
    { id: 1, name: "1" },
    { id: 2, name: "2" },
    { id: 3, name: "3" },
    { id: 4, name: "4" },
    { id: 5, name: "5" },
  ];

  const [starSelected, setStarSelected] = useState(1);
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const previousPage = () => {
    navigate("/");
    // setFlavors(null)
    // setBase(null)
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= 350) {
      setText(inputText);
      setCounter(inputText.length);
    }
  };

  const handleStarClick = (id: number) => {
    setStarSelected(id);
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.containerBreadcrumbs}>
          <h5>Avaliação</h5>
        </div>
        <Title
          children={"Avalie nosso"}
          span={"atendimento"}
          className="title"
        />
        <div className={styles.content}>
          <h4 className={styles.text}>
            O que achou do nosso novo formato de fazer pedidos?
          </h4>
          <div className={styles.containerStars}>
            {stars.map((star) => (
              <img
                key={star.id}
                src={starImg} // Aqui usa a imagem correta
                alt="star"
                className={
                  star.id <= starSelected
                    ? `${styles.starSelected}`
                    : styles.star
                }
                onClick={() => handleStarClick(star.id)}
              />
            ))}
          </div>
          <textarea
            placeholder="Escreva aqui sua avaliação."
            value={text}
            onChange={handleTextChange}
          />
          <h4 className={styles.textCounter}>
            {counter}/350
          </h4>
        </div>
        <Button
          label={"Enviar avaliação"}
          className="primaryExtra"
          onClick={handleHome}
        />
        <Button label={"Pular"} className="secondary" onClick={previousPage} />
      </div>
    </div>
  );
};

export default Assessment;
