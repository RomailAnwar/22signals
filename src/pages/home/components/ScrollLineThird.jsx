import React, { useEffect, useRef } from "react";

const ScrollLineThird = () => {
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

      // Top → Bottom draw
      path.style.strokeDashoffset = pathLength * (1 - progress);
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
      className="thirdsvg"
    >
      <g opacity="0.8">
        <path
          ref={pathRef}
          d="M80.749 731.5H52.5C27.0949 731.5 6.5 710.905 6.5 685.5V314.5C6.5 289.095 27.0949 268.5 52.5 268.5H1690.5C1715.91 268.5 1736.5 247.905 1736.5 222.5V48.5C1736.5 23.0949 1715.91 2.5 1690.5 2.5H1652.13"
          stroke="url(#gradientThird)"
          strokeWidth="5"
          fill="none"
        />
      </g>

      <defs>
        <linearGradient
          id="gradientThird"
          x1="43.6245"
          y1="2.5"
          x2="43.6245"
          y2="731.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#01002B" />
          <stop offset="0.0314417" stopColor="#504CFF" />
          <stop offset="0.959393" stopColor="#504CFF" />
          <stop offset="1" stopColor="#01002B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ScrollLineThird;
