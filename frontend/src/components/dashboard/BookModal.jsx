import { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";

const BookModal = ({ book, mode }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div
        onClick={() => setShowModal(!showModal)}
        className="absolute z-10 right-1 top-3">
        <BsThreeDotsVertical className="text-xl" />
      </div>
      {mode === "up" && (
        <div
          className={`${
            showModal ? "flex" : "hidden"
          } absolute items-center justify-center gap-6  h-[200px] w-[150px] md:h-[300px] md:w-[200px] bg-opacity-50 bg-black transition-opacity duration-300`}>
          <Link onClick={() => back("/")} to={`/books/details/${book._id}`}>
            <BsInfoCircle className="text-2xl text-[#39ad91]" />
          </Link>
          <Link to={`/books/edit/${book._id}`}>
            <AiOutlineEdit className="text-2xl text-]" />
          </Link>
          <Link to={`/books/delete/${book._id}`}>
            <MdOutlineDelete className="text-2xl text-[#f04963]" />
          </Link>
        </div>
      )}
      {mode === "lib" && (
        <div
          className={`${
            showModal ? "flex" : "hidden"
          } absolute items-center justify-center gap-6  h-[200px] w-[150px] md:h-[300px] md:w-[200px] bg-opacity-50 bg-[#f04963] transition-opacity duration-300`}>
          <p className="font-semibold text-1xl text-center">
            Remove From Library
          </p>
        </div>
      )}
    </div>
  );
};

export default BookModal;
