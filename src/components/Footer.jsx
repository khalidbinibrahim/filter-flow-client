import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-blue-600">FilterFlow</h2>
          <p className="text-gray-300 mt-2">Your go-to platform for advanced product filtering.</p>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-300 hover:text-blue-600">Home</Link>
          <Link to="/products" className="text-gray-300 hover:text-blue-600">Products</Link>
          <Link to="/about" className="text-gray-300 hover:text-blue-600">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-blue-600">Contact</Link>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-600">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-400">
        <p>&copy; 2024 FilterFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;