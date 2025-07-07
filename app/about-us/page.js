"use client";

import { Tabss } from "@/components/about-us/Tabss";

export default function AboutUsPage() {
  const youtubeEmbedUrl =
    "https://www.youtube.com/embed/z_PaOkiBRFE?autoplay=1&mute=0&loop=1&playlist=z_PaOkiBRFE&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0&fs=0&cc_load_policy=0&disablekb=1&playsinline=1";

  return (
    <>
      {/* FULL SCREEN VIDEO - NO CONTAINERS, NO BULLSHIT */}
      <div
        className="fixed top-0 left-0 w-screen h-screen z-0 overflow-hidden"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <iframe
          src={youtubeEmbedUrl}
          title="Background video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100vw",
            height: "56.25vw", // 16:9 aspect ratio
            minHeight: "100vh",
            minWidth: "177.78vh", // 16:9 aspect ratio
            transform: "translate(-50%, -50%)",
            pointerEvents: "none", // DISABLE ALL MOUSE INTERACTIONS
            border: "none",
            outline: "none",
          }}
        />
      </div>

      {/* CONTENT OVER VIDEO */}
      <div className="relative z-10 min-h-screen bg-transparent">
        <div className="h-[30rem] xs:h-[34rem] sm:h-[38rem] md:h-[42rem] lg:h-[46rem] xl:h-[50rem] 2xl:h-[54rem] 3xl:h-[60rem] relative">
          {/* Video space */}
        </div>
        <Tabss />
      </div>
    </>
  );
}
