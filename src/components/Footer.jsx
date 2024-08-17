import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-500">FilterFlow</h2>
          <p className="text-gray-400 mb-4">
            Explore our wide range of products with advanced filtering options. Your satisfaction is our priority.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-500">Quick Links</h3>
          <ul className="text-gray-400">
            <li className="mb-2">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link>
            </li>
            <li className="mb-2">
              <Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link>
            </li>
            <li className="mb-2">
              <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-500">Customer Service</h3>
          <ul className="text-gray-400">
            <li className="mb-2">
              <Link to="/support" className="hover:text-blue-400 transition-colors">Support</Link>
            </li>
            <li className="mb-2">
              <Link to="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
            </li>
            <li className="mb-2">
              <Link to="/returns" className="hover:text-blue-400 transition-colors">Returns</Link>
            </li>
            <li className="mb-2">
              <Link to="/shipping" className="hover:text-blue-400 transition-colors">Shipping</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-500">Contact Us</h3>
          <p className="text-gray-400 mb-2">
            1234 Street Name, City, State, 56789
          </p>
          <p className="text-gray-400 mb-2">Email: support@filterflow.com</p>
          <p className="text-gray-400">Phone: +1234567890</p>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
        <p>&copy; 2024 FilterFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;