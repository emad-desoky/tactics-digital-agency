import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Image from "next/image"; // Import Next.js Image component
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion"; // Import Framer Motion

// Register the required modules
import SwiperCore from "swiper";
SwiperCore.use([Autoplay, Navigation, Pagination]);

const OurValues = () => {
  // Data for images located in the public folder
  const slidesData = [
    { src: "/value1.jpg", alt: "value1" },
    { src: "/value2.jpg", alt: "value2" },
    { src: "/value3.jpg", alt: "value3" },
    { src: "/value4.jpg", alt: "value4" },
    { src: "/value5.jpg", alt: "value5" },
    { src: "/value6.jpg", alt: "value6" },
    { src: "/value7.jpg", alt: "value7" },
    { src: "/value8.jpg", alt: "value8" },
  ];

  return (
    <div
      id="OurValues"
      className="bg-[rgb(43,43,43)] py-12 flex justify-center"
    >
      <div className="relative z-20 flex flex-col md:flex-row w-11/12 lg:w-3/4 xl:w-2/3 bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Left side (fixed) */}
        <motion.div
          className="w-full md:w-1/4 bg-[rgb(43,43,43)] border-4 border-gray-950 flex items-center justify-start md:justify-center p-4"
          initial={{ x: -100, opacity: 0 }} // Initial position and opacity
          animate={{ x: 0, opacity: 1 }} // Final position and opacity
          transition={{ duration: 0.5 }} // Transition duration
        >
          <h1 className="text-[32px] md:text-[50px] font-bold text-white text-center leading-[40px] md:leading-[60px]">
            OUR <span className="text-[rgb(255,228,0)]">VALUES</span>
          </h1>
        </motion.div>

        {/* Right side (Swiper for multiple slides) */}
        <div className="w-full md:w-3/4">
          <Swiper
            spaceBetween={0} // No space between slides
            slidesPerView={1} // Show one slide at a time
            autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto scroll
            pagination={{ clickable: true }} // Enable pagination
            navigation // Enable navigation arrows
            className="h-[400px] md:h-[500px] lg:h-[400px]" // Adjust height for responsiveness
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="relative w-full h-full overflow-hidden" // Ensure full height for the slide
                  initial={{ scale: 1.05 }} // Initial scale for zoom effect
                  whileHover={{ scale: 1.1 }} // Scale on hover for zoom effect
                  transition={{ duration: 0.3 }} // Transition duration for zoom
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    objectFit="contain" // Ensures the image covers the container
                    quality={100} // Optional: for better image quality
                    fill
                    className="rounded-lg transition-transform duration-300 ease-in-out" // Rounded corners with transition
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
