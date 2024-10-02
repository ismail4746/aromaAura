import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);
  const [successMessage, setSuccessMessage] = useState('');

  const handleRemoveFromCart = (item) => {
    removeFromCart(item.id);
    setSuccessMessage(`${item.name} removed from the cart.`);
    
    // Clear the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  // Example addToCart function for testing purposes
  const handleAddToCart = (item) => {
    addToCart(item); // Ensure this function is defined in your CartContext
    setSuccessMessage(`${item.name} added successfully to the cart!`);
    
    // Clear the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  return (
    <div className="bg-black p-6 md:p-10 h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-6 md:mb-8 mt-10">
        Your Cart
      </h1>

      {/* Display success message */}
      {successMessage && (
        <div className="bg-green-500 text-white p-2 rounded mb-4 text-center">
          {successMessage}
        </div>
      )}

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-300">
          <p>Your cart is empty.</p>
          <Link to="/shop">
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200">
              Go to Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                  <div>
                    <span className="text-white font-semibold">{item.name}</span>
                    <p className="text-gray-300">{item.price}</p>
                  </div>
                </div>
                <button 
                  className="text-red-500 hover:text-red-700 font-semibold" 
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <p className="text-white text-lg font-bold">
              Total: ${cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0).toFixed(2)}
            </p>
            <Link to="/checkout">
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
