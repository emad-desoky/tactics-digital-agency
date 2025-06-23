"use client";
import { Tabs, Tab } from "@nextui-org/react";
import Image from "next/image";

const customStyles = `
  .tabs-custom .tab {
    flex: 1;
    justify-content: center;
  }
  .tabs-custom .tab[data-selected=true] {
    color: #FFE400 !important;
  }
  .tabs-custom .tab:hover {
    color: #FFE400 !important;
  }
  .tabs-custom .tab-content {
    color: #FFE400;
  }
  
  @media (max-width: 768px) {
    .tabs-custom .tab {
      font-size: 14px;
      height: auto !important;
      padding: 8px;
    }
    .tabs-scroll {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
  }
`;

const content = [
  {
    title: "Performance Excellence",
    description:
      "At TACTICS®, we excel in translating strategic vision into tangible results. Our dedicated team of digital marketing planners, media buyers, graphic designers, content creators, digital strategists, and technologists collaborate seamlessly to craft innovative campaigns that drive measurable outcomes. We are driven by a relentless pursuit of performance, focusing on enhancing conversion rates, expanding organic reach, and optimizing ROI for our clients.",
    content: (
      <div className="h-full w-full relative min-h-[300px] md:min-h-[400px]">
        <Image
          src="/performance.png"
          alt="Performance Excellence"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    ),
  },
  {
    title: "About us",
    description:
      "TACTICS® is a full-service digital and creative marketing agency known for its innovation and results-driven approach. Since our establishment in 2018, we've become leaders in delivering digital and creative solutions tailored to meet diverse industry needs. Our team of experts is committed to providing customized strategies that align with your budget, timelines, and goals. From digital marketing to creative services, we offer a broad range of solutions designed to enhance your brand's visibility and performance across all sectors.",
    content: (
      <div className="h-full w-full relative min-h-[300px] md:min-h-[400px]">
        <Image
          src="/aboutus.png"
          alt="About Us"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    ),
  },
  {
    title: "Strategic Insight",
    description:
      "Combining creativity with strategic insight, TACTICS® delivers impactful results that set you apart in a crowded marketplace. We harness unique market knowledge and cutting-edge technology to anticipate trends and adapt to the changing landscape. This enables us to provide our clients with both digital and creative solutions that ensure their competitive advantage, regardless of industry.",
    content: (
      <div className="h-full w-full relative min-h-[300px] md:min-h-[400px]">
        <Image
          src="/strategic.png"
          alt="Strategic Insight"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    ),
  },
  {
    title: "Mission",
    description:
      "Our mission is to empower businesses with data-driven digital strategies and creative services that accelerate growth and exceed expectations. We are dedicated to producing superior results that push the boundaries of digital and creative marketing.",
    content: (
      <div className="h-full w-full relative min-h-[300px] md:min-h-[400px]">
        <Image
          src="/mission.png"
          alt="Mission"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    ),
  },
  {
    title: "Vision",
    description:
      "Our vision is to redefine digital and creative marketing by consistently delivering innovative, high-performance solutions, making us the trusted partner for businesses looking to achieve significant growth and success.",
    content: (
      <div className="h-full w-full relative min-h-[300px] md:min-h-[400px]">
        <Image
          src="/vision.png"
          alt="Vision"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    ),
  },
  {
    title: "Core Values",
    description: (
      <ul className="list-none space-y-2 text-white text-base md:text-2xl">
        <li className="flex items-start">
          <span className="text-[#FFE400] mr-2">●</span>
          <span>
            Performance Excellence: We are driven by measurable results and
            continuous improvement.
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-[#FFE400] mr-2">●</span>
          <span>
            Innovation: We embrace creativity and innovation to stay ahead of
            the curve.
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-[#FFE400] mr-2">●</span>
          <span>
            Integrity: We uphold the highest ethical standards in all our
            interactions.
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-[#FFE400] mr-2">●</span>
          <span>
            Collaboration: We foster a collaborative environment to harness
            collective expertise.
          </span>
        </li>
        <li className="flex items-start">
          <span className="text-[#FFE400] mr-2">●</span>
          <span>
            Client-Centricity: Our clients&apos; success is at the heart of
            everything we do.
          </span>
        </li>
      </ul>
    ),
    content: (
      <div className="h-full w-full relative min-h-[300px] md:min-h-[400px]">
        <Image
          src="/strategic.png"
          alt="Core Values"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    ),
  },
  {
    title: "CEO Message",
    description:
      "As CEO of TACTICS®, I am proud to lead a team of passionate professionals dedicated to driving impactful results for our clients. We are committed to leveraging our expertise and strategic insights to navigate the complexities of digital marketing with agility and innovation. Our goal is to empower businesses to thrive in an increasingly competitive digital landscape.",
    content: (
      <div className="h-full w-full relative min-h-[300px] md:min-h-[400px]">
        <Image
          src="/ceo.png"
          alt="CEO Message"
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    ),
  },
];

export function Tabss() {
  return (
    <>
      <style jsx global>
        {customStyles}
      </style>
      <div className="w-full max-w-full mx-auto px-4 py-6 md:py-12 bg-[#2B2B2B] min-h-[600px]">
        <div className="tabs-scroll">
          <Tabs
            aria-label="TACTICS® Information"
            color="warning"
            variant="underlined"
            classNames={{
              base: "w-full tabs-custom",
              tabList:
                "w-full relative rounded-none p-0 border-b border-[#FFE400] flex-wrap md:flex-nowrap",
              cursor: "w-full bg-[#FFE400]",
              tab: "h-12 md:h-16 text-sm md:text-xl text-white flex-1",
              tabContent: "group-data-[selected=true]:text-[#FFE400]",
            }}
          >
            {content.map((item, index) => (
              <Tab key={index} title={item.title}>
                <div className="py-4 md:py-6">
                  <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                    <div className="w-full md:w-1/2">
                      <h2 className="text-xl md:text-5xl font-bold mb-4 text-[#FFE400]">
                        {item.title}
                      </h2>
                      <div className="text-white text-sm md:text-2xl md:min-h-[350px]">
                        {item.description}
                      </div>
                    </div>
                    <div className="h-48 md:h-auto w-full md:w-1/2">
                      {item.content}
                    </div>
                  </div>
                </div>
              </Tab>
            ))}
          </Tabs>
        </div>
      </div>
    </>
  );
}
