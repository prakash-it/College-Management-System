import React from 'react'
import './css/Info.css'
import admin from './Img/Admin.jpg'
import student from './Img/Student.jpg'
import Teacher from './Img/Teacher.jpg'
export default function Info() {

  return (
    <>
      <h1 className='check'>Check your info </h1>
     
      <div class='containers'>
  <div class='card__container'>
    <div class='card__article'>
      
      <img src={admin} alt='admin'/>
      <div class='card__data'>
       
        <h2 class='card__title'>Admin Login</h2>
        <a href='#admin' class='card__button'>Click</a>
      </div>
    </div>

    <div class='card__article'>
     
      <img src={student} alt='student'/>
      <div class='card__data'>
       
        <h2 class='card__title'>Student Login</h2>
        <a href='#student' class='card__button'>Click</a>
      </div>
    </div>

    <div class='card__article'>

      <img src={Teacher} alt='Teacher'/>
      <div class='card__data'>
        
        <h2 class='card__title'>Teacher Login</h2>
        <a href='#teacher' class='card__button'>Click</a>
      </div>
    </div>
  </div>
</div>



    </>
  )
}
