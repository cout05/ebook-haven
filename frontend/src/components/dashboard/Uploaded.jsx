import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../dashboard/BooksCard";
import BooksTable from "../dashboard/BooksTable";
import { AuthContext } from "../../context/AuthContext";

const Uploaded = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const { userId } = useContext(AuthContext);

  const handleSelect = (event) => {
    setShowType(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books/")
      .then((response) => {
        const uploadedBooks = response.data.data.filter((book) => {
          // Example: Filtering books with a certain condition
          return book.userId === userId; // Change the condition as needed
        });
        setBooks(uploadedBooks);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full ">
      <div className="flex bg-my-background-image bg-gray-900 justify-between items-center py-2 px-4 rounded mb-8">
        <div className="flex">
          <h1 className="text-2xl">Uploaded</h1>
          <div className="flex px-4">
            <select
              value={showType}
              onChange={handleSelect}
              className="text-md font-semibold bg-my-background-image bg-gray-900 outline-none cursor-pointer">
              <option value="table">List</option>
              <option value="card">Card</option>
            </select>
          </div>
        </div>

        <Link to="/books/create">
          <MdOutlineAddBox className="text-[#f04963] text-4xl" />
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
  );
};

export default Uploaded;
