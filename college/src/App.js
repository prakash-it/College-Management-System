import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home'
import About from '../src/Components/About'
import Contact from '../src/Components/Contact'
import Footer from './Components/Footer';
import Info from './Components/Info';
import Course from './Components/Course';
import Adminlogin from './Components/Adminlogin';
import Teacherlogin from './Components/Teacherlogin';
import Studentlogin from './Components/Studentlogin';

function App() {
  return (
    <div className="App">
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/info' element={<Info/>}/>
     <Route path='/admin' element={<Adminlogin/>}/>
     <Route path='/teacher' element={<Teacherlogin/>}/>
     <Route path='/student' element={<Studentlogin/>}/>
    </Routes>

    <Footer/>
    
    </div>
  );
}

export default App;
