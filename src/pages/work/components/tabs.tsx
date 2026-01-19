import { useState } from "react";
import Floatingimg from "@/assets/uil_arrow-up1.png";
import Bigimg1 from "@/assets/Bigimg1.png";
import Bigimg2 from "@/assets/Bigimg2.png";
import Bigimg3 from "@/assets/Bigimg3.png";
import Bigimg4 from "@/assets/Bigimg4.png";
import "../../../pages/home/home.css";

// Projects array with categories
const projects = [
  {
    title: "MStore",
    description: "Mangcoding is a biggest company...",
    bigImage: Bigimg1,
    category: "Web Design",
  },
  {
    title: "Beauty",
    description: "Mangcoding is a biggest company...",
    bigImage: Bigimg2,
    category: "App Design",
  },
  {
    title: "Jual",
    description: "Mangcoding is a biggest company...",
    bigImage: Bigimg3,
    category: "Branding",
  },
  {
    title: "MangStore",
    description: "Mangcoding is a biggest company...",
    bigImage: Bigimg4,
    category: "Marketing",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Web Design", "App Design", "Branding", "Marketing"];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="container bg-[#f0f1fa] mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="tabs flex gap-4 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content - Projects Grid */}
      <div className="tab-content grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            style={{
              background:
                "linear-gradient(49.19deg, #13255b -3.57%, #000000 57.37%, #000000 137.77%, #325fec 182.94%)",
            }}
            className="relative flex flex-col md:grid md:grid-cols-2 gap-4 h-auto md:h-[305px] p-4 md:p-6 rounded-2xl overflow-hidden group"
          >
            {/* Floating icon top-right (absolute) */}
            <img
              src={Floatingimg}
              alt="floating icon"
              className="absolute top-4 right-4 w-10 h-10 md:w-[54px] md:h-[54px]"
            />

            {/* Left Side - Text */}
            <div className="flex flex-col justify-start z-10">
              <span className="badge bg-blue-500 text-white text-xs px-2 py-1 rounded mb-2">
                {project.category}
              </span>
              <h2 className="font-semibold text-lg md:text-xl mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                {project.description}
              </p>
            </div>

            {/* Right Side - Big Image */}
            <div className="relative flex justify-end mt-4 md:mt-0">
              <div
                className="w-full h-[150px] md:h-[281px] bg-contain bg-no-repeat bg-bottom"
                style={{ backgroundImage: `url(${project.bigImage})` }}
              ></div>
            </div>
          </div>
        ))}

        {filteredProjects.length === 0 && (
          <p className="text-gray-400 col-span-full text-center py-20">
            No projects found in <strong>{activeTab}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
