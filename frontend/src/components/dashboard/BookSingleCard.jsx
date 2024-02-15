import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const loadImage = async () => {
      const name = book.bookCover.slice(0, -4);

      const image = await import(`../../uploads/${name}.jpg`);
      setImageUrl(image.default);
    };

    loadImage();
  }, [book.bookCover]);

  return (
    <div className="text-[#EFECEC] h-[300px] w-[200px] cursor-pointer rounded-lg  relative hover:shadow-2xl">
      <Link to={`/books/details/${book._id}`}>
        <img
          className="rounded w-full h-full"
          src={imageUrl}
          alt={book.bookCover}
        />
      </Link>
      <div className="absolute  bottom-0">
        <h2 className="my-1 mx-2 font-semibold">{book.title}</h2>
      </div>
    </div>
  );
};

export default BookSingleCard;
