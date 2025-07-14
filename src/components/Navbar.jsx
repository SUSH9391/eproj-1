import React, { useEffect } from "react";
import { useState } from "react";
import { assets } from "../assets/assets.js";
import "./Navbar.css";
const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="mx-auto w-[90%] flex justify-center items-center py-4 px-4 bg-transparent glassmorphic-nav">
        {/*** bg-transparent glassmorphic-nav ***/}

        <img
          src={assets.logo}
          alt="logo"
          className="h-12 sm:h-16 object-contain mx-auto"
        />

        <ul className="hidden md:flex gap-7 text-white font-semibold">
          <li>
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#Services" className="cursor-pointer hover:text-gray-400">
              Services
            </a>
          </li>
          {/* {<li>
            <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">
              Testimonials
            </a>
          </li>} */}
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          <a href="#Contact" className="text-gray-800 font-semibold">
            Contact Us
          </a>
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu}
          alt="Menu Icon"
          className="md:hidden  w-7 cursor-pointer"
        />
      </div>
      {/*** mobile menu ***/}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "hidden"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all delay-75
        duration-300 ease-in-out z-20`}
      >
        <div>
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross}
            alt="Close Icon"
            className="w-6 absolute right-5 top-5 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center gap-4 mt-5 px-5  text-lg font-medium">
          <li>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block cursor-pointer hover:text-gray-400"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#About"
              className="px-4 py-2 rounded-full inline-block cursor-pointer hover:text-gray-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowMobileMenu(false)}
              href="#Services"
              className="px-4 py-2 rounded-full inline-block cursor-pointer hover:text-gray-400"
            >
              Services
            </a>
          </li>
          {/* { <li>
            <a onClick={() => setShowMobileMenu(false)}
              href="#Testimonials"
              className="px-4 py-2 rounded-full inline-block cursor-pointer hover:text-gray-400"
            >
              Testimonials
            </a>
          </li>} */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
