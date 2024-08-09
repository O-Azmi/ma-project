import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/brand-logo.png";
import { RiShoppingCartLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Cart from "./Cart";
import Authenticate from "./authenticate";
import { CgProfile } from "react-icons/cg";
import Homepage from "../Pages/Homepage";

// This page is the navigation bar used throughout the website
export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setLogIn] = useState(false);
  const [fullName, setFullName] = useState("");

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");
    const StoredfullName = localStorage.getItem("full_name");
    setFullName(StoredfullName);
    setLogIn(!!token); // Set logged-in state based on token existence
  }, []);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const BurgerButton = () => {
    if (!toggle) {
      return <RxHamburgerMenu size={30} />;
    } else {
      return <IoClose size={30} />;
    }
  };
  const extractFirstName = (fullName) => {
    const lowercaseName = fullName.toLowerCase();
    const regex = /^[^\s]*/;
    const match = lowercaseName.match(regex);
    return match ? match[0] : '';
};

  const handleLogout = () => {
    // Remove token and update login state
    localStorage.removeItem("token");
    setLogIn(false);
  };
  return (
    <nav className="flex relative h-[3.5em] justify-between items-center text-black text-[1.1em] px-4">
      <Link to="/" element={<Homepage />}>
        <img className="h-[3.3em] w-[8em]" src={Logo} alt="Brand Logo" />
      </Link>
      <div className="flex items-center">
        {/* <div>
          <button onClick={toggleMenu} className="px-3 py-2 rounded-md mr-1 ">
            <BurgerButton />
          </button>
        </div> */}
        {isLoggedIn ? (
          <div>
            <button
              className="text-[1em] mr-2 border border-transparent hover:border-black px-3 py-4 hover:shadow-sm transition-all duration-300 capitalize"
              onClick={handleLogout}
            >
              Hello, {extractFirstName(fullName)}
            </button>
          </div>
        ) : (
          <Link to="/Authenticate" element={<Authenticate />}>
            <button className="text-[1em] mr-4 border border-transparent hover:border-black px-3 py-4 hover:shadow-sm transition-all duration-300">
              Sign in
            </button>
          </Link>
        )}
        <div>
          <Link to="/cart" element={<Cart />}>
            <RiShoppingCartLine size={30} />
          </Link>
        </div>
      </div>

      {/* <div
        className={`absolute top-[3em] right-0 mt-2 w-[8em] text-center bg-[#f1f0ee] rounded-lg text-white transition-all duration-500 ease-out overflow-hidden ${
          toggle ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="w-full">
          <li className="py-4 px-4 border-b border-gray-300 hover:bg-gray-400">
            <a href="#" className="text-black hover:underline">
              Shop Now
            </a>
          </li>
          <li className="py-4 px-4 border-b border-gray-300 hover:bg-gray-400">
            <a href="#" className="text-black hover:underline">
              Catalogue
            </a>
          </li>
          <li className="py-4 px-4 border-b border-gray-300 hover:bg-gray-400">
            <a href="#" className="text-black hover:underline">
              Contact
            </a>
          </li>
          <li className="py-4 px-4 border-b border-gray-300 hover:bg-gray-400">
            <a href="#" className="text-black hover:underline">
              About Us
            </a>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}
