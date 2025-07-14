import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-4 lg:px-14 w-full overflow-hidden"
      id="About"
    >
       

      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Us
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">Comfort and Reliability</p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand}
          alt="About Us"
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p className="text-sm">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p className="text-sm">Automation Works Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">5+</p>
              <p className="text-sm">Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-wdith-lg">
            At Adithya Electricals, we specialize in blending intelligent
            automation with dependable electrical solutions to create spaces
            that are both smart and secure. Whether it’s home automation,
            commercial wiring, or energy-efficient upgrades, our expert team
            ensures seamless integration and long-lasting performance. We don’t
            just power buildings — we power peace of mind, bringing you comfort
            you can control and reliability you can count on.
          </p>
          <button className="bg-blue-600 text-white px-8 py-2 rounded">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
