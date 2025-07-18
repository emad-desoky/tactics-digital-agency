"use client";
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
    {
      src: "/our-value/website Our Values 01.jpg",
      alt: "value1",
    },
    { src: "/our-value/website Our Values 02.jpg", alt: "value2" },
    { src: "/our-value/website Our Values 04.jpg", alt: "value3" },
  ];

  return (
    <div
      id="OurValues"
      className="bg-[rgb(43,43,43)] py-12 flex justify-center "
    >
      <div className="relative z-20 flex flex-col md:flex-row sm:w-[920px] md:w-[880px] lg:w-[1000px] 3xl:w-[1490px] 2xl:w-[1170px] xl:w-[970px] bg-black shadow-lg overflow-hidden">
        {/* Left side (fixed) */}
        <motion.div
          className="w-full md:w-1/4 bg-[rgb(255,228,0)]  flex items-center justify-start md:justify-center"
          initial={{ x: -100, opacity: 0 }} // Initial position and opacity
          animate={{ x: 0, opacity: 1 }} // Final position and opacity
          transition={{ duration: 0.5 }} // Transition duration
        >
          <h1 className="text-[32px] md:text-[50px] 3xl:text-[100px] font-bold text-white text-center leading-[40px] md:leading-[60px]">
            OUR{" "}
            <span className="text-[rgb(43,43,43)] 3xl:text-[60px] ml-3">
              VALUES
            </span>
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
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    objectFit="cover" // Ensures the image covers the container
                    quality={100} // Optional: for better image quality
                    fill
                    className="transition-transform duration-300 ease-in-out" // Rounded corners with transition
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
