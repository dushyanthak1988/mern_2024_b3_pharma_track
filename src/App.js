import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Navigation from './components/Navbar';
//import Footer from '../src/components/Footer';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjNavbar from './components/ProjNavbar'; 

const App = () => {
  return (
    <Router>
      <ProjNavbar/>
       
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;