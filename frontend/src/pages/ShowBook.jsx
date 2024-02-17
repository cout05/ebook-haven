import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import BookDetails from "../components/dashboard/BookDetails";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { id } = useParams();

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
      const name = book.bookCover.slice(0, -4);
      const image = await import(`../uploads/${name}.jpg`);
      setImageUrl(image.default);
    };

    loadImage();
  }, [book.bookCover]);

  return (
    <div className="bg-my-background-image bg-gray-900  h-full md:h-screen text-[#EFECEC]">
      <BackButton />
      {loading ? <Spinner /> : <BookDetails book={book} imageUrl={imageUrl} />}
    </div>
  );
};

export default ShowBook;
