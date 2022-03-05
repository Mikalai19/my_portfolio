import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

//components
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Portfolio from "./Portfolio";



function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </Router>

    </div>
  );
}

export default App;
