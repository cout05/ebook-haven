import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import Spinner from "../Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BookSingleCard from "./BookSingleCard";
import BooksTable from "../dashboard/BooksTable";
import { AuthContext } from "../../context/AuthContext";
import Empty from "./Empty";

const Uploaded = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  const { userDetails } = useContext(AuthContext);

  const handleSelect = (event) => {
    setShowType(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books/")
      .then((response) => {
        const { data } = response;
        if (userDetails?._id) {
          const uploadedBooks = data.data.filter(
            (book) => book.userId === userDetails._id
          );
          setBooks(uploadedBooks);
        } else {
          setBooks([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userDetails]); // Add userDetails to the dependency array

  return (
    <div className="w-full">
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
      ) : books.length > 0 ? (
        showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <div className="grid grid-cols-2 gap-4 md:gap-2 md:grid-cols-4">
            {books.map((book) => (
              <div key={book._id}>
                <BookSingleCard book={book} />
              </div>
            ))}
          </div>
        )
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Uploaded;
