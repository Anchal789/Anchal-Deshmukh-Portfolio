import React from "react";
import ProfileImage from "../Assets/Profile Image.png"

const NameSection = () => {
  return (
    <section id="hero" className="bg-gray-950 text-gray-50 py-20 md:py-32">
      <div className="container px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={ProfileImage}
            width={300}
            height={300}
            alt="John Doe"
            className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Anchal Deshmukh</h1>
          <p className="text-gray-400 text-lg">
            Experienced Software Engineer and Web Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default NameSection;
