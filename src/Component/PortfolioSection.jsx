import React from "react";

const PortfolioSection = () => {
  return (
    <section className=" bg-gradient-to-r from-gray-900 to-black text-white py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Awesome Portfolio
        </h2>
        <div className="flex flex-wrap justify-center space-x-6 md:space-x-6">
          {/* Card 1 */}
          <div className="w-full sm:w-64 bg-gray-800 mb-6 sm:mb-0 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/src/Images/portfoliosection.png"
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
          </div>
          {/* Card 2 */}
          <div className="w-full sm:w-64 bg-gray-800 mb-6 sm:mb-0 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/src/Images/portfoliosection1.png"
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
          </div>
          {/* Card 3 */}
          <div className="w-full sm:w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/src/Images/portfoliosection2.png"
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
