import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { FaCirclePlus } from "react-icons/fa6";

const BookDetails = ({ book, imageUrl }) => {
  const { userId } = useContext(AuthContext);

  const saveBook = () => {
    const info = {
      userId: userId,
      bookId: book._id,
    };
    axios
      .post("http://localhost:5555/lib/add", info)
      .then(() => {
        alert("book added");
      })
      .catch((error) => {
        console.log(error);
        alert("error");
      });
  };

  return (
    <div className="flex flex-col md:flex-row  justify-center md:pt-10">
      <div className="px-2 md:px-10">
        {imageUrl != "" ? (
          <img
            className="w-[300px] mx-auto"
            src={imageUrl}
            alt={book.bookCover}
          />
        ) : (
          <div className="md:w-[300px] border h-[300px] flex justify-center items-center">
            No Image
          </div>
        )}
      </div>
      <div className="flex flex-col relative w-fit p-4">
        <h1 className="text-3xl font-semibold">{book.title}</h1>
        <div className="my-4">
          <span className="text-xl mr-2 text-gray-500">by:</span>
          <span className="text-xl font-semibold">{book.author}</span>
        </div>
        <div>
          <span className="text-xl mr-2 text-gray-500">desc:</span>
          <span className="text-xl md:font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            hic eius fugiat illum accusamus voluptates? Nesciunt exercitationem
            ducimus corporis quo possimus numquam vel unde, nostrum repellat.
            Sed at inventore odio.
          </span>
        </div>
        <div className="my-4">
          <span className="text-xl mr-2 text-gray-500">Rate:</span>
          <span className="text-xl md:font-semibold">star</span>
        </div>
        <div className="md:absolute bottom-0">
          <button
            onClick={() => saveBook()}
            type="button"
            className="bg-[#39ad91] flex items-center gap-1 font-semibold p-2 rounded">
            <FaCirclePlus /> <span>Add to library</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;