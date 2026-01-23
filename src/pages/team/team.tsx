import React, { useEffect } from "react"; 
import "@/index.css";
import HeroSection from "./component/hero-section.tsx";
import FaqSection from "./component/FaqSection.tsx"; 
import Teamsection from "./component/teamsection.tsx"

const Service = () => {
  useEffect(() => {
    document.body.classList.add("team-page");

    return () => {
      document.body.classList.remove("team-page"); 
    };
  }, []);

  return (
    <div className="">
      <HeroSection />
         <Teamsection/>
      <FaqSection />
    </div>
  );
};

export default Service;
