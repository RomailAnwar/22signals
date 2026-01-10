import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import MyButton from "../components/button.jsx";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const tabs = ["Home", "work", "Services", "Portfolio", "Team",  "R&D", "BLOG"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-500">
      <div
        className={`w-full transition-colors duration-500 ${
          scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
<div className="container mx-auto grid items-center py-6 md:py-8 px-4 sm:px-6 md:px-8
  grid-cols-[1fr_auto] sm:grid-cols-[0.5fr_3fr_0.6fr]">
          <div className="flex-1 flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>
          <nav className="hidden sm:flex flex-1 justify-center items-center space-x-6 gap-8">
            {tabs.map((tab) => (
              <a
                key={tab}
                href="#"
                onClick={() => setActiveTab(tab)}
                className="transition-colors"
                style={{
                  fontSize: window.innerWidth < 768 ? "14px" : "15px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0px",
                  lineHeight: "1.4",
                  gap: "24px",
                  color: activeTab === tab ? "#000000" : "rgba(0, 0, 0, 0.5)",
                }}
              >
                {tab}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex flex-1 justify-end">
            <MyButton />
          </div>
          <div className="sm:hidden flex-1 flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-64 bg-white shadow-lg transform transition-transform duration-500 ease-in-out sm:hidden z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <ul className="flex flex-col  h-full px-6 py-8 space-y-6">
          {tabs.map((tab) => (
            <li key={tab}>
              <a
                href="#"
                onClick={() => {
                  setActiveTab(tab);
                  setMobileMenuOpen(false);
                }}
                className={`block hover:text-blue-600 transition-colors uppercase  ${
                  activeTab === tab ? "font-bold" : ""
                }`}
              >
                {tab}
              </a>
            </li>
          ))}
          <div className="mt-4 flex justify-center">
            <MyButton />
          </div>
        </ul>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-500 sm:hidden z-40 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>
    </header>
  );
};

export default Header;
