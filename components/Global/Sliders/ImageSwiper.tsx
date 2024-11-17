"use client";
// import Swiper core and required modules
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Image from "next/legacy/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Use const or function before the component name

interface IProps {
  images: string[] | undefined;
}
const ImageSwiper = ({ images }: IProps) => {
  return (
    <>
      <div className="   cursor-pointer ">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          // install Swiper modules
          modules={[
            Navigation,
            EffectCoverflow,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
          ]}
          
          cssMode={true} 
          pagination={{ clickable: true }}
          mousewheel={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          speed={2000}
          loop={true}
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex w-[100%]  border-8 border-white items-center justify-center">
                <Image
                  src={image}
                  height={600}
                  width={1000}
                  className="z-0 w-full h-full md:max-h-max hover:scale-110   cursor-pointer  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImageSwiper;
