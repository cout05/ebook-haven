import Navbar from "../components/home/NavBar";
import Carousel from "../components/home/CarouselComponent";
import Books from "../components/home/Books";

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Carousel />
      <Books />
      <footer className="bg-gray-900  bg-my-background-image text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; 2024 EbookHaven. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
