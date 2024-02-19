import React, { useState, useContext, useEffect } from "react";
import BookSingleCard from "../dashboard/BookSingleCard";
import Spinner from "../Spinner";
import axios from "axios";
import Empty from "../dashboard/Empty";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

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
      <section className="p-4">
        <h1 className="font-semibold text-2xl py-2">All books</h1>
        {loading ? (
          <Spinner />
        ) : books.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:gap-2 md:grid-cols-4 ">
            {books.map((book) => (
              <div key={book._id}>
                <BookSingleCard book={book} />
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
