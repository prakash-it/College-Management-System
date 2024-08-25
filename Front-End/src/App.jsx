import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Zero from './Components/Zero';
import Students from './Components/signup/Students';
import Teachers from './Components/signup/Teachers';
import Admins from './Components/Login/Admin';
import TeacherLofin from './Components/Login/TeacherLofin';
import StudentLogin from './Components/Login/StudentLogin';


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Zero />} />
        <Route path='/student' element={<Students />} />
        <Route path='/teacher' element={<Teachers />} />


        <Route path='/admin' element={<Admins />} />
        <Route path='/teacher-login' element={<TeacherLofin />} />
        <Route path='/student-login' element={<StudentLogin />} />


      </Routes>
    </div>
  );
}
