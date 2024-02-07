import React from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import { Carousel } from "react-responsive-carousel"; // Import React Responsive Carousel CSS
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import React Responsive Carousel CSS

const CarouselComponent = () => {
  return (
    <div className="bg-gray-800 pt-[150px] pb-14">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Discover Our Latest eBook Offers
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
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-xl font-bold mb-2">eBook Title 1</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                tellus ut metus lobortis pulvinar.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Read More
              </a>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-xl font-bold mb-2">eBook Title 2</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                tellus ut metus lobortis pulvinar.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Read More
              </a>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-xl font-bold mb-2">eBook Title 3</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
                tellus ut metus lobortis pulvinar.
              </p>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Read More
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
