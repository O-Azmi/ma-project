import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/brand-logo.png";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import Cart from "./Cart";
import Authenticate from "./authenticate";
import Homepage from "../Pages/Homepage";
import { IoMdArrowDropup } from "react-icons/io";

// This page is the navigation bar used throughout the website
export default function Header() {
  const [isLoggedIn, setLogIn] = useState(false);
  const [fullName, setFullName] = useState("");

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
    <nav className="flex relative h-[3.5em] justify-between items-center text-black text-[1.1em] px-4">
      <Link to="/" element={<Homepage />}>
        <img className="h-[3.3em] w-[8em]" src={Logo} alt="Brand Logo" />
      </Link>
      <div className="flex items-center">
        {isLoggedIn ? (
          <div className="relative group">
            <button
              className="text-left flex text-[.9em] mr-2 border border-transparent hover:border-black px-2 py-3 hover:shadow-sm transition-all duration-300 capitalize"
            >
              Hello, {extractFirstName(fullName)}
              <br />
              Account & Settings
              <IoMdArrowDropdown
                size={20}
                className="relative top-[.9em] left-0"
              />
            </button>
            <div className="absolute right-[-2em] top-[3em] mt-1 w-[22em] bg-[white] border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <IoMdArrowDropup size={33} color="white" className="absolute top-[-1.2em] right-[46px]"/>
              <div className="flex pt-2 pb-2">
              <div className="w-1/2 border-r border-black border-solid px-4">
                  <div className="px-4 py-2 font-semibold">Shopping</div>
                  <ul className="text-black">
                    <li className="py-2 px-4 rounded cursor-pointer">
                      <Link to="/shopping-list" className="flex items-center">
                        Shopping List
                      </Link>
                    </li>
                    <li className="py-2 px-4 rounded cursor-pointer">
                      <Link to="/shopping-list" className="flex items-center">
                        Create a wish list
                      </Link>
                    </li>
                    <li className="py-2 px-4 rounded cursor-pointer">
                      <Link to="/shopping-list" className="flex items-center">
                        Find a Gift
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-1/2 border-r border-gray-300">
                  <div className="px-4 py-2  font-semibold">Your Account</div>
                  <ul className="text-black">
                    <li className="py-2 px-4 text-[.9em] hover:underline rounded cursor-pointer">
                      <Link to="/profile" className="flex items-center">
                        Profile
                      </Link>
                    </li>
                    <li className="py-2 px-4 text-[.9em] hover:underlin rounded cursor-pointer">
                      <Link to="/orders" className="flex items-center">
                        Your Orders
                      </Link>
                    </li>
                    <li className="py-2 px-4 text-[.9em] hover:underline rounded cursor-pointer">
                      <Link to="/saved-items" className="flex items-center">
                        Your Saved Items
                      </Link>
                    </li>
                    <li className="py-2 px-4 text-[.9em] hover:underline rounded cursor-pointer">
                      <Link to="/settings">Settings</Link>
                    </li>
                    <li
                      className="py-2 px-4 text-[.9em] hover:underline rounded cursor-pointer"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
                
              </div>
            </div>
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
    </nav>
  );
}
