import React, { useState } from "react";
import Button from "../../components/Buttons/Button";
import styles from "./orderSummary.module.css";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Title from "../../components/Title/Title";
import SummaryItem from "../../components/Item/summaryItem/SummaryItem";
import { useUserSelection } from "../../context/UserSelectionContext";

const OrderSummary: React.FC = () => {
  const { setOrderValue, setBase, setFlavors, setExtra } = useUserSelection();

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const sendOrder = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/order");
    }, 2000);
    generateOrderValue()
  };

  const previousPage = () => {
    navigate('/');
    setBase(null)
setFlavors([])
setExtra([])
  };

  const generateOrderValue = () => {
    const newNumbers = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 10)
    );
    setOrderValue(newNumbers);
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
            onClick={sendOrder}
          />
          <Button label={"Voltar"} className="secondary" onClick={previousPage} />
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
