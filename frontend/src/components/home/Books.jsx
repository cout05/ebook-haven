import React, { useState, useContext, useEffect } from "react";
import BooksCard from "../dashboard/BooksCard";
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
          <BooksCard books={books} />
        ) : (
          <Empty />
        )}
      </section>
    </div>
  );
};

export default Books;
