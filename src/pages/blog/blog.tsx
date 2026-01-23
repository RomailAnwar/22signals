import React, { useEffect } from "react"; 
import "@/index.css";
import HeroSection from "./components/hero-section.tsx";
import Imagecard from "./components/imagecard.tsx"
import Tabs from "./components/tabs.tsx"

const Service = () => {

  return (
    <div className="">
      <HeroSection />
      <Imagecard/>
      <Tabs/>
    </div>
  );
};

export default Service;
