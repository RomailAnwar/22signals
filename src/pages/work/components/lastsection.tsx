import { useState } from "react";
import "../../../pages/home/home.css";

const lastsection = () => {
  return (
    <div className="container bg-[#f0f1fa] mx-auto px-4 py-16 space-y-16">
  <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 items-start">
    <h1 className="sub-heading text-3xl md:text-5xl font-thin">
      Our Successfully <br /> Growth
    </h1>
    <p className="card-text text-base md:text-lg">
      You never get another chance to make a good first impression. At American Designers Hub, we use a complete spectrum
    </p>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {/* Column 1 */}
    <div className="second-card flex flex-col items-center">
      <h3 className="sub-card-heading">150+</h3>
      <p className="card-text">Projects Delivered</p>
    </div>

    {/* Column 2 */}
    <div className="second-card flex flex-col items-center">
      <h3 className="sub-card-heading">98% </h3>
      <p className="card-text">Client Satisfaction</p>
    </div>

    {/* Column 3 */}
    <div className="second-card flex flex-col items-center">
      <h3 className="sub-card-heading">50+ </h3>
      <p className="card-text">Global Clients</p>
    </div>

    {/* Column 4 */}
    <div className="second-card flex flex-col items-center">
      <h3 className="sub-card-heading">25+ </h3>
      <p className="card-text">Industry Awards</p>
    </div>
  </div>
</div>

  );
};

export default lastsection;
