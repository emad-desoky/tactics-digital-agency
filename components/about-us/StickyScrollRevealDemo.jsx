import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Performance Excellence",
    description:
      "At TACTICS®, we excel in translating strategic vision into tangible results. Our dedicated team of digital marketing planners, media buyers, graphic designers, content creators, digital strategists, and technologists collaborate seamlessly to craft innovative campaigns that drive measurable outcomes. We are driven by a relentless pursuit of performance, focusing on enhancing conversion rates, expanding organic reach, and optimizing ROI for our clients.",
    content: (
      <div className="h-full text-[rgb(255,228,0)] w-full font-nourd text-xl bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center">
        Performance Excellence
      </div>
    ),
  },
  {
    title: "About us",
    description:
      "is a ful-service digital and creative marketing agency known for its innovation andresults-driven approach. Since our establishment in 2018, we’ve become leaders in deliveringdigital and creative solutions tailored to meet diverse industry needs. Our team of experts is committed to providing customized strategies that align with your budget, timelines, and goals.From digital marketing to creative services, we offer a broad range of solutions designed to enhance your brand’s visibility and performance across al sectors.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/AboutUs.jpg"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="About Us"
        />
      </div>
    ),
  },
  {
    title: "Strategic Insight",
    description:
      " Combining creativity with strategic insight, TACTICS® delivers impactful results that set you apart in a crowded marketplace. We harness unique market knowledge and cutting-edge technology to anticipate trends and adapt to the changing landscape. This enables us to provide our clients with both digital and creative solutions that ensure their competitive advantage, regardless of industry.",
    content: (
      <div className="h-full font-nourd text-xl w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Strategic Insight
      </div>
    ),
  },
  {
    title: "Mission",
    description:
      " Our mission is to empower businesses with data-driven digital strategies and creative services that accelerate growth and exceed expectations. We are dedicated toproducing superior results that push the boundaries of digital and creative marketing.",
    content: (
      <div className="h-full w-full font-nourd text-xl bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Mission
      </div>
    ),
  },
  {
    title: "Vision",
    description:
      "Our vision is to redefine digital and creative marketing by consistently delivering innovative, high-performance solutions, making us the trusted partner for businesses looking to achieve significant growth and success.",
    content: (
      <div className="h-full w-full font-nourd text-xl bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Vision
      </div>
    ),
  },
  {
    title: "Core Values",
    description:
      "● Performance Excellence: We are driven by measurable results and continuous improvement.● Innovation: We embrace creativity and innovation to stay ahead of the curve. ● Integrity: We uphold the highest ethical standards in all our interactions. ● Collaboration: We foster a collaborative environment to harness collective expertise.● Client-Centricity: Our clients' success is at the heart of everything we do.",
    content: (
      <div className="h-full w-full font-nourd text-xl bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Core Values
      </div>
    ),
  },
  {
    title: "CEO Message",
    description:
      "As CEO of TACTICS®, I am proud to lead a team of passionate professionals dedicated to driving impactful results for our clients. We are committed to leveraging our expertise and strategic insights to navigate the complexities of digital marketing with agility and innovation. Our goal is to empower businesses to thrive in an increasingly competitive digital landscape.",
    content: (
      <div className="h-full p-4 w-full font-nourd text-xl bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        CEO Message
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
