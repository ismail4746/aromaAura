import React from 'react';
import backgroundImage from '../assets/p4.jpg'; // Replace with the path to your background image

const Page2 = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-black bg-opacity-70 p-8 md:p-12 lg:p-16 rounded-lg text-center mx-4 md:mx-20 lg:mx-40"> {/* Responsive padding and margin */}
        <h1 className="text-orange-500 text-3xl md:text-4xl font-bold mb-4 md:mb-6">Welcome to Aroma Aura</h1>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          Experience the tranquility and freshness that our products bring. Discover a new realm of scented adventures tailored just for you. At Aroma Aura, we believe in the power of scent to transform spaces and elevate experiences. Our brand is dedicated to crafting premium scented products that not only bring delightful fragrances into your life but also promote wellness and tranquility. Each of our carefully curated collections is inspired by the beauty of nature, utilizing high-quality ingredients sourced from sustainable origins. Whether you’re looking to create a calming atmosphere at home, invigorate your senses, or find the perfect gift for a loved one, Aroma Aura offers a diverse range of options to suit every preference. Our commitment to excellence is reflected in our artisanal approach, ensuring that every product is handcrafted with love and attention to detail. From soothing essential oils to beautifully blended candles and room sprays, each item is designed to enhance your environment and uplift your spirit. Join us on a fragrant journey as we explore the essence of nature and embrace the art of aromatherapy. Discover how Aroma Aura can transform your everyday moments into extraordinary experiences, making your space a sanctuary of peace and joy.
        </p>
      </div>
    </div>
  );
};

export default Page2;
