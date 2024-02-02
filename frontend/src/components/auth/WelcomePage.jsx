import React from "react";
import img from "./logo.jpg";

const WelcomePage = () => {
  return (
    <div className="md:h-screen flex justify-between items-center md:items-baseline md:flex-col w-screen md:w-[50%] px-4 py-2 md:p-5">
      <h2 className="text-1xl font-semibold">Ebook Haven</h2>
      <h1 className="text-2xl md:text-4xl hidden md:block px-10 py-5 font-semibold">
        Discover a World of Stories at Your Fingertips
      </h1>
      <img
        className="w-[50px] md:w-[300px] md:m-auto rounded-lg mt-3"
        src={img}
        alt="logo"
      />
    </div>
  );
};

export default WelcomePage;
