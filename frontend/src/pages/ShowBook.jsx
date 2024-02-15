import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

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
    <div className="bg-my-background-image bg-gray-900 h-screen text-[#EFECEC]">
      <BackButton />
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex px-[300px]">
          <div className="px-10">
            <img className="w-[300px]" src={imageUrl} alt={book.bookCover} />
          </div>
          <div className="flex flex-col w-fit p-4">
            <h1 className="text-3xl font-semibold">{book.title}</h1>
            <div className="my-4">
              <span className="text-xl mr-2 text-gray-500">by:</span>
              <span className="text-xl font-semibold">{book.author}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
