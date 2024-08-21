import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function StudentLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = { email, password };

    axios.post('http://localhost:5000/api/user/login', formData)
      .then(res => {
        console.log('Success:', res);
        setMessage('Login Successful');

        setTimeout(() => {
          setMessage('');
          navigate('/studentdashboard'); 
        }, 1000);
      })
      .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
        setMessage('Login failed. Please check your credentials.');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
      {/* Notification Message */}
      {message && (
        <div className={`absolute top-4 right-4 p-4 text-white text-center rounded-lg 
          ${message.includes('Successful') ? 'bg-green-500' : 'bg-red-500'}`}>
          {message}
        </div>
      )}

      <form 
        onSubmit={handleLogin} 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Login</h2>

        <label className="block mb-2 text-gray-700">Email</label>
        <input 
          type="email" 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <label className="block mb-2 text-gray-700">Password</label>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <h4 className="pb-3 mb-2 text-gray-600">
          Don't have an account?{' '}
          <Link to="/student-signup" className="text-blue-600 hover:underline">
            Signup
          </Link>
        </h4>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
