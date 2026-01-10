import React, { useEffect, useRef } from "react";

const ScrollLine = () => {
  const pathRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    const pathLength = path.getTotalLength();

    // Initial dash setup
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    const handleScroll = () => {
      const svgTop = svg.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.9;
      const end = windowHeight * 0.1;

      let progress = (svgTop - end) / (start - end);
      progress = Math.min(Math.max(progress, 0), 1);

      // 🔹 THIS IS THE KEY CHANGE
      // Top → bottom draw without touching SVG
      path.style.strokeDashoffset = pathLength * progress;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <svg
      ref={svgRef}
      width="1743"
      height="742"
      viewBox="0 0 1743 742"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full"
    >
      {/* Path reversed for top-right start */}
      <path
        ref={pathRef}
        d="M1652.13 2.5H1690.5C1715.91 2.5 1736.5 23.0949 1736.5 48.5V222.5C1736.5 247.905 1715.91 268.5 1690.5 268.5H52.5C27.0949 268.5 6.5 289.095 6.5 314.5V685.5C6.5 710.905 27.0949 731.5 52.5 731.5H80.749"
        stroke="url(#gradient)"
        strokeWidth="5"
        fill="none"
      />

       <defs>
        <linearGradient
          id="gradient"
          x1="39.6245"
          y1="2.12241"
          x2="39.6245"
          y2="604"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#01002B" />
          <stop offset="0.0314417" stopColor="#3768FF" />
          <stop offset="0.959393" stopColor="#325FEC" />
          <stop offset="1" stopColor="#01002B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ScrollLine;
