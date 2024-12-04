"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Partners = () => {
  // Create slides data
  const slidesData = Array.from({ length: 3 }, (_, index) => (
    <SwiperSlide key={`partners-slide-${index}`}>
      <motion.div
        className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {Array.from({ length: 15 }, (_, clientIndex) => {
          const imageNumber = index * 15 + clientIndex + 1;
          return (
            <div
              key={`client-${imageNumber}`}
              className="flex justify-center items-center p-2 md:p-3 bg-transparent rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <Image
                src={`/client${imageNumber}.png`}
                alt={`Client ${imageNumber}`}
                width={60}
                height={60}
                className="object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          );
        })}
      </motion.div>
    </SwiperSlide>
  ));

  return (
    <section id="partners" className="bg-black py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="bg-[rgb(43,43,43)] shadow-2xl overflow-hidden max-w-5xl mx-auto 3xl:max-w-[1500px] 2xl:max-w-[1175px] xl:max-w-[974px]">
          <div className="flex flex-col md:flex-row">
            {/* Left side (Partners of Success box) */}
            <div className="w-full md:w-1/4 p-1">
              <motion.div
                className="bg-[#FFE400] h-full flex items-center justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-nourd text-center text-2xl sm:text-5xl md:text-2xl xl:text-4xl 3xl:text-5xl font-bold leading-none mt-2 mb-2">
                  <span className="text-white">PARTNERS</span>
                  <br />
                  <span className="text-gray-900">OF</span>
                  <br />
                  <span className="text-gray-900">SUCCESS</span>
                </h2>
              </motion.div>
            </div>

            {/* Right side (Swiper for multiple slides) */}
            <div className="w-full md:w-3/4 p-4 md:p-6">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="partners-swiper"
              >
                {slidesData}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
