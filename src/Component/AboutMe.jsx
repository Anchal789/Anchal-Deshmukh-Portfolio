import React from "react";
import Avatar from "../Assets/Avatar.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="py-20 md:py-32 flex justify-center items-center ">
      <div className="container px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 font-bold text-md">
              Front-End Developer with 2 years of experience specializing in
              React.js at Go Highers Infotech. Successfully led complete project
              lifecycles, delivered major projects, and ensured seamless user
              experiences. Responsibilities included planning, design,
              implementation, and deployment. Additionally, completed various
              freelance projects, demonstrating adaptability to different client
              needs. Passionate about creating responsive and user-friendly
              interfaces, with a strong desire to grow in the web development
              industry. Interests include e-games, stock market learning, and
              photography, with active participation in college fests as a
              volunteer.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={Avatar}
              width={300}
              height={300}
              alt="John Doe"
              className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
