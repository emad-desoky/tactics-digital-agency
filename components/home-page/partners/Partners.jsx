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
  const slidesData = Array.from({ length: 5 }, (_, index) => (
    <SwiperSlide key={`partners-slide-${index}`}>
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {Array.from({ length: 18 }, (_, clientIndex) => {
          const imageNumber = index * 18 + clientIndex + 1;
          if (imageNumber > 89) return null; // Skip rendering if we've exceeded 89 logos
          return (
            <div
              key={`client-${imageNumber}`}
              className="flex justify-center items-center p-3 md:p-4 bg-transparent rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <Image
                src={`/${imageNumber}.png`}
                alt={`Client ${imageNumber}`}
                width={100}
                height={100}
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
        <div className="bg-black shadow-2xl overflow-hidden max-w-5xl mx-auto 3xl:max-w-[1500px] 2xl:max-w-[1175px] xl:max-w-[974px]">
          <div className="flex flex-col md:flex-row">
            {/* Left side (Partners of Success image) */}
            <div className="w-full md:w-1/4 p-1">
              <motion.div
                className="bg-black h-full flex items-center justify-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full min-h-[200px] md:min-h-[300px]">
                  <Image
                    src="/Partners Of Success.jpg"
                    alt="Partners Of Success"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
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
                style={{ paddingBottom: "30px" }}
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
