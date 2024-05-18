import React from 'react';
import './css/Nav.css';
import  {NavLink}  from 'react-router-dom';
import logo from './Img/BlackLogo1.png'; 

export default function Navbar() {
  return (
    <div>
      <nav className='nav'>

      <img src={logo}  alt="Logo" className="logo" />

        <div className="nav-links">
          <NavLink to='/' className="nav-item">Home</NavLink>
          <NavLink to='/about' className="nav-item">About</NavLink>
          <NavLink to='/course' className="nav-item">Course</NavLink>
          <NavLink to='/contact' className="nav-item">Contact</NavLink>
        </div>
       <NavLink className="nav-item"> CheckInfo</NavLink>
      </nav>
    </div>
  );
}
