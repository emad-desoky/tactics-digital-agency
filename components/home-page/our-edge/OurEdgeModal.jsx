import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

const OurEdgeModal = ({ active, onClose, id }) => {
  const [loading, setLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  // Trigger exit animation before closing modal
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose(); // Reset the active state after animation
    }, 300); // Matches the duration of the exit animation
  };

  useEffect(() => {
    if (!active) {
      setIsClosing(false); // Reset isClosing state when modal is closed
    }
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose} // Close modal on clicking background
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate={isClosing ? "exit" : "visible"} // Trigger exit animation on close
            exit="exit"
            className="w-full 3xl:max-w-[1100px] bg-white dark:bg-[rgb(23,23,23)] rounded-2xl overflow-hidden z-10 shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            <div className="relative group">
              <Swiper
                spaceBetween={0}
                effect="fade"
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
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
                modules={[Pagination, Navigation, Autoplay, EffectFade]}
                className="w-full h-64 sm:h-80 3xl:h-[500px] 3xl:w-[1100px]"
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
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                        <div className="w-12 h-12 border-4 border-[rgb(255,228,0)] border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </SwiperSlide>
                ))}

                <div className="swiper-button-prev !hidden group-hover:!flex !w-12 !h-12 !bg-white/90 dark:!bg-black/90 !rounded-full !text-black dark:!text-white hover:!bg-[rgb(255,228,0)] transition-all duration-200">
                  <ChevronLeft className="w-6 h-6" />
                </div>
                <div className="swiper-button-next !hidden group-hover:!flex !w-12 !h-12 !bg-white/90 dark:!bg-black/90 !rounded-full !text-black dark:!text-white hover:!bg-[rgb(255,228,0)] transition-all duration-200">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </Swiper>

              <motion.button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 p-3 bg-white dark:bg-black bg-opacity-90 hover:bg-[rgb(255,228,0)] dark:hover:bg-[rgb(255,228,0)] rounded-full transition-all duration-200 transform hover:scale-110 hover:rotate-90"
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-black dark:text-white" />
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="p-6 sm:p-8 space-y-6"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400">
                  {active.title}
                </h3>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {active.description}
              </p>

              <div className="text-gray-600 dark:text-gray-400 max-h-48 overflow-y-auto pr-4 custom-scrollbar space-y-4">
                {typeof active.content === "function"
                  ? active.content()
                  : active.content}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href={active.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-[rgb(255,228,0)] to-[rgb(255,200,0)] text-black hover:from-[rgb(255,200,0)] hover:to-[rgb(255,228,0)] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {active.ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 animate-bounce-x" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OurEdgeModal;
