import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import { CartContext } from '../components/CartContext';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-orange-500 text-2xl font-bold">AromaAura</h1>

        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-white" size={24} />
            ) : (
              <FaBars className="text-white" size={24} />
            )}
          </button>
        </div>

        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex justify-center space-x-14">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="text-gray-300 hover:text-white">Shop</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
            </li>
            <li>
              <Link to="/sale" className="text-orange-600 hover:text-orange-500">Sale</Link>
            </li>
          </ul>
        </div>

        {/* Right-side icons and buttons */}
        <div className="hidden lg:flex items-center space-x-6">
          <FaSearch className="text-white hover:text-gray-300 cursor-pointer" size={22} />
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-white hover:text-gray-300 cursor-pointer" size={22} />
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </Link>
          <FaHeart className="text-white hover:text-gray-300 cursor-pointer" size={22} />
          {/* Login and Sign Up buttons */}
          <Link to="/login">
  <button className="bg-transparent border border-orange-500 text-white py-1 px-3 rounded hover:bg-orange-500 transition duration-300">
    Login
  </button>
</Link>
          {/* <Link to="/signup">
            <button className="bg-orange-500 text-white py-1 px-3 rounded hover:bg-orange-600 transition duration-300">
              Sign Up
            </button>
          </Link> */}
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="lg:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link to="/" className="text-gray-300 hover:text-orange-600">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="text-gray-300 hover:text-white">Shop</Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
            </li>
            <li>
              <Link to="/sale" className="text-orange-500 hover:text-white">Sale</Link>
            </li>
            {/* Login and Sign Up buttons for mobile */}
            <li>
              <Link to="/login" className="text-white hover:text-orange-500">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="text-orange-500 hover:text-white">Sign Up</Link>
            </li>
          </ul>

          {/* Right-side icons for mobile */}
          <div className="flex justify-center space-x-6 mt-4">
            <FaSearch className="text-white hover:text-orange-500 cursor-pointer" size={22} />
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-white hover:text-orange-500 cursor-pointer" size={22} />
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <FaHeart className="text-white hover:text-orange-500 cursor-pointer" size={22} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
