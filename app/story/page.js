import GetInTouch from "@/components/contact-us/GetInTouch";
import Navbar from "@/components/navbar/Navbar";
import { LampDemo } from "@/components/story/LampDemo";
import { TimelineDemo } from "@/components/story/TimeLineData";

export default function StoryPage() {
  return (
    <>
      <Navbar />
      {/* Lamp Section */}
      <LampDemo />

      {/* Timeline Section */}
      <TimelineDemo />
      <GetInTouch />
    </>
  );
}
