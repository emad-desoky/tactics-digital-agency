"use client";

import { Tabss } from "@/components/about-us/Tabss";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="relative w-full h-[30rem] xs:h-[34rem] sm:h-[38rem] md:h-[42rem] lg:h-[46rem] xl:h-[50rem] 2xl:h-[54rem] 3xl:h-[60rem] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-200"
          autoPlay
          loop
          playsInline
          controls={false}
        >
          <source src="/your-video.mp4" type="video/mp4" />
          <source src="/your-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Tabss />
    </div>
  );
}
