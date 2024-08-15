import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPaintbrush } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import Cart from "./Cart";
import Authenticate from "./authenticate";
import Homepage from "../Pages/Homepage";

// This page is the navigation bar used throughout the website
export default function Header() {
  const [isLoggedIn, setLogIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");
    const StoredfullName = localStorage.getItem("full_name");
    setFullName(StoredfullName);
    setLogIn(!!token); // Set logged-in state based on token existence
  }, []);

  const extractFirstName = (fullName) => {
    const lowercaseName = fullName.toLowerCase();
    const regex = /^[^\s]*/;
    const match = lowercaseName.match(regex);
    return match ? match[0] : "";
  };

  const handleLogout = () => {
    // Remove token and update login state
    localStorage.removeItem("token");
    setLogIn(false);
  };

  return (
    <nav className="relative flex bg-[#1b5a87] h-[3.5em] justify-between items-center text-white text-[1.1em] px-4">
      <Link className="flex items-center" to="/" element={<Homepage />}>
        <FaPaintbrush className="mr-2" size={20} />
        <p className="text-2xl font-bold">Mariz Art</p>
      </Link>
      <div className="flex items-center">
      <div 
        className="flex items-center relative group" 
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        {isLoggedIn ? (
          <>
            <button className="text-left flex text-[.9em] mr-2 border border-transparent hover:border-black px-2 py-3 transition-all duration-300 capitalize">
              Hello, {extractFirstName(fullName)}
              <br />
              Account & Settings
              <IoMdArrowDropdown size={20} className="relative top-[.9em] left-0" />
            </button>
            <div className={`absolute right-[-36px] top-[2.7em] mt-1 w-[22em] bg-white border rounded shadow-lg ${dropdownOpen ? 'block' : 'hidden'} z-20`}>
              <IoMdArrowDropup size={33} color="white" className="absolute top-[-1.1em] right-[46px]" />
              <div className="flex pt-2 pb-2">
                <div className="w-1/2 border-r border-gray-200 border-solid px-4">
                  <div className="px-4 py-2 text-[#1b5a87] font-semibold">
                    Shopping
                  </div>
                  <ul className="text-black border">
                    <li className="py-2 px-4 border-b border-gray-200 rounded hover:underline hover:text-[#1b5a87] cursor-pointer">
                      <Link to="/shopping-list" className="flex  text-[.9em] items-center">
                        Shopping List
                      </Link>
                    </li>
                    <li className="py-2 px-4 rounded hover:underline hover:text-[#1b5a87] cursor-pointer">
                      <Link to="/shopping-list" className="flex w-[8em] text-[.9em] items-center">
                        Create a wish list
                      </Link>
                    </li>
                    <li className="py-2 px-4 rounded hover:underline hover:text-[#1b5a87] cursor-pointer">
                      <Link to="/shopping-list" className="flex text-[.9em] items-center">
                        Find a Gift
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 border-r border-gray-300">
                  <div className="px-4 py-2 text-[#1b5a87] font-semibold">
                    Your Account
                  </div>
                  <ul className="text-black">
                    <li className="py-2 px-4 text-[.9em] hover:underline hover:text-[#1b5a87] rounded cursor-pointer">
                      <Link to="/profile" className="flex items-center">
                        Profile
                      </Link>
                    </li>
                    <li className="py-2 px-4 text-[.9em] hover:underline hover:text-[#1b5a87]  rounded cursor-pointer">
                      <Link to="/orders" className="flex items-center">
                        Your Orders
                      </Link>
                    </li>
                    <li className="py-2 px-4 text-[.9em] hover:underline hover:text-[#1b5a87]  rounded cursor-pointer">
                      <Link to="/saved-items" className="flex items-center">
                        Your Saved Items
                      </Link>
                    </li>
                    <li className="py-2 px-4 text-[.9em] hover:underline hover:text-[#1b5a87] rounded cursor-pointer">
                      <Link to="/settings">Settings</Link>
                    </li>
                    <li
                      className="py-2 px-4 text-[.9em] hover:underline hover:text-[#1b5a87] rounded cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 ${dropdownOpen ? 'block' : 'hidden'} pointer-events-none`} />
          </>
        ) : (
          <Link to="/Authenticate" element={<Authenticate />}>
            <button className="text-[1em] mr-4 border border-transparent hover:border-black px-3 py-4 hover:shadow-sm transition-all duration-300">
              Sign in
            </button>
          </Link>
        )}
      </div>
       <div>
          <Link to="/cart" element={<Cart />}>
            <RiShoppingCartLine size={30} />
          </Link>
        </div>
        </div>
    </nav>
  );
}
