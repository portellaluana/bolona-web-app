import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow } from "swiper/modules";
import casquinha from "../../assets/casquinha.png";
import cascao from "../../assets/cascao.png";
import copinho from "../../assets/copinho.png";

import Card from "../Card/Card";

const Slider = () => {
  const base = [
    {
      base: "Casquinha",
      description: "Uma bolona",
      price: "5,00",
      image: `${casquinha}`,
    },
    {
      base: "Cascão",
      description: "Duas bolonas",
      price: "10,00",
      image: `${cascao}`,
    },
    {
      base: "Copinho",
      description: "Três bolonas",
      price: "15,00",
      image: `${copinho}`,
    },
  ];

  return (
    <div className={styles.container}>
      <Swiper 
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows : false
        }}
        modules={[EffectCoverflow]}
        className={styles.content}
      >
        {base.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Card
              title={item.base}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
