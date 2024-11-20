"use client";

import React, { useRef, useState, useEffect } from "react";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";

function HorizontalParallax() {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();

      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = event.deltaY * 2; // Increase scroll speed
        const maxScroll = container.scrollWidth - container.clientWidth;

        // Use requestAnimationFrame for smoother scrolling
        requestAnimationFrame(() => {
          const newScrollPosition = Math.max(
            0,
            Math.min(scrollPosition + scrollAmount, maxScroll)
          );
          setScrollPosition(newScrollPosition);
          container.scrollLeft = newScrollPosition;

          setIsScrolling(true);
          if (newScrollPosition >= maxScroll) {
            document.body.style.overflowY = "auto";
          } else {
            document.body.style.overflowY = "hidden";
          }
        });
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
      document.body.style.overflowY = "auto";
    };
  }, [scrollPosition]);

  const images = [
    "https://media.licdn.com/dms/image/C4D12AQGuEUKNi09m6g/article-cover_image-shrink_600_2000/0/1618473319936?e=2147483647&v=beta&t=twxRp7exVGPDSflZc2uxA7Gno2kxzpvcb8UDaInd8rc",
    "https://www.gedistatic.it/content/gedi/img/huffingtonpost/2023/08/25/152528521-a673e56d-7273-4c83-a86e-278d2c0b68c4.jpg",
    "https://www.i3works.co.uk/img/detailImage/220816-100357-518-GovernmentDigitalServiceGDSDeliveryjpg.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThWAlwNUmCj3hR0BNCvWh62IUiBbVIoLODcIN1sCvLnn2AxD8jZJIyWOKtm7tuE4IClxk&usqp=CAU",
    "https://dam.buhlergroup.com/rendition/9c98ad7af7f3497099815507f4c6e7ee/-FJPG-TwebHeader_1x1-S1024x1024",
    "https://cdn1.expresscomputer.in/wp-content/uploads/2023/01/09194651/EC_Digital_Research_Growth_750.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsfMa4ARr5PgKUH-tqRW5xXzsxKwY531BMtQP9_HMiTumVI2X3LLVUEK6qpWCPbb95i2E&usqp=CAU",
    "https://www.mindinventory.com/blog/wp-content/uploads/2024/01/digital-transformation-solutions.webp",
    "https://rockwellautomation.scene7.com/is/image/rockwellautomation/16x9-digital-transformation-blue-concept-ADO-322969847.2400.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXpHOxwX_3b1edR6YHZg_kYITp6eU3mc_gWcYP4aY9wKihXamxqCCVTdvTFp7CGS9BWY&usqp=CAU",
  ];

  return (
    <div
      ref={scrollContainerRef}
      className="flex space-x-5 overflow-x-hidden h-screen items-center px-5 transition-all duration-300 bg-black"
    >
      {images.map((src, index) => (
        <ParallaxImage key={index} src={src} speed={-10 * (index + 1)} />
      ))}
    </div>
  );
}

function ParallaxImage({ src, speed }) {
  const { ref } = useParallax({ speed });

  return (
    <div
      ref={ref}
      className="flex-shrink-0 w-[600px] h-[400px] relative overflow-hidden rounded-lg shadow-lg bg-gray-800"
    >
      <img
        src={src}
        alt="Parallax example"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function OurServices() {
  return (
    <ParallaxProvider>
      <HorizontalParallax />
    </ParallaxProvider>
  );
}
