import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../providers/AuthProvider';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className='flex gap-1 items-center'>
          <img className='h-14' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5vo7cm3cBFmnvKET2CmDB6bsbNf67u8VuQ&s" alt="filter-flow" />
        <Link to="/" className="text-blue-600 text-2xl font-bold font-poppins">
          FilterFlow
        </Link>
        </div>
        <div className="flex space-x-6 items-center">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
          >
            Contact
          </Link>
          {user ? (
            <div className="flex space-x-4 items-center">
              <span className="text-gray-700 font-medium">{user.email}</span>
              <button
                onClick={logout}
                className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded font-medium transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;