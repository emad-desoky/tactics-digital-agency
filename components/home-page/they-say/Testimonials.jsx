"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "Client reviews and client check-ins provide the feedback you need and offer essential information to keep your relationship working well.Client reviews and client check-ins provide the feedback you need and offer essential information to keep your relationship working wellClient reviews and client check-ins provide the feedback you need and offer essential information to keep your relationship working well With a client review, you'll know what's working, the current status, and upcoming plans and strategies.",
    name: "Omar Amin",
    position: "SR. Graphic Designer",
    image:
      "https://www.shutterstock.com/image-photo/happy-handsome-young-business-leader-260nw-2375039955.jpg",
  },
  {
    quote:
      "The implementation process was seamless and the results were outstanding. Highly recommend their services.Client reviews and client check-ins provide the feedback you need and offer essential information to keep your relationship working wellClient reviews and client check-ins provide the feedback you need and offer essential information to keep your relationship working well",
    name: "Sarah Chen",
    position: "Product Manager",
    image:
      "https://i.pinimg.com/736x/a7/65/f1/a765f13c8e253e7a50ca5eb313394259.jpg",
  },
  {
    quote:
      "Outstanding support team and excellent communication throughout the project.Client reviews and client check-ins provide the feedback you need and offer essential information to keep your relationship working wellClient reviews and client check-ins provide the feedback you need and offer essential information to keep your relationship working well",
    name: "Michael Rodriguez",
    position: "Technical Director",
    image:
      "https://i.pinimg.com/736x/a7/65/f1/a765f13c8e253e7a50ca5eb313394259.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex flex-col items-center justify-center py-10 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[#FFE400] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-center"
      >
        They Say
      </motion.h1>

      <div className="w-full max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col md:flex-row items-stretch gap-8 mx-auto"
              >
                {/* Image container with yellow background */}
                <div className="relative">
                  <div className="absolute left-0 top-0 w-[150px] h-[200px] md:w-[300px] md:h-[400px] bg-[#FFE400]" />
                  <div className="relative z-10 w-[150px] h-[200px] md:w-[300px] md:h-[400px] translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>

                {/* Content container */}
                <div className="flex-1 border border-[#FFE400] p-4 sm:p-8 flex flex-col">
                  <div className="text-[#FFE400] text-4xl md:text-6xl font-serif mb-4">
                    {"”"}
                  </div>
                  <p className="text-[#FFE400] text-sm sm:text-base md:text-lg leading-relaxed flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="mt-4">
                    <h3 className="text-[#FFE400] text-lg sm:text-xl font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#FFE400] text-sm sm:text-base">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #ffe400 !important;
          opacity: 0.5;
          width: 10px;
          height: 10px;
          margin: 0 5px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
