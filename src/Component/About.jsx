import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white text-center py-16 px-6">
      <div className="mb-12">
        <h1 className="text-5xl font-extrabold mb-4">
          Why we are The Best Choice?
        </h1>
        <p className="text-xl text-gray-300">
          Watch this one-minute video to understand why our services are the
          best!
        </p>
      </div>
      <div className="relative mb-16"></div>
      <div className="flex justify-center">
        <iframe
          width="800"
          height="415"
          src="https://www.youtube.com/embed/5aCdZz_Zj4s?si=lL8zdbzHNBfteLrJ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default About;
