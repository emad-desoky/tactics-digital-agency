import Gallery from "@/components/gallery/Gallery";
import Footer from "@/components/home-page/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Slider } from "@/components/about-us/Slider";

export default function GalleryPage() {
  return (
    <>
      <Slider image="/gallery.png" />

      <Navbar />
      <Gallery />
      <Footer />
    </>
  );
}
