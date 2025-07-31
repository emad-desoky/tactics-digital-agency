"use client"; // This component needs to be a Client Component to use hooks and interact with the DOM

import { useState, useRef } from "react";
import { VolumeX, Volume2 } from "lucide-react"; // Still using Lucide icons as they are not UI components

export default function VideoBackgroundWithControls() {
  const [isMuted, setIsMuted] = useState(true); // State to track mute status, set to true for initial mute
  const iframeRef = useRef(null); // Ref to access the iframe element

  // YouTube embed URL with autoplay=1, loop=1, controls=0, and enablejsapi=1 for JavaScript control
  // Changed mute=0 to mute=1 to ensure autoplay works reliably
  const youtubeEmbedUrl =
    "https://www.youtube.com/embed/oHky0sWMyWs?autoplay=1&mute=1&loop=1&playlist=oHky0sWMyWs&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&rel=0&fs=0&cc_load_policy=0&disablekb=1&playsinline=1&enablejsapi=1";
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
    <div className="relative w-full h-screen overflow-hidden">
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
          pointerEvents: "none", // DISABLE ALL MOUSE INTERACTIONS on the iframe itself
          border: "none",
          outline: "none",
        }}
      />
      {/* Overlay for the mute button - manually styled */}
      <div className="absolute bottom-4 right-4 z-20">
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-colors duration-200"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
}
