import { useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import img from "../components/img/logo.jpg";
import Uploaded from "../components/dashboard/Uploaded";
import Library from "../components/dashboard/Library";

const Dashboard = () => {
  const [showType, setShowType] = useState(true);

  return (
    <div className="bg-my-background-image bg-gray-900 text-[#EFECEC]">
      <Link to="/" className="p-4">
        <IoChevronBack className="text-4xl cursor-pointer" />
      </Link>
      <div className="flex gap-4 px-4 border-b-2 pb-2">
        <button
          onClick={() => setShowType(true)}
          className={`${
            showType ? "border-b-2 border-[#f04963]" : ""
          } text-md font-semibold`}>
          Library
        </button>
        <button
          onClick={() => setShowType(false)}
          className={`${
            !showType ? "border-b-2 border-[#f04963]" : ""
          } text-md font-semibold`}>
          Uploaded
        </button>
      </div>

      <div className="flex flex-col md:flex-row bg-my-background-image bg-[#39ad91] h-screen md:pt-8 px-4 md:justify-between md:gap-4">
        <div className="w-full md:w-[30%] p-5 flex flex-col items-center">
          <div>
            <img
              className="w-[100px] h-[100px] rounded-full"
              src={img}
              alt="logo"
            />
          </div>
          <h1 className="text-2xl"> Welcome</h1>
        </div>
        {showType ? <Library /> : <Uploaded />}
      </div>
    </div>
  );
};

export default Dashboard;
