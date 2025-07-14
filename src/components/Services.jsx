import React, { useRef } from "react";
import {  services } from "../assets/assets";
import { WrenchIcon } from "@heroicons/react/24/solid"; // or 'outline'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Services = () => {
  const sliderRef = useRef(null);
  const servicesList = Object.values(services);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const card = sliderRef.current.children[0];
      if (card) {
        const cardWidth = card.offsetWidth;
        const gapStyle = window.getComputedStyle(sliderRef.current).gap;
        const gap = gapStyle ? parseInt(gapStyle) : 32; // fallback for gap-8
        const scrollAmount = cardWidth + gap;
        sliderRef.current.scrollBy({
          left: direction * scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div
      className="container mx-auto py-4 pt-20 lg:px-32 my-20 w-full"
      id="services"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Our Services
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        We offer a variety of services to help you achieve your goals.
      </p>

      {/** slider buttons**/}
      <div className="flex justify-end items-center mb-8">
        {/* Left Arrow Button */}
        <button
          className="p-3 bg-gray-200 rounded mr-2 hover:bg-gray-300"
          aria-label="previous services"
          onClick={() => scroll(-1)}
        >
          <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
        </button>

        {/* Right Arrow Button */}
        <button
          className="p-3 bg-gray-200 rounded hover:bg-gray-300"
          aria-label="next services"
          onClick={() => scroll(1)}
        >
          <ChevronRightIcon className="w-5 h-5 text-gray-700" />
        </button>
      </div>
      {/** services list */}
      <div
  ref={sliderRef}
  className="flex gap-8 overflow-x-auto pb-15 px-4"
  style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
>
  {servicesList.map((service, index) => (
    <div
      key={index}
      className="relative flex-shrink-0 w-[280px] sm:w-[300px]"
    >
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-auto object-cover mb-14 rounded-lg"
      />
      <div
  className="absolute left-0 right-0 flex justify-center"
  style={{ bottom: '-40px' }} // Adjust this value as needed
>
        <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md rounded-md">
          <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
          <p className="text-gray-500">{service.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Services;
