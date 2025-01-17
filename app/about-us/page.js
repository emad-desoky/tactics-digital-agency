import { Slider } from "@/components/about-us/Slider";
import { Tabss } from "@/components/about-us/Tabss";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Slider image="/about-us.png" />
      <Tabss />
    </div>
  );
}
