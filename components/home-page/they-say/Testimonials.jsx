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
      "Since we partnered with Tactics, we've seen a real shift in how our brand shows up online. Their team handled everything—from content and design to ads and insights—with creativity and care. The results felt real and consistent across all platforms.",
    name: "Huzefa Quriesh",
    position: "CEO, Ezzi Tools",
    image: "/Huzefa.png",
  },
  {
    quote:
      "Tactics helped us stand out in a tough market. Their content was sharp, their ads delivered, and they always kept our goals front and center. It's rare to find a team that understands both real estate and digital this well.",
    name: "Mostafa Osama",
    position: "Sales Manager, Golden Real Estate",
    image: "/Mostafa Osama .png",
  },
  {
    quote:
      "Tactics didn't just give us content and ads—they gave us structure, strategy, and solid results. They felt like part of our internal team from day one.",
    name: "Bassam Said",
    position: "Commercial Director, Samco Holding",
    image: "/Bassam.png",
  },
  {
    quote:
      "From ad planning to event coverage, Tactics was fast, focused, and flexible. Their production team captured everything exactly how we imagined—if not better.",
    name: "Azza Othman",
    position: "Sales Director - IUNU Developments",
    image: "/Azza.png",
  },
  {
    quote:
      "Our campaigns with Tactics were spot-on. They knew who to target, how to speak to them, and how to drive results that our sales team could actually feel.",
    name: "Ahmed Taha",
    position: "Sales Manager, Samco Holding",
    image: "/Ahmed Taha .png",
  },
  {
    quote:
      "We wanted a team that could take over our digital work from A to Z—and Tactics delivered. From brand messaging to conversion tracking, they covered every detail.",
    name: "Dr. Adel Abdeljawad",
    position: "CEO, Jawad Developments",
    image: "/Adel.png",
  },
  {
    quote:
      "Working with Tactics made a real difference for our venture. Their approach was strategic, their execution was creative, and the impact was clear from the first few weeks.",
    name: "Ahmed Hany",
    position: "Chairman, Good People Ventures",
    image: "/Ahmed Hany .png",
  },
  {
    quote:
      "Tactics helped us reach our audience fast and effectively. Their understanding of broker culture and fast-paced markets gave us an edge in both messaging and performance.",
    name: "Mahmoud Zohny",
    position: "Head of Brokers, SV Developments",
    image: "/Zohny.png",
  },
  {
    quote:
      "Partnering with Tactics was a game-changer for our media strategy at Khaled Sabry Developments. Their media buying delivered real results with exceptional ROI and precise targeting. What stood out even more was the premium quality of their media production—each video was sharp, on-brand, and perfectly tailored to the high-end real estate market in Egypt.",
    name: "Ahmed Abdelwahab",
    position: "Marketing Director, Khaled Sabry Developments",
    image: "/Ahmed Abdulwahab.png",
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
