import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import BookDetails from "../components/dashboard/BookDetails";
import { PathContext } from "../context/PathContext";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { id } = useParams();
  const returnPath = useContext(PathContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const loadImage = async () => {
      if (book.bookCover) {
        // This will remove a ".jpg", ".png", etc., extension from the string.
        const name = book.bookCover.replace(/\.[^/.]+$/, "");
        try {
          const image = await import(`../uploads/${name}.jpg`);
          setImageUrl(image.default);
        } catch (error) {
          console.error("Failed to load image:", error);
        }
      }
    };

    loadImage();
  }, [book.bookCover]);

  return (
    <div className="bg-my-background-image bg-gray-900  h-full md:h-screen text-[#EFECEC]">
      <BackButton destination={returnPath} />
      {loading ? <Spinner /> : <BookDetails book={book} imageUrl={imageUrl} />}
    </div>
  );
};

export default ShowBook;
