"use client"; // 'use client' is needed for motion.div and potentially for iframe interactions

import { Tabss } from "@/components/about-us/Tabss";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  // YouTube embed URL for the video: https://www.youtube.com/watch?v=z_PaOkiBRFE
  // Parameters:
  // ?autoplay=1 - auto-plays the video
  // &mute=1 - mutes the video
  // &loop=1 - loops the video
  // &playlist=z_PaOkiBRFE - required for loop to work with a single video
  // &controls=0 - hides video controls
  // &showinfo=0 - hides video title and uploader
  // &modestbranding=1 - removes YouTube logo
  // &iv_load_policy=3 - hides annotations
  // &rel=0 - prevents showing related videos at the end
  const youtubeEmbedUrl =
    "https://www.youtube.com/embed/z_PaOkiBRFE?autoplay=1&mute=1&loop=1&playlist=z_PaOkiBRFE&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0";

  return (
    <div className="min-h-screen bg-background">
      <div className="relative w-full h-[30rem] xs:h-[34rem] sm:h-[38rem] md:h-[42rem] lg:h-[46rem] xl:h-[50rem] 2xl:h-[54rem] 3xl:h-[60rem] overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full object-cover brightness-200"
          src={youtubeEmbedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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
          className="relative z-10 flex flex-col justify-center items-center w-full h-full"
        >
          {/* Content to overlay on the video */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center px-4">
            {"Creativity Driven, Digital Growth"}
          </h1>
          <p className="mt-4 text-lg text-white text-center px-4">
            {"Watch our story unfold."}
          </p>
        </motion.div>
      </div>
      <Tabss />
    </div>
  );
}
