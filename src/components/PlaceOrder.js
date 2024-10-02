// PlaceOrder.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/CartContext';

const PlaceOrder = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const submitOrder = async () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Please add items to your cart before placing an order.');
      return;
    }

    const orderDetails = {
      items: cartItems,
      total: calculateTotal(),
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        throw new Error('Failed to place order.');
      }

      const data = await response.json();
      console.log('Order Details:', data.order);
      alert(data.message);

      // Clear cart items after placing the order
      cartItems.forEach(item => removeFromCart(item.id));
    } catch (error) {
      console.error('Error:', error);
      alert('There was a problem placing your order. Please try again.');
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0).toFixed(2);
  };

  return (
    <div className="bg-gray-900 p-6 md:p-10 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-6 text-center">
        Checkout
      </h1>
      {cartItems.length > 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Your Items:</h2>
          <ul className="mb-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between py-2 border-b">
                <span className="font-medium">{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between font-semibold text-lg">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
          <button
            onClick={submitOrder}
            className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300" >
            Place Order
          </button>
        </div>
      ) : (
        <div className="text-center text-white">
          <p>Your cart is empty.</p>
          <Link to="/shop">
            <button className="mt-10 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200">
              Go to Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
