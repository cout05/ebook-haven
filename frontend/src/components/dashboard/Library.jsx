import React, { useEffect, useContext, useState } from "react";
import Empty from "./Empty";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import SavedBook from "./SavedBook";

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
        setBooks(response.data.data);
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
      <SavedBook books={books} />
      <Empty />
    </div>
  );
};

export default Library;
