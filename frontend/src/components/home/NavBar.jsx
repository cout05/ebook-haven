import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import img from "../img/logo.jpg";

const Navbar = () => {
  const [search, setSearch] = useState(false);

  return (
    <div>
      <nav className="bg-[#39ad91] text-[#EFECEC] border-[#7b7294]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center gap-4">
            <img className="w-[50px] rounded" src={img} alt="logo" />
            <span className="self-center text-xl md:text-2xl font-semibold">
              EbookHaven
            </span>
          </div>

          <div className="flex justify-center items-center md:order-2">
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex  items-center ps-3 pointer-events-none">
                <FaSearch className="w-4 h-4 text-[#7B7294]" />
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg outline-none"
                placeholder="Search..."
              />
            </div>
            <button
              onClick={() => setSearch(!search)}
              type="button"
              className="inline-flex items-center hover:text-[#65ffdb] p-2 w-10 h-10 justify-center md:hidden">
              <AiOutlineMenu className="text-9xl" />
            </button>
          </div>
          <div
            className={`relative ${
              search ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}>
            <div className="md:hidden mt-8">
              <input
                type="text"
                className="block w-[80%] m-auto p-2  ps-10 text-sm text-gray-900 border border-[#7B7294] rounded-lg outline-none"
                placeholder="Search..."
              />
            </div>
            <ul className="md:flex text-center md:gap-4 p-4 md:p-0 md:mt-4 md:text-xl font-medium">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 hover:text-[#65ffdb]  md:p-0">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-[#65ffdb] px-3 md:p-0">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-[#65ffdb] px-3 md:p-0">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
