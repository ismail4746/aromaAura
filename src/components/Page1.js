import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import image from '../assets/p1.jpg';

const Page1 = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/protected', {
          withCredentials: true, 
        });
        console.log('Session is active:', response.data);
      } catch (error) {
        console.error('Session has expired or is invalid:', error);
        navigate('/');
      }
    };

    checkSession();
  }, [navigate]);


  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:w-11/12">
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-5xl font-serif text-gray-300 mt-4 lg:ml-10 text-center lg:text-left">
            Elevate Your Spirit with
            <br />
            Victory Scented Fragrances
          </h2>
          <p className="mt-4 lg:mt-10 text-white lg:ml-12 text-lg text-center lg:text-left">
            Shop now and embrace the sweet smell of victory
            <br />
            with local face.
          </p>

          <div className="flex justify-center lg:justify-start ml-10">
          <Link to="/shop">
        <button className="mt-6 lg:mt-10 bg-orange-500 text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-orange-600">
          Shop Now
        </button>
      </Link>
</div>

        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img src={image} alt="Aroma Aura" className="object-cover h-64 lg:h-full" /> {/* Full height on large screens */}
        </div>
      </div>
    </div>
  );
};

export default Page1;
