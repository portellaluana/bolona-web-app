import React, { useState } from "react";
import Button from "../../components/Buttons/Button";
import styles from "./order.module.css";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import starImg from "../../assets/star.png";
import { useUserSelection } from "../../context/UserSelectionContext";

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
  const [reviewed, setReviewed] = useState(false);
  const [error, setError] = useState(false);
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const { orderValue } = useUserSelection();

  const handleReview = () => {
    setReviewed(true);
  };

  const skipReview = () => {
    setReviewed(true);
  };

  const ErrorOrder = () => {
    setError(true);
  };

  const handleReceived = () => {
    navigate("/");
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    if (inputText.length <= 200) {
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
          <h5>Pedido</h5>
        </div>
        <Title children={"Número do"} span={"pedido"} className="title" />
        <div className={styles.content}>
          <div className={styles.containerPedido}>
            <h1 className={styles.orderNumber}>{orderValue}</h1>
            {error && (
              <h1 children={"Por favor, dirija-se ao caixa"} className={styles.error} />
            )}
          </div>
          {!reviewed && !error && (
            <div className={styles.containerAvaliacao}>
              <h4 className={styles.text}>
                Enquanto preparamos seu pedido, que tal<br />avaliar nosso atendimento?
              </h4>

              <div className={styles.containerStars}>
                {stars.map((star) => (
                  <img
                    key={star.id}
                    src={starImg}
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
              <h4 className={styles.textCounter}>{counter}/200</h4>
            </div>
          )}
        </div>
        {!error && (
          <div>
            {!reviewed ? (
              <div>
                <Button
                  label={"Enviar avaliação"}
                  className="primaryExtra"
                  onClick={handleReview}
                />
                <Button
                  label={"Pular"}
                  className="secondary"
                  onClick={skipReview}
                />
              </div>
            ) : (
              <div>
                <Button
                  label={"Pedido recebido"}
                  className="primaryExtra"
                  onClick={handleReceived}
                />
                <Button
                  label={"Algo deu errado"}
                  className="secondary"
                  onClick={ErrorOrder}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Assessment;
