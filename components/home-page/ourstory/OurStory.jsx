"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { DotBackgroundDemo } from "../../ui/DotBackgroundDemo";

const OurStory = () => {
  const router = useRouter();
  const controls = useAnimation();
  const sectionRef = useRef(null);

  const handleFullStoryClick = () => {
    router.push("/story");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.3 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <DotBackgroundDemo>
      <section
        id="OurStory"
        ref={sectionRef}
        className="relative w-full flex items-center justify-center py-24"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 1 } },
          }}
          className="relative bg px-2 py-2 z-20 flex flex-col md:flex-row w-[91%] sm:w-[98%] md:w-[95%] md:h-[510px] lg:h-[370px] lg:w-[98%] xl:w-[95%] xl:h-[350px] 2xl:w-[100%] 3xl:w-[100%] 3xl:h-[350px]  bg-[rgba(255,255,255)] rounded-lg shadow-lg overflow-hidden"
        >
          {/* Animated Left Side Box */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { scale: 0.8 },
              visible: { scale: 1, transition: { duration: 0.8 } },
            }}
            className="w-full md:w-[380px] md:h-[375px] xl:h-[335px] xl:w-[380px] 3xl:w-[380px] lg:w-[380px] lg:h-[355px] bg-[rgb(255,228,0)] h-[300px] p-16 flex items-center justify-center"
          >
            <h1 className="text-[80px] text-[rgb(43,43,43)] font-nourd leading-tight">
              <span className="text-white text-[105px]">OUR</span> STORY
            </h1>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
            }}
            className="w-full md:w-3/4 p-8 flex flex-col justify-between space-y-6"
          >
            <p className="text-lg leading-tight text-black font-nourd">
              In 2018,{" "}
              <span className="text-[rgb(73,68,22)] font-nourd text-xl font-heavy">
                TACTICS®
              </span>{" "}
              began as a bold vision to redefine how brands connect in a digital
              world.
              <br />
              <br />
              What started as a small team with big ideas has grown into a
              powerhouse of creative thinkers, strategists, and technologists.
              <br />
              <br />
              With every campaign, we merge creativity and innovation to deliver
              measurable results that help businesses thrive.
              <br />
              <br />
              Guided by our passion for excellence and collaboration, we tailor
              strategies that empower brands to shine in crowded markets.
              <br />
              <br />
              <span className="text-[rgb(68,63,21)] font-heavy">
                TACTICS®
              </span>{" "}
              isn&#8217;t just a marketing agency - we&#8217;re your partner in
              turning ambitious goals into reality.
            </p>

            {/* Button with Animation */}
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[rgb(255,228,0)] text-black py-2 px-4 rounded hover:bg-[rgb(255,228,0)] hover:text-black transition-opacity font-nourd"
                aria-label="Read the full story"
                onClick={handleFullStoryClick}
              >
                Full Story
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Positioned image on bottom-right */}
        <Image
          src="/element1.png"
          alt="Decorative Element"
          width={120} // Set desired size
          height={120}
          className="absolute right-0 z-10 3xl:translate-x-28"
        />
      </section>
    </DotBackgroundDemo>
  );
};

export default OurStory;
