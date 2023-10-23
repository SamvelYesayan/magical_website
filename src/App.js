import './App.css';
import FooterComponent from './Components/FooterComponent/FooterComponent';
import HeaderComponent from './Components/HeaderComponent/HeaderComponent';
import HomePage from './Pages/HomePage/HomePage';
import { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import CoursesPage from './Pages/CoursesPage/CoursesPage';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {

  return (
    <div className="App">
      <Router>

        
        <HeaderComponent  />
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>

        <Routes>
          <Route path='/services' element={<ServicesPage/>} />
        </Routes>

        <Routes>
          <Route path='/portfolio' element={<PortfolioPage />} />
        </Routes>

        <Routes>
          <Route path='/about' element={<AboutPage />} />
        </Routes> 

        <Routes>
          <Route path='/courses' element={<CoursesPage />} />
        </Routes>

        
        <Routes>
          <Route path='/contact' element={<ContactPage />} />
        </Routes>


        <FooterComponent />
      </Router>

    </div>

  );
}

export default App;
