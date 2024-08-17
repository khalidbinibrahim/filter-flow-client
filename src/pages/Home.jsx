import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="bg-blue-100 rounded-lg shadow-lg p-8 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">Welcome to FilterFlow</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Discover a wide range of products tailored to your needs with advanced filtering options.
        </p>
        <Link to={"/products"} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default Home;