import React, { useContext, useState } from 'react';
import { useNavigate , Link } from 'react-router-dom'; // Import useNavigate
import { CartContext } from '../components/CartContext';


const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    address: '',
    email: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const navigate = useNavigate(); // Initialize navigate

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if any billing info fields are empty
    if (!billingInfo.name || !billingInfo.address || !billingInfo.email) {
      alert('Please fill in all fields.');
      return;
    }

    // If validation passes, navigate to the placeOrder route
    navigate('/placeOrder');
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0).toFixed(2);
  };

  return (
    <div className="bg-black text-white p-6 md:p-10 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-6">
        Checkout
      </h1>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
        {/* Billing Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={billingInfo.name}
              onChange={handleBillingChange}
              className="w-full p-2 border border-gray-700 rounded bg-black text-white"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={billingInfo.address}
              onChange={handleBillingChange}
              className="w-full p-2 border border-gray-700 rounded bg-black text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={billingInfo.email}
              onChange={handleBillingChange}
              className="w-full p-2 border border-gray-700 rounded bg-black text-white"
              required
            />
          </div>
        </div>

        {/* Payment Method */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="Credit Card"
                checked={paymentMethod === 'Credit Card'}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="mr-2"
              />
              PayPal
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
          <p className="text-xl mt-4">
            <strong>Total:</strong> ${calculateTotal()}
          </p>
        </div>

        {/* Place Order */}
        <button
          type="submit"
          className="w-full mt-6 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition duration-300"
        >
          Place Order
        </button>

        <Link
          to="/shop"
          className="block mt-4 text-center text-orange-500 hover:underline"
        >
          Continue Shopping
        </Link>
      </form>
    </div>
  );
};

export default Checkout;
