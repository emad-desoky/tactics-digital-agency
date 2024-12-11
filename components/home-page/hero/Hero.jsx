"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Data } from "./Data";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-[40svh] sm:h-[80svh] md:h-[100svh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {Data.map((item) => (
          <SwiperSlide key={item.id} className="relative w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                quality={90}
                priority
                className="!relative !h-full !w-full"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-center drop-shadow-lg">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-3xl drop-shadow-lg">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
