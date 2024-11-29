"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      <div className="bg-[rgb(43,43,43)]   w-full py-4 p-8">
        <div id="OurEdge" ref={sectionRef} className="container max-w-full">
          <div className="flex flex-col lg:flex-row items-start justify-between space-y-12 lg:space-y-0 lg:space-x-12">
            <motion.div
              ref={inViewRef}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex mt-32 3xl:h-[500px] 2xl:h-[450px]"
            >
              <div className="bg-[rgb(255,228,0)]  rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105">
                <h1 className="text-[170px] font-semibold text-white leading-[130px] 3xl:mt-20 2xl:mt-12 text-center">
                  OUR{" "}
                  <span className="text-[rgb(43,43,43)] text-[150px] ml-3">
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
