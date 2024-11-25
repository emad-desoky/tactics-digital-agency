import Hero from "@/components/home-page/hero/Hero";
import OurStory from "@/components/home-page/ourstory/OurStory";
import Achievements from "@/components/home-page/achievements/Achievements";
import TheySay from "@/components/home-page/they-say/TheySay";
import ExpandableCardDemo from "@/components/home-page/our-edge/ExpandableCardDemo";
import Partners from "@/components/home-page/partners/Partners";
import OurMix from "@/components/home-page/our-mix/OurMix";
import OurValues from "@/components/home-page/our-values/OurValues";
import ContactDetails from "@/components/home-page/contact-details/ContactDetails";
import GetInTouch from "@/components/contact-us/GetInTouch";
import Navbar from "@/components/navbar/Navbar";
import OurServices from "@/components/home-page/our-services/CustomParallex";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <OurStory />
        <Achievements />
        <TheySay />
        <ExpandableCardDemo />
        <OurServices />
        <Partners />
        <OurMix />
        <OurValues />
        <ContactDetails />
        <GetInTouch />
      </div>
    </div>
  );
}
