import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Router } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';



function App() {
  return (
    <div className="App">

      <Navbar />
      <Router>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Router>
    </div>
  );
}

export default App;
