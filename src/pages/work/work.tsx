import React, { FC } from "react";
import HeroSection from "./components/hero-section.tsx";
import "./work.css";
import Tabs from "./components/tabs.tsx";
import LastSection from "./components/lastsection.tsx";

const Work: FC = () => {
  return (
    <>
      <HeroSection />
        <Tabs />
        <LastSection />
    </>
  );
};

export default Work;
