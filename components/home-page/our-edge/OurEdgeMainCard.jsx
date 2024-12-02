import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const OurEdgeCard = ({ card, onClick, index }) => (
  <motion.div
    onClick={onClick}
    className="group relative flex flex-col justify-between h-full 2xl:h-[330px] 3xl:h-full cursor-pointer overflow-hidden rounded-2xl shadow-lg border border-[rgba(255,228,0,0.2)] transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-white dark:bg-[rgb(43,43,43)]"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="relative w-full h-48 overflow-hidden">
      <Image
        src={card.src}
        alt={card.title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 group-hover:opacity-0"></div>
    </div>
    <div className="relative z-10 flex flex-col justify-between p-6 flex-grow">
      <div>
        <h3 className="text-xl font-bold text-black dark:text-white mb-2">
          {card.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {card.description}
        </p>
      </div>
      <motion.div
        className="mt-4 flex items-center text-black font-semibold"
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Learn More
        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      </motion.div>
    </div>
  </motion.div>
);

export default OurEdgeCard;
