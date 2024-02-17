import React, { useEffect, useContext, useState } from "react";
import Empty from "./Empty";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import SavedBook from "./SavedBook";
import BookSingleCard from "./BookSingleCard";
import BooksTable from "./BooksTable";
import Spinner from "../Spinner";

const Library = () => {
  const [showType, setShowType] = useState("table");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    const id = {
      userId,
    };
    axios
      .post("http://localhost:5555/lib/get", id)
      .then((response) => {
        setBooks(response.data.books); // Update state with books array
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  const handleSelect = (event) => {
    setShowType(event.target.value);
  };

  return (
    <div className="w-full">
      <div className="flex bg-my-background-image bg-gray-900 justify-between items-center py-2 px-4 rounded mb-8">
        <div className="flex">
          <h1 className="text-2xl">Library</h1>
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
      </div>
      {loading ? (
        <Spinner />
      ) : books.length > 0 ? (
        showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
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

export default Library;
