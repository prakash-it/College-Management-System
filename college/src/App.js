import React from 'react';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/Components/Home'
import About from '../src/Components/About'
import Contact from '../src/Components/Contact'
import Footer from './Components/Footer';
import Info from './Components/Info';
import Course from './Components/Course';

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
     
    </Routes>

    <Footer/>
    
    </div>
  );
}

export default App;
