import React from "react";
import img from "../img/logo.png";

const WelcomePage = () => {
  return (
    <div className="md:h-screen bg-my-background-image text-[#EFECEC] bg-[#023530] flex gap-4 justify-between md:justify-start items-center md:items-baseline md:flex-col w-screen md:w-[50%] px-4 py-2">
      <h2 className="text-1xl font-semibold">Ebook Haven</h2>
      <h1 className="text-2xl md:text-4xl mt-16 hidden md:block px-10 font-semibold ">
        Discover a World of Stories at Your Fingertips
      </h1>
      <img
        className="w-[50px] md:w-[300px] md:mx-auto rounded-lg"
        src={img}
        alt="logo"
      />
    </div>
  );
};

export default WelcomePage;
