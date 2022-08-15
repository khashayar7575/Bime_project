import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

export const CommentSlider = () => {
  return (
    <Swiper
      effect={"cards"}
      spaceBetween={30}
      grabCursor={true}
      modules={[EffectCards]}
      className="comment-slider"
    >
      <SwiperSlide>
        <div className="comment">
          <div className="comment-back"></div>
          <div className="comment-cont p-35">
            <h3 className="name">sarrah pit</h3>
            <img className="rate" src="/rates.svg" />
            <p className="text">
              I always wanted to insure my car, but I didnt know what kind of
              damage it covers. In short, by searching and... I came to one of
              the contents of your blog which answered my question in a very
              simple and practical way. After I saw that you also sell
              insurance, I bought from you.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="comment">
          <div className="comment-back"></div>
          <div className="comment-cont p-35">
            <h3 className="name">sarrah pit</h3>
            <img className="rate" src="/rates.svg" />
            <p className="text">
              I always wanted to insure my car, but I didnt know what kind of
              damage it covers. In short, by searching and... I came to one of
              the contents of your blog which answered my question in a very
              simple and practical way. After I saw that you also sell
              insurance, I bought from you.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="comment">
          <div className="comment-back"></div>
          <div className="comment-cont p-35">
            <h3 className="name">sarrah pit</h3>
            <img className="rate" src="/rates.svg" />
            <p className="text">
              I always wanted to insure my car, but I didnt know what kind of
              damage it covers. In short, by searching and... I came to one of
              the contents of your blog which answered my question in a very
              simple and practical way. After I saw that you also sell
              insurance, I bought from you.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
