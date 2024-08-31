import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  ForwardRefRenderFunction,
  Children,
  ReactNode,
} from "react";
import styles from "./slider.module.css";
import { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import arrowItem from "../../assets/arrow-item.png";

interface SliderProps {
  onActiveNameChange: (name: string) => void;
  children: ReactNode[];
}

interface SliderRef {
  slideTo: (index: number) => void;
}

const SliderExtraItem: ForwardRefRenderFunction<SliderRef, SliderProps> = (
  { onActiveNameChange, children },
  ref
) => {
  const [activeName, setActiveName] = useState("Casquinha");
  const swiperRef = useRef<SwiperType | null>(null);

  useImperativeHandle(ref, () => ({
    slideTo: (index: number) => {
      if (swiperRef.current) {
        swiperRef.current.slideTo(index);
      }
    },
  }));

  useEffect(() => {
    onActiveNameChange(activeName);
  }, [activeName, onActiveNameChange]);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.navButton} ${styles.leftButton}`}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <img src={arrowItem} alt="arrow" className={styles.arrowLeft} />
      </button>

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
        onSlideChange={(swiper) =>
          setActiveName(children[swiper.activeIndex]?.props.title || "")
        }
      >
        {Children.map(children, (child) => (
          <SwiperSlide className={styles.slide}>{child}</SwiperSlide>
        ))}
      </Swiper>

      <button
        className={`${styles.navButton} ${styles.rightButton}`}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <img src={arrowItem} alt="arrow" className={styles.arrowRight} />
      </button>
    </div>
  );
};

export default React.forwardRef(SliderExtraItem);
