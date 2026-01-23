import React, { useEffect } from "react"; 
import "@/index.css";
import HeroSection from "./components/hero-section.tsx";
import Activeresearch from "./components/activeresearch.tsx";
import Cardsrd from "./components/cardsr&d.tsx"
import "./r&d.css"
import Score from "./components/score.tsx"

const Service = () => {

  return (
    <div className="">
      <HeroSection />
      <Activeresearch/>
      <Cardsrd/>
      <Score/>
    </div>
  );
};

export default Service;
