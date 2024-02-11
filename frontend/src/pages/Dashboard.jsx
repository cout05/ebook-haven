import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../components/dashboard/BooksCard";
import BooksTable from "../components/dashboard/BooksTable";
import { IoChevronBack } from "react-icons/io5";
import img from "../components/img/logo.jpg";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books/")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Link to="/" className="p-4">
        <IoChevronBack className="text-4xl cursor-pointer" />
      </Link>
      <div className="flex px-2 gap-4 border-b-2 border-black">
        <button
          className="text-2xl border-b-4 border-blue-950"
          onClick={() => setShowType("table")}>
          Table
        </button>
        <button className="text-2xl" onClick={() => setShowType("card")}>
          Card
        </button>
      </div>

      <div className="flex justify-between gap-4">
        <div className="p-10">
          <div>
            <img
              className="w-[100px] h-[100px] rounded-full"
              src={img}
              alt="logo"
            />
          </div>
          <h1 className="text-2xl"> Welcome</h1>
        </div>
        <div className="border w-full">
          <div className="flex justify-between items-center px-4">
            <h1 className="text-3xl my-8">Your books</h1>
            <Link to="/books/create">
              <MdOutlineAddBox className="text-sky-800 text-4xl" />
            </Link>
          </div>
          {loading ? (
            <Spinner />
          ) : showType === "table" ? (
            <BooksTable books={books} />
          ) : (
            <BooksCard books={books} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
