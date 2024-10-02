import React, { useState } from 'react';
import axios from 'axios'; // Axios for making API requests
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Handle signup errors

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log('Registering user with:', { name, email, password });
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username: name,  // Ensure you're using the correct field names
        email,
        password,
      });
      console.log('Registration response:', response.data); // Log response for confirmation
      navigate('/login');
    } catch (err) {
      console.error("Registration error:", err.response ? err.response.data : err.message);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Sign Up
        </h1>
        {error && (
          <p className="text-center text-red-500 mb-4">{error}</p> // Show error message
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200 w-full">
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-300 mt-4">
          Already have an account? <a href="/login" className="text-orange-500 hover:text-orange-400">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
