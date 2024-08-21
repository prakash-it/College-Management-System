import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Teachers() {
  const navigate = useNavigate();
  const [empolyid, setEmpolyid] = useState('');
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { empolyid, username, email, password };

    axios.post('http://localhost:5000/api/teacher/signup', userData)
      .then(res => {
        console.log('Success:', res);
        setMessage('Registered Successfully');
        setShowNotification(true);

        
        setTimeout(() => {
          setShowNotification(false);
          navigate('/teacher-login');
        }, 1000);
      })
      .catch(err => {
        console.error('Error:', err.response ? err.response.data : err.message);
        setMessage('Registration failed');
      });

    // Clear form fields
    setEmpolyid('');
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
     
     
      {/* Notification Message */}
      {showNotification && message && (
        <div className={`absolute top-4 right-4 p-4 text-white text-center rounded-lg 
            ${message.includes('Successfully') ? 'bg-green-500' : 'bg-red-500'}`}>
          {message}
        </div>
      )}

      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Teacher Signup</h2>

        <label className="block mb-2 text-gray-700">Empoly ID</label>
        <input 
          type="text" 
          onChange={(e) => setEmpolyid(e.target.value)} 
          value={empolyid} 
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <label className="block mb-2 text-gray-700">Name</label>
        <input 
          type="text" 
          onChange={(e) => setName(e.target.value)} 
          value={username} 
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

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
          Already Have an Account?{' '}
          <Link to="/teacher-login" className="text-blue-600 hover:underline">
            Login
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
