import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const OurEdgeCard = ({ card, onClick, index }) => (
  <motion.div
    onClick={onClick}
    className="group relative flex flex-col justify-between xl:m-1 h-full 2xl:h-[170px] md:m-1 border-4  3xl:h-full xl:h-[172px] cursor-pointer overflow-hidden transition-all  bg-white"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="relative z-10 flex flex-col justify-between p-[9px] flex-grow">
      <div>
        <h3 className="flex items-center justify-center text-5xl font-bold text-[rgb(255,228,0)] dark:text-white">
          {card.title}
        </h3>
        {/* <p className="text-sm text-gray-600 dark:text-gray-300">
          {card.description}
        </p> */}
      </div>
      <motion.div
        className="mt-4 flex items-center text-[rgb(255,228,0)] font-semibold"
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
