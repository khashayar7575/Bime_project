// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BlogComp } from "./BlogComp/BlogComp";

// Import Swiper styles
import "swiper/css";

export const BlogsSlider = () => {
  return (
    <Swiper
      className="blogs-slider"
      spaceBetween={30}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <BlogComp />
      </SwiperSlide>
      <SwiperSlide>
        <BlogComp />
      </SwiperSlide>
      <SwiperSlide>
        <BlogComp />
      </SwiperSlide>
      <SwiperSlide>
        <BlogComp />
      </SwiperSlide>
    </Swiper>
  );
};
