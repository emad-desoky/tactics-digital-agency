"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const achievementsData = [
  { title: "Real Estate Developers", target: 13 },
  { title: "Real Estate Brokers", target: "+30" },
  { title: "Food & Beverage Clients", target: 10 },
  { title: "Digital Brand Served", target: "+40" },
  { title: "Overseas Brand Served", target: "+20" },
  { title: "360 Campaigns Managed", target: 130 },
  { title: "Digital Campaigns", target: "+800" },
  { title: "Digital Spending", target: "+11M" },
  { title: "Leads Generated", target: "+750k" },
  { title: "Video Produced", target: "+90" },
  { title: "Products Photographed", target: "+40k" },
  { title: "Markets Served", target: 9 },
  // { title: "Tactics Family", target: 20 },
];

const Achievements = () => {
  return (
    <div className="relative bg-[rgb(43,43,43)]  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/element4.jpg" // Correct path to the background image
          alt="Background Element"
          layout="fill"
          objectFit="cover" // Ensures the image covers the entire div
          className="opacity-10" // Adjust opacity as needed
        />
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 py-9 px-3 z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.2 },
          },
        }}
      >
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={index}
            className="text-center text-white flex font-nourd flex-col items-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <Image
              src="/client2.png"
              alt={achievement.title}
              width={100}
              height={75}
              className="mb-4 bg-white"
            />
            <Counter target={achievement.target} />
            <h2 className="mt-2 text-[20px] sm:text-[25px] md:text-[30px] font-nourd">
              {achievement.title}
            </h2>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const controls = useAnimation();

  // Ensure target is always a string
  const targetString = target.toString();
  const numericTarget = parseInt(targetString.replace(/[^0-9]/g, ""), 10);
  const prefix = targetString.startsWith("+") ? "+" : ""; // Detect if there's a "+" symbol
  const suffix = targetString.replace(/[0-9+]/g, "").trim(); // Extract suffix like "k" or "M"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            controls.start("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000; // Animation duration in milliseconds
      const increment = numericTarget / (duration / 50); // Increment value for 50ms interval

      const interval = setInterval(() => {
        start += increment;
        if (start >= numericTarget) {
          setCount(numericTarget);
          clearInterval(interval);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);
    }
  }, [isVisible, numericTarget]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
      }}
    >
      <h1 className="text-3xl sm:text-4xl font-bold text-[rgb(255,228,0)]">
        {prefix}
        {count}
        {suffix}
      </h1>
    </motion.div>
  );
};

export default Achievements;
