import React from "react";
import Slider from "react-slick";

const SliderComponent = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true, // <-- ensures slides are centered
    centerPadding: "0px", // no extra padding on the sides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto py-8">
      <Slider {...settings}>
        {slides.map((img, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-2"
          >
            <img
              src={img}
              alt={`Logo ${index + 1}`}
              className="w-24 md:w-32 object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
