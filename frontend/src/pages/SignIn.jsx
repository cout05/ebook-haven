import React, { useState, useContext } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import WelcomePage from "../components/auth/WelcomePage";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const SignIn = () => {
  const [un, setUn] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const { loggedIn } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();

    const info = {
      username: un,
      password: pw,
    };

    axios
      .post("http://localhost:5555/user/login", info)
      .then((res) => {
        if (res.data.message === "Login successful") {
          const { token } = res.data;
          loggedIn(token);
          navigate("/");
        } else {
          alert("Password Incorrect");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  };

  return (
    <section className="h-screen text-[#EFECEC] bg-[#39ad91] flex flex-col md:flex-row">
      <WelcomePage />
      <div className="w-full md:w-[50%] px-5 md:px-0 mt-16 md:mt-0 md:h-screen md:bg-[#39ad91] flex md:justify-center md:items-center">
        <div className="px-10 pb-5 pt-5 bg-white bg-opacity-20 backdrop-blur-lg rounded-md shadow-2xl">
          <form onSubmit={login}>
            <h1 className="text-3xl font-semibold pb-5">Log In</h1>
            <input
              className="text-sm w-full px-4 py-2 bg-transparent outline-none border-b-2 border-[#efecec] placeholder-[#efecec]"
              type="text"
              placeholder="Username"
              onChange={(e) => setUn(e.target.value)}
            />
            <input
              className="text-sm w-full px-4 py-2 bg-transparent outline-none border-b-2 border-[#efecec] placeholder-[#efecec] mt-4"
              type="password"
              placeholder="Password"
              onChange={(e) => setPw(e.target.value)}
            />
            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
              <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="#">
                Forgot Password?
              </a>
            </div>
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-gray-800 shadow-2xl hover:bg-gray-600 px-4 py-2 text-[#efecec] uppercase rounded text-xs tracking-wider"
                type="submit">
                Log in
              </button>
            </div>
          </form>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don&apos;t have an account?{" "}
            <Link
              className="text-red-600 hover:underline hover:underline-offset-4"
              to="/signup">
              Register
            </Link>
          </div>
          <div className="text-center md:text-left">
            <div className="my-2 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
                Or
              </p>
            </div>
            <label className="mr-1">Sign in with</label>
            <button
              type="button"
              className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">
              <BiLogoFacebook
                size={20}
                className="flex justify-center items-center w-full"
              />
            </button>
            <button
              type="button"
              className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]">
              <AiOutlineTwitter
                size={20}
                className="flex justify-center items-center w-full"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
