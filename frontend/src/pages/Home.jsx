import Navbar from "../components/home/NavBar";
import Carousel from "../components/home/CarouselComponent";
import Books from "../components/home/Books";
import b from "../assets/b.jpg";

const Home = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Carousel />
      <Books />
      <section>
        <div className="" style={{ backgroundImage: `url(${b})` }}>
          <div className="p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-4">About Us</h2>
            <div className="grid grid-cols-3 gap-4 text-gray-300">
              <div className="text-lg bg-gray-900 p-10 rounded ">
                <p className="font-semibold text-2xl">Lorem</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et tellus ut metus lobortis pulvinar.
                </p>
              </div>
              <div className="text-lg bg-gray-900 p-10 rounded ">
                <p className="font-semibold text-2xl">Lorem</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et tellus ut metus lobortis pulvinar.
                </p>
              </div>
              <div className="text-lg bg-gray-900 p-10 rounded ">
                <p className="font-semibold text-2xl">Lorem</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  et tellus ut metus lobortis pulvinar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-8">
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
