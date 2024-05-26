import React from 'react'
import './css/Home.css'
import img1 from './Img/library.png'
import img2 from './Img/basketball.png'
import img3 from './Img/cafeteria.png'
import pic1 from './Img/pic1.jpg'
import pic2 from './Img/pic2.jpg'
import pic3 from './Img/pic3.jpg'
import pic4 from './Img/pic4.jpg'
import pic5 from './Img/pic5.jpg'
import pic6 from './Img/pic6.jpg'
import stu1 from './Img/stu-1.jpg'
import stu2 from './Img/stu-2.jpg'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()

  const navigate = () => {
    nav('/about')
  }
  return (
    <>
      {/* =======================header section================================ */}
      <div className='img'>
        <div className='overlay'>
          <div className='text-box'>
            <h1>City's Biggest University</h1>
            <p>PC education in college serves as a foundational pillar, providing students with the necessary tools and knowledge to navigate the digital landscape effectively. From basic computer literacy to advanced programming skills, college-level PC education offers a comprehensive curriculum tailored to meet the demands of the modern workforce. Moreover, PC education in college cultivates critical thinking and problem-solving skills. Through hands-on experience with computer software and programming languages, students learn to analyze complex problems, develop logical solutions, and implement innovative strategies. These cognitive abilities are invaluable in a variety of fields, from engineering and mathematics to business and healthcare, where technology plays a pivotal role in driving innovation and efficiency.</p>
            <a className='btn1' onClick={navigate}>Visit us to know more</a>
          </div>
        </div>
      </div>
      {/* =======================facilities section================================ */}
      <div className="facilities">
        <h1 className='hp'>Our facilities</h1>
        <p className='hp'>"From academic support centers to state-of-the-art laboratories, our college facilities are designed to enhance learning, foster innovation, and support student success</p>
        <div className="row">
          <div className="facilities-col">
            <img className='img' src={img1} alt='Library' />
            <h3>World Class Library</h3>
            <p>College libraries offer a vast array of resources including books, journals, online databases, and multimedia materials, supporting research and enhancing learning opportunities.</p>
          </div>
          <div className="facilities-col">
            <img className='img' src={img2} alt='Library' />
            <h3>Largest play Ground</h3>
            <p>Playground for Recreation: A well-equipped playground provides students with a space for physical activity, sports, and recreation, promoting overall health and well-being.</p>
          </div>
          <div className="facilities-col">
            <img className='img' src={img3} alt='Library' />
            <h3>Tasty and Healthy Food</h3>
            <p>Access to tasty and nutritious food on campus ensures that students have the energy and nourishment they need to focus on their studies and engage fully in campus life. </p>
          </div>
        </div>
      </div>

      <div class="banner">
  <div class="banner-item">
    <p class="banner-item-number">90K+</p>
    <p class="banner-item-text"> college Staffs</p>
  </div>
  <div class="banner-item">
    <p class="banner-item-number">45M</p>
    <p class="banner-item-text"> students</p>
  </div>
  <div class="banner-item">
    <p class="banner-item-number">100+</p>
    <p class="banner-item-text"> courses</p>
  </div>
  <div class="banner-item">
    <p class="banner-item-number">380K</p>
    <p class="banner-item-text"> Yearly passed out students</p>
  </div>
</div>

      {/* =======================Gallery section================================ */}
      <div class='containers'>
        <h1 class='h1'>Our College Gallery</h1>
        <div class='gallery'>
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
            <img src={stu2} alt='' />
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
  )
}
