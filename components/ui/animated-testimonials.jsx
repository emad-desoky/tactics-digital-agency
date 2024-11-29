"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const AnimatedTestimonials = ({ testimonials, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div className="w-full max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-[1200px] xl:min-w-[1200px] 2xl:max-w-[1350px] 2xl:min-w-[1350px] 3xl:max-w-[1500px] 3xl:min-w-[1500px] mx-auto max-h-[65vh] sm:max-h-[60vh] md:max-h-[70vh] lg:max-h-[75vh]">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-between z-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2B2B2B]" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#2B2B2B]" />
          </motion.button>
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
          <div className="flex flex-col md:flex-row items-center p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="w-full md:w-1/3 mb-8 md:mb-0 relative h-56 sm:h-64 md:h-72 lg:h-80">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: index === active ? 1 : 0.7,
                      scale: index === active ? 1 : 0.95,
                      z: index === active ? 0 : -100,
                      rotate: index === active ? 0 : randomRotateY(),
                      zIndex:
                        index === active
                          ? 999
                          : testimonials.length + 2 - index,
                      y: index === active ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="w-full md:w-2/3 md:pl-8 border-4 border-[rgb(43,43,43)] ml-0 md:ml-6">
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#FFE400] mb-4" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <blockquote className="text-lg sm:text-xl lg:text-2xl italic text-[#2B2B2B] mb-4">
                    {testimonials[active].quote
                      .split(" ")
                      .map((word, index) => (
                        <motion.span
                          key={index}
                          initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                            delay: 0.02 * index,
                          }}
                          className="inline-block"
                        >
                          {word}&nbsp;
                        </motion.span>
                      ))}
                  </blockquote>
                  <div className="font-bold text-base sm:text-lg lg:text-xl text-[#2B2B2B]">
                    {testimonials[active].name}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    {testimonials[active].designation}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6 sm:mt-8">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setActive(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full mx-1 ${
              index === active ? "bg-[#2B2B2B]" : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>
    </div>
  );
};
