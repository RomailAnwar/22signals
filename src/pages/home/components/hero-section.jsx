import React from "react";
import heroImage from "@/assets/hero-section.png";
import Instagram from "@/assets/instagram.svg";
import linkedin from "@/assets/linkedin.svg";
import twiter from "@/assets/twiter.svg";
import whatsapp from "@/assets/whatsapp.svg";
import Mouse from "@/assets/Vector.svg";
import bgImage from "@/assets/background.jpeg";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center 
                 -mt-12 md:-mt-30"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container pt-32 md:pt-60 relative z-10">
        <div className="mx-auto flex flex-col items-center">
          <div className="w-full text-center md:text-left mt-18 ">

            {/* Heading */}
            <h1 className="font-thin leading-[1.1]
                           text-4xl sm:text-5xl md:text-[68px]">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(91.16deg,#325FEC_1.74%,#000000_43.71%,#000000_61.62%,#325FEC_102.48%)]">
                Create.
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(91.16deg,#325FEC_1.74%,#000000_43.71%,#000000_61.62%,#325FEC_102.48%)]">
                Innovate.
              </span>
            </h1>

            {/* Hero Image */}
            <div
              className="w-full bg-[#161922] rounded-2xl md:rounded-[38px]
                         mt-6 md:mt-8
                         aspect-[16/9] md:aspect-[1612/569]
                         flex items-center justify-center"
            >
              <img
                src={heroImage}
                alt="Hero"
                className="w-full h-full object-cover rounded-2xl md:rounded-[38px]"
              />
            </div>

            {/* Bottom Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 md:my-12 items-center">

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-4">
                <img src={Instagram} alt="Instagram" className="w-7 h-7" />
                <img src={whatsapp} alt="WhatsApp" className="w-7 h-7" />
                <img src={linkedin} alt="LinkedIn" className="w-7 h-7" />
                <img src={twiter} alt="Twitter" className="w-7 h-7" />
              </div>

              {/* Mouse Icon */}
              <div className="flex justify-center">
                <img src={Mouse} alt="Scroll" className="w-7 h-7" />
              </div>

              {/* Text */}
              <div className="text-center md:text-left">
                <p className="dark-text">
                  22 Signals: Your one stop solution business provider. We
                  leverage an agile global network to deliver high quality,
                  cost effective solutions and empower your journey.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
    </section>
  );
};

export default HeroSection;
