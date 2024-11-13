"use client";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Image } from "@nextui-org/react";

// Use const or function before the component name
const SwipperPage = () => {
  return (
    <>
      <div className=" flex w-full cursor-pointer ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true} 
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={2000}
          loop={true}
        >
          <SwiperSlide>
            <Image
              removeWrapper
              alt="Card background"
              radius="none"
            
              className="z-0 h-64  md:h-full  w-full cursor-pointer "
              src="/slider/banner1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
            
              removeWrapper
              alt="Card background"
              radius="none"
              className="z-0  h-64  md:h-full  w-full cursor-pointer "
              src="/slider/banner2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
             
              removeWrapper
              alt="Card background"
              radius="none"
              className="z-0  h-64 md:h-full w-full cursor-pointer "
              src="/slider/banner3.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwipperPage;
