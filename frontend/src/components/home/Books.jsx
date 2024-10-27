import React, { useState, useContext, useEffect } from "react";
import BookSingleCard from "../dashboard/BookSingleCard";
import Spinner from "../Spinner";
import axios from "axios";
import Empty from "../dashboard/Empty";
import { PathContext } from "../../context/PathContext";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const { returnPath, back } = useContext(PathContext);
  const c = true;

  useEffect(() => {
    setLoading(true);
    back("/");
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
      <section className="p-4 ">
        <h1 className="font-semibold text-2xl py-2">All books</h1>
        {loading ? (
          <Spinner />
        ) : books.length > 0 ? (
          <div className="flex md:justify-start justify-center gap-4 flex-wrap">
            {books.map((book) => (
              <div key={book._id}>
                <BookSingleCard isHome={c} book={book} />
              </div>
            ))}
          </div>
        ) : (
          <Empty />
        )}
      </section>
    </div>
  );
};

export default Books;
