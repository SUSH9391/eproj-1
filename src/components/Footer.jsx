import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-800 w-full overflow-hidden text-white "
      id="footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src={assets.logo2}
            alt="logo"
            className="max-h-20 object-contain mx-auto"
          />{" "}
          <p className="text-gray-400 mt-5">
            No. 263, 14th cross, 2nd stage, Indiranagar, Bengaluru - 560038
          </p>
          <a href="tel:+91 9448478725" className="text-gray-400 hover:underline">
            +91 9448478725
          </a><br />

          <a href="tel:+91 9113645261" className="text-gray-400 hover:underline">
            +91 9113645261
          </a><br />

          <a href="mailto:adithyaelectricals1@gmail.com" className="text-gray-400 hover:underline">
            adithyaelectricals1@gmail.com
          </a>

          
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">
              <li className="mb-2 mt-2">Home</li>
            </a>
            <a href="#About" className="hover:text-white">
              <li className="mb-2">About Us</li>
            </a>
            <a href="#Contact" className="hover:text-white">
              <li className="mb-2">Contact Us</li>
            </a>
            <a href="#" className="hover:text-white">
              <li className="mb-2">Privacy Policy</li>
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Find Us</h3>
          <div className="rounded-lg overflow-hidden shadow-lg pb-5 pr-5">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.99485301308388!2d77.63551308279894!3d12.977118880028678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a3777f8149%3A0x5fac8f5dd7081570!2s263%2C%2014th%20Cross%20Rd%2C%20Stage%202%2C%20Hoysala%20Nagar%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038!5e0!3m2!1sen!2sin!4v1752493955608!5m2!1sen!2sin"
              width="100%"
              height="200"
              className="w-full h-[200px] border-0 rounded-lg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Adithya Electricals. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
