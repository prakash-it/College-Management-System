import React from 'react'
import '../Components/css/Footer.css'
import logo from './Img/BlackLogo1.png';
import  {NavLink}  from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
    return (
        <>
            <div className='footerdiv'>
                <footer className='footer'>
                    <div className='footer-content'>
                        <div className='footer-section about'>
                            <h2>PC-EDUCATION</h2>
<p>
 The Role of PC Education in College: Empowering Students for the Digital Age

In today's digital world, where technology permeates every aspect of our lives, the importance of PC education in college cannot be overstated.</p>                            <img src={logo} alt="Logo" className="logo" />
                        </div>

                        <div className='footer-section link'>
                            <h2>QUICK Link's</h2>
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about">About Us</NavLink></li>
                               <li> <NavLink to='/course'>Course</NavLink></li>
                                <li><NavLink to="/contact">Contact Us</NavLink></li>
                            </ul>
                        </div>
                        <div className="footer-section social">
                            <h2>Follow Us</h2>
                            <a href="#" className="social-icon"><FaFacebook /></a>
                            <a href="#" className="social-icon"><FaTwitter /></a>
                            <a href="#" className="social-icon"><FaInstagram /></a>
                            <a href="#" className="social-icon"><IoLogoLinkedin /></a>
                        </div>
                        <div className="footer-section contact">
                            <h2>Contact Us</h2>
                            <p>Email: pr904271@gmail.com</p>
                            <p>Phone: +91 9865579294</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        &copy; 2024 PC-EDUCATION. All rights reserved.
                    </div>
                </footer>
            </div>
        </>
    )
}
