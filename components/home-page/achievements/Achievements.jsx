"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Building2,
  Users,
  UtensilsCrossed,
  Globe,
  Briefcase,
  LayoutDashboard,
  Megaphone,
  DollarSign,
  UserCheck,
  Video,
  Camera,
  Map,
} from "lucide-react";

const achievementsData = [
  { title: "Real Estate Developers", target: 13, icon: Building2 },
  { title: "Real Estate Brokers", target: "+30", icon: Users },
  { title: "Food & Beverage Clients", target: 10, icon: UtensilsCrossed },
  { title: "Digital Brand Served", target: "+40", icon: Globe },
  { title: "Overseas Brand Served", target: "+20", icon: Briefcase },
  { title: "360 Campaigns Managed", target: 130, icon: LayoutDashboard },
  { title: "Digital Campaigns", target: "+800", icon: Megaphone },
  { title: "Digital Spending", target: "+11M", icon: DollarSign },
  { title: "Leads Generated", target: "+750k", icon: UserCheck },
  { title: "Video Produced", target: "+90", icon: Video },
  { title: "Products Photographed", target: "+40k", icon: Camera },
  { title: "Markets Served", target: 9, icon: Map },
];

const Achievements = () => {
  return (
    <div className="relative bg-black overflow-hidden py-16">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 z-10 relative container mx-auto"
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
            className="text-center text-white flex flex-col items-center justify-start h-full"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-gray-800">
              <achievement.icon className="w-10 h-10 text-[rgb(255,228,0)]" />
            </div>
            <Counter target={achievement.target} />
            <h2 className="mt-2 text-lg sm:text-xl md:text-2xl font-bold">
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

  const targetString = target.toString();
  const numericTarget = parseInt(targetString.replace(/[^0-9]/g, ""), 10);
  const prefix = targetString.startsWith("+") ? "+" : "";
  const suffix = targetString.replace(/[0-9+]/g, "").trim();

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
      const duration = 2000;
      const increment = numericTarget / (duration / 50);

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
