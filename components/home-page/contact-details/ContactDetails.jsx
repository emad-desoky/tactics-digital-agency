"use client";
import React from "react";
import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";
import Image from "next/image";

const ContactDetails = () => {
  const locations = [
    {
      title: "DIGITAL KITCHEN",
      subtitle: "Cairo",
      address: "Joseph Tito Axis - Nozha - Cairo, Egypt",
    },
    {
      title: "MEDIA STUDIO",
      subtitle: "Cairo",
      address: "10th district - Zahraa Nasr City - Cairo, Egypt",
    },
    {
      title: "BUSINESS DEV.",
      subtitle: "Giza",
      address: "Plaza España Mall, Second Al Shiekh Zayed - Giza, Egypt",
    },
  ];

  return (
    <>
      <DotBackgroundDemo>
        <div
          id="ContactDetails"
          className="relative w-full 3xl:max-w-[1525px] 2xl:max-w-[1200px] xl:max-w-[1000px] lg:max-w-[1030px] md:max-w-[920px] overflow-hidden flex h-[400px] flex-col items-center justify-center py-12 px-4"
        >
          {/* Contact Details Section */}
          <div className="relative z-20 h-auto flex flex-col md:flex-row bg-white overflow-hidden shadow-lg">
            <div className="w-full md:w-1/4 bg-[rgb(255,228,0)] flex items-center justify-center  h-[270px] 3xl:h-[267px] xl:h-[285px] 2xl:h-[267px] md:h-[283px] lg:h-[284px] md:mt-1 md:ml-1 md:mb-1 relative">
              <Image
                src="/contact destails .jpg"
                alt="Contact Details"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="w-full md:w-3/4 p-6 sm:p-8 md:p-16 flex flex-col justify-start space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm sm:text-lg leading-relaxed text-black space-y-6 md:space-y-0">
                {locations.map((location, index) => (
                  <React.Fragment key={location.title}>
                    <div className="text-center px-2 sm:px-4">
                      <p className="text-black font-bold text-xl sm:text-2xl md:text-xl">
                        {location.title}
                      </p>
                      <p className="text-black font-semibold text-lg sm:text-xl md:text-lg mb-1">
                        {location.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm md:text-base">
                        {location.address}
                      </p>
                    </div>
                    {index < locations.length - 1 && (
                      <div className="hidden md:flex items-center justify-center px-2">
                        {/* Vertical line visible only on medium+ screens */}
                        <div className="h-24 w-px bg-black"></div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DotBackgroundDemo>
    </>
  );
};

export default ContactDetails;
