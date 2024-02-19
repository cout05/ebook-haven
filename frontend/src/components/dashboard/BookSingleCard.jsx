import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      // Check if book.bookCover is defined and is a string
      if (book.bookCover && typeof book.bookCover === "string") {
        const name = book.bookCover.slice(0, -4);

        const image = await import(`../../uploads/${name}.jpg`);
        setImageUrl(image.default);
      }
    };

    loadImage();
  }, [book.bookCover]);

  return (
    <div className="text-[#EFECEC] h-[200px] w-[150px] md:h-[300px] md:w-[200px] cursor-pointer rounded-lg  relative hover:shadow-2xl">
      <div
        onClick={() => setShowModal(!showModal)}
        className="absolute z-10 right-1 top-3">
        <BsThreeDotsVertical className="text-xl" />
      </div>

      <div
        className={`${
          showModal ? "flex" : "hidden"
        } absolute items-center justify-center gap-6  h-[200px] w-[150px] md:h-[300px] md:w-[200px] bg-opacity-50 bg-black transition-opacity duration-300`}>
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-[#39ad91]" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-]" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-[#f04963]" />
        </Link>
      </div>

      <Link to={`/books/details/${book._id}`}>
        <img className="rounded w-full h-full" src={imageUrl} alt="No cover" />
      </Link>
      <div className="absolute bottom-0">
        <h2 className="my-1 mx-2 font-semibold">{book.title}</h2>
      </div>
    </div>
  );
};

export default BookSingleCard;
