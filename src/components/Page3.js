import React from 'react';
import valuesImage from '../assets/p5.jpg';

const Page3 = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen bg-black"> 
     
      <div className="w-full md:w-1/2 flex justify-center items-center mt-16">
        <img src={valuesImage} alt="Our Values" className="object-cover h-64 md:h-full w-full" />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-6 md:p-10"> 
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Our Values</h2>
        <p className="text-gray-300 text-base md:text-lg leading-relaxed">
          At Aroma Aura, we are committed to upholding our core values that define who we are and guide our actions. Our integrity ensures that we are honest and transparent in everything we do. We strive for excellence in our products and services, focusing on quality and craftsmanship. Sustainability is at the heart of our mission; we prioritize eco-friendly practices that minimize our impact on the environment. Additionally, we value community, fostering connections with our customers and partners, and giving back to society. These values are not just words; they are the foundation of Aroma Aura and drive us to create a positive impact.
        </p>
      </div>
    </div>
  );
};

export default Page3;
