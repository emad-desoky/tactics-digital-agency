"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import OurEdgeCards from "./OurEdgeCards";
import OurEdgeModal from "./OurEdgeModal";
import { cards } from "./Cards";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });

  return (
    <div className="bg-gradient-to-br from-white to-gray-100 dark:from-[rgb(43,43,43)] dark:to-black min-h-screen py-20">
      <div
        id="OurEdge"
        ref={sectionRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          <motion.div
            ref={inViewRef}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="bg-[rgb(255,228,0)] rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105">
              <h2 className="text-5xl sm:text-6xl font-bold text-black leading-tight mb-4">
                Our <span className="text-white">Edge</span>
              </h2>
              <p className="text-black text-opacity-80 text-lg sm:text-xl mb-6">
                Discover what sets us apart in the digital marketing landscape
              </p>
              <a
                href="#explore"
                className="inline-flex items-center px-6 py-3 text-lg font-bold rounded-full bg-black text-white hover:bg-opacity-90 transition-all duration-200 shadow-md hover:shadow-lg transform hover:translate-y-[-2px]"
              >
                Explore Our Edge
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <div className="w-full lg:w-2/3">
            <OurEdgeCards cards={cards} setActive={setActive} />
          </div>
        </div>

        <AnimatePresence>
          {active && (
            <OurEdgeModal
              active={active}
              onClose={() => setActive(null)}
              id={`modal-${active.title}`}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
