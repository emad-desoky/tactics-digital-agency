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
      "Client reviews and client check-ins provide the feedback you need and offer essential information to keep your relationship working well. With a client review, you'll know what's working, the current status, and upcoming plans and strategies.",
    name: "Omar Amin",
    position: "SR. Graphic Designer",
    image:
      "https://www.shutterstock.com/image-photo/happy-handsome-young-business-leader-260nw-2375039955.jpg",
  },
  {
    quote:
      "The implementation process was seamless and the results were outstanding. Highly recommend their services.The implementation process was seamless and the results were outstanding. Highly recommend their services.The implementation process was seamless and the results were outstanding. Highly recommend their services.The implementation process was seamless and the results were outstanding. Highly recommend their services.",
    name: "Sarah Chen",
    position: "Product Manager",
    image:
      "https://i.pinimg.com/736x/a7/65/f1/a765f13c8e253e7a50ca5eb313394259.jpg",
  },
  {
    quote:
      "Outstanding support team and excellent communication throughout the project.The implementation process was seamless and the results were outstanding. Highly recommend their services.The implementation process was seamless and the results were outstanding. Highly recommend their services.The implementation process was seamless and the results were outstanding. Highly recommend their services.",
    name: "Michael Rodriguez",
    position: "Technical Director",
    image:
      "https://i.pinimg.com/736x/a7/65/f1/a765f13c8e253e7a50ca5eb313394259.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <div className="min-h-screen bg-[#1A1A1A] flex flex-col items-center justify-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[#FFE400] text-7xl font-bold mb-20 text-center"
      >
        They Say
      </motion.h1>

      <div className="w-full max-w-7xl mx-auto px-4">
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
                className="flex items-stretch gap-8 mx-auto relative"
              >
                {/* Yellow accent bar */}

                {/* Image container with yellow background */}
                <div className="relative">
                  <div className="absolute left-0 top-0 w-[300px] h-[400px] bg-[#FFE400]" />
                  <div className="relative z-10 w-[300px] h-[400px] translate-x-4 translate-y-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Content container */}
                <div className="flex-1 border border-[#FFE400] px-12 flex flex-col ml-[-20px]">
                  <div className="text-[#FFE400] text-8xl font-serif">
                    {"”"}
                    <p className="text-[#FFE400] text-xl font-bold leading-relaxed flex-grow">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="mt-2">
                    <h3 className="text-[#FFE400] text-2xl font-bold">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#FFE400] text-xl">
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
