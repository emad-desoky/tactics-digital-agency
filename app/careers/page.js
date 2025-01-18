import { Slider } from "@/components/about-us/Slider";
import CareerComponent from "@/components/career/CareerComponent";
import Footer from "@/components/home-page/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Slider image="/career.png" />
      <CareerComponent />
      <Footer />
    </>
  );
};

export default page;
