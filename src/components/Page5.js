import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext'; // Import the CartContext
import productImage1 from '../assets/p3.jpg';
import productImage2 from '../assets/p2.jpg';
import productImage3 from '../assets/p7.jpg';
import productImage4 from '../assets/p1.jpg';
import productImage5 from '../assets/p4.jpg';
import productImage6 from '../assets/p5.jpg';
import productImage7 from '../assets/p6.jpg';
import productImage8 from '../assets/p8.jpeg';

const products = [
  {
    id: 1,
    name: "Armani",
    price: "$80",
    image: productImage1,
  },
  {
    id: 2,
    name: "Chanel No. 5",
    price: "$120",
    image: productImage2,
  },
  {
    id: 3,
    name: "Dior Sauvage",
    price: "$95",
    image: productImage3,
  },
  {
    id: 4,
    name: "Blush Suede",
    price: "$75",
    image: productImage4,
  },
  {
    id: 5,
    name: "Diesel",
    price: "$85",
    image: productImage5,
  },
  {
    id: 6,
    name: "Esprit",
    price: "$110",
    image: productImage6,
  },
  {
    id: 7,
    name: "Lacoste",
    price: "$90",
    image: productImage7,
  },
  {
    id: 8,
    name: "La Perla",
    price: "$65",
    image: productImage8,
  },
];

const Page5 = () => {
  const { addToCart } = useContext(CartContext); // Use CartContext

  const handleAddToCart = (product) => {
    addToCart(product); // Add product to the cart
  };

  return (
    <div className="bg-black p-6 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-6 md:mb-8 mt-10">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center mt-20">
        {products.map((product) => (
          <div key={product.id} className="w-72 h-80"> {/* Increased width here */}
            <div className="bg-transparent border border-gray-500 rounded-lg overflow-hidden shadow-lg h-90">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mt-6"
              />
              <div className="p-4 text-center mt-6">
                <h2 className="text-lg md:text-xl font-semibold text-white">{product.name}</h2>
                <p className="text-gray-300 text-sm md:text-base">{product.price}</p>
                <button
                  className="mt-2 mb-4 bg-orange-500 text-white px-2 py-2 rounded" // Add mb-4 here
                  onClick={() => handleAddToCart(product)} // Call addToCart when clicked
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page5;
