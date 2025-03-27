import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Assuming you have a Navbar component
import Home from './Components/Home'; // Your existing Home component
import Products from './Components/Products'; // Add Products component
import About from './Components/About'; // Add About component
import Contact from './Components/Contact'; // Add Contact component

function App() {
  return (
    <Router>
      <Navbar />  {/* The Navbar is rendered on all pages */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
