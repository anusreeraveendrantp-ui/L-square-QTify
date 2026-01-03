import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { useEffect } from "react";
import styles from "./Carousel.module.css";

import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data, swiper]);

  return null; // IMPORTANT: no JSX
};

function Carousel({ data, renderComponent }) {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        spaceBetween={40}
        slidesPerView="auto"
        style={{ padding: "0 20px" }}
      >
        <Controls data={data} />

        {data.map((item, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            {renderComponent(item)}
          </SwiperSlide>
        ))}

        {/* Navigation must be INSIDE Swiper but NOT wrapped in div */}
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
      </Swiper>
    </div>
  );
}

export default Carousel;
