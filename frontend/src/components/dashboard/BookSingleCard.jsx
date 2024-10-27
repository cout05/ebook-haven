import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";

const BookSingleCard = ({ book, isHome, mode }) => {
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
    <div className="text-[#EFECEC] flex-1 max-w-[200px] min-w-[150px] md:min-w-[45%] sm:min-w-full cursor-pointer rounded-lg relative hover:shadow-2xl">
      {!isHome ? <BookModal book={book} mode={mode} /> : null}

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
