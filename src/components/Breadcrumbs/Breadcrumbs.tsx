import React from "react";
import arrow from "../../assets/arrow.png";
import styles from "./breadcrumb.module.css";

const Breadcrumbs = () => {
    const steps = [
        { id: 1, name: 'Base' },
        { id: 2, name: 'Sabor' },
        { id: 3, name: 'Extra' },
        { id: 4, name: 'Resumo' },
    ];

    return (
        <div className={styles.container}>
            {steps.map((item, index) => (
                <React.Fragment key={item.id}>
                    <h5 className={styles.step}>{item.name}</h5>
                    {index < steps.length - 1 && (
                        <img src={arrow} alt="arrow" className={styles.arrow} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs;
