import React, { useState, useContext } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import img from "../img/logo.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div>
      <nav className=" fixed w-full z-10 text-[#EFECEC] border-[#7b7294]">
        <div className="flex bg-[#39ad91] flex-wrap items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <img className="w-[50px] rounded" src={img} alt="logo" />
            <span className="self-center text-xl md:text-2xl font-semibold">
              EbookHaven
            </span>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={() => setSearch(!search)}
              type="button"
              className="inline-flex items-center hover:text-[#65ffdb] p-2 w-10 h-10 justify-center">
              <AiOutlineMenu className="text-9xl" />
            </button>
          </div>
        </div>
        <div
          className={`${
            search ? "right-0" : "-right-full"
          } bg-[#39ad91] px-4 w-full md:w-[35vw] xl:max-w-[30vw] h-full fixed
     top-0 shadow-2xl transition-all duration-300 z-20 overflow-y-auto`}>
          <button
            onClick={() => setSearch(!search)}
            type="button"
            className="block items-center hover:text-[#65ffdb] p-2 ml-auto mt-6 mb-3 justify-center">
            <AiOutlineClose className="text-3xl" />
          </button>

          <div>
            <input
              type="text"
              className="block w-full m-auto p-2  ps-10 text-sm text-gray-900 border border-[#7B7294] rounded-lg outline-none"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col gap-4 p-4 md:mt-4 md:text-2xl font-medium">
            <li>
              <Link
                to="/"
                className="py-2 block hover:text-[#65ffdb] px-3 md:p-0">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="py-2 block hover:text-[#65ffdb] px-3 md:p-0">
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="py-2 block hover:text-[#65ffdb] px-3 md:p-0">
                About
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link
                  to="/logout"
                  className="py-2 block hover:text-[#65ffdb] px-3 md:p-0">
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="py-2 block hover:text-[#65ffdb] px-3 md:p-0">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
