  import React from 'react'
  import './css/Info.css'
  import admin from './Img/Admin.jpg'
  import student from './Img/Student.jpg'
  import Teacher from './Img/Teacher.jpg'
import {useNavigate} from 'react-router-dom'

  export default function Info() {
  const navigate = useNavigate()

  const handleadmin=()=>{
    navigate('/admin')
  }
  const handleteacher=()=>{
    navigate('/teacher')
  }
  const handlestudent=()=>{
    navigate('/student')
  }

    return (
      <>

        <div className='pops'>
          <h1 className='check'>Check your info</h1>
          <div class="come">
            <div class="coord" onClick={handleadmin}>
              <h2>Admin Login</h2>
              <p>
                Login as an administrator to access the dashboard to manage app data.</p>
            </div>
            <div class="coord" onClick={handleteacher}>
              <h2>Teachers Login </h2>
              <p>
              Login as a teacher to create courses, assignments and track student progress.
              </p>
            </div>
            <div class="coord" onClick={handlestudent}>
              <h2>students Login</h2>
            <p>  
              Login as a student to expllre course materials and assignments. </p>
            </div>

          </div>
        </div>



      </>
    )
  }
