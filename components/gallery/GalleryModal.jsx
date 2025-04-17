"use client";

import { useEffect } from "react";

export default function GalleryModal({ open, onClose, imageSrc, format }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
      style={{ animation: "fadeIn 0.3s ease-out forwards" }}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] p-4"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: "fadeIn 0.3s ease-out 0.1s forwards" }}
      >
        <button
          className="absolute top-2 right-2 bg-white/10 rounded-full p-1 text-white hover:bg-white/30 transition-colors"
          onClick={onClose}
        >
          ✕
        </button>
        <img
          src={imageSrc || "/placeholder.svg"}
          alt="Gallery image"
          className="max-h-[85vh] w-auto object-contain"
        />
      </div>
    </div>
  );
}
