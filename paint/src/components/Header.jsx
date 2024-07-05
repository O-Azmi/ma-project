import React, { useState } from "react";
import Logo from "../../Images/brand-logo.png";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex h-[3.5em] justify-between items-center  text-black text-[1.1em]">
      <img className="h-14 w-[10em]" src={Logo} />
      <div>
        <button
          onClick={toggleMenu}
          className="px-3 py-2 rounded-md mr-6 border-2 border-black border-solid"
        >
          Menu
        </button>
      </div>
      <ul
        className={`absolute p-0 m-0 top-[7%] left-[13.8em] w-[8em] text-center bg-[#f1f0ee] rounded-lg text-white transition-all duration-500 ease-out overflow-hidden ${
          toggle ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ maxHeight: toggle ? "100%" : "0" }}
      >
        <li className="py-4 px-4 border-b border-gray-300 hover:bg-gray-200">
          <a
            href="#"
            className="text-black hover:underline"
          >
            Shop Now
          </a>
        </li>
        <li className="py-4 px-4 border-b border-gray-300 hover:bg-gray-200">
          <a
            href="#"
            className="text-black hover:underline"
          >
            About Us
          </a>
        </li>
        <li className="py-4 px-4 border-b border-gray-300 hover:bg-gray-200">
          <a
            href="#"
            className="text-black hover:underline"
          >
            Contact
          </a>
        </li>
        <li className="py-4 px-4 border-b border-gray-300 hover:bg-gray-200">
          <a
            href="#"
            className="text-black hover:underline"
          >
            More
          </a>
        </li>
      </ul>
    </nav>
  );
}
