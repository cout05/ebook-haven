import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import img from "../components/img/logo.jpg";
import Uploaded from "../components/dashboard/Uploaded";
import Library from "../components/dashboard/Library";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { userDetails } = useContext(AuthContext);
  const [showType, setShowType] = useState(true);

  return (
    <div className="bg-my-background-image bg-[#39ad91]  text-[#EFECEC]">
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

      <div className="flex flex-col md:flex-row bg-my-background-image bg-gray-900 h-screen md:pt-8 px-4 md:justify-between md:gap-4">
        <div className="w-full md:w-[30%] p-5 flex flex-row md:flex-col gap-4 md:gap-2">
          <div className="">
            <img
              className="w-[100px] h-[100px]  md:min-w-[200px] md:min-h-[200px] bg-contain rounded-full"
              src={img}
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-2 w-full flex-1">
            <h1 className="text-2xl capitalize">
              {userDetails.firstname} {userDetails.lastname}
            </h1>
            <p className="font-semibold">@{userDetails.username}</p>
            <p>Bio</p>
            <button className="px-2 py-1 rounded w-full bg-[#f04963]">
              Edit Profile
            </button>
          </div>
        </div>
        {showType ? <Library /> : <Uploaded />}
      </div>
    </div>
  );
};

export default Dashboard;
