import React from 'react'
import './css/contactr.css'
import email from './Img/email.png'
import location from './Img/location.png'
import phone from './Img/phone.png'
export default function Contact() {
  return (
    <>
       <div class="containerrs">
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="info">
            <div class="information">
              <img src={location} class="icon" alt="" />
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div class="information">
              <img src={email} class="icon" alt="" />
              <p>lorem@ipsum.com</p>
            </div>
            <div class="information">
              <img src={phone} class="icon" alt="" />
              <p>123-456-789</p>
            </div>
          </div>

  
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form >
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" placeholder='Username'/>
        
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" placeholder='Email'/>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" placeholder='Phone' />
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input" placeholder='Message'></textarea>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
