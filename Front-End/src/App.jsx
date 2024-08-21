  import React from 'react';
  import { Route, Routes } from 'react-router-dom'; 
  import Zero from './Components/Zero';
  import Students from './Components/signup/Students';
  import Teachers from './Components/signup/Teachers';
  import Admins from './Components/Login/Admin';
import TeacherLofin from './Components/Login/TeacherLofin';
import StudentLogin from './Components/Login/StudentLogin';
import Dashboard from './Components/Pages/Teacher/Dashboard';
import AdminDashboard from './Components/Pages/Admin/AdminDashboard';
import StudentDashboard from './Components/Pages/Student/StudentDashboard';

  export default function App() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Zero />} />
          <Route path='/student' element={<Students />} />
          <Route path='/teacher' element={<Teachers />} />


          <Route path='/admin' element={<Admins />} />
          <Route path='/teacher-login' element={<TeacherLofin/>}/>
          <Route path='/student-login' element={<StudentLogin/>}/>

          <Route path='/admin-dashboard' element={<AdminDashboard/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/Student-dashboard' element={<StudentDashboard/>}/>
        </Routes>
      </div>
    );
  }
