import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from 'react-icons/fa'; // Import icons

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6 mt-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Aroma Aura </h2>
            <p className="text-gray-400">Discover the essence of quality and sustainability with our products.</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-orange-500 mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-orange-500">Home</a></li>
              <li><a href="/shop" className="hover:text-orange-500">Shop</a></li>
              <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
              <li><a href="/services" className="hover:text-orange-500">Services</a></li>
            </ul>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-orange-500 mb-2">Contact Us</h3>
            <p className="text-gray-400">Email: support@aromaaura.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-400">© 2024 Aroma Aura Fragrances. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
