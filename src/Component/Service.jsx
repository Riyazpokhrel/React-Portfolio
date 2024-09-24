import React from "react";

const services = [
  {
    title: "Development",
    description: "Create a platform with the best and coolest quality from us.",
    icon: "src/Images/development.png", // Replace with your icon path
  },
  {
    title: "UI/UX Designer",
    description:
      "We provide UI/UX Design services, and of course with the best quality.",
    icon: "src/Images/uiux.png", // Replace with your icon path
  },
  {
    title: "Graphik Designer",
    description: "We provide Graphic Design services, with the best designers.",
    icon: "src/Images/graphic.png", // Replace with your icon path
  },
  {
    title: "Motion Graphik",
    description: "Create a platform with the best and coolest quality from us.",
    icon: "src/Images/motiongraphic.png", // Replace with your icon path
  },
  {
    title: "Photography",
    description:
      "We provide Photography services, and of course with the best quality.",
    icon: "src/Images/photo.png", // Replace with your icon path
  },
  {
    title: "Videography",
    description: "Create a platform with the best and coolest quality from us.",
    icon: "src/Images/video.png", // Replace with your icon path
  },
];

export default function Services() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">The Service We Provide For You</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gradient-to-r from-gray-900 to-black rounded-lg shadow-lg"
          >
            <img
              src={service.icon}
              alt={`${service.title} icon`}
              className="w-12 h-12 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
