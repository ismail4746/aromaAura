import React from 'react';
import specialOfferImage from '../assets/p1.jpg'; // Replace with your special offer image

const Page6 = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen bg-black"> 
      <div className="w-full md:w-1/2 flex justify-center items-center mt-16">
        <img
          src={specialOfferImage}
          alt="Special Offer"
          className="object-cover h-64 md:h-full w-full"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-6 md:p-10"> 
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 mt-6">Special Offer!</h2>
      <h1 className="text-3xl md:text-5xl font-bold text-orange-500 mt-4">Limited Time Offer: 20% off</h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 mt-4">
          Enjoy exclusive discounts on our latest products. Shop now and take advantage of our special prices!
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mt-6">Aqua Serinity</h2>
        <h3 className="text-3xl md:text-3xl font-serif  text-cyan-400 mb-4">Embrace the Tranquil Tides</h3>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
          Enjoy exclusive discounts on our latest products. Shop now and take advantage of our special prices!
        </p>
        <button className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-400 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Page6;
