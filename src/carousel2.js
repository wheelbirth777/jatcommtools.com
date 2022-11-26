// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper";

// Core modules imports are same as usual

// Direct React component imports

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const SwipeIt = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      effect="cube"
      autoplay={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img src="./banner1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="./banner2.jpg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwipeIt;
