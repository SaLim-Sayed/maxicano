"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button, Card, CardBody, Image } from "@nextui-org/react";

// Slide data array
const slides = [
  {
    id: 1,
    title: "مصنع مكسيكانو",
    description: "وهي من أهم خطوط الإنتاج الإيطالية والتركية",
    imageSrc: "/slider/banner1.jpg",
  },
  {
    id: 2,
    title: "جريش الذرة الصفراء",
    description:
      "   · صناعة السناكس · صناعة الكاراتيه والبيليت · صناعة الحلويات",

    imageSrc: "/slider/banner2.jpg",
  },
  {
    id: 3,
    title: "دقيق الذرة الصفراء",
    description:
      "   الخبز - البان كيك والوفل - الحلويات · أكل الأطفال - المقرمشات والسناكس",

    imageSrc: "/slider/banner3.jpg",
  },
];

const SwipperPage = () => {
  return (
    <div className="flex w-full cursor-pointer">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={2000}
        loop={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Card
              radius="none"
              className="relative flex items-center justify-center"
            >
              <CardBody className="absolute z-10 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex-col g ">
                <div className="flex flex-col   text-white justify-center items-center  ">
                  <h4 className="px-3 bg-[#6b4e3b] font-normal  w-[80%] md:w-[40%]  text-center lg:font-extrabold text-3xl">
                    {slide.title}
                  </h4>
                  <div className="flex justify-center   bg-[#7db047] w-[80%] md:w-[40%] ">
                    <div className="text-lg text-center px-3 py-1 flex">
                      {slide.description}
                    </div>
                  </div>
                </div>
              </CardBody>
              <Image
                radius="none"
                isZoomed
                removeWrapper
                alt="Card background"
                className="z-0 h-64 rounded-none md:h-full w-full cursor-pointer"
                src={slide.imageSrc}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipperPage;
