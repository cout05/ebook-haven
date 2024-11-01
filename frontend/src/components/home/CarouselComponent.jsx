import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import { Carousel } from "react-responsive-carousel"; // Import React Responsive Carousel CSS
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import React Responsive Carousel CSS

const CarouselComponent = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);

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
    <div className=" bg-[#011823] bg-my-background-image pt-[150px] pb-14">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Discover Our Latest Ebook Offers
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Explore our collection of eBooks with exclusive discounts!
          </p>
        </div>
        <div className="w-full lg:w-3/4 mx-auto">
          <Carousel
            infiniteLoop
            autoPlay
            interval={5000}
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            className="rounded-lg shadow-xl">
            {books.slice(0, 3).map((book, index) => (
              <div key={index} className="bg-white rounded-lg p-8">
                <h2 className="text-xl font-bold mb-2">{book.title}</h2>
                <p className="text-gray-600 mb-4">{book.description}</p>
                <Link
                  to={`/books/details/${book._id}`}
                  className="text-blue-500 hover:text-blue-700">
                  Read More
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
