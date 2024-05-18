import React from 'react'
import './css/Home.css'
import img1 from './Img/library.png'
import img2 from './Img/basketball.png'
import img3 from './Img/cafeteria.png'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const nav = useNavigate()

 const navigate = ()=>{
  nav('/about')
 }
  return (
    <>
      <div className='img'>
      <div className='overlay'>
      <div className='text-box'>
        <h1>City's Biggest University</h1>
        <p>PC education in college serves as a foundational pillar, providing students with the necessary tools and knowledge to navigate the digital landscape effectively. From basic computer literacy to advanced programming skills, college-level PC education offers a comprehensive curriculum tailored to meet the demands of the modern workforce. Moreover, PC education in college cultivates critical thinking and problem-solving skills. Through hands-on experience with computer software and programming languages, students learn to analyze complex problems, develop logical solutions, and implement innovative strategies. These cognitive abilities are invaluable in a variety of fields, from engineering and mathematics to business and healthcare, where technology plays a pivotal role in driving innovation and efficiency.</p>
        <a href="#" className='btn1' onClick={navigate}>Visit us to know more</a>
     </div>
      </div>
    </div>

    <div className="facilities">
  <h1 className='hp'>Our facilities</h1>
  <p className='hp'>"From academic support centers to state-of-the-art laboratories, our college facilities are designed to enhance learning, foster innovation, and support student success</p>
  <div className="row">
    <div className="facilities-col">
      <img className='img' src={img1} alt='Library'/>
      <h3>World Class Library</h3>
      <p>College libraries offer a vast array of resources including books, journals, online databases, and multimedia materials, supporting research and enhancing learning opportunities.</p>
    </div>
    <div className="facilities-col">
      <img className='img' src={img2} alt='Library'/>
      <h3>Largest play Ground</h3>
      <p>Playground for Recreation: A well-equipped playground provides students with a space for physical activity, sports, and recreation, promoting overall health and well-being.</p>
    </div>
    <div className="facilities-col">
      <img className='img' src={img3} alt='Library'/>
      <h3>Tasty and Healthy Food</h3>
      <p>Access to tasty and nutritious food on campus ensures that students have the energy and nourishment they need to focus on their studies and engage fully in campus life. </p>
    </div>
  </div>
</div>

    </>
  )
}
