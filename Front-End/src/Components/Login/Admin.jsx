import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Admin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const adminLogin= (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/admin/login', {
        email,
        password,
      })
      .then(res => {
        console.log('Success:', res);
        setMessage('Login Successful');
        navigate('/admin-dashboard'); 
      })
      .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
        setMessage('Login failed. Please check your credentials.');
      });
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">

{message && (
        <div className={`absolute top-4 right-4 p-4 text-white text-center rounded-lg 
            ${message.includes('Successful') ? 'bg-green-500' : 'bg-red-500'}`}>
          {message}
        </div>
      )}
<form 
        onSubmit={adminLogin} 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>

        <label className="block mb-2 text-gray-700">Email ID</label>
        <input 
          type="text" 
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

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
