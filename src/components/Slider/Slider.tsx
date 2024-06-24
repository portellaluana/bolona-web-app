import styles from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow } from "swiper/modules";
import casquinha from "../../assets/casquinha.png";
import cascao from "../../assets/cascao.jpg";
import copinho from "../../assets/copinho.jpg";

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
        }}
        modules={[EffectCoverflow]}
        className={styles.swiper_container}
      >
        {base.map((item, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
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
