import React from "react";
import backgroundImage from "../../Images/Background-home.jpg";
export default function HeroImage() {
  return (
    <div
      className=" flex items-center h-[93.5%] justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white text-center px-6">
        <div className="text-4xl font-semibold py-10">
          Discover the Beauty of Art Online
        </div>
        <div className="text-lg pb-8">
          Explore our collection of exquisite paintings and find the perfect
          piece to adorn your space.
        </div>
        <div className="flex justify-center space-x-4">
          <a
            href="#"
            className="cursor-pointer px-8 py-3 border border-white rounded-sm bg-[#f1f0ee] text-black"
          >
            Shop
          </a>
          <a
            href="#"
            className="cursor-pointer px-8 py-3 border border-white rounded-sm bg-[#f1f0ee] text-black"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
