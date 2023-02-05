import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { DataImage } from "./DataImage";
export default function TopSlider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="min-h-0 mySwiper"
    >
      {DataImage.map((item) => {
        return (
          <SwiperSlide className="min-h-[625px] relative" key={item.id}>
            <img
              className="absolute top-0 left-0 w-full min-h-[625px] object-cover object-left"
              src={item.image}
              alt={item.alt}
            />
            <img
              className="absolute md:flex hidden object-cover w-full min-h-[625px] top-0 right-0 z-10"
              src={item.headerOverlay}
              alt={item.alt}
            />
            <div className="absolute top-[150px] right-4 z-30 lg:w-[50%] md:w-[70%] sm:w-[80%] w-full md:pl-0 pl-8">
              <h1 className="lg:text-5xl text-3xl font-bold text-white">
                {item.text}
              </h1>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
