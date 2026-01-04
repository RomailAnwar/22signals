import React from "react";
import Group85 from "../assets/Group85.svg";
import Group86 from "../assets/Group86.svg";
import Group87 from "../assets/Group87.svg";
import Group88 from "../assets/Group88.svg";
import Logo from "../assets/logo.svg";
import Union from "../assets/Union.svg";
import BgImage from "../assets/footerbg.png";
import OverlayImage from "../assets/Vector.png";
import MyButton from "../components/button.jsx";
import Frame1 from "../assets/Frame1.svg";
import dashiconemail from "../assets/dashicons_email.png";
import Frame3 from "../assets/Frame3.svg";

const Footer = () => {
  return (
    <footer>
      {/* ===== TOP BANNER ===== */}
            <div className="w-full border-t-[1px] border-t-[rgba(80,76,255,1)] bg-black "/>
      <div
        className="w-full relative flex items-center bg-black bg-cover bg-left "
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src={OverlayImage}
            alt="Overlay"
            className="w-full h-full object-contain object-right opacity-50"
          />
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-[3fr_1fr]
             items-center gap-8 min-h-[296px]
             px-6 md:px-12 lg:px-20
             py-10 md:py-0
             relative z-10">

          {/* Left */}
          <div className="text-center md:text-left sm:pt-10">
            <h2
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4
                         text-[28px] sm:text-[32px] md:text-[48px]"
            >
              Schedule a call. Let’s connect!
              <img src={Union} alt="Union" className="ml-2 inline-block w-8 h-8 md:w-10 md:h-10" />
            </h2>

            <p className="text-gray-400 mt-3 text-lg sm:text-xl md:text-[25px] font-light">
              Get the signal for what's next... or get left behind.
            </p>
          </div>

          {/* Right */}
          <div className="flex justify-center md:justify-end items-center mt-6 md:mt-0">
            <MyButton text="KNOW MORE" />
          </div>
        </div>
      </div>

      {/* ===== DIVIDER ===== */}
     <div className="w-full border-t-[1px] border-t-[rgba(80,76,255,1)]" />

      {/* ===== FOOTER CONTENT ===== */}
      <div className="bg-black">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 
                       md:grid-cols-[3fr_0.5fr_0.5fr_1fr]
                       gap-12 text-center md:text-left"
          >
            {/* Logo + Description */}
            <div>
              <img src={Logo} alt="Logo" className="mb-4 mx-auto md:mx-0" />

              <p className="text-gray-400 text-sm sm:text-base mb-6">
                We offer a comprehensive suite of digital marketing services covering all
                aspects of online presence. From SEO and social media marketing to content
                creation and PPC advertising, we have the expertise to handle diverse
                marketing needs.
              </p>

              <ul className="flex gap-4 justify-center md:justify-start">
                <li><img src={Group85} alt="Facebook" className="w-6 h-6 rounded-full" /></li>
                <li><img src={Group86} alt="Twitter" className="w-6 h-6 rounded-full" /></li>
                <li><img src={Group87} alt="LinkedIn" className="w-6 h-6 rounded-full" /></li>
                <li><img src={Group88} alt="Instagram" className="w-6 h-6 rounded-full" /></li>
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-blue-500 font-semibold mb-4">Navigation</h4>
              <ul className="space-y-3 text-sm sm:text-base text-gray-400">
                <li>Service</li>
                <li>Agency</li>
                <li>Case Study</li>
                <li>Resource</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Licence */}
            <div>
              <h4 className="text-blue-500 font-semibold mb-4">Licence</h4>
              <ul className="space-y-3 text-sm sm:text-base text-gray-400">
                <li>Privacy Policy</li>
                <li>Copyright</li>
                <li>Email Address</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-blue-500 font-semibold mb-4">Contact</h4>
             <ul className="space-y-3 text-sm sm:text-base text-gray-400 text-center md:text-left">
  <li className="flex flex-row justify-center md:justify-start items-center gap-3">
    <img src={Frame1} alt="Phone" className="w-6 h-6" />
    <span>(406) 555-0120</span>
  </li>
  <li className="flex flex-row justify-center md:justify-start items-center gap-3">
    <img src={dashiconemail} alt="Email" className="w-6 h-6" />
    <span>Hey@22signals.com</span>
  </li>
  <li className="flex flex-row justify-center md:justify-start items-center gap-3">
    <img src={Frame3} alt="Address" className="w-8 h-8" />
    <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
  </li>
</ul>

            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="w-full border-t-[1px] border-t-[rgba(80,76,255,1)] bg-black ">
        <div
          className="container mx-auto px-6 md:px-12 lg:px-20 py-6
                     flex flex-col sm:flex-row justify-between items-center
                     text-xs sm:text-sm text-gray-400 gap-2 sm:gap-0"
        >
          <span>© 2025 Company</span>
          <span>Privacy • Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
