"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { DotBackgroundDemo } from "@/components/ui/DotBackgroundDemo";

const ContactDetails = () => {
  const locations = [
    {
      title: "ALEX.",
      address: "121, Galal EL Desouky St, Wabour El Maya",
    },
    {
      title: "CAIRO",
      address: "Smart Village, KM 28 Cairo/Alex Desert Road",
    },
    {
      title: "BOSTON",
      address: "16 Noreen RD, MANSFIELD, MA 02048 USA",
    },
  ];

  return (
    <>
      <DotBackgroundDemo>
        <div
          id="ContactDetails"
          className="relative w-full max-w-[1400px] overflow-hidden flex flex-col items-center justify-center py-12 px-4"
        >
          {/* Contact Details Section */}
          <div className="relative z-20 h-auto flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="w-full md:w-1/4 bg-[rgb(255,228,0)] flex items-center justify-center h-[270px] 3xl:h-[267px] xl:h-[267px] 2xl:h-[267px] md:h-[283px] lg:h-[284px] md:mt-1 md:ml-1">
              <h1
                className={cn(
                  "text-[28px] sm:text-[32px] md:text-[40px] lg:text-[45px] font-bold text-[rgb(43,43,43)] px-4 md:px-8 font-nourd leading-[36px] md:leading-[50px] tracking-wide text-center"
                )}
              >
                <span className="text-white tracking-wide text-[24px] sm:text-[28px] md:text-[35px]">
                  CONTACT{" "}
                </span>
                DETAILS
              </h1>
            </div>
            <div className="w-full md:w-3/4 p-6 sm:p-8 md:p-16 flex flex-col justify-start space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm sm:text-lg leading-relaxed text-black space-y-6 md:space-y-0">
                {locations.map((location, index) => (
                  <React.Fragment key={location.title}>
                    <div className="text-center px-2 sm:px-4">
                      <p className="text-black font-bold text-2xl sm:text-3xl md:text-4xl">
                        {location.title}
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
              <p className="text-black mt-4 text-center text-xs sm:text-sm md:text-lg">
                Call us: +20 120 795 5561
              </p>
            </div>
          </div>
        </div>
      </DotBackgroundDemo>
    </>
  );
};

export default ContactDetails;
