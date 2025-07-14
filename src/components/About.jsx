import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-4 lg:px-14 w-full overflow-hidden"
      id="About"
    >
      <h3 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
        About <span className="underline decoration-blue-500">Us</span>
      </h3>

      <p className="text-gray-500 max-w-80 text-center mb-8">
        Comfort and Reliability
      </p>
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
    </motion.div>
  );
};

export default About;
