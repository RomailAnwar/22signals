import React from "react";

const Score = () => {
  const scores = [
    { title: "Haptic Web Interfaces", percent: 75 },
    { title: "Brain-Computer UX", percent: 60 },
    { title: "Holographic Displays", percent: 38 },
    { title: "Voice-First Navigation", percent: 90 },
  ];

  return (
    <div className="container mx-auto p-6 py-50">

      {/* Top Section */}
      <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2">
        <div>
          <h1 className="">Project Details</h1>
        </div>
        <div className="max-w-[555px] w-full flex ml-auto">
          <p className="dark-text">
            You never get another chance to make a good first impression. At American Designers Hub, we use a complete spectrum
          </p>
        </div>
      </div>

      {/* Score Grid */}
      <div className="grid grid-cols-2 gap-10">
        {scores.map((item, index) => (
          <div
            key={index}
            className="progress-card"
          >
            <div className="flex flex-col md:flex-row justify-between items-center mb-3">
              <h1 className="progress-bar">
                {item.title}
              </h1>
              <h1 className="progress-bar">
                {item.percent}%
              </h1>
            </div>

            <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="progressbar h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${item.percent}%` }}
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Score;
