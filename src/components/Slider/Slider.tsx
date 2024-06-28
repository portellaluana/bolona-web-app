import React, { useState, useEffect, useRef, useImperativeHandle, ForwardRefRenderFunction } from "react";
import styles from "./slider.module.css";
import { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import casquinha from "../../assets/casquinha.png";
import cascao from "../../assets/cascao.png";
import copinho from "../../assets/copinho.png";
import Card from "../Card/Card";

interface SliderProps {
  onActiveNameChange: (name: string) => void;
}

interface SliderRef {
  slideTo: (index: number) => void;
}

const Slider: ForwardRefRenderFunction<SliderRef, SliderProps> = ({ onActiveNameChange }, ref) => {
  const [activeName, setActiveName] = useState("Casquinha");
  const swiperRef = useRef<SwiperType | null>(null);

  const base = [
    {
      name: "Casquinha",
      description: "Uma bolona",
      price: "5,00",
      image: `${casquinha}`,
    },
    {
      name: "Cascão",
      description: "Duas bolonas",
      price: "10,00",
      image: `${cascao}`,
    },
    {
      name: "Copinho",
      description: "Três bolonas",
      price: "15,00",
      image: `${copinho}`,
    },
  ];

  useImperativeHandle(ref, () => ({
    slideTo: (index: number) => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    },
  }));

  useEffect(() => {
    onActiveNameChange(activeName); 
    localStorage.setItem('base', activeName);
  }, [activeName, onActiveNameChange]);

  return (
    <div className={styles.container}>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
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
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className={styles.content}
        onSlideChange={(swiper) => setActiveName(base[swiper.activeIndex].name)}
      >
        {base.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <Card
              title={item.name}
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

export default React.forwardRef(Slider);

