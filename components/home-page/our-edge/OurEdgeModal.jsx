"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", damping: 25, stiffness: 300 },
  },
  exit: { opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.2 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const OurEdgeModal = ({ active, onClose, id }) => {
  const [loading, setLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 200);
  };

  useEffect(() => {
    if (!active) setIsClosing(false);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate={isClosing ? "exit" : "visible"}
            exit="exit"
            className="w-full max-w-5xl bg-gray-900 rounded-2xl overflow-hidden z-10 border border-yellow-500/30"
          >
            <div className="relative group">
              <Swiper
                spaceBetween={0}
                pagination={{
                  clickable: true,
                  bulletActiveClass: "bg-yellow-500",
                  bulletClass:
                    "swiper-pagination-bullet bg-gray-400 opacity-50",
                }}
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                loop
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="w-full h-80 sm:h-96 lg:h-[500px]"
              >
                {active.images.map((image, index) => (
                  <SwiperSlide key={index} className="relative">
                    <Image
                      src={image}
                      alt={`${active.title} image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      quality={90}
                      className="transition-transform duration-500 group-hover:scale-105"
                      onLoadingComplete={() => setLoading(false)}
                    />
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                  </SwiperSlide>
                ))}

                <div className="swiper-button-prev !hidden group-hover:!flex !w-10 !h-10 !bg-yellow-500/80 !rounded-full !text-gray-900 hover:!bg-yellow-400 transition-all duration-200">
                  <ChevronLeft className="w-6 h-6" />
                </div>
                <div className="swiper-button-next !hidden group-hover:!flex !w-10 !h-10 !bg-yellow-500/80 !rounded-full !text-gray-900 hover:!bg-yellow-400 transition-all duration-200">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </Swiper>

              <motion.button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-2 bg-gray-800/80 hover:bg-yellow-500 rounded-full transition-all duration-200 transform hover:scale-110"
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-white" />
              </motion.button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <motion.h3
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="text-3xl font-bold text-yellow-500"
              >
                {active.title}
              </motion.h3>

              <motion.p
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="text-lg text-gray-300 leading-relaxed"
              >
                {active.description}
              </motion.p>

              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="text-gray-400 max-h-48 overflow-y-auto pr-4 custom-scrollbar space-y-4"
              >
                {typeof active.content === "function"
                  ? active.content()
                  : active.content}
              </motion.div>

              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
              >
                <a
                  href={active.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-full bg-yellow-500 text-gray-900 hover:bg-yellow-400 transition-all duration-200 transform hover:-translate-y-1"
                >
                  {active.ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 animate-bounce-x" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OurEdgeModal;
