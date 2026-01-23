import React from "react";
import bgImage from "@/assets/workbg.png";
import iconimage from "@/assets/iconimage.png";

const HeroSection = () => {
  return (
    <section
      className="relative bg-overlay bg-cover bg-center mt-12 md:-mt-30 "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
  <div className="container pt-30 pb-10 md:pt-60 md:pb-20 relative z-10 px-4 md:px-0">


        {/* Heading section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left pt-0 md:pt-10">
          <h1 className="h1-large">
           OUR PORTFOLIO
          </h1>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full mt-8 gap-4">
            <p className="dark-text text-base md:text-lg max-w-xl">
             A showcase of our finest work across web, mobile, and digital experiences
            </p>
            <img src={iconimage} alt="icon" className="w-16 h-16 md:w-20 md:h-20 mx-auto md:mx-0" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
