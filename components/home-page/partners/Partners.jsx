"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import { motion } from "framer-motion";

const Partners = () => {
  // Create slides data
  const slidesData = Array.from({ length: 3 }, (_, index) => (
    <SwiperSlide id="partners" key={`partners-slide-${index}`}>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        {Array.from({ length: 15 }, (_, clientIndex) => (
          <div
            key={`client-${clientIndex}`}
            className="flex justify-center items-center"
          >
            <Image
              src={`/client${index * 6 + clientIndex + 1}.png`}
              alt={`Client ${index * 6 + clientIndex + 1}`}
              width={120} // Updated logo dimensions for larger display
              height={120} // Updated logo dimensions for larger display
              quality={75}
              blurDataURL={`/client${index * 7 + clientIndex + 1}.png`}
              className="object-contain" // Ensures logos maintain aspect ratio
            />
          </div>
        ))}
      </motion.div>
    </SwiperSlide>
  ));

  return (
    <div
      id="Partners"
      className="bg-[rgb(43,43,43)] py-[75px] flex justify-center"
    >
      <div className="w-[85%] bg-black rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-300">
        {/* Left side (Partners of Success box) */}
        <div className="w-[40%]  flex justify-center items-center">
          {" "}
          {/* Increased padding here */}
          <motion.div
            className="bg-[rgb(255,228,0)] text-white rounded-lg h-[96%]" // More padding in box
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[90px] font-nourd leading-tight text-center text-white mt-20 px-2">
              {" "}
              {/* Increased text size */}
              PARTNERS
              <br />
              <span className="text-black">OF</span>
              <br />
              <span className="text-black">SUCCESS</span>
            </h1>
          </motion.div>
        </div>

        {/* Right side (Swiper for multiple slides) */}
        <div className="w-[70%] py-6">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {slidesData}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Partners;
