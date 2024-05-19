import React from 'react'
import img1 from './Img/library.png'
import img2 from './Img/basketball.png'
import img3 from './Img/cafeteria.png'

export default function Course() {
  return (
    <div>
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
    </div>
  )
}
