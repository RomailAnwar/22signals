import React from "react";
import HeroSection from "./components/hero-section.tsx";
import Homebody from "./components/home-body.tsx";
import PortfolioSection from "./components/portfoliosection.tsx";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Homebody />
      <PortfolioSection/>
    </>
  );
};

export default Home;
