"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function Slider({ image }) {
  const images = [image]; // Use the provided image in an array

  return (
    <ImagesSlider
      className="h-[46rem] sm:h-[30rem] md:h-[36rem] lg:h-[42rem] xl:h-[46rem] 2xl:h-[50rem] 3xl:h-[60rem] brightness-200"
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      ></motion.div>
    </ImagesSlider>
  );
}
