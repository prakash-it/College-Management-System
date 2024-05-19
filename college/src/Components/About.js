import React from 'react';
import pic1 from './Img/pic1.jpg'
import pic2 from './Img/pic2.jpg'
import pic3 from './Img/pic3.jpg'
import pic4 from './Img/pic4.jpg'
import pic5 from './Img/pic5.jpg'
import pic6 from './Img/pic6.jpg'
import stu1 from './Img/stu-1.jpg'
import stu2 from './Img/stu-2.jpg'
import './css/About.css'
export default function About() {

 
  return (
  <>
    <div className='container'>
        <h1 className='h1'>Our college Gallery</h1>
        <div className='gallery'>
          <img src={pic1} alt='' />
          <img src={pic2} alt='' />
          <img src={pic3} alt='' />
          <img src={pic4} alt='' />
          <img src={pic5} alt='' />
          <img src={pic6} alt='' />
        </div>
      </div>

      <div className='testimonials'>
        <h1 className='hp'>What Our Student Say</h1>
        <p className='hp'>The campus buzzes with energy, filled with a diverse community of students from all walks of life. From engaging lectures to lively discussions in the cafeteria, every day brings new experiences and opportunities for growth. I'm studying [insert major or field of study], which has allowed me to delve deep into my passion and expand my knowledge in ways I never thought possible. Overall, my college experience has been enriching, challenging, and truly unforgettable.</p>

        <div className='row'>
          <div className='testimonials-col'>
            <img src={stu1} alt='' />
            <div>
            <h3>Olivia</h3>
              <p>
              PC education, or personal computing education, is becoming increasingly vital in today's digital age. It's not just about learning how to use computers; it's about understanding how they work, how to navigate the vast online world responsibly, and how to leverage technology to solve real-world problems. In our college.
              </p>
              
            </div>
          </div>

          <div className='testimonials-col'>
           <img src={stu2} alt=''/>
           <div>
           <h3>Lily</h3>
                    <p>
                    PC education is integrated into various courses across disciplines, empowering students with essential digital literacy skills. From coding workshops to cybersecurity seminars, we're equipped with the tools to thrive in a technology-driven society. PC education isn't just about mastering software; it's about preparing for the future.
                    </p>
                    
                </div>
          </div>
        </div>
      </div>
  </>
  );
}
