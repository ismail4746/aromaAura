import React from 'react';
import productImage1 from '../assets/p3.jpg';
import productImage2 from '../assets/p2.jpg';
import productImage3 from '../assets/p7.jpg';
import productImage4 from '../assets/p1.jpg';

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
];

const Page4 = () => {
  return (
    <div className="bg-black p-6 md:p-10 ">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-6 md:mb-8 mt-10">
        Best Selling Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center mt-20 ml-6 mr-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-transparent border border-gray-500 rounded-lg overflow-hidden shadow-lg w-56 h-80" // Adjusted width (w-56) and height (h-80)
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mt-6"
            />
            <div className="p-4 text-center mt-6">
              <h2 className="text-lg md:text-xl font-semibold text-white">{product.name}</h2>
              <p className="text-gray-300 text-sm md:text-base">{product.price}</p>
              <p className="text-gray-400 text-sm">100ml</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page4;
