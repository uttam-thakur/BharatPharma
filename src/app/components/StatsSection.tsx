import React from "react";

const StatsSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background1.jpg" // replace with your actual image path
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-red-700/70"></div>{" "}
        {/* semi-transparent red overlay */}
      </div>

      {/* More wavy SVG on top */}
      <div className="absolute top-0 left-0 w-full z-10">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-screen h-32 md:h-40"
        >
          <path
            fill="#DBEAFE"
            fillOpacity="1"
            d="M0,160 C360,260 1080,60 1440,160 L1440,0 L0,0 Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto text-center px-4 md:px-20 text-white">
        <h2 className="text-3xl font-bold mb-10">
          The <span className="text-white">Bharat Pharma</span> Difference
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <span className="text-4xl mb-2 inline-block">📍</span>
            <h3 className="text-xl font-bold">50+ Locations</h3>
          </div>
          <div>
            <span className="text-4xl mb-2 inline-block">💼</span>
            <h3 className="text-xl font-bold">10K+ Equipment</h3>
          </div>
          <div>
            <span className="text-4xl mb-2 inline-block">🕒</span>
            <h3 className="text-xl font-bold">24/7 Support</h3>
          </div>
          <div>
            <span className="text-4xl mb-2 inline-block">🚚</span>
            <h3 className="text-xl font-bold">Fast Delivery</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
