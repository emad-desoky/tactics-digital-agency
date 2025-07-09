"use client";

import { useState, useRef } from "react";
import { Tabss } from "@/components/about-us/Tabss";
import { VolumeX, Volume2 } from "lucide-react"; // Import icons

export default function AboutUsPage() {
  const [isMuted, setIsMuted] = useState(true); // State to track mute status, set to true for initial mute
  const iframeRef = useRef(null); // Ref to access the iframe element

  // YouTube embed URL with autoplay=1, loop=1, controls=0, and enablejsapi=1 for JavaScript control
  const youtubeEmbedUrl =
    "https://www.youtube.com/embed/z_PaOkiBRFE?autoplay=1&mute=1&loop=1&playlist=z_PaOkiBRFE&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0&fs=0&cc_load_policy=0&disablekb=1&playsinline=1&enablejsapi=1";

  const toggleMute = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      // Send a postMessage to the iframe to control the YouTube player
      const command = isMuted ? "unMute" : "mute";
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: command }),
        "*" // Use '*' for targetOrigin for simplicity, but specify domain for security in production
      );
      setIsMuted(!isMuted);
    }
  };

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
          ref={iframeRef} // Assign ref to the iframe
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

      {/* Mute/Unmute Button positioned on the left side - OUTSIDE video container */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-colors duration-200 pointer-events-auto"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </button>
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
