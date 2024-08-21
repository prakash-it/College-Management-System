import React from 'react';
import { Link } from 'react-router-dom';

export default function Zero() {
  return (
    <div className=" p-10 m-10 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8 m-10 p-10">Select Who You Are..?</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 " >
        <Link to='/admin'>
          <Card title="Admin" />
        </Link>
        <Link to='/teacher'>
          <Card title="Teacher" />
        </Link>
        <Link to='/student'>
          <Card title="Student" />
        </Link>
      </div>
    </div>
  );
}

function Card({ title }) {
  return (
    <div className="bg-slate-600 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <h2 className="text-xl text-slate-100 font-semibold text-center">{title}</h2>
    </div>
  );
}
