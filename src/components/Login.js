import React, { useState } from 'react';
import axios from 'axios'; // Axios for making API requests
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Handle login errors
    

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Logging in with:', { email, password }); // Log input values

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      // Check for successful login
      if (response.data.token) {
        // Store token in local storage
        localStorage.setItem('token', response.data.token);

        console.log('Token stored in local storage:', response.data.token); // Debugging line

        // Redirect to home page
        navigate('/'); // Redirect to home page after successful login
      } else {
        // Handle case where no token is returned
        setError('Login failed. Please check your credentials.');
      }
    } catch (err) {
      console.error("Login error:", err); // Log the error
      setError(err.response?.data?.message || 'Login failed. Please try again.'); // Display error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Login
        </h1>
        {error && (
          <p className="text-center text-red-500 mb-4">{error}</p> // Show error message
        )}
        <form onSubmit={handleSubmit}>
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
            Login
          </button>
        </form>
        <p className="text-center text-gray-300 mt-4">
          Don't have an account? <a href="/signup" className="text-orange-500 hover:text-orange-400">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
