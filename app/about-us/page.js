"use client";

import { Tabss } from "@/components/about-us/Tabss";

export default function AboutUsPage() {
  // Most aggressive YouTube embed parameters to hide all controls and branding
  const youtubeEmbedUrl =
    "https://www.youtube.com/embed/z_PaOkiBRFE?autoplay=1&mute=0&loop=1&playlist=z_PaOkiBRFE&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0&fs=0&cc_load_policy=0&disablekb=1&playsinline=1&start=0&end=0&origin=" +
    (typeof window !== "undefined" ? window.location.origin : "");

  return (
    <div className="min-h-screen bg-background">
      <div className="relative w-full h-[30rem] xs:h-[34rem] sm:h-[38rem] md:h-[42rem] lg:h-[46rem] xl:h-[50rem] 2xl:h-[54rem] 3xl:h-[60rem] overflow-hidden">
        <iframe
          className="absolute inset-0 w-full h-full object-cover brightness-[.5] pointer-events-none"
          src={youtubeEmbedUrl}
          title="Background video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            border: "none",
            outline: "none",
          }}
        ></iframe>

        {/* Overlay to block any remaining YouTube UI */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "transparent",
            zIndex: 1,
          }}
        />
      </div>
      <Tabss />
    </div>
  );
}
