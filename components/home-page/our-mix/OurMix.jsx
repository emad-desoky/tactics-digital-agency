"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const imagePaths = [
  {
    src: "/team/Web.Jana.jpg",
    name: "Jana",
    position: "Account Manager",
  },
  {
    src: "/team/Web.Mostafa.jpg",
    name: "Mostafa Ashraf",
    position: "Marketing Manager",
  },
  {
    src: "/team/Web.Hussien.jpg",
    name: "Hussein ahmed ",
    position: "Graphic Designer",
  },
  {
    src: "/team/Web.Dareen.jpg",
    name: "Dareen Zohny",
    position: "Video Editor",
  },
  {
    src: "/director5.jpg",
    name: "Omar Amin",
    position: "Sr Graphic Designer",
  },
  {
    src: "/director6.jpg",
    name: "Sondos Mohamed",
    position: "Creative Videographer",
  },
  {
    src: "/team/Web.Hagar.jpg",
    name: "Hagar",
    position: "Digital Marketing Specialist",
  },
  {
    src: "/director8.jpg",
    name: "Diaa Abdullah",
    position: "Video Montage",
  },
  {
    src: "/team/Web.Mariam.jpg",
    name: "Mariam",
    position: "",
  },
];

const OurMix = () => {
  const [images, setImages] = useState(imagePaths);

  const getRandomIndices = useCallback((count) => {
    const indices = new Set();
    while (indices.size < count) {
      const index = Math.floor(Math.random() * imagePaths.length);
      if (!indices.has(index)) {
        indices.add(index);
      }
    }
    return Array.from(indices);
  }, []);

  const swapPositions = useCallback(() => {
    const indices = getRandomIndices(3);

    setImages((prevImages) => {
      const newImages = [...prevImages];
      const temp = newImages[indices[0]];
      newImages[indices[0]] = newImages[indices[1]];
      newImages[indices[1]] = newImages[indices[2]];
      newImages[indices[2]] = temp;
      return newImages;
    });
  }, [getRandomIndices]);

  useEffect(() => {
    const interval = setInterval(swapPositions, 1500);
    return () => clearInterval(interval);
  }, [swapPositions]);

  // Calculate middle position for different screen sizes
  const middlePosition = 1; // For a grid of 10 items, position 5 is the middle

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full">
      {[...Array(10)].map((_, index) => {
        if (index === middlePosition) {
          return (
            <div
              key="family-block"
              className="relative aspect-[3/4] w-full bg-[rgb(43,43,43)] flex flex-col items-center justify-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                OUR
              </h2>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(255,228,0)] leading-tight">
                FAMILY
              </span>
            </div>
          );
        }

        const imageIndex = index < middlePosition ? index : index - 1;
        const image = images[imageIndex];

        return (
          <div
            key={`${image.name}-${imageIndex}`}
            className="relative aspect-[3/4] w-full group"
          >
            <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`Team member ${image.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33.33vw, (max-width: 1024px) 25vw, 20vw"
                quality={100}
                priority={index < 4}
              />
              {/* <div className="absolute inset-0 bg-[rgb(255,228,0)] bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-all duration-300">
                <h3 className="text-black text-lg font-bold">{image.name}</h3>
                <p className="text-black text-sm">{image.position}</p>
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurMix;
