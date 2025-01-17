"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import the Image component
import imagePaths from "./ImagePaths"; // Adjust the path based on your folder structure

const OurMix = () => {
  const [images, setImages] = useState(imagePaths);

  useEffect(() => {
    const randomizeImages = () => {
      setImages((prevImages) => {
        const newImages = [...prevImages];
        const randomIndex = Math.floor(Math.random() * newImages.length);
        const randomImage =
          imagePaths[Math.floor(Math.random() * imagePaths.length)];
        newImages[randomIndex] = randomImage;
        return newImages;
      });
    };

    const interval = setInterval(randomizeImages, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="OurMix" className="bg-white">
      {/* Row 1 - 6 Images */}
      <div className="col-span-2 sm:col-span-4 xs:col-span-2 flex 3xl:h-[300px] flex-wrap ">
        {images.slice(0, 6).map((image, index) => (
          <div
            key={index}
            className="flex-1 relative group sm:w-1/2 xs:w-full h-[150px] sm:h-[200px] md:h-[300px]"
          >
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-none transition-all duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Responsive sizes
              quality={75} // Optimize quality
              placeholder="blur" // Placeholder for loading
              blurDataURL={image.src} // Use a low-quality version for blur
              loading="lazy" // Enable lazy loading
            />
            {/* Overlay text on hover with yellow background */}
            <div className="absolute inset-0 bg-[rgb(255,228,0)] bg-opacity-80 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
              <h3 className="text-black text-lg font-bold sm:mt-0 mt-40 font-nourd">
                {image.name}
              </h3>
              <p className="text-white text-sm font-nourd leading-3">
                {image.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 - 6 Images with "OUR MIX" Box */}
      <div className="col-span-8 sm:col-span-4 xs:col-span-2 flex relative flex-wrap">
        {images.slice(6, 12).map((image, index) => (
          <div
            key={index}
            className="flex-1 relative group sm:w-1/2 xs:w-full h-[150px] sm:h-[200px] md:h-[300px]"
          >
            <Image
              src={image.src}
              alt={`Image ${index + 7}`}
              layout="fill"
              objectFit="cover"
              className="rounded-none transition-all duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              quality={75}
              placeholder="blur"
              blurDataURL={image.src}
              loading="lazy" // Enable lazy loading
            />
            {/* Overlay text on hover with yellow background */}
            <div className="absolute inset-0 bg-[rgb(255,228,0)] bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
              <h3 className="text-black text-lg mt-40 font-bold font-nourd leading-3">
                {image.name}
              </h3>
              <p className="text-black text-sm font-nourd">{image.position}</p>
            </div>
          </div>
        ))}

        {/* "OUR MIX" Box spanning two pictures */}
        <div className="absolute xl:right-[25%] 2xl:right-[27%] 3xl:right-[29%] lg:right-[26%] md:right-[9%] transform -translate-x-1/2 bg-[rgb(43,43,43)]  shadow-lg w-[320px] lg:w-[260px] sm:w-[350px] md:w-[200px] xl:w-[300px] 2xl:w-[335px] 3xl:w-[395px] h-full flex flex-col items-center justify-center z-10">
          <h2 className="text-[44px] sm:text-[64px] md:text-[38px] lg:text-[70px] xl:text-[70px] font-bold text-white font-nourd leading-tight tracking-tight">
            OUR
          </h2>
          <span className="text-[44px] sm:text-[64px] md:text-[40px] lg:text-[70px] xl:text-[70px] font-bold text-[rgb(255,228,0)] font-nourd tracking-tight leading-tight">
            FAMILY
          </span>
        </div>
      </div>

      {/* Row 3 - 3 Images */}
      <div className="col-span-8 sm:col-span-4 xs:col-span-2 fle flex-wrap">
        {images.slice(12, 15).map((image, index) => (
          <div
            key={index}
            className="flex-1 relative group sm:w-1/2 xs:w-full h-[150px] sm:h-[200px] md:h-[300px]"
          >
            <Image
              src={image.src}
              alt={`Image ${index + 13}`}
              layout="fill"
              objectFit="cover"
              className="rounded-none transition-all duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              quality={75}
              placeholder="blur"
              blurDataURL={image.src}
              loading="lazy" // Enable lazy loading
            />
            {/* Overlay text on hover with yellow background */}
            <div className="absolute inset-0 bg-yellow-500 bg-opacity-75 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-500">
              <h3 className="text-black leading-3 font-nourd text-lg font-bold mt-40">
                {image.name}
              </h3>
              <p className="text-black text-sm">{image.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMix;
