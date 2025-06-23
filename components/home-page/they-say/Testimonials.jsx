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
      "Working with TACTICS® has been transformative for our brand. Their strategic approach and creative excellence helped us achieve remarkable growth in our digital presence. The team's dedication to understanding our vision and translating it into measurable results is truly exceptional.",
    name: "Azza",
    position: "Brand Strategy Director",
    image: "/Azza.png",
  },
  {
    quote:
      "TACTICS® delivered beyond our expectations. Their innovative campaigns and data-driven strategies significantly boosted our market reach. The collaborative approach and professional expertise made the entire process seamless and highly effective.",
    name: "Bassam",
    position: "Marketing Executive",
    image: "/Bassam.png",
  },
  {
    quote:
      "The creative vision and strategic thinking at TACTICS® is unmatched. They transformed our brand narrative and helped us connect with our audience in ways we never thought possible. Their attention to detail and commitment to excellence is remarkable.",
    name: "Mostafa Osama",
    position: "Creative Director",
    image: "/Mostafa Osama .png",
  },
  {
    quote:
      "As a content creator, I've worked with many agencies, but TACTICS® stands out for their innovative approach and technical expertise. They understand the digital landscape and know how to create content that truly resonates with audiences.",
    name: "Huzefa",
    position: "Content Creator & Photographer",
    image: "/Huzefa.png",
  },
  {
    quote:
      "TACTICS® brought fresh perspectives to our business challenges. Their strategic insights and creative solutions helped us navigate complex market dynamics and achieve sustainable growth. The partnership has been invaluable to our success.",
    name: "Zohny",
    position: "Business Development Manager",
    image: "/Zohny.png",
  },
  {
    quote:
      "The team at TACTICS® understands the importance of authentic brand storytelling. Their campaigns not only increased our visibility but also strengthened our connection with customers. The results speak for themselves.",
    name: "Ahmed Abdulwahab",
    position: "Brand Manager",
    image: "/Ahmed Abdulwahab.png",
  },
  {
    quote:
      "TACTICS® has been instrumental in our digital transformation journey. Their comprehensive approach to marketing strategy and execution has delivered consistent results and helped establish our market leadership position.",
    name: "Adel",
    position: "CEO & Founder",
    image: "/Adel.png",
  },
  {
    quote:
      "The professionalism and expertise at TACTICS® is evident in every project they undertake. Their ability to blend creativity with strategic thinking has made them an invaluable partner in our growth journey.",
    name: "Ahmed Hany",
    position: "Operations Director",
    image: "/Ahmed Hany .png",
  },
  {
    quote:
      "TACTICS® consistently delivers innovative solutions that drive real business impact. Their deep understanding of market trends and consumer behavior has helped us stay ahead of the competition and achieve remarkable success.",
    name: "Ahmed Taha",
    position: "Strategic Partnerships Lead",
    image: "/Ahmed Taha .png",
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
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>

                {/* Content container */}
                <div className="flex-1 border border-[#FFE400] p-4 sm:p-8 flex flex-col">
                  <div className="text-[#FFE400] text-4xl md:text-6xl font-serif mb-4">
                    &quot;
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
