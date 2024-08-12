import React, { useState } from "react";
import Button from "../../components/Buttons/Button";
import styles from "./orderSummary.module.css";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";
import SummaryItem from "../../components/Item/summaryItem/SummaryItem";

const OrderSummary: React.FC = () => {
  // const { base, setBase, flavors, setFlavors } = useUserSelection();

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleHome = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/assessment");
    }, 2000); // Duração de 2 segundos
  };

  const previousPage = () => {
    navigate("/extra");
    // setFlavors(null)
    // setBase(null)
  };

  return (
    <div>
      {isLoading ? (
        <div className={styles.loadingScreen}>
          <figure className={styles.loading} />
        </div>
      ) : (
        <div className={styles.container}>
          <Breadcrumbs currentStep="Resumo" />
          <Title children={"Resumo"} span={"do pedido"} className="title" />
          <div className={styles.content}>
            <SummaryItem />
          </div>
          <Button
            label={"Enviar pedido"}
            className="primaryExtra"
            onClick={handleHome}
          />
          <Button label={"Voltar"} className="secondary" onClick={previousPage} />
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
