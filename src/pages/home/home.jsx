import React from "react";
import HeroSection from "./components/hero-section.jsx";
import Homebody from "./components/home-body.jsx";
import PortfolioSection from "./components/portfoliosection.jsx";

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
