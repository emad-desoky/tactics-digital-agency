"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import OurEdgeCards from "./OurEdgeCards";
import OurEdgeModal from "./OurEdgeModal";
import { cards } from "./Cards";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  const inViewRef = useRef(null);
  const inView = useInView(inViewRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });

  return (
    <BackgroundBeamsWithCollision>
      <div className="bg-[rgb(43,43,43)] w-full py-24 p-12">
        <div id="OurEdge" ref={sectionRef} className="container max-w-full">
          <div className="flex flex-col lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-12">
            <motion.div
              ref={inViewRef}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/3"
            >
              <div className="bg-[rgb(255,228,0)] p-14 shadow-lg transform transition-all duration-300 hover:shadow-xl h-full flex flex-col justify-center 3xl:w-full 2xl:w-full xl:w-full 3xl:h-[375px] lg:h-[475px] lg:w-[350px] lg:m-1 xl:my-1 xl:h-[355px] 2xl:h-[360px] ">
                <h1 className="3xl:text-8xl  font-semibold text-white leading-tight text-center">
                  OUR
                  <span className="text-[rgb(43,43,43)] 3xl:text-[100px] sm:text-6xl md:text-7xl lg:text-8xl block mt-2">
                    EDGE
                  </span>
                </h1>
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
    </BackgroundBeamsWithCollision>
  );
}
