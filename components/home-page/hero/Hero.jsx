"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Data } from "./Data";

const Hero = () => {
  return (
    <div className="transition-opacity duration-1000">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {Data.map((item, index) => (
          <SwiperSlide key={item.id} className="relative h-full w-full">
            <div className="relative w-full h-[450px] 2xl:w-[1600px] 3xl:w-[1900px] xl:w-[1550px] lg:w-[1275px] md:w-[1100px] sm:w-[760px]   2xl:h-[738px] 3xl:h-[955px] sm:h-[465px] xl:h-[805px] lg:h-[805px] md:h-[555px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                objectFit="cover" // Ensures the image covers the container
                quality={75} // Optimize image quality for faster loading
                loading={index === 0 ? "eager" : "lazy"} // Eager load the first image, lazy load the rest
                priority={index === 0} // Prioritize the first image for faster initial loading
                className="absolute inset-0 object-cover" // Ensures the image covers the container responsively
              />
            </div>
            <div className="absolute bottom-10 left-4 md:left-10 text-white px-4 md:px-16">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-nourd">
                {item.title}
              </h2>
              <p className="text-md md:text-lg lg:text-2xl mt-2 font-nourd text-[rgb(255,228,0)]">
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
