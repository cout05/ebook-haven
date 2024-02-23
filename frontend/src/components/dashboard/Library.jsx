import React, { useEffect, useContext, useState } from "react";
import Empty from "./Empty";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import SavedBook from "./SavedBook";
import BookSingleCard from "./BookSingleCard";
import BooksTable from "./BooksTable";
import Spinner from "../Spinner";
import { PathContext } from "../../context/PathContext";

const Library = () => {
  const [showType, setShowType] = useState("table");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userDetails } = useContext(AuthContext);
  const { returnPath, back } = useContext(PathContext);
  const mode = "lib";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Wait for userDetails to be available
        if (userDetails && userDetails._id) {
          const id = {
            userId: userDetails._id,
          };
          back("/dashboard"); // Ensure this is needed here
          const response = await axios.post(
            "http://localhost:5555/lib/get",
            id
          );
          setBooks(response.data.books); // Update state with books array
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Call the async function immediately
  }, [userDetails]);

  const handleSelect = (event) => {
    setShowType(event.target.value);
  };

  return (
    <div className="bg-my-background-image bg-gray-900 h-full w-full">
      <div className="flex justify-between items-center py-2 px-4 rounded mb-8">
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
          <BooksTable mode={mode} books={books} />
        ) : (
          <div className="grid  grid-cols-2 gap-4 md:gap-2 md:grid-cols-4">
            {books.map((book) => (
              <div key={book._id}>
                <BookSingleCard mode={mode} book={book} />
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
